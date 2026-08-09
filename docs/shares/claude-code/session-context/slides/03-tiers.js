// Slide 3 — Ba tầng nhớ
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
  <section class="slide">
    <h2>Claude "nhớ" ở 3 tầng</h2>
    <div class="tiers">
      <div class="tier">
        <div class="t-label">Persistent · qua mọi session</div>
        <div class="t-title">CLAUDE.md — project memory</div>
        <div class="t-desc">Xem &amp; sửa bằng <span class="cmd">/memory</span></div>
      </div>
      <div class="tier">
        <div class="t-label">Session · trong lần chạy này</div>
        <div class="t-title">Conversation history</div>
        <div class="t-desc"><span class="cmd">/compact</span> → nén · <span class="cmd">/clear</span> → xoá</div>
      </div>
      <div class="tier">
        <div class="t-label">Cross-session · bắc cầu 2 lần chạy</div>
        <div class="t-title">Saved session state</div>
        <div class="t-desc"><span class="cmd">/resume</span> để khôi phục</div>
      </div>
    </div>
  </section>
`);
