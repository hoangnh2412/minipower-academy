// Slide 4 — /clear
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
  <section class="slide slide-cmd">
    <div class="cmd-head"><span class="big">/clear</span><span class="tag">Xoá toàn bộ context hiện tại</span></div>
    <p>Xoá sạch lịch sử hội thoại — Claude "quên" những gì đã bàn. Model, config, file trong project vẫn giữ nguyên.</p>
    <div class="illus">
      <div class="ctx-row">
        <span class="ctx-label">Context</span>
        <div class="ctx-track"><div class="ctx-fill anim-drain"></div></div>
      </div>
      <div class="illus-cap">Đang đầy (đỏ) &nbsp;→ <span class="cmd">/clear</span> →&nbsp; tụt dần về trống</div>
    </div>
    <ul class="when">
      <li>Chuyển sang task hoàn toàn khác trong cùng session</li>
      <li>Context đang bị "nhiễm" bởi thảo luận cũ không liên quan</li>
      <li>Muốn Claude tiếp cận vấn đề fresh, không bị bias</li>
    </ul>
  </section>
`);
