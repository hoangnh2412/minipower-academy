// Slide 17 — Prompt = System + User (khái niệm)
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">Khái niệm · Prompt</p>
      <h2>Prompt bạn viết = User Prompt (còn một lớp ẩn)</h2>
      <div class="concept">
        <div class="txt">
          <p><b>Prompt</b> = toàn bộ đầu vào model nhận một lượt — gồm <b>2 lớp</b>:</p>
          <p><b>User Prompt</b> — câu bạn thực sự gõ (chính là 5 thành phần vừa xong).</p>
          <p><b>System Prompt</b> — lớp "luật nền" <b>ẩn, cố định</b> do công cụ cài sẵn: vai trò, giọng điệu, giới hạn của AI.</p>
          <p style="margin-top:.7rem"><b>Ví dụ ChatGPT:</b> bạn chỉ gõ User Prompt, nhưng OpenAI đã cài sẵn một System Prompt kiểu <em>"Bạn là ChatGPT — trợ lý hữu ích, trả lời trung thực, không bịa…"</em>. Bạn không thấy nó, nhưng nó luôn định hình câu trả lời — nên cùng một câu hỏi, ChatGPT và một AI khác có thể trả lời rất khác.</p>
        </div>
        <div class="fig">
          <svg viewBox="0 0 380 210" role="img" aria-label="Prompt gồm System Prompt cộng User Prompt">
            <rect x="24" y="34" width="250" height="58" rx="10" fill="#1a2332" stroke="#3b82f6"/>
            <text x="42" y="62" fill="#e8edf4" font-size="15" font-weight="700">💬 User Prompt</text>
            <text x="42" y="82" fill="#8b9cb3" font-size="12">câu bạn thực sự gõ</text>
            <rect x="24" y="110" width="250" height="58" rx="10" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-dasharray="5 3"/>
            <text x="42" y="138" fill="#e8edf4" font-size="15" font-weight="700">⚙ System Prompt</text>
            <text x="42" y="158" fill="#8b9cb3" font-size="12">luật nền · ẩn · cố định</text>
            <path d="M286 34 h10 v134 h-10" fill="none" stroke="#8b9cb3" stroke-width="2"/>
            <text x="304" y="106" fill="#3b82f6" font-size="16" font-weight="800">= Prompt</text>
          </svg>
        </div>
      </div>
    </section>
`);
