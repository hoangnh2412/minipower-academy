// Slide 8 — /cost
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
  <section class="slide slide-cmd">
    <div class="cmd-head"><span class="big">/cost</span><span class="tag">Xem mức tiêu thụ token</span></div>
    <p>Hiển thị số token đã dùng trong session — giúp ước lượng <span class="q">khi nào nên chạy <span class="cmd">/compact</span>.</span></p>
    <div class="illus">
      <div class="ctx-row">
        <span class="ctx-label">Token</span>
        <div class="ctx-track"><div class="ctx-fill anim-grow"></div></div>
      </div>
      <div class="illus-cap">Token tích luỹ dần (xanh → vàng → đỏ) — chạm ngưỡng thì nén bớt</div>
    </div>
  </section>
`);
