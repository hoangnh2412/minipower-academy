// Slide 16 — 5 thành phần prompt
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">Prompt Engineering</p>
      <p class="muted" style="max-width:840px;margin:-.1rem auto .3rem;font-style:italic">Kỹ thuật thiết kế câu lệnh (instruction) để hướng LLM tạo ra kết quả tốt hơn.</p>
      <h2>5 thành phần của một prompt có ngữ cảnh</h2>
      <div style="max-width:980px;width:100%;margin:.7rem auto .2rem">
        <svg viewBox="0 0 1000 84" role="img" aria-label="5 thành phần ghép thành một prompt tốt" style="width:100%;height:auto;display:block">
          <rect x="6" y="12" width="140" height="52" rx="9" fill="#1a2332" stroke="#3b82f6"/><text x="76" y="44" fill="#e8edf4" font-size="14" text-anchor="middle">Vai trò</text>
          <text x="155" y="46" fill="#8b9cb3" font-size="18" text-anchor="middle">+</text>
          <rect x="164" y="12" width="140" height="52" rx="9" fill="#1a2332" stroke="#3b82f6"/><text x="234" y="44" fill="#e8edf4" font-size="14" text-anchor="middle">Bối cảnh</text>
          <text x="313" y="46" fill="#8b9cb3" font-size="18" text-anchor="middle">+</text>
          <rect x="322" y="12" width="140" height="52" rx="9" fill="#1a2332" stroke="#3b82f6"/><text x="392" y="44" fill="#e8edf4" font-size="14" text-anchor="middle">Nhiệm vụ</text>
          <text x="471" y="46" fill="#8b9cb3" font-size="18" text-anchor="middle">+</text>
          <rect x="480" y="12" width="140" height="52" rx="9" fill="#1a2332" stroke="#3b82f6"/><text x="550" y="44" fill="#e8edf4" font-size="14" text-anchor="middle">Ràng buộc</text>
          <text x="629" y="46" fill="#8b9cb3" font-size="18" text-anchor="middle">+</text>
          <rect x="638" y="12" width="140" height="52" rx="9" fill="#1a2332" stroke="#3b82f6"/><text x="708" y="44" fill="#e8edf4" font-size="14" text-anchor="middle">Định dạng</text>
          <text x="794" y="46" fill="#8b9cb3" font-size="18" text-anchor="middle">=</text>
          <rect x="812" y="12" width="182" height="52" rx="10" fill="rgba(52,211,153,.12)" stroke="#34d399" stroke-width="2"/><text x="903" y="44" fill="#34d399" font-size="15" font-weight="800" text-anchor="middle">Prompt tốt</text>
        </svg>
      </div>
      <ol class="formula" style="max-width:840px;margin:.9rem auto 0">
        <li><b>Vai trò</b> — "Anh là BA chuyên hệ thống <b>HRM</b>, 15 năm kinh nghiệm."</li>
        <li><b>Bối cảnh</b> — "Công ty ~200 nhân sự, đang số hoá quản lý nhân sự &amp; chấm công."</li>
        <li><b>Nhiệm vụ</b> — "Rút danh sách yêu cầu cho module <b>Nghỉ phép</b> (đơn từ, duyệt)."</li>
        <li><b>Ràng buộc</b> — "Không tự bịa số ngày phép / quy trình duyệt — thiếu thì hỏi lại."</li>
        <li><b>Định dạng</b> — "Bảng: STT · Yêu cầu · Nguồn · Điểm cần làm rõ."</li>
      </ol>
    </section>
`);
