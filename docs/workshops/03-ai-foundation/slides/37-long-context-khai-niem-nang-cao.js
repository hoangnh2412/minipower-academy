// Slide 37 — Long Context (khái niệm nâng cao)
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">Nâng cao · Long Context</p>
      <h2>Long Context — cửa sổ rất lớn</h2>
      <div class="concept">
        <div class="txt">
          <p><b>Long Context</b> = cửa sổ nhét được <b>hàng trăm trang</b> cùng lúc. Nhưng càng dài càng <b>tốn token</b> và AI càng <b>dễ "lạc"</b> giữa biển thông tin.</p>
          <p class="neo">Vì vậy "nhét cả kho vào" không phải lúc nào cũng tốt — cần lọc đúng ngữ cảnh.</p>
        </div>
        <div class="fig">
          <svg viewBox="0 0 380 200" role="img" aria-label="Long context là cửa sổ rất lớn chứa nhiều trang">
            <rect x="16" y="18" width="348" height="166" rx="12" fill="#0b0f16" stroke="#3b82f6" stroke-width="2"/>
            <text x="30" y="40" fill="#8b9cb3" font-size="11" letter-spacing="1">LONG CONTEXT · HÀNG TRĂM TRANG</text>
            <g fill="#1a2332" stroke="#8b9cb3">
              <rect x="34" y="54" width="40" height="52" rx="4"/>
              <rect x="86" y="54" width="40" height="52" rx="4"/>
              <rect x="138" y="54" width="40" height="52" rx="4"/>
              <rect x="190" y="54" width="40" height="52" rx="4"/>
              <rect x="242" y="54" width="40" height="52" rx="4"/>
              <rect x="294" y="54" width="40" height="52" rx="4"/>
            </g>
            <text x="190" y="146" fill="#f5a623" font-size="12" text-anchor="middle">càng dài → càng tốn &amp; dễ lạc</text>
            <text x="336" y="88" fill="#8b9cb3" font-size="20" text-anchor="middle">…</text>
          </svg>
        </div>
      </div>
    </section>
`);
