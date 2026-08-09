// Slide 36 — Memory ≠ Context
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker warn-k">⚠️ Rất dễ nhầm</p>
      <h2>Memory <span class="danger">≠</span> Context</h2>
      <div class="vs">
        <div class="side a">
          <h3>Memory</h3>
          <p>Ổ cứng — còn qua nhiều session, nhưng <b>phải chủ động lưu</b>.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Memory là ổ cứng">
              <path d="M120 28 v46 a30 10 0 0 0 60 0 v-46" fill="#132018" stroke="#34d399" stroke-width="2"/>
              <ellipse cx="150" cy="28" rx="30" ry="10" fill="#1a2332" stroke="#34d399" stroke-width="2"/>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">qua nhiều session</text>
            </svg>
          </div>
        </div>
        <div class="neq">≠</div>
        <div class="side b">
          <h3>Context</h3>
          <p>RAM — chỉ tồn tại trong <b>lần trả lời này</b>, hết session là mất.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Context là RAM">
              <rect x="95" y="16" width="110" height="58" rx="8" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
              <rect x="105" y="28" width="40" height="16" rx="3" fill="#1a2332" stroke="#3b82f6"/>
              <rect x="155" y="28" width="40" height="16" rx="3" fill="#1a2332" stroke="#3b82f6"/>
              <rect x="105" y="50" width="90" height="14" rx="3" fill="#1a2332" stroke="#8b9cb3"/>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">chỉ lần trả lời này</text>
            </svg>
          </div>
        </div>
      </div>
      <p class="afternote">"AI quên điều tôi nói hôm qua" <b>không phải lỗi</b> — bạn chưa đưa nó vào memory.</p>
    </section>
`);
