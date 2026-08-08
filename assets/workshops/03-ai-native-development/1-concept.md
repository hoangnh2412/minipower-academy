# Giai đoạn 1 — Ý tưởng & mục tiêu (Concept)

> Kim chỉ nam cho cả buổi. Chốt xong mới sang kịch bản. Bám `assets/curriculum.md`
> và triết lý: **AI chuẩn bị · Con người chốt**.

## Chủ đề

**AI-Native Software Development — Bản đồ đường đi.**
Buổi đầu tiên **thực hành trên dự án thật**. Nếu buổi 02 trả lời *"Minipower là ai"*, thì buổi 03
trả lời *"đi cùng Minipower thì đi theo con đường nào"* — bản đồ 6 giai đoạn · 19 tài liệu ·
4 thư mục · 7 cổng người-chốt, và tự tay khởi tạo dự án thật.

## Thông điệp chính (một câu)

**Cùng một AI — khác nhau ở tấm bản đồ.** Con người **mở cổng**, AI **chạy trong hành lang** giữa
hai cổng; mọi tri thức sống trong **4 thư mục, đi một chiều**, và không phải việc nào cũng cần
chạy đủ quy trình.

## Đối tượng

Buổi **bắt buộc với gần như cả team** — BA · PM · SA/Tech Lead · QA · Dev (tất cả đều có 03 trong
danh sách bắt buộc ở curriculum). Không cần tiền đề kỹ thuật sâu: mục tiêu là ai cũng cầm được
**cùng một bản đồ** và biết chỗ mình ngồi trên đó (mình duyệt cổng nào, mình chạy trong hành lang nào).

## Học viên rời phòng với

- **Dự án thật đã `init`** — đúng **4 nhánh thư mục** (`assets/` · `brainstorm/` · `memory/` · `docs/`),
  đã tự tay kiểm tra bằng mắt, đã đưa ≥1 tài liệu thật vào `assets/`.
- Bản đồ trong đầu: **6 giai đoạn → 19 tài liệu (tham chiếu bằng ID, không copy) → 7 cổng người-chốt**.
- Biết **giữa hai cổng AI được fan-out song song**, và **không được tự vượt cổng**.
- Biết **phân tầng chi phí micro / light / full** — việc nào không cần chạy đủ quy trình để khỏi đốt tiền.
- Biết dự án của mình **đang ở giai đoạn nào** và **cổng gần nhất cần chốt** là cổng nào.

## Mạch câu chuyện (3–5 nhịp)

1. **Nối tiếp buổi 02** — "Đồng nghiệp mới ngày đầu cần gì?" → quy trình, chỗ để tài liệu, biết ai quyết.
   AI cũng vậy. Buổi 02 tuyển AI vào team; hôm nay **đưa AI bản đồ**.
2. **Hai team, cùng một AI** — Team A chat tự do → hai tài liệu đẹp nhưng mâu thuẫn (mỗi lần chat là
   một cuộc đời mới, không nơi lưu, không ai chốt, không ID). Team B đặt mọi thứ vào **một pipeline** →
   Dev mở đúng một chỗ. *Khác biệt nằm ở bản đồ, không nằm ở AI.*
3. **Đọc bản đồ** — 6 giai đoạn (nghiệp vụ trước, giải pháp sau) → 19 tài liệu vốn đã viết, chỉ là
   nay **có số + tham chiếu bằng ID** (giải nỗi đau #4) → 4 thư mục, luồng đi một chiều (giải #12).
4. **Chỗ con người ngồi** — 7 cổng người-chốt (giải #3): người **bấm duyệt**, không ngồi viết từ đầu;
   giữa hai cổng AI **fan-out song song** nhưng không tự mở cổng → *"Người mở cổng, AI chạy trong hành lang."*
5. **Chi phí tương xứng + Hands-on** — micro/light/full để không đốt tiền → **40 phút mở laptop**: init
   dự án thật, kiểm tra 4 nhánh, đưa tri thức thật vào, hỏi AI "tôi đang ở đâu" → teaser buổi 04 (Cổng 0).

## Ràng buộc / điều không được phá

- **Không** dạy "AI tự chạy dự án". AI **chuẩn bị** (soạn tài liệu, phản biện, soạn quyết định nháp);
  con người **mở cổng** bằng một quyết định có tên.
- Fan-out song song **chỉ** chạy giữa hai cổng; không có cổng chốt phía trước thì không fan-out.
  AI **không tự mở cổng cho chính nó**.
- Giữ giọng **kể chuyện, gần gũi, tương tác** xuyên suốt; mỗi chương mở bằng một câu hỏi cho lớp trước khi reveal.
- **Học viên chạy, không xem demo** — để dành trọn 40 phút hands-on tại lớp, làm trên **dự án thật** của học viên
  (không có dự án thật → dùng CRM ABC).
- Nhắc **ngân sách token**: việc nhỏ đừng bật đủ gate. Không chắc micro hay light → chọn **light**.
- Nhãn/lệnh phải đúng thực tế Minipower: router `/minipower` + `Init project`; 4 nhánh thư mục và
  cấu trúc con (`assets/public|internal`, `memory/` 6 giai đoạn, `docs/` 7 thư mục con) phải khớp bước hands-on.
