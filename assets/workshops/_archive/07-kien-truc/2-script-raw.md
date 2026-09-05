# Workshop 7
# Kiến trúc & Cổng thực thi — Khi nào AI được làm thật

---

## Thời lượng

120 phút (65 kể chuyện + 55 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Hiểu ranh giới §0: AI chỉ **bắt tay thực thi** khi tài liệu tiền đề đủ rõ
- Biết **Cổng thực thi** (readiness-gate) khác cổng người-chốt như thế nào
- Biết cách gate **hỏi trọn gói một lượt** thay vì hỏi nhỏ giọt
- Sinh được SAD, ADR, data model, API — và trace về requirement
- Dùng được **sổ nợ** `open-questions.md`: hoãn có kiểm soát, không quên

---

## Nỗi đau xử lý hôm nay

#11 Họp quá nhiều · #6 Không biết ai quyết định (ADR)

---

# Mở đầu

## Câu chuyện — AI code sớm

---

Một team nôn nóng.

Requirement mới xong sơ sơ.

Bảo AI: "Code luôn module đơn hàng đi."

---

AI code.

Nhanh.

Chạy được.

---

Một tuần sau.

Requirement chốt lại.

Hoá ra đơn hàng có 3 loại, không phải 1.

---

Code viết lại từ đầu.

Một tuần bay.

---

## Hỏi lớp

Lỗi ở AI hay ở người?

---

Cho lớp trả lời.

---

## Reveal

Ở người.

Người bảo AI thực thi khi tiền đề chưa đủ.

---

Và AI thì... bảo gì làm nấy.

---

Đây là lý do Minipower có một cổng riêng cho việc **bắt đầu làm thật**.

---

# Chương 1
# Hai loại cổng khác nhau

---

Đến giờ chúng ta đã gặp cổng người-chốt.

Hôm nay gặp loại cổng thứ hai.

---

| | Cổng người-chốt | Cổng thực thi |
|--|-----------------|----------------|
| Tên | approval-gate | readiness-gate |
| Soi cái gì | Người đã chốt bước trước chưa? | Tiền đề đầu vào đã đủ để bắt đầu chưa? |
| Ai kích hoạt | Người duyệt | AI tự soát khi thấy ý định "thực thi" |
| Ví dụ | "Đã chốt SRS chưa?" | "Muốn code — đã có SRS, AC, SAD, data model, API chưa?" |

---

## Hai cổng bổ trợ nhau

Cổng người-chốt: **được phép đi tiếp chưa** (có DEC không).

Cổng thực thi: **đủ nguyên liệu để làm chưa** (có đủ tài liệu đầu vào không).

---

Qua cả hai mới thực thi.

---

# Chương 2
# Cổng thực thi hỏi trọn gói

---

## Nỗi đau #11 buổi 01

Họp quá nhiều.

Hỏi đi hỏi lại.

Nhỏ giọt từng câu.

---

## Cổng thực thi làm ngược lại

Khi anh chị bảo AI làm một việc thực thi.

AI **không** hỏi từng câu một.

---

AI liệt kê **tất cả** tiền đề còn thiếu **cùng một lúc**.

---

Ví dụ, bảo AI "thiết kế kiến trúc module đơn hàng":

```
Để thiết kế kiến trúc, tôi cần đủ 3 tiền đề. Hiện trạng:
✅ DOC-03 BRD — có
❌ DOC-06 SRS module đơn hàng — thiếu
❌ DOC-13 NFR — thiếu

Ba lựa chọn cho mỗi mục thiếu:
[Trả lời ngay] · [Hoãn, ghi nợ] · [Không cần cho lần này]
```

---

## Điểm hay

Anh chị trả lời **một lần**.

Không phải quay lại 5 lần.

---

# Chương 3
# "Đủ" là do người quyết

---

## Cổng thực thi không chặn cứng

Nó không đòi đủ 100% mới cho làm.

---

"Đủ" nghĩa là **đủ ở mức chấp nhận được** — và người quyết mức đó.

---

## Ví dụ

AI nói thiếu NFR.

Anh chị nói: "Bản này chỉ là prototype nội bộ, NFR tính sau."

---

Được.

Đi tiếp.

Nhưng mục NFR rơi vào sổ nợ.

---

# Chương 4
# Sổ nợ — hoãn nhưng không quên

---

`memory/{giai đoạn}/open-questions.md`

---

Mỗi mục hoãn ghi một dòng:

```
- [ ] OQ-003  Chưa có ngưỡng hiệu năng cụ thể · intent: thiết kế kiến trúc
      · hoãn 2026-08-01 · chặn: có
```

---

## Hai loại nợ

**Chặn: có** — thiếu cái này thì sản phẩm làm ra chỉ là nháp, phải quay lại.

**Chặn: không** — thiếu cũng làm được, bổ sung dần.

---

## Vì sao quan trọng

Buổi 01, nỗi đau #10: scope creep, dự án trễ không ai biết vì sao.

---

Sổ nợ là chỗ ghi lại **mọi thứ đang treo**.

Cuối dự án mở ra, không có gì bị quên trong im lặng.

---

# Chương 5
# Kiến trúc — nghiệp vụ đã rõ mới vẽ

---

Qua hai cổng rồi.

Giờ SA vào việc.

---

| DOC | Tên | Nội dung |
|-----|-----|----------|
| 08 | SAD | Kiến trúc tổng thể, các thành phần, 4+1 view |
| 09 | ADR | Mỗi quyết định kiến trúc một file |
| 10 | Integration | Tích hợp với hệ thống ngoài |
| 11 | Data Model | Mô hình dữ liệu, ERD |
| 12 | API | Đặc tả API (OpenAPI) |

---

## Nguyên tắc

Mọi thành phần kiến trúc phải **trace về requirement**.

---

Một API không trace về FR nào → API đó phục vụ ai?

Rất có thể SA vẽ theo thói quen, không theo nhu cầu thật.

---

# Chương 6
# ADR — nơi ghi "vì sao"

---

## Nỗi đau #6 buổi 01

Khách hỏi: "Tại sao hệ thống làm thế này?"

Cả team im lặng.

---

## ADR là câu trả lời

Mỗi quyết định kiến trúc lớn = một ADR.

Ghi rõ:

- Bối cảnh: đang phải chọn gì
- Các phương án đã cân nhắc
- Chọn cái nào
- **Vì sao loại các cái kia**

---

## Quy tắc

ADR đã "Accepted" thì **không sửa**.

Đổi ý → viết ADR mới thay thế, giữ ADR cũ để biết lịch sử.

---

## Vì sao không sửa ADR cũ

Vì sáu tháng sau có người hỏi "sao hồi đó chọn thế".

Nếu sửa đè, lịch sử mất.

Câu "vì sao" biến mất.

---

Đây chính là thứ chữa nỗi đau #6.

---

## Kết nối buổi 04

Nhớ nghị luận đa góc nhìn không?

Kết quả nghị luận — các trade-off, căng thẳng còn sống — chính là nguyên liệu để viết ADR.

Không cần bịa lại. Nó đã có sẵn.

---

# Hands-on
# 55 phút

---

## Bước 1 — Kích hoạt cổng thực thi

```
/minipower
Tôi muốn thiết kế kiến trúc cho module <TÊN>. Trước khi làm, soát giúp tôi
đủ tiền đề chưa. Liệt kê TẤT CẢ cái thiếu một lượt, đừng hỏi từng câu.
```

Xem AI có liệt kê trọn gói không.

---

## Bước 2 — Duyệt kèm ghi nợ

```
DOC-13 NFR tôi chưa có, hoãn và ghi vào open-questions.md, đánh dấu chặn: có.
DOC-06 SRS thì đây: @docs/03-modules/<TÊN>/DOC-06-srs.md. Đủ tạm thì đi tiếp.
```

---

## Bước 3 — Sinh SAD + ADR

```
/minipower
Phase: architecture — sinh DOC-08 SAD và các ADR cho module <TÊN>.
Mỗi ADR phải có: bối cảnh, các phương án, lựa chọn, vì sao loại phương án khác.
Mọi thành phần trace về FR.
```

---

## Bước 4 — Kiểm trace kiến trúc

```
/minipower
Phase: doc-review — soi DOC-12 API module <TÊN>: có API nào KHÔNG trace về
FR nào không? Liệt kê. Đừng tự sửa.
```

---

## Bước 5 — Đọc sổ nợ

Mở `memory/architecture/open-questions.md`.

Đếm: bao nhiêu mục **chặn: có** đang treo?

Đó là danh sách việc bắt buộc làm trước khi code.

---

## Bước 6 — Thử ép AI code sớm

```
/minipower
Code luôn module <TÊN> đi.
```

Xem AI có dừng lại và đòi đủ tiền đề (SRS, AC, SAD, data model, API, prototype) không.

Nếu AI code luôn → báo giảng viên, cài đặt đang thiếu guardrail.

---

# Tổng kết

---

Ba điều mang về:

- AI **không được làm thật** khi tiền đề chưa đủ — người canh ranh giới đó
- Cổng thực thi **hỏi trọn gói một lượt** — hết nỗi đau hỏi nhỏ giọt
- **Sổ nợ** để hoãn mà không quên; **ADR** để không ai hỏi "vì sao" mà cả team im lặng

---

## Câu hỏi kết thúc

Kiến trúc xong.

Nhưng làm bao lâu?

Bao nhiêu người?

Test thế nào?

Triển khai ra sao?

👉 Workshop 8: **Kế hoạch & Bàn giao**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Kích hoạt cổng thực thi, để AI liệt kê tiền đề trọn gói | Ảnh chụp danh sách một lượt |
| 2 | Hoãn ≥1 mục vào `open-questions.md` có đánh dấu chặn | Ảnh chụp sổ nợ |
| 3 | Sinh ≥1 ADR đủ bối cảnh / phương án / vì sao loại | Ảnh chụp ADR |
| 4 | Tìm 1 thành phần kiến trúc không trace về FR | Trích dẫn |
| 5 | Thử ép AI code sớm, chụp lại phản ứng của nó | Ảnh chụp |
| 6 | Trả lời: dự án cũ có quyết định kiến trúc nào mà giờ không ai nhớ "vì sao"? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Một lập trình viên hào hứng gõ code trên nền requirement còn mờ ảo chưa hoàn chỉnh, một tuần sau toàn bộ code vỡ vụn thành mảnh khi requirement thật hiện rõ, hình ảnh cảnh báo, tỷ lệ 16:9
```

```text
Hai loại cổng — Hai cánh cổng đứng cạnh nhau, cổng thứ nhất có người thật cầm dấu duyệt, cổng thứ hai là một trạm kiểm tra tự động quét danh sách tiền đề đầu vào, cả hai phải mở mới đi tiếp, tỷ lệ 16:9
```

```text
Hỏi trọn gói — Bên trái một AI hỏi nhỏ giọt từng câu khiến người mệt mỏi quay lại nhiều lần; bên phải một AI trình ra một bảng checklist đầy đủ mọi thứ còn thiếu cùng lúc, người trả lời một lần xong việc, tỷ lệ 16:9
```

```text
Sổ nợ — Một cuốn sổ phát sáng ghi các câu hỏi còn treo, mỗi dòng có nhãn "chặn" màu đỏ hoặc "không chặn" màu vàng, không dòng nào bị xoá đi trong im lặng, tỷ lệ 16:9
```

```text
Kiến trúc trace — Một sơ đồ kiến trúc hệ thống hiện đại với các thành phần nối bằng sợi chỉ ánh sáng xuống tận các requirement gốc, một thành phần lơ lửng không có sợi nối nào phát sáng đỏ nghi vấn, tỷ lệ 16:9
```

```text
ADR — Một thư viện các quyết định kiến trúc, mỗi quyết định là một cuốn sách phát sáng ghi rõ "vì sao chọn" và "vì sao loại phương án khác", những cuốn cũ được giữ nguyên vẹn không bị xoá, tỷ lệ 16:9
```

```text
Vì sao im lặng — Khách hàng hỏi "tại sao hệ thống làm thế này", lần này thay vì cả team im lặng, một cuốn ADR phát sáng tự mở ra và trả lời, cả team nhẹ nhõm, tỷ lệ 16:9
```
