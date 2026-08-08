# Giai đoạn 3 — Storyboard (Bảng phân cảnh)

> Chẻ `2-script-final.md` thành **33 khung/slide** cho deck **coded-HTML** (nền `_shared/`).
> Nguyên tắc: **thuật ngữ lồng ghép theo mạch, cơ bản → nâng cao**; mỗi "nhầm lẫn" đặt **ngay sau**
> khái niệm gốc. Nhịp 2 theo mạch **đặt tên hiện tượng → hỏi "vì sao?" → giải thích bằng thuật ngữ →
> chốt**. Mỗi khái niệm/nhầm lẫn có **1 hình minh hoạ SVG inline**.

## Bản đồ nhịp → khung

| Nhịp (script) | Khung | Ghi chú |
|---------------|-------|---------|
| Cover | 01 | |
| 1 · Nhìn lại cửa ngõ | 02–03 | |
| 2 · Hallucination & "vì sao AI bịa?" | 04–13 | demo → **gọi tên Hallucination** → *Hall≠Sai* → **câu hỏi "vì sao?"** → (1) Token→*Token≠Word* → (2) Context window→*CW≠Prompt Length* → (3) cơ chế + chốt |
| 3 · Prompt có ngữ cảnh | 14–20 | chèn *Prompt = System + User* ngay sau 5 thành phần |
| 4 · Context, Memory & Context Engineering | 21–30 | Context → (ngữ cảnh từ đâu) → Context Eng → Memory·Session→*Memory≠Context* → Minipower → Long Context·Compression → 3 bước |
| 5 · Thực hành | 31 | |
| 6 · Chốt + teaser | 32–33 | |

---

## Danh sách khung

### Khung 01 — Cover
- **Hiển thị:** tiêu đề "AI Foundation — LLM · Prompt · Context Engineering" · kicker buổi 03. `title-slide`.

### Khung 02 — Nhìn lại cửa ngõ
- **Hiển thị:** 2 thẻ — Buổi 01 (12 nỗi đau) · Buổi 02 (17 chặng) → "còn một câu chưa trả lời…".

### Khung 03 — Câu hỏi xuyên suốt
- **Hiển thị:** "Tại sao AI lúc hay — lúc bịa rất thuyết phục?" + hint tương tác. `title-slide`.

### Khung 04 — Demo 1: chat trống
- **Hiển thị:** prompt trống "CRM ABC cần yêu cầu gì?" (không đính kèm).

### Khung 05 — AI bịa
- **Hiển thị:** danh sách đẹp + nhãn đỏ "ABC chưa từng họp — dựng lên 100%". *(Đây là hình minh hoạ trực quan cho Hallucination.)*

### Khung 06 — Gọi tên: Hallucination *(đặt tên hiện tượng)*
- **Hiển thị:** "Cái AI vừa làm có tên: **Hallucination**" — bịa tự tin, không nguồn; + câu hook "**vì sao AI lại bịa?**".

### Khung 07 — Hallucination ≠ Sai *(đừng nhầm)*
- **Hình SVG:** bong bóng "nghe hợp lý, không nguồn" ≠ "2+2=5" gạch đỏ; afternote "vấn đề là có căn cứ hay không".

### Khung 08 — Câu hỏi "Vì sao AI lại bịa?" *(cầu nối)*
- **Hiển thị:** câu hỏi lớn + "3 mảnh ghép: (1) AI đọc gì · (2) nhớ được bao nhiêu · (3) trả lời bằng cách nào". `title-slide`.

### Khung 09 — Token *(vì sao · 1 — AI đọc gì) · HỎI TRƯỚC–ĐÁP SAU*
- **Hỏi trước (hiện ngay):** câu hỏi *"AI 'đọc' câu của bạn **như thế nào**? — nhìn nguyên chữ hay chẻ nhỏ?"* + gợi ý "bấm tiếp để xem".
- **Đáp (ẩn, `.reveal`):** câu chẻ thành token chip + "AI chẻ thành **token**, **đoán token kế tiếp**, không tra cứu sự thật".
- **Cơ chế:** dùng controller reveal của deck — bấm tiếp lần 1 hiện đáp, lần 2 mới sang khung 10.

### Khung 10 — Token ≠ Word *(đừng nhầm)*
- **Hình SVG:** "khuyến mãi" (1 từ) ≠ khuy·ến·mãi (3 token); afternote chatbot→chat+bot.

