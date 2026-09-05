# Giai đoạn 1 — Ý tưởng & mục tiêu (Concept)

> Kim chỉ nam cho cả buổi. Bám `assets/curriculum.md` và triết lý: **AI chuẩn bị · Con người chốt**.
>
> **⚠️ Mọi nội dung nhắc tới Minipower phải khớp repo thật** (thư mục `minipower/` trong `ai-skills`).
> Rà lần cuối 2026-09-05.
>
> **⚠️ Repo tham khảo & repo demo chỉ dùng để soạn slide — KHÔNG bê nội dung vào deck.**

## Chủ đề
**Phân tích yêu cầu** — buổi 04 chốt *muốn gì* (BRD), buổi 05 dựng xong nền.
Buổi này biến yêu cầu tổng quát thành thứ **đo được**: đi hết chuỗi
`Quy tắc nghiệp vụ → Kịch bản sử dụng → Đặc tả chức năng → Tiêu chí nghiệm thu`
cho **cả 8 module**, bằng cơ chế **fan-out**.

## Thông điệp chính
Bài toán không phải *làm nhanh hơn*, mà là **làm song song mà không giẫm chân nhau**.

## Buổi 06 nằm ở đâu

```
04  Discovery — BRD đã chốt (cổng 1)
05  Dựng nền — máy chạy được
06  ←── HÔM NAY: 32 tài liệu nháp cho 8 module
07  Chốt yêu cầu — soi, sửa, prototype, ba chữ ký
```

Buổi này **chỉ sinh nháp**. Không ký cổng nào — việc ký để buổi 07.

## Kiểu buổi — **BUỔI TRÌNH BÀY**
Hỏi trước → đáp sau (`.reveal`). Phần tay chân dồn vào bài tập.

## Độ sâu

**KHÔNG đưa vào buổi:** Prototype *(buổi 07)* · ADR · kế hoạch · ca kiểm thử *(buổi 08)* ·
code · thuật ngữ kiến trúc · yêu cầu phi chức năng *(món nợ, chỉ nhắc một câu)*.

**ĐƯỢC đưa vào buổi:** chuỗi 4 bước và lý do thứ tự · mã ID theo module · bảng truy vết ·
hai câu quét · cơ chế fan-out và bốn ranh giới · cổng người-chốt *(giới thiệu, chưa ký)*.

## Học viên rời phòng với
1. Chuỗi 4 bước trong đầu và lý do không được đảo
2. Biết viết **tiêu chí đo được** và **tiêu chí âm**
3. Hiểu vì sao **mã ID quan trọng hơn nội dung**
4. Biết bảo AI làm song song 8 module mà không sinh xung đột
5. Danh sách việc để về nhà chạy trên dự án mình

## Ví dụ xuyên suốt
**HRM Mini — module Đơn nghỉ phép.** Dự án ví dụ có 8 module để làm bật bài toán fan-out.
Nội dung ví dụ **viết lại**, không copy repo demo.

## Mạch câu chuyện — 120'

| Phần | Nội dung | Phút |
|---|---|---|
| 1 · Mở | Nối buổi 04 và 05 | 5 |
| 2 · Bài toán | 32 tài liệu · chia bốn người thì giẫm chân | 15 |
| 3 · Bốn bước | `BR → UC → SRS → AC` · yêu cầu đo được · tiêu chí âm | 30 |
| 4 · Mã ID & truy vết | Chuyện 500 ca kiểm thử · quy tắc vàng · hai câu quét | 20 |
| 5 · Fan-out | Một lệnh tám luồng · bốn ranh giới · giới thiệu cổng | 25 |
| 6 · Tổng kết | Bảng sản phẩm · giao bài | 15 |

*(+10' hỏi đáp = 120'.)*

## Ràng buộc / điều không được phá
- **Không ký cổng nào ở buổi này** — tất cả là nháp, buổi 07 mới ký
- Mã DOC, mã ID, tên skill, đường dẫn thư mục phải **khớp repo thật**
- Không dạy prototype, ADR, kế hoạch, ca kiểm thử, code
- **Không dạy đọc code** — ràng buộc chung của cả khoá
- Bám buổi 01: nỗi đau #4 *quá nhiều tài liệu* và #7 *test không trace requirement*
