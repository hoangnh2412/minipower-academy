// Slide 9 — Token — hỏi trước, trả lời sau (vì sao — 1)
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <div class="stepper">
        <div class="st on"><span class="stn">1</span><span class="stt">AI đọc gì?</span><span class="sts">token</span></div>
        <div class="st"><span class="stn">2</span><span class="stt">Nhớ bao nhiêu?</span><span class="sts">context</span></div>
        <div class="st"><span class="stn">3</span><span class="stt">Trả lời cách nào?</span><span class="sts">prediction</span></div>
      </div>
      <h2>Câu này có <span class="accent-text">bao nhiêu token</span>?</h2>
      <div class="chat">
        <div class="chat-row"><span class="who">Câu mẫu</span><p>Dự án CRM công ty ABC cần những yêu cầu gì?</p></div>
        <p class="note">Đếm thử — AI "đọc" câu này thành mấy mảnh?</p>
      </div>
      <div class="reveal">
        <div class="tokens">
          <span>Dự</span><span>án</span><span>CRM</span><span>công</span><span>ty</span><span>ABC</span><span>cần</span><span>nh</span><span>ững</span><span>yêu</span><span>cầu</span><span>gì</span><span>?</span>
        </div>
        <p>AI <b>không đếm theo từ</b> — nó chẻ câu thành <b>token</b> (mảnh chữ), có từ bị tách làm đôi (<code>những</code> → <code>nh</code>+<code>ững</code>). Câu ~12 từ nhưng thành <b>~18 token</b>. <span class="muted">(Vì vậy tiếng Việt "ngốn" token hơn tiếng Anh.)</span></p>
      </div>
    </section>
`);
