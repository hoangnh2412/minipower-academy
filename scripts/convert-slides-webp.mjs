#!/usr/bin/env node
/**
 * Chuyển PNG → WebP — giữ nguyên kích thước (px), giảm dung lượng file.
 *
 * Cách chạy:
 *   npm run convert:slides:webp
 *   node scripts/convert-slides-webp.mjs [thư-mục-slides] [--quality=85]
 *   node scripts/convert-slides-webp.mjs --remove-png   # xóa PNG sau khi chuyển
 *   node scripts/convert-slides-webp.mjs --update-html  # cập nhật index.html
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SLIDES_DIR = path.join(
  ROOT,
  "docs/workshops/01-gioi-thieu/slides"
);
const DEFAULT_QUALITY = 85;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function parseArgs(argv) {
  const options = {
    slidesDir: DEFAULT_SLIDES_DIR,
    quality: DEFAULT_QUALITY,
    removePng: false,
    updateHtml: false,
    force: false,
  };

  for (const arg of argv) {
    if (arg.startsWith("--quality=")) {
      options.quality = Number(arg.split("=")[1]);
    } else if (arg === "--remove-png") {
      options.removePng = true;
    } else if (arg === "--update-html") {
      options.updateHtml = true;
    } else if (arg === "--force") {
      options.force = true;
    } else if (!arg.startsWith("--")) {
      options.slidesDir = path.resolve(arg);
    }
  }

  if (Number.isNaN(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error("--quality phải là số từ 1 đến 100");
  }

  return options;
}

async function collectPngFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectPngFiles(fullPath)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

async function convertToWebp(pngPath, { quality, removePng, force }) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  const pngStat = await fs.stat(pngPath);
  const beforeMeta = await sharp(pngPath).metadata();

  if (!force) {
    try {
      const webpStat = await fs.stat(webpPath);
      if (webpStat.mtimeMs >= pngStat.mtimeMs) {
        return {
          pngPath,
          webpPath,
          before: pngStat.size,
          after: webpStat.size,
          saved: pngStat.size - webpStat.size,
          skipped: true,
          removed: false,
          dimensions: `${beforeMeta.width}x${beforeMeta.height}`,
        };
      }
    } catch {
      // WebP chưa tồn tại — tiếp tục chuyển đổi
    }
  }

  const buffer = await sharp(pngPath)
    .webp({ quality, effort: 6 })
    .toBuffer();

  const afterMeta = await sharp(buffer).metadata();

  if (
    beforeMeta.width !== afterMeta.width ||
    beforeMeta.height !== afterMeta.height
  ) {
    throw new Error(
      `Kích thước thay đổi: ${beforeMeta.width}x${beforeMeta.height} → ${afterMeta.width}x${afterMeta.height}`
    );
  }

  await fs.writeFile(webpPath, buffer);

  let removed = false;
  if (removePng) {
    await fs.unlink(pngPath);
    removed = true;
  }

  return {
    pngPath,
    webpPath,
    before: pngStat.size,
    after: buffer.length,
    saved: pngStat.size - buffer.length,
    skipped: false,
    removed,
    dimensions: `${beforeMeta.width}x${afterMeta.height}`,
  };
}

async function updateHtmlReferences(htmlPath) {
  const html = await fs.readFile(htmlPath, "utf8");
  const updated = html.replace(
    /slides\/\$\{ch\.folder\}\/\$\{num\}\.png/g,
    "slides/${ch.folder}/${num}.webp"
  );

  if (updated === html) {
    return false;
  }

  await fs.writeFile(htmlPath, updated);
  return true;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const slidesDir = path.resolve(options.slidesDir);

  try {
    await fs.access(slidesDir);
  } catch {
    console.error(`Không tìm thấy thư mục: ${slidesDir}`);
    process.exit(1);
  }

  const files = await collectPngFiles(slidesDir);

  if (files.length === 0) {
    console.log("Không có file PNG nào.");
    return;
  }

  console.log(
    `Chuyển ${files.length} PNG → WebP (quality=${options.quality}) trong:\n  ${slidesDir}\n`
  );

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const file of files) {
    const result = await convertToWebp(file, options);
    results.push(result);
    totalBefore += result.before;
    totalAfter += result.after;

    const relPng = path.relative(ROOT, result.pngPath);
    const relWebp = path.relative(ROOT, result.webpPath);
    const pct = result.skipped
      ? "đã có WebP"
      : `-${((result.saved / result.before) * 100).toFixed(1)}%`;

    console.log(
      `${result.skipped ? "○" : "✓"} ${relPng} → ${path.basename(relWebp)}  ${formatBytes(result.before)} → ${formatBytes(result.after)}  (${pct}, ${result.dimensions})${result.removed ? " [đã xóa PNG]" : ""}`
    );
  }

  const totalSaved = totalBefore - totalAfter;
  const savedPct =
    totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : "0.0";

  console.log("\n---");
  console.log(
    `Tổng PNG: ${formatBytes(totalBefore)} → WebP: ${formatBytes(totalAfter)}  (tiết kiệm ${formatBytes(totalSaved)}, -${savedPct}%)`
  );
  console.log(
    `Đã chuyển: ${results.filter((r) => !r.skipped).length} · Bỏ qua: ${results.filter((r) => r.skipped).length} · Đã xóa PNG: ${results.filter((r) => r.removed).length}`
  );

  if (options.updateHtml) {
    const htmlPath = path.join(path.dirname(slidesDir), "index.html");
    try {
      const updated = await updateHtmlReferences(htmlPath);
      if (updated) {
        console.log(`\n✓ Đã cập nhật ${path.relative(ROOT, htmlPath)} (.png → .webp)`);
      } else {
        console.log(`\n○ ${path.relative(ROOT, htmlPath)} không có đường dẫn .png cần đổi`);
      }
    } catch {
      console.warn(`\n⚠ Không tìm thấy index.html tại ${htmlPath}`);
    }
  } else {
    console.log(
      "\nGợi ý: chạy với --update-html để tự đổi đường dẫn trong index.html"
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
