/**
 * Danh sách workshop — thêm mục mới khi tạo buổi học.
 * path: đường dẫn tương đối từ thư mục docs/
 */
const WORKSHOPS = [
  {
    id: "01-gioi-thieu",
    title: "Buổi 01 — Giới thiệu (mẫu)",
    description: "Slide mẫu minh họa cấu trúc và cách trình bày nội dung workshop.",
    date: "2026-07-04",
    status: "mẫu",
    path: "workshops/01-gioi-thieu/",
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

    return `
      <li>
        <a class="workshop-card" href="${w.path}">
          <h2>${w.title} ${statusBadge}</h2>
          <p>${w.description}</p>
          <div class="meta">
            ${w.date ? `<span>📅 ${w.date}</span>` : ""}
            <span>→ Xem slide</span>
          </div>
        </a>
      </li>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderWorkshops);
