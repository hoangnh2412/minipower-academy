# Workshop 7
# Chốt yêu cầu cùng Minipower — đọc, sửa, rồi ký

> **Giai đoạn 2 (raw).** **⚠️ Repo tham khảo và repo demo chỉ dùng để soạn — không bê vào slide.**

## Thời lượng
120 phút — **buổi chữa bài**

## Phase Minipower
**Requirements** — đóng phase. Ba cổng: Chốt BR · Chốt Prototype · Chốt SRS.

## Chuẩn bị của giảng viên
- **Bài tập buổi 06 phải nộp trước 2–3 ngày** — để đọc và chọn bài mẫu *(ràng buộc cứng)*
- Chọn **3 bài**: một sai truy vết · một mắc lỗi kiểu AI · một làm tốt
- **Dự án mẫu** đã đủ 32 tài liệu **và** prototype — để demo chốt phase

---

# Phần 1 — Demo chốt phase *(25')*

## Hôm nay không dạy cái mới

Hôm nay đọc lại thứ các bạn đã làm, sửa, rồi **ký**.

## Nhưng trước hết — cho xem đích

*(Mở dự án mẫu đã hoàn chỉnh.)*

Đây là một phase Requirements **đã đóng**. Nó trông thế này:

| Có gì | Trạng thái |
|---|---|
| 32 tài liệu | Đã sửa, không còn chỗ mơ hồ |
| Prototype | Đủ màn hình, bấm qua lại được |
| Bảng truy vết | Không còn dòng đứt |
| Ba quyết định | **Có tên người ký, có ngày** |

## Làm mẫu ký một cổng

*(Mở sổ quyết định, ký cổng Chốt BR ngay trước lớp.)*

Nhìn kỹ ba thứ trong một quyết định đã chốt:

1. **Đã làm gì** — tóm tắt phần AI soạn
2. **Chỗ nào cần người quyết** — và người đã quyết thế nào
3. **Tên người và ngày**

## Hỏi lớp

Nếu dòng cuối để trống — không tên, không ngày — thì quyết định đó có giá trị gì?

*(Chờ.)*

## Reveal

Không có giá trị gì cả.

Nó chỉ là **một câu AI viết ra để trông cho đủ bộ**.

Và đây chính là lỗi phổ biến nhất mà tôi thấy khi đọc bài của các bạn tuần này.

---

# Phần 2 — Chữa bài *(50')*

## Cách làm

Ba nhịp: **tự soi 10'** → **chữa chung 3 bài mẫu 25'** → **đổi bài soi chéo 15'**.

## Danh sách kiểm — 11 điều

Phát cho lớp, dùng cho cả ba nhịp.

### Nhóm A — nội dung

| # | Lỗi | Nhận ra trong 5 giây |
|---|---|---|
| 1 | Tiêu chí không đo được | Có chữ *nhanh · dễ dùng · hợp lý · đầy đủ* |
| 2 | Chỉ có đường đi đẹp | Không tìm thấy chữ *không · từ chối · quá · hết · trùng* |
| 3 | Viết luật nghiệp vụ thành chức năng | Câu mở đầu bằng *"Hệ thống phải hiển thị…"* |
| 4 | Kịch bản chỉ có luồng chính | Mục luồng thay thế để trống |

### Nhóm B — truy vết

| # | Lỗi | Nhận ra |
|---|---|---|
| 5 | Chức năng mồ côi | Cột *trỏ về* để trống |
| 6 | Mã ID sai quy ước | Thiếu tiền tố module, hoặc hai module trùng mã |
| 7 | Chép nội dung thay vì trỏ mã | Cùng một câu xuất hiện ở hai tài liệu |
| 8 | Bảng truy vết trống | File còn nguyên như lúc khởi tạo |

### Nhóm C — lỗi của việc làm với AI

| # | Lỗi | Nhận ra |
|---|---|---|
| 9 | **Tài liệu chưa ai đọc** | Còn chữ mẫu trong khuôn · ngày vẫn là `YYYY-MM-DD` · ô tác giả trống |
| 10 | **Module sau chép module trước** | Module 5→8 nội dung giống module 1, chỉ đổi tên |
| 11 | **Quyết định do AI tự ký** | Có dòng *"đã chốt"* nhưng không có tên người |

## Ba bài mẫu — chiếu chung

**Bài 1 — sai truy vết.** *(ẩn danh)* Lớp cùng tìm chức năng mồ côi và dòng đứt trong bảng truy vết.

**Bài 2 — lỗi nhóm C.** *(ẩn danh)* Dừng lâu ở đây.

## Hỏi lớp khi chiếu bài 2

Module 1 viết rất kỹ. Module 6 thì sao?

*(Chờ — lớp sẽ thấy nó gần như chép lại module 1.)*

## Reveal

