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
    path: "workshops/01-gioi-thieu/",
    homework: "workshops/01-gioi-thieu/homework.html",
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

document.addEventListener("DOMContentLoaded", renderWorkshops);
