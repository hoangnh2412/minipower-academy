// Slide 35 — Session (khái niệm)
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">Khái niệm · Session</p>
      <h2>Session — một cuộc hội thoại có mở &amp; đóng</h2>
      <div class="concept">
        <div class="txt">
          <p><b>Session</b> là một cuộc hội thoại. Đóng session → <b>context mất</b>, nhưng <b>memory còn</b> (nếu đã lưu).</p>
          <p class="remember">Neo cho dev: session giống <b>một lần chạy chương trình</b>.</p>
        </div>
        <div class="fig">
          <svg viewBox="0 0 380 190" role="img" aria-label="Session là một cuộc hội thoại có mở và đóng">
            <line x1="30" y1="70" x2="350" y2="70" stroke="#8b9cb3" stroke-width="2"/>
            <line x1="40" y1="52" x2="40" y2="88" stroke="#34d399" stroke-width="3"/>
            <text x="40" y="44" fill="#34d399" font-size="12" text-anchor="middle">mở</text>
            <line x1="330" y1="52" x2="330" y2="88" stroke="#f87171" stroke-width="3"/>
            <text x="330" y="44" fill="#f87171" font-size="12" text-anchor="middle">đóng</text>
            <rect x="80" y="56" width="54" height="28" rx="8" fill="#1a2332" stroke="#3b82f6"/>
            <rect x="150" y="56" width="54" height="28" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
            <rect x="220" y="56" width="54" height="28" rx="8" fill="#1a2332" stroke="#3b82f6"/>
            <text x="190" y="118" fill="#8b9cb3" font-size="12" text-anchor="middle">1 cuộc hội thoại = 1 session</text>
            <text x="190" y="146" fill="#e8edf4" font-size="12" text-anchor="middle">đóng → <tspan fill="#f87171">context mất</tspan>, <tspan fill="#34d399">memory còn</tspan></text>
          </svg>
        </div>
      </div>
    </section>
`);
