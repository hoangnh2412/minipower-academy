// Slide 14 — Ghép lại: vì sao AI bịa + chốt
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <div class="stepper">
        <div class="st"><span class="stn">1</span><span class="stt">AI đọc gì?</span><span class="sts">token</span></div>
        <div class="st"><span class="stn">2</span><span class="stt">Nhớ bao nhiêu?</span><span class="sts">context</span></div>
        <div class="st on"><span class="stn">3</span><span class="stt">Trả lời cách nào?</span><span class="sts">prediction</span></div>
      </div>
      <h2>Thiếu ngữ cảnh → AI điền chỗ trống bằng token xác suất cao nhất</h2>
      <div class="concept">
        <div class="txt">
          <p>Giống <b>autocomplete</b>: gõ <code>str =</code> thì nó <b>đoán</b> token kế tiếp, không phải <b>biết</b>. Ghép 3 mảnh — AI đoán token + cửa sổ ngữ cảnh có hạn → khi thiếu, nó vẫn đoán và <span class="danger">không biết mình đang đoán</span>.</p>
        </div>
        <div class="fig">
          <svg viewBox="0 0 380 200" role="img" aria-label="AI điền chỗ trống bằng token xác suất cao nhất">
            <text x="24" y="42" fill="#e8edf4" font-size="15">Khách VIP giảm</text>
            <rect x="170" y="26" width="46" height="24" rx="5" fill="none" stroke="#f5a623" stroke-dasharray="4 3"/>
            <text x="193" y="43" fill="#f5a623" font-size="13" text-anchor="middle">___</text>
            <text x="224" y="42" fill="#e8edf4" font-size="15">%</text>
            <line x1="193" y1="52" x2="193" y2="76" stroke="#8b9cb3" stroke-width="1.5"/>
            <polygon points="193,78 188,70 198,70" fill="#8b9cb3"/>
            <rect x="60" y="82" width="260" height="100" rx="10" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
            <text x="74" y="102" fill="#8b9cb3" font-size="11" letter-spacing="1">TOKEN KẾ TIẾP · THEO XÁC SUẤT</text>
            <rect x="70" y="110" width="240" height="22" rx="4" fill="rgba(52,211,153,.14)"/>
            <text x="82" y="126" fill="#34d399" font-size="13" font-weight="700">10   ·   p = 0.62   ✓ chọn</text>
            <text x="82" y="150" fill="#8b9cb3" font-size="13">15   ·   p = 0.18</text>
            <text x="82" y="172" fill="#8b9cb3" font-size="13">20   ·   p = 0.09</text>
          </svg>
        </div>
      </div>
      <p class="afternote" style="border-left:4px solid var(--slide-accent);background:var(--slide-surface);border-radius:10px;padding:.9rem 1.1rem;margin-top:1.1rem"><span class="danger">Hallucination là MẶC ĐỊNH</span>, không phải trục trặc — giảm nó = <span class="good">cho đủ ngữ cảnh</span>.</p>
    </section>
`);
