// Slide 4 — Demo — yêu cầu HRM chung chung → (reveal) AI tự điền chi tiết
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">DEMO 1</p>
      <h2>Giao cho AI một yêu cầu mơ hồ</h2>
      <div class="chat">
        <div class="chat-row"><span class="who">PROMPT</span><p>Anh muốn làm hệ thống <b>HRM</b> lưu thông tin nhân viên công ty. Các nghiệp vụ chính:</p></div>
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
        <div class="fab" style="margin-top:.8rem;text-align:left">
          <p style="margin:0 0 .5rem"><b>AI tự quyết thay bạn</b> hàng loạt thứ bạn chưa nói:</p>
          <ul style="columns:2;column-gap:1.8rem;margin:0;color:var(--slide-text)">
            <li>Nghỉ phép <b>12 ngày/năm</b>, tăng ca <b>×1.5 / ×2</b></li>
            <li>Cảnh báo thử việc <b>trước 7 ngày</b></li>
            <li>Hồ sơ NV: mã NV, CCCD, hợp đồng…</li>
            <li>DB (<b>PostgreSQL</b>?), cache (<b>Redis</b>?)</li>
            <li>Kiến trúc, queue (<b>RabbitMQ</b>?), …</li>
          </ul>
        </div>
      </div>
    </section>
`);
