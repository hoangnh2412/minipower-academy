/**
 * Danh sách workshop — thêm mục mới khi tạo buổi học.
 * path: đường dẫn tương đối từ thư mục docs/
 */
const WORKSHOPS = [
  {
    id: "01-gioi-thieu",
    title: "Buổi 01 — Workshop Minipower",
    description: "Chia sẻ về quản lý dự án và cách AI Minipower thay đổi cuộc chơi.",
    date: "2026-07-04",
    path: "workshops/01-gioi-thieu/index.html",
    homework: "workshops/01-gioi-thieu/homework.html",
  },
  {
    id: "02-minipower-la-ai",
    title: "Buổi 02 — Minipower là ai?",
    description:
      "Đi hết 17 chặng vòng đời một dự án để nhận ra Minipower là ai — đồng nghiệp AI nhớ và hỗ trợ ở mọi chặng.",
    date: "2026-07-25",
    path: "workshops/02-minipower-la-ai/index.html",
    homework: "workshops/02-minipower-la-ai/homework.html",
  },
  {
    id: "03-ai-foundation",
    title: "Buổi 03 — AI Foundation",
    description:
      "LLM, Prompt & Context Engineering — vì sao AI lúc trả lời cực hay, lúc bịa chuyện, và cách cho đủ ngữ cảnh để nó thành trợ lý đáng tin.",
    date: "2026-08-15",
    path: "workshops/03-ai-foundation/index.html",
    homework: "workshops/03-ai-foundation/homework.html",
  },
  {
    id: "04-discovery",
    title: "Buổi 04 — Khám phá cùng Minipower",
    description:
      "Soi lại ba tài liệu buổi 03 bằng chính Minipower: hai luật gõ prompt và ba nhóm câu hỏi để tự biết mình đang ở đâu, tài liệu có khớp nhau không, tiếp theo làm gì.",
    date: "2026-08-28",
    path: "workshops/04-discovery/index.html",
    homework: "workshops/04-discovery/homework.html",
  },
  {
    id: "05-chuan-bi-moi-truong",
    title: "Buổi 05 — Chuẩn bị môi trường",
    description:
      "Dựng nền trước khi xây: .NET 9, Node, kit Jarvis, SQLite. Vì sao phải có khung dựng sẵn thì AI mới sinh code đọc được.",
    status: "Sắp diễn ra",
    path: "workshops/05-chuan-bi-moi-truong/index.html",
  },
  {
    id: "06-phan-tich-yeu-cau",
    title: "Buổi 06 — Phân tích yêu cầu",
    description:
      "32 tài liệu cho 8 module: chuỗi quy tắc → kịch bản → đặc tả → tiêu chí nghiệm thu, mã ID và bảng truy vết, fan-out song song mà không giẫm chân.",
    status: "Sắp diễn ra",
    path: "workshops/06-phan-tich-yeu-cau/index.html",
  },
  {
    id: "07-chot-yeu-cau",
    title: "Buổi 07 — Chốt yêu cầu cùng Minipower",
    description:
      "Chữa bài 32 tài liệu theo danh sách kiểm 11 lỗi, dựng prototype bằng kit Jarvis, rồi tự ký ba cổng — đóng phase yêu cầu.",
    status: "Sắp diễn ra",
    path: "workshops/07-chot-yeu-cau/index.html",
  },
  {
    id: "08-ke-hoach-thuc-thi",
    title: "Buổi 08 — Kế hoạch thực thi",
    description:
      "Kiến trúc (ADR), kế hoạch (Epic/Story/Task có XONG KHI) và bộ ca kiểm thử sinh từ tiêu chí nghiệm thu — ba đề bài cho máy.",
    status: "Sắp diễn ra",
    path: "workshops/08-ke-hoach-thuc-thi/index.html",
  },
  {
    id: "09-chot-ke-hoach",
    title: "Buổi 09 — Chốt kế hoạch thực thi",
    description:
      "Chữa bài ADR, kế hoạch và ca kiểm thử; phân biệt ca âm kỹ thuật với ca âm nghiệp vụ; tự ký hai cổng cuối trước khi máy viết code.",
    status: "Sắp diễn ra",
    path: "workshops/09-chot-ke-hoach/index.html",
  },
  {
    id: "10-vibe-code-demo",
    title: "Buổi 10 — Vibe code & Demo",
    description:
      "Bấm nút: AI viết code theo vòng lặp ba tầng Story → Epic → toàn bộ, có bốn điều kiện dừng; nghiệm thu không mở code và demo sản phẩm vừa sinh ra.",
    status: "Sắp diễn ra",
    path: "workshops/10-vibe-code-demo/index.html",
  },
];

/**
 * Danh sách bài chia sẻ nhỏ (ngoài chuỗi workshop chính).
 * path: đường dẫn tương đối từ thư mục docs/
 */
const SHARES = [
  {
    id: "claude-code-session-context",
    title: "Claude Code — Quản lý Session & Context",
    description:
      "5 lệnh nhỏ để kiểm soát trí nhớ của Claude Code: /clear, /compact, /resume, /memory, /cost.",
    path: "shares/claude-code/session-context/index.html",
  },
];

function renderWorkshops() {
  const list = document.getElementById("workshop-list");
  if (!list) return;

  if (WORKSHOPS.length === 0) {
    list.innerHTML = `
      <li class="empty-state">
        Chưa có workshop nào. Sao chép thư mục
        <code>workshops/_template</code> và cập nhật
        <code>docs/js/site.js</code>.
      </li>`;
    return;
  }

  list.innerHTML = WORKSHOPS.map((w) => {
    const statusBadge = w.status
      ? `<span class="badge">${w.status}</span>`
      : "";

    const homeworkLink = w.homework
      ? `<a class="meta-link" href="${w.homework}">📝 Bài tập về nhà</a>`
      : "";

    return `
      <li>
        <article class="workshop-card">
          <a class="workshop-card-link" href="${w.path}">
            <h2>${w.title} ${statusBadge}</h2>
            <p>${w.description}</p>
          </a>
          <div class="meta">
            ${w.date ? `<span>📅 ${w.date}</span>` : ""}
            <a class="meta-link" href="${w.path}">→ Xem slide</a>
            ${homeworkLink}
          </div>
        </article>
      </li>`;
  }).join("");
}

function renderShares() {
  const list = document.getElementById("share-list");
  if (!list) return;

  if (SHARES.length === 0) {
    list.innerHTML = `
      <li class="empty-state">Chưa có bài chia sẻ nào.</li>`;
    return;
  }

  list.innerHTML = SHARES.map((s) => {
    return `
      <li>
        <article class="workshop-card">
          <a class="workshop-card-link" href="${s.path}">
            <h2>${s.title}</h2>
            <p>${s.description}</p>
          </a>
          <div class="meta">
            <a class="meta-link" href="${s.path}">→ Xem slide</a>
          </div>
        </article>
      </li>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderWorkshops();
  renderShares();
});
