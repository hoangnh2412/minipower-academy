#!/usr/bin/env node
/**
 * Nén PNG lossless — giữ nguyên kích thước (px) và chất lượng hình ảnh.
 *
 * Cách chạy:
 *   npm run compress:slides
 *   node scripts/compress-slides.mjs [thư-mục-slides]
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

const PNG_OPTIONS = {
  compressionLevel: 9,
  adaptiveFiltering: true,
  palette: false,
  effort: 10,
};

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
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

async function compressPng(filePath) {
  const before = await fs.stat(filePath);
  const beforeMeta = await sharp(filePath).metadata();

  const buffer = await sharp(filePath)
    .png(PNG_OPTIONS)
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

  if (buffer.length >= before.size) {
    return {
      filePath,
      before: before.size,
      after: before.size,
      saved: 0,
      skipped: true,
      dimensions: `${beforeMeta.width}x${beforeMeta.height}`,
    };
  }

  await fs.writeFile(filePath, buffer);

  return {
    filePath,
    before: before.size,
    after: buffer.length,
    saved: before.size - buffer.length,
    skipped: false,
    dimensions: `${beforeMeta.width}x${beforeMeta.height}`,
  };
}

async function main() {
  const slidesDir = path.resolve(process.argv[2] || DEFAULT_SLIDES_DIR);

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

  console.log(`Nén lossless ${files.length} file PNG trong:\n  ${slidesDir}\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const file of files) {
    const result = await compressPng(file);
    results.push(result);
    totalBefore += result.before;
    totalAfter += result.after;

    const rel = path.relative(ROOT, result.filePath);
    const pct = result.skipped
      ? "giữ nguyên"
      : `-${((result.saved / result.before) * 100).toFixed(1)}%`;

    console.log(
      `${result.skipped ? "○" : "✓"} ${rel}  ${formatBytes(result.before)} → ${formatBytes(result.after)}  (${pct}, ${result.dimensions})`
    );
  }

  const totalSaved = totalBefore - totalAfter;
  const savedPct = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : "0.0";

  console.log("\n---");
  console.log(`Tổng: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}  (tiết kiệm ${formatBytes(totalSaved)}, -${savedPct}%)`);
  console.log(
    `Đã nén: ${results.filter((r) => !r.skipped).length} · Giữ nguyên: ${results.filter((r) => r.skipped).length}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
