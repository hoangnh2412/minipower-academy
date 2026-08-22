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
    status: "Sắp diễn ra",
    path: "workshops/04-discovery/index.html",
    homework: "workshops/04-discovery/homework.html",
  },
  {
    id: "05-brainstorm-plan",
    title: "Buổi 05 — Brainstorm & Write Plan",
    description:
      "AI bày phương án & trade-off, người chốt; lập Plan (Story/Task có tiêu chí done) trace về yêu cầu — confirm trước khi code.",
    status: "Sắp diễn ra",
    path: "workshops/05-brainstorm-plan/index.html",
  },
  {
    id: "06-test-driven-coding",
    title: "Buổi 06 — Test-Driven & AI Coding",
    description:
      "Định nghĩa test/done trước → AI code trên jarvis cho tới khi pass → đẩy lên GitHub. Test là 'hợp đồng' giữ AI không code lạc.",
    status: "Sắp diễn ra",
    path: "workshops/06-test-driven-coding/index.html",
  },
  {
    id: "07-ai-coding",
    title: "Buổi 07 — AI Coding",
    description:
      "Vibe code nốt các tính năng của sản phẩm; debug lồng trong khi code — nhờ code theo jarvis nên lần ra gốc sự cố. Đẩy lên GitHub.",
    status: "Sắp diễn ra",
    path: "workshops/07-ai-coding/index.html",
  },
  {
    id: "08-code-review",
    title: "Buổi 08 — Code Review với AI",
    description:
      "Review code AI sinh — không tin lời AI, chạy thật; đối chiếu plan/test; refactor đúng chuẩn jarvis; soi bảo mật & hiệu năng cơ bản.",
    status: "Sắp diễn ra",
    path: "workshops/08-code-review/index.html",
  },
  {
    id: "09-demo-day-capstone",
    title: "Buổi 09 — Demo sản phẩm · Capstone",
    description:
      "MVP chạy thật trên máy + bộ nhớ dự án trong Minipower + lộ trình 30/60/90. Demo bằng chính sản phẩm.",
    status: "Sắp diễn ra",
    path: "workshops/09-demo-day-capstone/index.html",
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