Đây là **hậu quả trực tiếp** của việc phá luật buổi 06: nhồi cả 8 module vào một cuộc trò chuyện.

AI hết ngữ cảnh sạch thì nó bắt đầu lặp lại chính mình. Không phải nó lười — nó **không còn nhớ**
module 6 khác module 1 ở chỗ nào.

Chữa: chạy lại module 6 trong một luồng riêng, chỉ đưa tài liệu của module đó.

**Bài 3 — làm tốt.** *(để tên)* Cho lớp thấy chuẩn trông thế nào.

## Đổi bài soi chéo — 15'

Hai người đổi tài liệu, dùng danh sách kiểm soi bài bạn.

Soi bài người khác **dễ thấy lỗi hơn soi bài mình** — mắt chưa quen với chỗ sai của họ.

---

# Phần 3 — Prototype *(35')*

## Vì sao cần prototype

## Hỏi lớp

Bạn đưa 32 tài liệu này cho khách hàng đọc. Họ đọc không?

*(Chờ.)*

## Reveal

Không.

Khách **không đọc đặc tả**. Khách **nhìn màn hình**.

Cho khách gật đầu bằng mắt trước, rồi mới bàn tiếp bằng chữ.

## Nhưng lần này không vẽ trên giấy

Nền đã dựng từ buổi 05. Bộ giao diện có sẵn nút, bảng, ô nhập, thông báo.

Nên **dựng thẳng màn hình chạy được** còn nhanh hơn ngồi vẽ.

## 🖥 Lớp làm — 25'

Dựng màn hình lõi của module mình. Không cần đủ chức năng — cần **bấm được và nhìn thấy**.

## Danh sách kiểm prototype — 5 điều

| # | Kiểm | Không đạt nghĩa là |
|---|---|---|
| 1 | Mỗi kịch bản sử dụng có **ít nhất một màn hình** | Sót màn hình |
| 2 | Mỗi màn hình có mã và **trỏ về kịch bản / quy tắc** | Màn hình thừa |
| 3 | **Đi được** từ đầu đến cuối một nghiệp vụ | Thiếu bước ở giữa |
| 4 | Dùng **đúng bộ giao diện**, không tự chế | Mỗi module một kiểu |
| 5 | Có màn hình cho **đường đi xấu** — báo lỗi, hết quota, bị từ chối | Chỉ vẽ đường đi đẹp |

Điều 5 là chỗ AI hay bỏ nhất khi sinh giao diện. Nối thẳng lỗi số 2 trong danh sách chữa bài.

---

# Phần 4 — Giao bài *(10')*

## Bài tập có ba phần, phần thứ ba là quan trọng nhất

1. Sửa hết lỗi đã chỉ ra
2. Hoàn thiện **toàn bộ màn hình** prototype
3. **Tự ký ba cổng** — Chốt BR · Chốt Prototype · Chốt SRS

## Về việc tự ký

Bốn buổi qua các bạn nghe tôi nói *"phải có người chốt"*.

Tuần này **các bạn là người chốt** — trên dự án của chính mình.

Ba điều kiện để được ký:
- Đã **đọc**, không phải chỉ liếc qua
- Đã sửa hết lỗi nhóm A và nhóm B
- Prototype **đủ màn hình** — lần này **không ghi nợ**

Ký nghĩa là bạn nói: *"Tôi chịu trách nhiệm về những gì viết trong đây."*

## Một lưu ý về thứ tự

Minipower quy định ký từng cổng một, cổng trước mở khoá bước sau.

Khoá mình **gộp ba cổng ký một lượt**, vì lớp học không có ba tuần chờ giữa mỗi cổng.
Dự án thật thì ký từng cổng — nhưng luật *"đọc trước khi ký"* thì không đổi.

---

# Tổng kết

## Sau buổi này dự án có gì

| Có gì | Ở đâu |
|---|---|
| 32 tài liệu đã chữa | `docs/03-modules/{module}/` |
| Prototype đủ màn hình, bấm được | Ứng dụng web trên máy |
| Bảng truy vết không còn dòng đứt | `docs/05-traceability/trace-matrix.md` |
| **Ba quyết định có tên người ký** | `memory/requirements/decision-log.md` |

**Phase Requirements đóng.**

## Chưa có gì

Biết phải làm được gì, nhưng chưa ai chia việc, chưa biết dùng công nghệ gì,
chưa có cách nào kiểm xem làm xong chưa.

👉 Buổi 08: kiến trúc · kế hoạch · bộ ca kiểm thử.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Sửa hết lỗi nhóm A và B đã chỉ ra | Bảng trước / sau |
| 2 | Hoàn thiện **toàn bộ màn hình** prototype, soi theo 5 điều | Ảnh chụp các màn hình |
| 3 | **Tự ký ba cổng**, có tên và ngày | `decision-log.md` |
| 4 | Đẩy lên GitHub | Link repo |
