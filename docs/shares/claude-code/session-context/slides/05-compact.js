// Slide 5 — /compact
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
  <section class="slide slide-cmd">
    <div class="cmd-head"><span class="big">/compact</span><span class="tag">Nén context để tiết kiệm token</span></div>
    <p>Thay vì xoá hẳn, Claude <strong>tóm tắt</strong> hội thoại thành một digest ngắn — giữ lại các quyết định quan trọng.</p>
    <div class="illus">
      <div class="ctx-row">
        <span class="ctx-label">Trước</span>
        <div class="ctx-track"><div class="ctx-fill" style="width:88%;background:#ef4444"></div></div>
      </div>
      <div class="cmp-mid">↓ /compact ↓</div>
      <div class="ctx-row">
        <span class="ctx-label">Sau</span>
        <div class="ctx-track"><div class="ctx-fill anim-compact"></div></div>
      </div>
      <div class="illus-cap">Gần đầy (đỏ) → nén xuống còn ít (xanh), vẫn giữ ý chính</div>
    </div>
    <p class="note"><span class="q">Khác /clear:</span> <span class="cmd">/clear</span> = xoá sạch · <span class="cmd">/compact</span> = tóm lược rồi giữ digest.</p>
  </section>
`);
