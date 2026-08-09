// Slide 11 — Context (khái niệm) — trước context window
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <div class="stepper">
        <div class="st"><span class="stn">1</span><span class="stt">AI đọc gì?</span><span class="sts">token</span></div>
        <div class="st on"><span class="stn">2</span><span class="stt">Nhớ bao nhiêu?</span><span class="sts">context</span></div>
        <div class="st"><span class="stn">3</span><span class="stt">Trả lời cách nào?</span><span class="sts">prediction</span></div>
      </div>
      <h2>Context — mọi thứ model "nhìn thấy" khi trả lời</h2>
      <div class="concept">
        <div class="txt">
          <p><b>Context</b> = tất cả những gì AI thấy trong <b>một lần trả lời</b>: <b>System Prompt</b> + <b>câu bạn hỏi</b> + <b>lịch sử chat</b> + <b>tài liệu đính kèm</b>.</p>
          <p class="remember">AI chỉ biết những gì <b>nằm trong context</b> — ngoài đó nó <span class="danger">không thấy</span>, và sẽ đoán → bịa.</p>
        </div>
        <div class="fig">
          <svg viewBox="0 0 380 200" role="img" aria-label="Context là cửa sổ chứa mọi thứ model nhìn thấy">
            <rect x="16" y="14" width="348" height="172" rx="14" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
            <text x="30" y="38" fill="#8b9cb3" font-size="11" letter-spacing="1">CONTEXT · MODEL NHÌN THẤY</text>
            <rect x="30" y="50" width="152" height="44" rx="8" fill="#1a2332" stroke="#3b82f6"/>
            <text x="44" y="77" fill="#e8edf4" font-size="13">⚙ System Prompt</text>
            <rect x="198" y="50" width="152" height="44" rx="8" fill="#1a2332" stroke="#3b82f6"/>
            <text x="212" y="77" fill="#e8edf4" font-size="13">💬 Câu bạn hỏi</text>
            <rect x="30" y="106" width="152" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
            <text x="44" y="133" fill="#e8edf4" font-size="13">🕘 Lịch sử chat</text>
            <rect x="198" y="106" width="152" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
            <text x="212" y="133" fill="#e8edf4" font-size="13">📎 Tài liệu</text>
          </svg>
        </div>
      </div>
    </section>
`);
