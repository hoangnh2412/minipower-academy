// Slide 12 — Context window (khái niệm nền)
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <div class="stepper">
        <div class="st"><span class="stn">1</span><span class="stt">AI đọc gì?</span><span class="sts">token</span></div>
        <div class="st on"><span class="stn">2</span><span class="stt">Nhớ bao nhiêu?</span><span class="sts">context</span></div>
        <div class="st"><span class="stn">3</span><span class="stt">Trả lời cách nào?</span><span class="sts">prediction</span></div>
      </div>
      <h2>Context window — không gian nhớ tối đa một lần trả lời</h2>
      <p style="max-width:920px;margin:.3rem auto 0"><b>Context window</b> = <b>giới hạn kích thước</b> của context — mỗi lần AI chỉ "ôm" được một lượng nhất định.</p>
      <p style="max-width:920px;margin:.6rem auto 0">Như <b>anh BA ghi chép trong cuộc họp 2 tiếng</b> — thông tin dội về quá nhiều, chỉ giữ được phần <b>trong tầm</b>, phần ngoài <span class="danger">rơi mất</span>. Cửa sổ ngữ cảnh của AI cũng vậy.</p>
      <div class="reveal">
        <div class="fig" style="max-width:600px;width:100%;margin:1rem auto 0">
          <img src="../01-gioi-thieu/slides/1-ghi-chep-cham/1.webp" alt="BA ghi chép không kịp trong cuộc họp, thông tin quá tải" style="width:100%;display:block;border-radius:12px;border:1px solid rgba(139,156,179,.2)">
        </div>
      </div>
    </section>
`);
