// Slide 13 — Context Window ≠ Prompt Length
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker warn-k">⚠️ Rất dễ nhầm</p>
      <h2>Context Window <span class="danger">≠</span> Prompt Length</h2>
      <div class="vs">
        <div class="side a">
          <h3>Prompt Length</h3>
          <p>Độ dài <b>câu bạn gõ</b>.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Prompt length là độ dài câu bạn gõ">
              <rect x="90" y="38" width="120" height="30" rx="6" fill="#22304a" stroke="#3b82f6"/>
              <text x="150" y="58" fill="#e8edf4" font-size="13" text-anchor="middle">câu bạn gõ</text>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">một mẩu</text>
            </svg>
          </div>
        </div>
        <div class="neq">≠</div>
        <div class="side b">
          <h3>Context Window</h3>
          <p><b>Sức chứa tối đa</b> cho tất cả + chừa chỗ trả lời.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Context window là sức chứa tối đa cho tất cả">
              <rect x="18" y="30" width="264" height="40" rx="8" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
              <rect x="22" y="34" width="55" height="32" rx="4" fill="#1a2332"/><text x="49" y="54" fill="#8b9cb3" font-size="10" text-anchor="middle">system</text>
              <rect x="79" y="34" width="55" height="32" rx="4" fill="#1a2332"/><text x="106" y="54" fill="#8b9cb3" font-size="10" text-anchor="middle">lịch sử</text>
              <rect x="136" y="34" width="45" height="32" rx="4" fill="#22304a" stroke="#3b82f6"/><text x="158" y="54" fill="#e8edf4" font-size="10" text-anchor="middle">prompt</text>
              <rect x="183" y="34" width="48" height="32" rx="4" fill="#1a2332"/><text x="207" y="54" fill="#8b9cb3" font-size="10" text-anchor="middle">tài liệu</text>
              <rect x="233" y="34" width="45" height="32" rx="4" fill="#132018" stroke="#34d399"/><text x="255" y="54" fill="#34d399" font-size="9" text-anchor="middle">trả lời</text>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">chứa tất cả</text>
            </svg>
          </div>
        </div>
      </div>
      <p class="afternote">"Prompt ngắn mà sao báo tràn?" — vì <b>lịch sử + tài liệu</b> đã ăn gần hết cửa sổ.</p>
    </section>
`);
