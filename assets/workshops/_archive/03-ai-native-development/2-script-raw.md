# Workshop 3
# AI-Native Software Development — Bản đồ đường đi

---

## Thời lượng

120 phút (80 kể chuyện + 40 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Biết dự án đi qua **6 giai đoạn** nào, sinh ra **19 tài liệu** nào
- Biết **7 cổng người-chốt** nằm ở đâu — ai duyệt, duyệt cái gì
- Hiểu vì sao AI **được phép chạy song song** giữa hai cổng, và **không được** vượt cổng
- Tự tay khởi tạo dự án thật với đúng 4 nhánh thư mục
- Biết việc nào **không cần** chạy đủ quy trình (để không đốt tiền vô ích)

---

## Nỗi đau xử lý hôm nay

#3 Không rõ ai làm gì · #4 Quá nhiều tài liệu · #12 Tìm tri thức cực khó

---

# Mở đầu

## Nhìn lại Workshop 2

Buổi trước chúng ta nói:

AI không phải công cụ hỏi đáp.

AI là đồng nghiệp tham gia cả vòng đời dự án.

---

## Câu hỏi cho cả lớp

Một đồng nghiệp mới vào dự án ngày đầu tiên.

Anh chị đưa cho họ cái gì?

---

Cho lớp trả lời.

Các câu trả lời thường gặp:

- Tài liệu dự án
- Quy trình làm việc
- Danh sách ai phụ trách gì

---

## Reveal

Chính xác.

Đồng nghiệp mới cần **quy trình**, cần **chỗ để tài liệu**, cần biết **ai quyết**.

AI cũng vậy.

Buổi trước chúng ta tuyển AI vào team.

Hôm nay chúng ta đưa AI bản đồ.

---

# Chương 1
# Hai team, cùng một AI

---

Hai team cùng nhận một dự án CRM.

Cùng cài Minipower.

---

## Team A

Mở AI ra.

Chat tự do.

"Viết giúp anh cái SRS."

AI viết.

Đẹp.

---

Tuần sau.

"Viết giúp anh cái kiến trúc."

AI viết.

Cũng đẹp.

---

Tuần thứ ba.

Dev đọc SRS.

Dev đọc kiến trúc.

Dev hỏi:

"Hai cái này nói khác nhau, em theo cái nào?"

---

## Câu hỏi cho lớp

Vì sao AI viết đẹp cả hai lần mà vẫn mâu thuẫn?

---

Cho lớp trả lời.

---

## Reveal

Vì mỗi lần chat là một cuộc đời mới.

AI không biết lần trước nó đã chốt gì.

Không có nơi lưu.

Không có ai chốt.

Không có ID để tham chiếu.

---

## Team B

Cũng dùng AI.

Nhưng mọi thứ được đặt vào **một pipeline**.

Mỗi tài liệu có số.

Mỗi quyết định có tên.

Mỗi chặng có người chốt.

---

Tuần thứ ba.

Dev đọc SRS.

Dev thấy dòng: `ORD-FR-014` trace về `ORD-UC-003`.

Dev mở đúng một chỗ.

Hết thắc mắc.

---

## Thông điệp

Cùng một AI.

Khác nhau ở **bản đồ**.

---

# Chương 2
# 6 giai đoạn

---

Minipower mô hình hoá vòng đời dự án theo một trật tự bất di bất dịch:

```
Business Goal → Stakeholder → Process → Requirement → Solution → Planning → Delivery
```

---

Nghiệp vụ trước.

Giải pháp sau.

---

| Giai đoạn | Vai chính | Đầu ra |
|-----------|-----------|--------|
| Discovery | BA, PM | Phạm vi, stakeholder, BRD, danh sách module |
| Requirements | BA (theo module) | UC, Business Rule, Prototype, FR, AC, NFR |
| Architecture | SA | SAD, ADR, tích hợp, data model, API |
| Planning | PM | WBS, ước lượng, kế hoạch, roadmap |
| Delivery | QA, DevOps | Test strategy, triển khai, go-live |
| Change control | BA, SA, PM | CR, delta, re-baseline |

---

## Hỏi lớp

Dự án của anh chị hiện tại đang ở giai đoạn nào?

Cho vài người trả lời.

Ghi lên bảng — cuối buổi sẽ dùng lại.

---

# Chương 3
# 19 tài liệu — nhưng đừng sợ

---

Nghe "19 tài liệu" là mọi người mệt.

Nhưng nhìn kỹ:

---

Không phải 19 tài liệu mới.

Đây là **19 tài liệu anh chị vẫn đang viết** — chỉ là đang viết rải rác, trùng nhau, không đánh số.

---

| Nhóm | DOC | Anh chị vẫn gọi là |
|------|-----|--------------------|
| 01–03 | Vision · Stakeholder · BRD | "Tài liệu đề xuất", "Scope" |
| 04–07, 19 | Business Rule · UC · Prototype · SRS · AC | "FRD", "Wireframe", "Test điều kiện" |
| 08–12 | SAD · ADR · Integration · Data Model · API | "Tài liệu kiến trúc", "Swagger" |
| 13–15 | NFR · WBS · Project Plan | "Yêu cầu phi chức năng", "Kế hoạch" |
| 16–17 | Test Strategy · Deployment | "Kế hoạch test", "Hướng dẫn triển khai" |
| 18 | Change Request Register | "Danh sách phát sinh" |

---

## Khác biệt duy nhất

Trước đây: một sự thật nằm ở **nhiều tài liệu** → copy → outdate. *(nỗi đau #4)*

Bây giờ: một sự thật nằm ở **một tài liệu**, chỗ khác **tham chiếu bằng ID**.

---

Ví dụ.

Requirement "Khách VIP giảm 10%" chỉ nằm ở một chỗ: `ORD-FR-014`.

Test case không chép lại nội dung — test case ghi: *trace `ORD-AC-021` ← `ORD-FR-014`*.

Sửa một chỗ.

Cả dây biết.

---

# Chương 4
# 4 thư mục — nơi tri thức sống

---

Khi khởi tạo dự án, Minipower tạo ra 4 nhánh.

Chỉ 4 thôi.

---

```
{dự án}/
├── assets/       ← bản gốc khách gửi, biên bản họp — KHÔNG sửa
├── brainstorm/   ← nháp, trao đổi, phân tích — file theo ngày
├── memory/       ← trí nhớ dự án, chia theo 6 giai đoạn
└── docs/         ← tài liệu chính thức, 19 DOC có số
```

---

## Luồng đi một chiều

```
assets/ → brainstorm/ → docs/ → docs/02-baseline/
                                     ↓ sau khi ký
                              docs/06-changes/CR-xxx/
```

---

## Hỏi lớp

Hiện tại tài liệu dự án của anh chị nằm ở đâu?

Câu trả lời thường gặp: Zalo, Teams, Drive, máy cá nhân, trong đầu anh A.

*(Đây chính là nỗi đau #12 của buổi 01.)*

---

## Quy tắc chỉ có một câu

Bản gốc thì không sửa.

Nháp thì không mang đi ký.

Ký rồi thì không sửa tay.

---

# Chương 5
# 7 cổng — chỗ con người ngồi

---

Đây là phần quan trọng nhất buổi hôm nay.

---

## Câu hỏi

Nếu AI làm được hết.

Thì con người làm gì?

---

Cho lớp trả lời.

Nhiều người sẽ nói: "kiểm tra lại".

---

## Reveal

Gần đúng.

Con người **mở cổng**.

---

| # | Cổng | Người chốt cái gì | Mở khoá cho AI làm gì |
|---|------|-------------------|------------------------|
| 1 | Chốt BRD | DOC-03 | Sinh Business Rule cho **tất cả** module |
| 2 | Chốt Business Rules | DOC-04 | Sinh Prototype cho tất cả module |
| 3 | Chốt Prototype | DOC-19 | Viết SRS cho tất cả module |
| 4 | Chốt SRS | DOC-06 | Thiết kế kiến trúc, data model, API |
| 5 | Chốt Architecture | DOC-08 | Bóc Epic / Story / Task |
| 6 | Chốt Project Plan | DOC-15 | Viết test case + code |
| 7 | Chốt Test case | DOC-16 | Code + unit test |

---

## Cơ chế tại mỗi cổng

AI làm xong việc giữa hai cổng.

AI **soạn sẵn quyết định nháp** — đã làm gì, còn điểm nào cần người quyết, rủi ro gì.

Người đọc.

Duyệt / sửa / trả lại.

---

Duyệt → quyết định được ghi "đã chốt" → cổng mở → AI chạy tiếp.

Chưa duyệt → AI **không** được đi tiếp. Chỉ được hoàn thiện tài liệu hiện tại.

---

## Điểm mấu chốt

Người không phải ngồi viết từ đầu.

Người ngồi **bấm duyệt**.

AI viết nháp — kể cả nháp của quyết định.

---

## Hỏi lớp

Ở công ty mình, ai là người duyệt FRD?

Ai duyệt UAT?

Ai duyệt Change Request?

*(Đây là nỗi đau #3 của buổi 01 — hôm nay nó có chỗ ngồi rõ ràng.)*

---

# Chương 6
# Giữa hai cổng — AI được chạy song song

---

Sau khi người chốt BRD.

Dự án có 8 module.

---

## Cách cũ

BA làm module 1.

Xong → module 2.

Xong → module 3.

8 module × 3 ngày = 24 ngày.

---

## Cách mới

Cổng đã mở.

AI fan-out **8 luồng song song**, mỗi module một luồng, mỗi luồng một chủ.

Luồng module Đơn hàng **không được** ghi vào thư mục module Khuyến mãi.

---

## Nhưng

Fan-out chỉ chạy **giữa hai cổng**.

Không có cổng chốt phía trước → không fan-out.

Chạy xong → dừng lại, soạn nháp, chờ người duyệt cổng sau.

---

## Câu để lớp nhớ

**Người mở cổng. AI chạy trong hành lang.**

AI không tự mở cổng cho chính nó.

---

# Chương 7
# Chi phí tương xứng

---

Buổi 01 có một câu đùa:

"Cài thiếu là bay $20 một ngày."

Hôm nay nói nghiêm túc về chuyện tiền.

---

## Không phải việc nào cũng chạy đủ quy trình

| Tầng | Ví dụ | Chạy gì |
|------|-------|---------|
| **Micro** | Sửa typo, đổi format, đổi version | Sửa luôn, không cổng |
| **Light** | Sửa 1 requirement trong tài liệu đã có | Khai giai đoạn, khuyến nghị review |
| **Full** | Module mới, tài liệu mới, đổi kiến trúc, đụng bản đã ký | Bật đủ cổng |

---

## Phép thử một câu

Việc này có **đổi nội dung / đổi quyết định**, hay **ảnh hưởng tài liệu khác** không?

Không → micro.

Đổi nội dung trong tài liệu đã có → light.

Cấu trúc mới, quyết định mới, hoặc đụng bản đã ký → full.

---

## Ba ngoại lệ không được phá

- Xác định phạm vi dự án mới → **luôn full**
- Change Request sau khi đã ký → **luôn full**
- Đụng vào bản baseline đã ký → **luôn full**

Không chắc micro hay light → chọn **light**.

---

# Hands-on
# 40 phút — mở laptop

---

## Bước 1 — Khởi tạo dự án thật

```
/minipower
Init project — tạo dự án "<tên dự án của anh chị>"
```

Chờ AI tạo xong 4 nhánh thư mục.

---

## Bước 2 — Kiểm tra thủ công

Mở thư mục, tự mắt nhìn, đủ 4 nhánh chưa:

- `assets/public/` và `assets/internal/`
- `brainstorm/` (không có thư mục con)
- `memory/memory.md` + 6 thư mục giai đoạn
- `docs/` với 7 thư mục con

Thiếu → bảo AI bổ sung. **Đừng tin 100%.**

---

## Bước 3 — Đưa tri thức thật vào

Copy một tài liệu thật của dự án đang làm vào:

- Khách gửi / đã share với khách → `assets/public/`
- Họp nội bộ, không gửi khách → `assets/internal/`

---

## Bước 4 — Hỏi AI mình đang ở đâu

```
/minipower
Đọc @assets/public/<file của anh chị> — dự án của tôi đang ở giai đoạn nào
trong 6 phase? Cổng gần nhất tôi cần chốt là cổng nào? Trả lời ngắn.
```

---

## Bước 5 — Thử phân tầng

```
/minipower
Tôi cần sửa lại một dòng mô tả trong tài liệu đã có. Việc này là micro,
light hay full? Vì sao?
```

Xem AI phân tầng có khớp phép thử một câu ở Chương 7 không.

---

# Tổng kết

---

Buổi 01: chúng ta thấy nỗi đau.

Buổi 02: chúng ta tuyển AI vào team.

Buổi 03: chúng ta đưa AI bản đồ.

---

Bản đồ gồm:

- 6 giai đoạn
- 19 tài liệu có số, tham chiếu bằng ID
- 4 thư mục, luồng đi một chiều
- 7 cổng — chỗ con người ngồi
- Hành lang giữa hai cổng — chỗ AI chạy song song
- Ba tầng chi phí — để không đốt tiền vô ích

---

## Câu hỏi kết thúc

Bản đồ đã có.

Nhưng bắt đầu từ đâu?

---

Từ câu hỏi ít người dám hỏi khách hàng:

**"Việc này có đáng làm không?"**

👉 Đó là Workshop 4: **Discovery & Cổng 0**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Khởi tạo dự án thật bằng `Init project` | Ảnh chụp cây thư mục đủ 4 nhánh |
| 2 | Đưa ≥1 tài liệu thật vào `assets/` | Ảnh chụp thư mục `assets/` |
| 3 | Hỏi AI dự án đang ở giai đoạn nào | Ảnh chụp câu trả lời |
| 4 | Trả lời: dự án của anh chị đang thiếu cổng nào nhất? Vì sao? | 3–5 dòng |
| 5 | Trả lời: tài liệu nào ở công ty mình đang bị copy nhiều nhất? | 3–5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, biểu cảm nhân vật chân thực, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Slide mở đầu — Một tấm bản đồ hàng hải khổng lồ trải trên bàn dự án, đội PM, BA, SA, QA, Dev đứng quanh, một AI hologram đứng cạnh chỉ vào lộ trình phát sáng, phía xa là đích đến GoLive, không khí khám phá và tự tin, tỷ lệ 16:9
```

```text
Hai team — Chia đôi khung hình: bên trái team làm việc với AI trong hỗn loạn, các tài liệu bay lơ lửng không kết nối và mâu thuẫn nhau phát sáng đỏ; bên phải team làm việc với AI theo một đường ray phát sáng, tài liệu xếp thành chuỗi liên kết màu xanh, tỷ lệ 16:9
```

```text
6 giai đoạn — Một dòng sông ánh sáng chảy qua sáu trạm dừng mang tên Discovery, Requirements, Architecture, Planning, Delivery, Change Control, mỗi trạm có nhân vật phụ trách đứng đợi, phong cách infographic điện ảnh, tỷ lệ 16:9
```

```text
19 tài liệu — Một thư viện hiện đại nơi từng tài liệu có mã số phát sáng và được nối với nhau bằng những sợi chỉ ánh sáng thay vì bị sao chép trùng lặp, BA đứng giữa mỉm cười nhẹ nhõm, tỷ lệ 16:9
```

```text
4 thư mục — Bốn căn phòng kính trong suốt xếp cạnh nhau mang tên assets, brainstorm, memory, docs, tri thức chảy một chiều từ phòng này sang phòng kế tiếp như dòng nước, không có đường quay ngược, tỷ lệ 16:9
```

```text
7 cổng — Một hành lang dài với bảy cánh cổng ánh sáng, tại mỗi cổng có một người thật đứng cầm con dấu duyệt, giữa hai cổng là nhiều luồng AI chạy song song rực sáng, AI dừng lại chờ trước cổng chưa mở, tỷ lệ 16:9
```

```text
Fan-out — Sau khi cánh cổng mở, tám luồng ánh sáng toả ra tám module khác nhau cùng lúc, mỗi luồng có một huy hiệu chủ sở hữu riêng, không luồng nào lấn sang vùng của luồng khác, tỷ lệ 16:9
```

```text
Chi phí tương xứng — Ba cỗ máy kích thước khác nhau đặt cạnh nhau mang nhãn Micro, Light, Full, một con ruồi nhỏ đậu trước cỗ máy khổng lồ Full trong khi cỗ máy Micro tí hon vừa vặn ngay bên cạnh, hình ảnh hài hước về việc dùng dao mổ trâu giết gà, tỷ lệ 16:9
```
