// Slide 9 — Bảng tóm tắt
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
  <section class="slide">
    <h2>Tóm tắt</h2>
    <table class="summary">
      <thead>
        <tr><th>Command</th><th>Tác dụng</th><th>Mất context?</th></tr>
      </thead>
      <tbody>
        <tr><td>/clear</td><td>Xoá toàn bộ conversation history</td><td>✅ Có</td></tr>
        <tr><td>/compact [hint]</td><td>Nén history thành digest, giữ thông tin quan trọng</td><td>⚠️ Một phần</td></tr>
        <tr><td>/resume</td><td>Khôi phục session đã ngắt</td><td>❌ Không</td></tr>
        <tr><td>/memory</td><td>Xem / sửa CLAUDE.md (persistent memory)</td><td>❌ Không</td></tr>
        <tr><td>/cost</td><td>Xem số token đã tiêu trong session</td><td>❌ Không</td></tr>
      </tbody>
    </table>
  </section>
`);
