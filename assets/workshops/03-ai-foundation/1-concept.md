# Giai đoạn 1 — Ý tưởng & mục tiêu (Concept)

> Kim chỉ nam cho cả buổi. Chốt xong mới sang kịch bản. Bám `assets/curriculum.md` (v2 · Vibe Coding)
> và triết lý: **AI chuẩn bị · Con người chốt**.

## Chủ đề

**AI Foundation — LLM, Prompt & Context Engineering.** Buổi nền tảng đầu tiên của khoá Vibe Coding:
trang bị hiểu biết tối thiểu về bản chất LLM (để biết *khi nào tin, khi nào không*) và kỹ năng
viết prompt có ngữ cảnh — chính là bước "biết bắt đầu dùng AI" của học viên.

## Thông điệp chính (một câu)

AI trả lời hay hay dở phụ thuộc **ngữ cảnh (context) ta đưa vào**, không phải phép màu — cho đủ
tri thức dự án thì AI là trợ lý đáng tin, thiếu context thì AI **bịa ra những thứ nghe rất hợp lý**.

## Đối tượng

**Dev** chưa biết bắt đầu dùng AI (khoá v2 · mức Vibe Coding). Đã qua buổi 01–02 (cửa ngõ 12 nỗi đau
+ vòng đời 17 chặng). Không yêu cầu kiến thức AI trước đó — nhưng vì là dev, các ví dụ đi kèm
dùng từ ngữ kỹ thuật (log, API, code, repo).

## Học viên rời phòng với

- Hiểu 3 khái niệm nền: **token · context window · hallucination** — nói được khi nào AI đang bịa.
- Biết cấu trúc một prompt "có ngữ cảnh": `Vai trò + Bối cảnh + Nhiệm vụ + Ràng buộc + Định dạng`,
  và kỹ thuật **phản biện lại chính AI** để bắt lỗi.
- Thấy thực tế: **prompt không ngữ cảnh ≠ prompt có ngữ cảnh** (demo trước/sau trên cùng 1 yêu cầu).
- Một **biên bản họp thật** đã được "ép" thành danh sách yêu cầu có người chốt, ghi vào Minipower.

## Mạch câu chuyện (5 nhịp)

1. **Nhìn lại cửa ngõ** — 12 nỗi đau là vấn đề *tri thức dự án*; câu hỏi gợi mở:
   *"tại sao có lúc AI trả lời cực hay, có lúc bịa chuyện rất thuyết phục?"*
2. **Hallucination trực diện** — demo: bắt AI trả lời *không có ngữ cảnh* về case CRM công ty ABC →
   nó bịa requirement nghe rất đúng → mổ xẻ vì sao (token · context · xác suất từ kế tiếp).
3. **Prompt có ngữ cảnh** — 5 thành phần của prompt; làm lại demo 2 nhưng có gắn biên bản họp →
   AI trả lời đúng, còn tự chỉ ra điểm thiếu (phản biện).
4. **Context Engineering & Minipower** — ngữ cảnh ở đâu ra hằng ngày? → Minipower là nguồn context
   đáng tin của dự án; dev chưa chạy AI hay chạy rồi cũng cần "bộ nhớ dự án" trước khi hỏi.
5. **Thực hành** — biên bản họp thật của từng học viên → viết prompt → AI phản biện → đối chiếu
   nguồn → **chốt yêu cầu đúng/đủ** → ghi vào Minipower → teaser buổi 4 (Coding Tools).

## Ràng buộc / điều không được phá

- **Không** dạy "prompt là phép màu" — không có kỹ thuật nào thay được việc **cho đủ ngữ cảnh**.
- **Không** để học viên tin lời AI mà không đối chiếu nguồn (biên bản / yêu cầu gốc).
- Con người **chốt** yêu cầu cuối cùng; AI chỉ chuẩn bị bản nháp + phản biện.
- Giữ giọng **kể chuyện, gần gũi, tương tác**; dùng case chung CRM ABC (đã đặt ở buổi 01) làm sợi dây.
- Ví dụ kỹ thuật phải hiểu được bởi dev nhưng **không lạc sang lý thuyết ML** (không dạy transformer, attention).
