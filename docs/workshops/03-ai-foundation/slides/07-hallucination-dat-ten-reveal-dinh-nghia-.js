// Slide 7 — Hallucination — đặt tên → (reveal) định nghĩa → (reveal) ≠ Sai
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense" style="text-align:center">
      <h2>Cái AI vừa làm có tên: <span class="hl">Hallucination</span></h2>
      <div class="fig" style="max-width:440px;width:100%;margin:.5rem auto .3rem">
        <svg viewBox="0 0 520 180" role="img" aria-label="Từ chỗ không có nguồn, AI vẫn cho ra câu trả lời tự tin">
          <rect x="18" y="52" width="120" height="72" rx="10" fill="none" stroke="#8b9cb3" stroke-dasharray="6 5"/>
          <text x="78" y="82" text-anchor="middle" fill="#8b9cb3" font-size="13">Không nguồn</text>
          <text x="78" y="112" text-anchor="middle" fill="#8b9cb3" font-size="24">∅</text>
          <line x1="144" y1="88" x2="196" y2="88" stroke="#8b9cb3" stroke-width="2"/>
          <polygon points="198,88 188,83 188,93" fill="#8b9cb3"/>
          <circle cx="246" cy="88" r="42" fill="#1a2332" stroke="#3b82f6" stroke-width="2"/>
          <text x="246" y="84" text-anchor="middle" fill="#3b82f6" font-size="15" font-weight="700">AI</text>
          <text x="246" y="104" text-anchor="middle" fill="#8b9cb3" font-size="11">đoán</text>
          <line x1="292" y1="88" x2="342" y2="88" stroke="#f5a623" stroke-width="2"/>
          <polygon points="344,88 334,83 334,93" fill="#f5a623"/>
          <rect x="350" y="44" width="154" height="90" rx="12" fill="#1a2332" stroke="#f5a623" stroke-width="2"/>
          <text x="427" y="75" text-anchor="middle" fill="#e8edf4" font-size="13">Câu trả lời</text>
          <text x="427" y="98" text-anchor="middle" fill="#ffd479" font-size="14" font-weight="700">tự tin ✨</text>
          <text x="427" y="120" text-anchor="middle" fill="#8b9cb3" font-size="11">nghe rất hợp lý</text>
        </svg>
      </div>
      <p class="ask" style="text-align:center">Từ chỗ <b>không có nguồn</b>, AI vẫn cho ra câu trả lời tự tin.</p>
      <div class="reveal">
        <p style="margin:.5rem auto 0;text-align:center"><span style="white-space:nowrap"><b>Hallucination</b> — AI <b>bịa</b> ra một thứ nghe rất hợp lý, trình bày tự tin, nhưng <b>không dựa trên nguồn nào</b>.</span><br>Nó không cố lừa bạn — nó chỉ đang "điền vào chỗ trống".</p>
      </div>
      <div class="reveal">
        <p class="kicker warn-k" style="margin-top:1.4rem">⚠️ Rất dễ nhầm — Hallucination <span class="danger">≠</span> Sai</p>
        <div class="vs">
          <div class="side a">
            <h3>Hallucination</h3>
            <p>Bịa <b>tự tin</b>, nghe hợp lý, <b>không dựa nguồn nào</b> — đôi khi còn tình cờ đúng.</p>
          </div>
          <div class="neq">≠</div>
          <div class="side b">
            <h3>Sai</h3>
            <p>Đơn giản là câu trả lời <b>không đúng</b> (2 + 2 = 5).</p>
          </div>
        </div>
        <p class="afternote">Vấn đề không phải đúng/sai — mà là <b>có căn cứ hay không</b>. Bịa mà đúng vẫn nguy hiểm.</p>
      </div>
    </section>
`);
