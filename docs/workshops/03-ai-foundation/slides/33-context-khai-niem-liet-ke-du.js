// Slide 33 — Context (khái niệm) — liệt kê đủ
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <h2>Context — giờ liệt kê đủ gồm những gì</h2>
      <p style="max-width:940px;margin:.3rem auto 0">Lúc nãy ta mới gọi tên <b>Context</b>. Giờ đã biết thêm System/User Prompt, hãy nhìn lại cho <b>đủ 4 mảnh</b> mà AI "thấy" mỗi lần trả lời:</p>
      <p style="max-width:940px;margin:.55rem auto 0"><b>System Prompt</b> (luật nền của công cụ) + <b>User Prompt</b> (câu bạn gõ) + <b>lịch sử chat</b> (những gì đã nói trong phiên) + <b>tài liệu đính kèm</b>. Gộp lại chính là <b>toàn bộ hiểu biết của AI</b> tại thời điểm đó — không hơn.</p>
      <p style="max-width:940px;margin:.55rem auto 0" class="muted">Neo cho dev: context giống <b style="color:var(--slide-accent)">RAM</b> — nạp gì thì AI biết nấy, hết phiên là quên sạch.</p>
      <div style="max-width:440px;width:100%;margin:1rem auto 0">
        <svg viewBox="0 0 380 200" role="img" aria-label="Context là cửa sổ chứa mọi thứ model nhìn thấy" style="width:100%;height:auto;display:block">
          <rect x="16" y="14" width="348" height="172" rx="14" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
          <text x="30" y="38" fill="#8b9cb3" font-size="11" letter-spacing="1">CONTEXT · MODEL NHÌN THẤY</text>
          <rect x="30" y="50" width="152" height="44" rx="8" fill="#1a2332" stroke="#3b82f6"/>
          <text x="44" y="77" fill="#e8edf4" font-size="13">⚙ System Prompt</text>
          <rect x="198" y="50" width="152" height="44" rx="8" fill="#1a2332" stroke="#3b82f6"/>
          <text x="212" y="77" fill="#e8edf4" font-size="13">💬 User Prompt</text>
          <rect x="30" y="106" width="152" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="44" y="133" fill="#e8edf4" font-size="13">🕘 Lịch sử chat</text>
          <rect x="198" y="106" width="152" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="212" y="133" fill="#e8edf4" font-size="13">📎 Tài liệu</text>
        </svg>
      </div>
    </section>
`);
