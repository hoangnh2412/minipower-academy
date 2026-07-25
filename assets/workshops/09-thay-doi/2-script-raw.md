# Workshop 9
# Thay đổi & tri thức sống — "Tiện thể làm thêm giúp anh"

---

## Thời lượng

120 phút (60 kể chuyện + 60 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Biết vì sao sau baseline **mọi thay đổi phải đi qua Change Request**
- Chạy được một CR trọn vòng: impact → delta → merge → regression → re-baseline
- Dùng AI phân tích **tác động** của một thay đổi trước khi đồng ý
- Hiểu vì sao `memory/` là công cụ onboarding người mới
- Thấy tri thức dự án **sống** — không chết dần, không nằm trong đầu một người

---

## Nỗi đau xử lý hôm nay

#10 Scope creep · #8 Onboard chậm · #9 Human Database · #5 Tài liệu chết dần

---

# Mở đầu

## Câu nói nguy hiểm nhất nghề này

---

Khách hàng cười, nói nhẹ nhàng:

"Tiện thể làm thêm cho anh cái này nhé."

---

## Hỏi lớp

Anh chị thường trả lời thế nào?

---

Cho lớp trả lời.

Câu trả lời thường gặp: "Dạ để em xem", rồi làm luôn.

---

## Hệ quả (buổi 01, nỗi đau #10)

Không CR.

Không approval.

Không estimate.

3 tháng sau dự án trễ, không ai biết vì sao.

---

## Vấn đề không phải ở việc thêm

Khách có quyền đổi ý.

Vấn đề là **thêm mà không nhìn thấy cái giá**.

---

# Chương 1
# Baseline đổi luật chơi

---

Trước baseline: sửa thoải mái.

Sau baseline: **mọi thay đổi qua Change Request**.

---

## Vì sao

Vì baseline là cái đã ký.

Nhiều người đang dựa vào nó: dev đang code theo, test đang viết theo, khách đã duyệt.

---

Sửa lén một chỗ → cả dây bị lệch mà không ai biết.

Đây chính là nỗi đau #5: tài liệu chết dần.

---

## Quy tắc cứng

Không sửa `docs/02-baseline/` trực tiếp.

Bao giờ cũng: CR → phân tích → thay đổi có kiểm soát → ký lại phiên bản mới.

---

# Chương 2
# Vòng đời một Change Request

---

```
CR → impact → delta → merge vào docs → regression → approve → phiên bản mới
```

---

| Bước | Làm gì |
|------|--------|
| CR | Ghi nhận yêu cầu thay đổi: ai xin, xin gì, vì sao |
| Impact | Phân tích tác động: đụng module nào, FR nào, test nào, chi phí bao nhiêu |
| Delta | Soạn phần thay đổi, để riêng, chưa trộn vào bản chính |
| Merge | Sau khi duyệt, trộn delta vào tài liệu |
| Regression | Soi lại tài liệu: thay đổi có làm đứt trace chỗ khác không |
| Re-baseline | Ký phiên bản mới |

---

## Điểm mấu chốt

Bước **Impact** đứng trước bước đồng ý.

Nhìn thấy cái giá **rồi mới** quyết có làm không.

---

# Chương 3
# AI phân tích tác động

---

## Đây là chỗ AI mạnh nhất

Khách xin thêm một tính năng.

---

Người thường mất nửa ngày dò xem nó đụng những đâu.

---

AI làm trong vài phút, vì mọi thứ đã trace nhau từ buổi 05:

- Đụng module nào
- FR nào phải sửa
- Test case nào phải viết lại
- Ước lượng đội lên bao nhiêu
- Timeline dịch thế nào

---

## Kết quả

PM cầm bảng tác động đó đi nói chuyện với khách.

"Được, nhưng thêm cái này là thêm 2 tuần và chi phí X."

---

Khách quyết định trên **dữ liệu**, không phải cảm giác.

Có khi khách nghe xong tự rút lại.

---

## Câu để lớp nhớ

Scope creep không chết vì mình từ chối khách.

Scope creep chết vì mình **cho khách thấy cái giá**.

---

# Chương 4
# CR lớn thì quay lại Cổng 0

---

Một CR nhỏ: sửa nhãn nút bấm. Chạy nhanh.

---

Một CR lớn: thêm cả phân hệ mới.

---

CR lớn thì làm gì?

---

Quay lại **nghị luận đa góc nhìn** (buổi 04).

Vì thêm một phân hệ là gần như một dự án con — đáng để hỏi lại "có đáng làm không".

---

## Nhắc lại phân tầng (buổi 03)

Change Request **luôn chạy Full**.

Không có CR nào được xử lý kiểu "micro cho nhanh".

Vì nó đụng vào cái đã ký.

---

# Chương 5
# Tri thức sống — người mới và Human Database

---

## Câu chuyện người mới (nỗi đau #8)

BA cũ nghỉ.

BA mới vào.

500 trang tài liệu.

---

## Cách cũ

Đọc hết 500 trang. 2 tuần đến 2 tháng.

---

## Cách mới

Người mới **hỏi AI**.

---

"Dự án này dùng quy trình duyệt đơn thế nào?"

AI trả lời + trỏ tới đúng requirement.

---

"Ai quyết định bước duyệt này? Vì sao?"

AI trả lời: khách A, cuộc họp ngày X, quyết định DEC-015, ADR-007.

---

Onboarding không còn phụ thuộc vào người cũ.

---

## Human Database (nỗi đau #9)

Ngày xưa người mạnh nhất dự án là người **nhớ nhiều nhất**.

Người đó nghỉ → dự án mất trí nhớ.

---

Bây giờ tri thức nằm trong repo:

- `memory/{giai đoạn}/` — trí nhớ theo chủ đề
- `decision-log.md` — vì sao quyết định thế
- `trace-matrix.md` — cái gì nối cái gì

---

Người mạnh nhất không còn là người nhớ nhiều nhất.

Mà là người **khai thác tri thức nhanh nhất**.

---

## Vì sao đây là "tri thức sống"

Vì nó được cập nhật qua mỗi CR.

Không chụp một lần rồi để mốc.

Mỗi thay đổi đi qua vòng CR đều để lại dấu vết trong memory và decision-log.

---

# Hands-on
# 60 phút

---

## Bước 1 — Tạo một CR

Giả lập khách xin thêm một tính năng:

```
/minipower
Phase: change-control — khách xin thêm: "khách VIP được tích điểm đổi quà".
Dự án đã baseline. Tạo CR trong DOC-18, ghi ai xin, xin gì, vì sao.
```

---

## Bước 2 — Phân tích tác động

```
/minipower
Phase: change-control — phân tích impact của CR này: đụng module nào,
FR nào phải sửa, test case nào phải viết lại, ước lượng đội thêm bao nhiêu.
Dựa trên trace matrix.
```

Đây là bảng anh chị mang đi nói chuyện với khách.

---

## Bước 3 — Quyết định trên dữ liệu

Đọc bảng impact.

Tự hỏi: với cái giá này, có nên làm không? Làm ngay hay đưa vào phiên bản sau?

---

## Bước 4 — Delta và regression

```
/minipower
Phase: change-control — soạn delta cho CR đã duyệt, để riêng chưa trộn baseline.
Sau khi tôi duyệt, chạy regression tài liệu: thay đổi này có làm đứt trace chỗ nào khác không.
```

---

## Bước 5 — Test onboarding

Đóng vai người mới. Hỏi những câu người mới hay hỏi:

```
/minipower
Tôi mới vào dự án. Trả lời ngắn gọn: dự án đang làm gì, đang ở giai đoạn nào,
quyết định lớn gần nhất là gì và vì sao, tôi nên đọc file nào trước.
```

---

## Bước 6 — Hỏi "vì sao"

```
/minipower
Vì sao dự án chọn <một quyết định kiến trúc bất kỳ>? Trỏ tôi tới ADR và
cuộc họp / quyết định gốc.
```

Xem AI có truy được nguồn không. Truy được = tri thức đang sống.

---

# Tổng kết

---

Ba điều mang về:

- Sau baseline, thay đổi đi qua **CR** — nhìn thấy cái giá trước khi đồng ý
- **Impact analysis** giết scope creep, không phải bằng từ chối mà bằng minh bạch
- Tri thức sống trong `memory/` + `decision-log` — người mới hỏi được, người cũ nghỉ không mất

---

## Câu hỏi kết thúc

Chúng ta đã đi hết một vòng đời:

Discovery → Requirements → Architecture → Planning → Delivery → Change.

---

Giờ đến lúc chạy thật, đầu đến cuối, trên dự án của chính anh chị.

👉 Workshop 10: **Demo Day — Capstone**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Tạo 1 CR trong DOC-18 | Ảnh chụp CR |
| 2 | Chạy impact analysis đầy đủ | Bảng tác động (module/FR/test/estimate) |
| 3 | Soạn delta + chạy regression tài liệu | Ảnh chụp kết quả regression |
| 4 | Đóng vai người mới, hỏi AI 3 câu onboarding | Ảnh chụp câu trả lời có trỏ nguồn |
| 5 | Truy 1 quyết định về tận ADR / cuộc họp gốc | Ảnh chụp chuỗi trỏ nguồn |
| 6 | Trả lời: ai đang là "Human Database" của dự án anh chị? Nghỉ thì mất gì? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Khách hàng mỉm cười thân thiện nói "tiện thể làm thêm giúp anh", một yêu cầu nhỏ vô hại xuất hiện nhưng phía sau nó cái bóng của một con quái vật Scope Creep nhiều đầu đang lớn dần, tỷ lệ 16:9
```

```text
Baseline đã ký — Một khối tài liệu pha lê đã đóng băng và ký tên, nhiều người đang đứng dựa vào nó làm việc, một bàn tay lén định sửa một góc khiến cả khối rạn nứt lan toả, cảnh báo, tỷ lệ 16:9
```

```text
Vòng đời CR — Một vòng tròn quy trình phát sáng gồm sáu chặng CR, Impact, Delta, Merge, Regression, Re-baseline, một yêu cầu thay đổi chạy qua từng chặng và được kiểm soát, tỷ lệ 16:9
```

```text
Cho khách thấy cái giá — PM trình cho khách hàng một bảng phân tích tác động phát sáng với con số thời gian và chi phí rõ ràng, khách hàng gật gù cân nhắc, con quái vật Scope Creep phía sau co lại vì bị soi sáng, tỷ lệ 16:9
```

```text
Người mới hỏi AI — Một nhân sự mới thay vì ôm chồng tài liệu 500 trang thì trò chuyện với AI, AI trả lời tức thì và chiếu ra các đường trỏ tới cuộc họp, quyết định và requirement gốc, tỷ lệ 16:9
```

```text
Hết Human Database — Một nhân sự chủ chốt rời công ty nhưng lần này toàn bộ tri thức vẫn phát sáng an toàn trong hệ thống trung tâm, đội còn lại vẫn làm việc bình thường, đối lập với cảnh mất trí nhớ ở workshop trước, tỷ lệ 16:9
```

```text
Tri thức sống — Một bộ não số của dự án đang đập theo nhịp, được nuôi dưỡng liên tục bởi các cuộc họp, quyết định và thay đổi mới chảy vào qua những dòng ánh sáng, không hề khô cạn theo thời gian, tỷ lệ 16:9
```
