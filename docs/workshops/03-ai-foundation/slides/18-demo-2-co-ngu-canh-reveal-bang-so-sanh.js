// Slide 18 — Demo 2 (có ngữ cảnh) → reveal bảng so sánh
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">DEMO 2</p>
      <h2>Cùng dự án HRM — nhưng lần này có ràng buộc</h2>
      <div class="chat">
        <div class="chat-row"><span class="who">PROMPT</span><p>/minipower Khởi tạo dự án <b>HRM</b> với các yêu cầu sau — <span class="danger">chỉ dùng đúng các ý này, thiếu thì hỏi lại, không tự bịa</span>:</p></div>
        <ul class="mini" style="columns:2;column-gap:1.8rem">
          <li>Quản lý nhân sự (thông tin, vị trí)</li>
          <li>Đơn nghỉ phép — cần HR &amp; QL duyệt</li>
          <li>Chấm công import Excel</li>
          <li>Bảng lương = công − phép + tăng ca</li>
          <li>Cảnh báo sắp hết thử việc</li>
          <li>Cảnh báo sinh nhật, ngày lễ</li>
          <li>Onboarding / offboarding</li>
          <li>Báo cáo biến động nhân sự</li>
        </ul>
      </div>
      <div class="reveal">
        <table class="cmp" style="margin-top:.2rem">
          <thead><tr><th></th><th>Không ngữ cảnh</th><th class="good-col">Có ngữ cảnh</th></tr></thead>
          <tbody>
            <tr><td>Nguồn yêu cầu</td><td>Bịa từ kiến thức chung</td><td class="good-col">Bám biên bản thật</td></tr>
            <tr><td>Trace</td><td>Không có</td><td class="good-col">Có (ghi câu nguồn)</td></tr>
            <tr><td>Điểm mơ hồ</td><td>Không tự nhận</td><td class="good-col">Tự chỉ ra</td></tr>
            <tr><td>Dùng được</td><td>Không</td><td class="good-col">Có người chốt thì dùng được</td></tr>
          </tbody>
        </table>
      </div>
    </section>
`);
