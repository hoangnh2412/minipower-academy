// Chương 15 — 14-huong-dan-minipower
window.__CHAPTERS = window.__CHAPTERS || [];
window.__CHAPTERS.push(
{
        folder: "14-huong-dan-minipower",
        name: "Hands-on — Cài & dùng Minipower",
        type: "text",
        slides: [
          {
            id: "14-0",
            title: "Bắt tay làm ngay",
            html: `
              <div class="slide-badge">Phần 14 · Hands-on</div>
              <h2>Bắt tay làm ngay</h2>
              <p class="lead">Câu chuyện xong rồi — giờ cài Minipower và dùng thử trên máy của anh chị.</p>
              <p class="lead">5 bước đơn giản. Copy prompt, paste vào AI, làm theo từng bước.</p>
            `,
            note: "<em>Chuyển phần:</em> \"Reveal xong Minipower rồi. Giờ không nói nữa — bắt tay làm. Ai chưa mở laptop thì mở luôn nhé.\""
          },
          {
            id: "14-1",
            title: "Bước 1–2: Chuẩn bị môi trường",
            html: `
              <div class="slide-badge">Bước 1–2</div>
              <h2>Chuẩn bị môi trường</h2>
              <ol class="steps">
                <li>Tạo <strong>folder trống</strong> trên máy (ví dụ: <code>~/projects/my-crm</code>)</li>
                <li>Mở IDE tại folder vừa tạo
                  <div class="ide-tags">
                    <span>Cursor</span>
                    <span>Claude Code</span>
                    <span>OpenCode</span>
                  </div>
                </li>
              </ol>
            `,
            note: "Bước 1: Tạo folder trống — đây sẽ là workspace dự án.\nBước 2: Mở Cursor, Claude Code hoặc OpenCode tại folder đó. Quan trọng: AI phải chạy ĐÚNG folder, không phải folder khác."
          },
          {
            id: "14-2",
            title: "Bước 3: Pull code & cài đặt",
            html: `
              <div class="slide-badge">Bước 3</div>
              <h2>Pull code & cài đặt</h2>
              <div class="prompt-label">Prompt</div>
              <div class="prompt-block">Pull code https://github.com/hoangnh2412/ai-skills và cài đặt minipower</div>
            `,
            note: "Prompt: \"Pull code https://github.com/hoangnh2412/ai-skills và cài đặt minipower\"\n\nChờ AI clone repo và chạy setup. Đừng làm bước tiếp khi chưa xong bước này."
          },
          {
            id: "14-3",
            title: "Bước 4: Kiểm tra đã cài đủ",
            html: `
              <div class="slide-badge">Bước 4</div>
              <h2>Kiểm tra đã cài đủ</h2>
              <p class="lead">Sau khi AI cài xong, hỏi để xác nhận:</p>
              <div class="prompt-label">Prompt kiểm tra</div>
              <div class="prompt-block">Làm thế nào để biết đã cài: Skill minipower, rules, hook guardrails</div>
              <ul class="checklist">
                <li>Skill minipower</li>
                <li>rules</li>
                <li>hook guardrails</li>
              </ul>
              <div class="callout">⚠️ Kiểm tra <strong>thủ công</strong> — đừng tin AI 100%. Không cài đủ = 1 ngày bay $20+ 😅</div>
            `,
            note: "Prompt: \"Làm thế nào để biết đã cài: Skill minipower, rules, hook guardrails\"\n\nAI sẽ hướng dẫn kiểm tra. Nhưng ae nên tự mở folder xem — tránh tốn token vì cài thiếu.\n\n<em>Punchline:</em> Không cài đủ là 1 ngày bay $20 hoặc có thể nhiều hơn."
          },
          {
            id: "14-5",
            title: "Bước 5: Bắt đầu dùng Minipower",
            html: `
              <div class="slide-badge">Bước 5</div>
              <h2>Bắt đầu dùng Minipower</h2>
              <p class="lead">Cài xong rồi — hỏi AI dẫn dắt bước đầu tiên:</p>
              <div class="prompt-label">Prompt khởi động</div>
              <div class="prompt-block">/minipower Để bắt đầu, tôi cần làm những gì?</div>
              <p class="lead" style="margin-top:1.25rem">AI sẽ hướng dẫn upload tài liệu vào folder nào, đọc file gì trước.</p>
              <div class="callout">Quá nhiều thông tin? Prompt tiếp:<br><strong>/minipower bước tiếp theo cần làm gì? Ko cần cả quá trình, dẫn dắt tôi làm từng bước</strong></div>
            `,
            note: "Prompt: \"/minipower Để bắt đầu, tôi cần làm những gì?\"\n\nAI hướng dẫn upload tài liệu, đọc file nào trước để hiểu luồng.\n\nNếu quá tải → \"/minipower bước tiếp theo cần làm gì? Ko cần cả quá trình, dẫn dắt tôi làm từng bước\""
          }
        ]
      }
);
