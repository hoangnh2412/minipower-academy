// Slide 10 — Token ≠ Word
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker warn-k">⚠️ Rất dễ nhầm</p>
      <h2>Token <span class="danger">≠</span> Word (Từ)</h2>
      <div class="vs">
        <div class="side a">
          <h3>Từ (Word)</h3>
          <p>Đơn vị <b>con người</b> đọc.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Một từ">
              <rect x="80" y="30" width="140" height="42" rx="8" fill="#1a2332" stroke="#8b9cb3" stroke-width="2"/>
              <text x="150" y="57" fill="#e8edf4" font-size="16" text-anchor="middle">khuyến mãi</text>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">1 từ</text>
            </svg>
          </div>
        </div>
        <div class="neq">≠</div>
        <div class="side b">
          <h3>Token</h3>
          <p><b>Mảnh chữ</b> theo cách máy chẻ.</p>
          <div class="fig">
            <svg viewBox="0 0 300 108" role="img" aria-label="Cùng từ đó chẻ thành nhiều token">
              <rect x="40" y="30" width="58" height="42" rx="6" fill="#22304a" stroke="#3b82f6"/>
              <text x="69" y="57" fill="#e8edf4" font-size="14" text-anchor="middle">khuy</text>
              <rect x="104" y="30" width="46" height="42" rx="6" fill="#22304a" stroke="#3b82f6"/>
              <text x="127" y="57" fill="#e8edf4" font-size="14" text-anchor="middle">ến</text>
              <rect x="156" y="30" width="62" height="42" rx="6" fill="#22304a" stroke="#3b82f6"/>
              <text x="187" y="57" fill="#e8edf4" font-size="14" text-anchor="middle">mãi</text>
              <text x="150" y="98" fill="#8b9cb3" font-size="12" text-anchor="middle">3 token</text>
            </svg>
          </div>
        </div>
      </div>
      <p class="afternote"><code>chatbot</code> → <code>chat</code>+<code>bot</code> (2 token). Tính tiền theo <b>token</b>, không theo từ — tiếng Việt thường &gt;1 token/từ.</p>
    </section>
`);