### Khung 11 — Context & Context window *(vì sao · 2 — nhớ được bao nhiêu)*
- **Hiển thị:** 1 dòng "**Context** = mọi thứ model thấy · **Context window** = giới hạn kích thước" (đặt Context trước window) + window-demo trong/ngoài tầm; "thiếu → AI phải tự đoán".

### Khung 12 — Context Window ≠ Prompt Length *(đừng nhầm)*
- **Hình SVG:** "câu bạn gõ" (một mẩu) ≠ container chia phần (system·lịch sử·prompt·tài liệu·trả lời).

### Khung 13 — Ghép lại: vì sao AI bịa + chốt *(vì sao · 3 — cách nó trả lời)*
- **Hiển thị:** autocomplete `str =` đoán; ghép 3 mảnh → "thiếu ngữ cảnh → điền token xác suất cao"; callout chốt "**Hallucination là MẶC ĐỊNH · giảm bằng cho đủ ngữ cảnh**".

### Khung 14 — 5 thành phần prompt
- **Hiển thị:** công thức Vai trò·Bối cảnh·Nhiệm vụ·Ràng buộc·Định dạng.

### Khung 15 — Prompt = System + User *(khái niệm)*
- **Hình SVG:** hai lớp xếp chồng (User trên · System nền) → "= Prompt". "Cái vừa gõ = User Prompt, còn lớp ẩn System".

### Khung 16 — Prompt = function signature
- **Hình:** bảng đối chiếu prompt ↔ code (role=type · context=data · constraint=validate).

### Khung 17 — Demo 2: prompt có ngữ cảnh
- **Hiển thị:** prompt gắn biên bản kickoff, 4 yêu cầu (nhấn "không bịa").

### Khung 18 — Bảng so sánh có/không ngữ cảnh
- **Hình:** bảng 4 hàng, cột "Có ngữ cảnh" tô xanh.

### Khung 19 — Kỹ thuật phản biện
- **Hiển thị:** prompt "đóng vai QA khó tính, tìm 3 lỗi".

### Khung 20 — Chốt Nhịp 3
- **Hiển thị:** callout "Prompt tốt = đủ ngữ cảnh + ràng buộc không bịa + được phản biện".

### Khung 21 — Context *(nhắc lại & liệt kê đủ)*
- **Hình SVG:** cửa sổ chứa 4 chip (System·User·Lịch sử·Tài liệu). "Đã gọi tên ở Nhịp 2; giờ liệt kê đủ"; neo context=RAM.

### Khung 22 — Ngữ cảnh từ đâu ra?
- **Hiển thị:** 3 thẻ Email · Đầu PM · final_final_v3.docx.

### Khung 23 — Context Engineering
- **Hiển thị:** định nghĩa + 2 tag nỗi đau #6, #12.

### Khung 24 — Memory *(khái niệm)*
- **Hình SVG:** ổ cứng → nạp vào context. "Còn qua nhiều session, phải chủ động lưu = Minipower".

### Khung 25 — Session *(khái niệm)*
- **Hình SVG:** thanh mở/đóng; "đóng → context mất, memory còn".

### Khung 26 — Memory ≠ Context *(đừng nhầm)*
- **Hình SVG:** ổ cứng (qua nhiều session) ≠ RAM (chỉ lần này); afternote "AI quên hôm qua không phải lỗi".

### Khung 27 — Minipower là nguồn context
- **Hình:** MOM·Yêu cầu·Quyết định·Bug → lõi Project Memory.

### Khung 28 — Long Context *(nâng cao)*
- **Hình SVG:** cửa sổ khổng lồ nhiều trang; "càng dài càng tốn & dễ lạc".

### Khung 29 — Context Compression *(nâng cao)*
- **Hình SVG:** chồng trang lớn → nén → thẻ tóm tắt; "Minipower bó tri thức · giống gzip".

### Khung 30 — Sơ đồ 3 bước: lấy → dùng → chốt
- **Hình:** 3 thẻ nối mũi tên; bước 3 nhấn "con người chốt".

### Khung 31 — Thực hành (30′)
- **Hiển thị:** checklist 5 bước (tài liệu thật → prompt → Đúng/Bịa/Mơ hồ → phản biện → người chốt).

### Khung 32 — Chốt buổi
- **Hiển thị:** câu một dòng "AI dự đoán từ tiếp theo — cho đủ ngữ cảnh mới không bịa — người luôn là người chốt". `title-slide`.

### Khung 33 — Teaser buổi 04
- **Hiển thị:** "Buổi 04 — AI Coding Tools" + dặn chuẩn bị. `title-slide`.
