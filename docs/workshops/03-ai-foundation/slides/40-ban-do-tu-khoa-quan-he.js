// Slide 40 — Bản đồ từ khoá & quan hệ
window.__SLIDES = window.__SLIDES || [];
window.__SLIDES.push(/* html */ `
<section class="slide dense">
      <p class="kicker">Tổng kết</p>
      <h2>Bản đồ từ khoá &amp; mối quan hệ</h2>
      <div class="fig" style="max-width:940px;width:100%;margin:.7rem auto 0;background:none;border:none">
        <svg viewBox="0 0 960 410" role="img" aria-label="Bản đồ các từ khoá đã học, nhóm theo Prompt Engineering và Context Engineering" style="background:none;border:none">
          <!-- Hàng khái niệm atomic -->
          <rect x="95" y="20" width="190" height="48" rx="10" fill="#1a2332" stroke="#3b82f6"/>
          <text x="190" y="50" fill="#e8edf4" font-size="16" font-weight="700" text-anchor="middle">Token</text>
          <rect x="385" y="20" width="190" height="48" rx="10" fill="#1a2332" stroke="#f5a623"/>
          <text x="480" y="50" fill="#ffd479" font-size="16" font-weight="700" text-anchor="middle">Hallucination</text>
          <rect x="675" y="20" width="190" height="48" rx="10" fill="#1a2332" stroke="#3b82f6"/>
          <text x="770" y="50" fill="#e8edf4" font-size="16" font-weight="700" text-anchor="middle">Prediction</text>

          <!-- Nhóm Prompt Engineering -->
          <rect x="40" y="110" width="400" height="286" rx="16" fill="rgba(59,130,246,0.06)" stroke="#3b82f6" stroke-width="2"/>
          <text x="240" y="146" fill="#3b82f6" font-size="17" font-weight="800" text-anchor="middle">Prompt Engineering</text>
          <rect x="70" y="176" width="160" height="62" rx="9" fill="#1a2332" stroke="#3b82f6"/>
          <text x="150" y="203" fill="#e8edf4" font-size="14" font-weight="700" text-anchor="middle">System Prompt</text>
          <text x="150" y="223" fill="#8b9cb3" font-size="11" text-anchor="middle">luật nền · ẩn</text>
          <rect x="250" y="176" width="160" height="62" rx="9" fill="#1a2332" stroke="#3b82f6"/>
          <text x="330" y="203" fill="#e8edf4" font-size="14" font-weight="700" text-anchor="middle">User Prompt</text>
          <text x="330" y="223" fill="#8b9cb3" font-size="11" text-anchor="middle">câu bạn gõ</text>
          <text x="240" y="300" fill="#8b9cb3" font-size="12.5" text-anchor="middle">= viết đúng câu hỏi cho AI</text>

          <!-- Nhóm Context Engineering -->
          <rect x="470" y="110" width="450" height="286" rx="16" fill="rgba(52,211,153,0.05)" stroke="#34d399" stroke-width="2"/>
          <text x="695" y="146" fill="#34d399" font-size="17" font-weight="800" text-anchor="middle">Context Engineering</text>
          <rect x="495" y="172" width="205" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="597" y="199" fill="#e8edf4" font-size="13.5" text-anchor="middle">Context window</text>
          <rect x="712" y="172" width="185" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="804" y="199" fill="#e8edf4" font-size="13.5" text-anchor="middle">Long Context</text>
          <rect x="495" y="226" width="205" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="597" y="253" fill="#e8edf4" font-size="13.5" text-anchor="middle">Memory</text>
          <rect x="712" y="226" width="185" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="804" y="253" fill="#e8edf4" font-size="13.5" text-anchor="middle">Session</text>
          <rect x="495" y="280" width="402" height="44" rx="8" fill="#1a2332" stroke="#8b9cb3"/>
          <text x="696" y="307" fill="#e8edf4" font-size="13.5" text-anchor="middle">Context Compression</text>
          <text x="695" y="352" fill="#8b9cb3" font-size="12.5" text-anchor="middle">= cho đúng &amp; đủ ngữ cảnh, không tràn</text>
        </svg>
      </div>
    </section>
`);
