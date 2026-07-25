# Workshop 5
# Requirements & Fan-out — Một người chạy 8 module

---

## Thời lượng

120 phút (70 kể chuyện + 50 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Hiểu vì sao thứ tự **Business Rule → Prototype → SRS → Acceptance Criteria** không được đảo
- Biết quy ước ID và vì sao ID quan trọng hơn nội dung
- Chạy được **fan-out**: một lệnh, nhiều module sinh song song
- Biết ranh giới: **1 module = 1 chủ**, không ai ghi đè lên vùng của ai
- Đọc được `trace-matrix.md` và chỉ ra chỗ trace bị đứt

---

## Nỗi đau xử lý hôm nay

#4 Quá nhiều tài liệu · #7 Test case không trace requirement

---

# Mở đầu

## Bài toán

Cổng 1 đã chốt ở buổi trước.

DOC-03 liệt kê 8 module.

---

Mỗi module cần:

- Business Rule
- Prototype
- SRS
- Acceptance Criteria

---

8 module × 4 tài liệu = 32 tài liệu.

---

## Hỏi lớp

Một BA làm hết 32 tài liệu này mất bao lâu?

Cho lớp đoán.

Câu trả lời thường gặp: 1 tháng, 2 tháng, 3 tháng.

---

## Hỏi tiếp

Nếu chia cho 4 BA làm song song thì sao?

---

Câu trả lời thật:

Nhanh hơn.

Nhưng đến tuần thứ hai bắt đầu xung đột.

---

BA số 1 định nghĩa "khách VIP" một kiểu.

BA số 3 định nghĩa một kiểu khác.

Hai người cùng sửa một file chung.

Mã số requirement trùng nhau.

---

## Đây là bài toán thật của buổi hôm nay

Không phải "làm nhanh hơn".

Mà là **làm song song mà không giẫm chân**.

---

# Chương 1
# Vì sao có thứ tự

---

Chuỗi bắt buộc:

```
Business Rule → Prototype → SRS → Acceptance Criteria
```

---

## Hỏi lớp

Vì sao không viết SRS trước cho nhanh?

---

Cho lớp trả lời rồi giải thích.

---

## Business Rule đi trước

Business Rule là **luật nghiệp vụ của khách**, tồn tại kể cả khi không có phần mềm.

"Đơn trên 10 triệu phải trưởng phòng duyệt."

Luật này có từ trước khi dự án bắt đầu.

---

Viết SRS trước Business Rule = mô tả cách hệ thống làm, trước khi biết luật là gì.

Kết quả: SRS đúng kỹ thuật, sai nghiệp vụ.

---

## Prototype đi giữa

Khách hàng không đọc được SRS.

Khách hàng nhìn được màn hình.

---

Chốt màn hình trước → khách gật đầu bằng mắt.

Rồi mới mô tả bằng chữ.

---

Đảo lại → viết SRS xong, khách nhìn màn hình, khách nói "không phải cái này" → viết lại từ đầu.

---

## Acceptance Criteria đi cuối

Vì nó là **điều kiện nghiệm thu**.

Viết được AC nghĩa là requirement đã đủ rõ để test.

Không viết được AC → requirement còn mơ hồ.

---

## Câu để lớp nhớ

Không viết được điều kiện nghiệm thu.

Nghĩa là chưa hiểu yêu cầu.

---

# Chương 2
# ID quan trọng hơn nội dung

---

## Câu chuyện buổi 01

QA mở 500 test case.

Requirement: "Khách VIP giảm 10%".

QA không biết test case nào kiểm cái này. *(nỗi đau #7)*

---

## Vì sao?

Vì test case chép **nội dung** của requirement.

Chép xong thì hai bên rời nhau ra.

Requirement sửa, test case không biết.

---

## Cách của Minipower

Mọi thứ có mã số cố định:

```
ORD-UC-003     Use case module Đơn hàng số 3
ORD-BR-007     Business rule số 7
ORD-FR-014     Functional requirement số 14
ORD-AC-021     Acceptance criteria số 21
DEC-REQ-002    Quyết định số 2 của giai đoạn requirements
ADR-005        Quyết định kiến trúc số 5
```

---

## Quy tắc vàng

Chỗ khác **không chép nội dung**.

Chỗ khác **trỏ vào ID**.

---

Test case ghi: kiểm `ORD-AC-021`.

`ORD-AC-021` trace về `ORD-FR-014`.

`ORD-FR-014` trace về `ORD-UC-003` và `ORD-BR-007`.

---

## Kết quả

Khách hỏi: "Chức năng này ai yêu cầu, test chưa?"

Mở `trace-matrix.md`.

30 giây.

*(Buổi 01: mất 15 phút đến 1 tiếng.)*

---

## Hỏi lớp

Ở dự án của anh chị, requirement có mã số không?

Mã số đó có được test case tham chiếu không?

---

# Chương 3
# Fan-out — điều gì xảy ra sau khi cổng mở

---

Cổng 1 đã chốt.

AI được phép làm gì?

---

## Không phải làm tuần tự

Không phải: module 1 → module 2 → module 3.

---

## Mà là fan-out

Một lệnh.

8 luồng chạy cùng lúc.

Mỗi luồng lo đúng một module.

---

```
       🔒 Cổng "Chốt BRD" đã có người duyệt
                    ↓
     ┌──────┬──────┬──────┬──────┐
   Module  Module Module Module ...
     A       B      C      D
     └──────┴──────┴──────┴──────┘
                    ↓
      Tổng hợp về trace-matrix + doc-registry
                    ↓
       Soạn quyết định nháp → trình cổng kế
```

---

## Bốn ranh giới không được phá

**Một.** Chưa có cổng chốt phía trước → không fan-out. Không có ngoại lệ.

**Hai.** Một module một chủ. Luồng module A không ghi vào thư mục module B.

**Ba.** File dùng chung (BRD, trace-matrix, doc-registry) — mỗi module chỉ **thêm dòng của mình**, không viết lại cả file.

**Bốn.** Fan-out xong **không tự qua cổng kế**. Chỉ soạn nháp và chờ.

---

## Hỏi lớp

Vì sao không nhồi cả 8 module vào một cuộc chat cho tiện?

---

Cho lớp trả lời.

---

## Reveal

Vì AI sẽ trộn ngữ cảnh.

Business rule của module Khuyến mãi rò sang module Đơn hàng.

Mã số lệch.

Trace sai.

Và tốn token gấp nhiều lần.

---

Mỗi luồng nên có **ngữ cảnh sạch**: chỉ một module, chỉ tài liệu liên quan.

---

# Chương 4
# Ba cổng liên tiếp

---

Giai đoạn requirements đi qua ba cổng, không phải một.

---

| Cổng | Người chốt | Mở khoá |
|------|-----------|---------|
| 2 | Business Rules (DOC-04) | Fan-out Prototype |
| 3 | Prototype (DOC-19) | Fan-out SRS |
| 4 | SRS (DOC-06) | Kiến trúc, data model, API |

---

## Nghe có vẻ nhiều cổng

Nhưng nhìn lại buổi 01.

---

Nỗi đau #3: không rõ ai duyệt cái gì.

Bây giờ: mỗi cổng có một người và một tài liệu cụ thể.

---

Và người không viết — người **đọc bản nháp AI soạn rồi bấm duyệt**.

---

## Mẹo cho lớp

Duyệt cổng không có nghĩa là tài liệu hoàn hảo.

Duyệt nghĩa là: **đủ tốt để đi tiếp**, phần chưa chắc thì ghi nợ.

---

# Chương 5
# Khi AI viết requirement mơ hồ

---

Buổi 02 chúng ta thấy AI biết phản biện.

Hôm nay dùng nó thật.

---

## Ví dụ requirement AI vừa sinh

"Hệ thống phải xử lý đơn hàng nhanh chóng."

---

## Hỏi lớp

Câu này sai ở đâu?

---

"Nhanh chóng" là bao nhiêu giây?

Ai đo?

Đo ở đâu — server hay màn hình người dùng?

Bao nhiêu đơn cùng lúc?

---

Không đo được → không test được → không nghiệm thu được.

---

## Cách sửa

```
ORD-FR-014: Hệ thống xác nhận đơn hàng trong ≤ 3 giây (P95),
với tải 200 đơn/phút.
ORD-AC-021: Cho 200 đơn/phút liên tục 10 phút → 95% phản hồi ≤ 3 giây.
ORD-AC-022 (âm): Quá 500 đơn/phút → hệ thống xếp hàng, không mất đơn.
```

---

## Chú ý mục cuối

Điều kiện **âm**.

Chuyện gì xảy ra khi sai, khi quá tải, khi thiếu dữ liệu.

---

Đa số tài liệu chỉ viết đường đi đẹp.

Lỗi sản xuất nằm ở đường đi xấu.

---

# Hands-on
# 50 phút

---

## Bước 1 — Kiểm cổng trước khi fan-out

```
/minipower
Tôi muốn sinh Business Rules cho tất cả module. Kiểm tra giúp tôi:
cổng "Chốt BRD" đã có quyết định chốt chưa? Nếu chưa thì đừng sinh gì cả.
```

Xem AI có dừng đúng không.

---

## Bước 2 — Fan-out Business Rules

```
/minipower
Phase: requirements — cổng BRD đã chốt. Fan-out sinh DOC-04 Business Rules
cho tất cả module in-scope trong DOC-03. Mỗi module một luồng riêng,
không trộn ngữ cảnh. Cập nhật trace-matrix cuối cùng.
```

---

## Bước 3 — Duyệt cổng 2

```
/minipower
Soạn quyết định nháp cho cổng "Chốt Business Rules": mỗi module đã có gì,
chỗ nào tôi cần quyết, chỗ nào đang TBD.
```

Đọc.

Duyệt hoặc trả lại.

---

## Bước 4 — Một module đi hết chuỗi

Chọn **một** module quen nhất:

```
/minipower
Phase: requirements — module <TÊN>: sinh DOC-19 Prototype (danh sách màn hình
+ luồng điều hướng), sau khi tôi duyệt thì viết DOC-06 SRS và DOC-07
Acceptance Criteria. Mọi FR phải trace về UC và BR.
```

---

## Bước 5 — Bắt lỗi mơ hồ

```
/minipower
Đọc lại DOC-06 module <TÊN>: liệt kê mọi requirement KHÔNG đo được
và mọi Acceptance Criteria thiếu trường hợp âm. Đừng tự sửa, chỉ liệt kê.
```

---

## Bước 6 — Đọc trace matrix

Mở `docs/05-traceability/trace-matrix.md`.

Tự tìm:

- FR nào không có UC hoặc BR
- AC nào không trace FR

Đó là chỗ buổi sau sẽ soi kỹ.

---

# Tổng kết

---

Ba điều mang về:

- **Thứ tự có lý do**: luật nghiệp vụ → màn hình → mô tả → điều kiện nghiệm thu
- **ID quan trọng hơn nội dung**: trỏ vào nhau, đừng chép nhau
- **Fan-out chỉ chạy trong hành lang**: giữa hai cổng, mỗi module một chủ

---

## Câu hỏi kết thúc

Bây giờ chúng ta có một bộ tài liệu dày.

AI viết rất trôi chảy.

---

Nhưng trôi chảy có nghĩa là đúng không?

---

Ai là người dám nói:

"Bộ tài liệu này có lỗi"?

👉 Workshop 6: **QC đối kháng & Baseline**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Fan-out Business Rules cho tất cả module | Ảnh chụp cây thư mục `docs/03-modules/` |
| 2 | Một module đi hết BR → Prototype → SRS → AC | Ảnh chụp 4 tài liệu |
| 3 | Chốt ít nhất 2 cổng bằng quyết định thật | Ảnh chụp `decision-log.md` |
| 4 | Nộp 3 dòng trace matrix hoàn chỉnh UC → FR → AC | Ảnh chụp |
| 5 | Tự tìm 3 requirement mơ hồ trong tài liệu AI vừa sinh, sửa lại cho đo được | Trước / sau |
| 6 | Trả lời: nếu chia 8 module cho 4 người, anh chị sẽ chia file dùng chung thế nào? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Một BA đứng trước bức tường khổng lồ gồm tám module và ba mươi hai tài liệu cần viết, biểu cảm choáng ngợp nhưng quyết tâm, ánh sáng xanh công nghệ chiếu từ phía sau, tỷ lệ 16:9
```

```text
Bốn BA giẫm chân — Bốn Business Analyst cùng với tới một tài liệu chung ở giữa bàn, các sợi dây liên kết rối vào nhau, hai định nghĩa khác nhau của cùng một khái niệm phát sáng đỏ va chạm nhau, tỷ lệ 16:9
```

```text
Thứ tự bắt buộc — Bốn bậc thang phát sáng đi lên lần lượt mang tên Business Rule, Prototype, SRS, Acceptance Criteria, một nhân vật cố nhảy tắt lên bậc thứ ba và ngã, tỷ lệ 16:9
```

```text
ID thay vì chép — Bên trái nhiều tài liệu sao chép cùng một đoạn văn và dần lệch nhau phát sáng đỏ, bên phải các tài liệu chỉ trỏ vào một mã số phát sáng trung tâm bằng những sợi chỉ ánh sáng xanh, tỷ lệ 16:9
```

```text
Fan-out — Từ một cánh cổng vừa mở, tám luồng ánh sáng toả ra tám hòn đảo module riêng biệt, mỗi hòn đảo có một AI làm việc độc lập và một huy hiệu chủ sở hữu, không luồng nào chạm sang đảo khác, tỷ lệ 16:9
```

```text
Trộn ngữ cảnh — Một chiếc nồi khổng lồ nơi tám module bị đổ chung vào và khuấy lẫn lộn, các mã số requirement bay ra sai lệch và lẫn màu, hình ảnh cảnh báo hài hước, tỷ lệ 16:9
```

```text
Requirement mơ hồ — Một câu requirement lơ lửng giữa màn sương dày với chữ "nhanh chóng" mờ ảo, QA cầm thước đo cố đo nhưng không có gì để đo, tỷ lệ 16:9
```

```text
Trace matrix — Một tấm bản đồ ánh sáng nối Use Case đến Requirement đến Acceptance Criteria đến Test Case thành chuỗi liền mạch, một mắt xích bị đứt phát sáng đỏ nổi bật giữa các mắt xích xanh, tỷ lệ 16:9
```
