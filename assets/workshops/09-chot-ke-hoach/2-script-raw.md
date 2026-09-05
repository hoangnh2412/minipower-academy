# Workshop 9
# Chốt kế hoạch thực thi — đọc, sửa, rồi ký

> **Giai đoạn 2 (raw).** **⚠️ Repo tham khảo và repo demo chỉ dùng để soạn — không bê vào slide.**

## Thời lượng
120 phút — **buổi chữa bài** *(cùng khuôn với buổi 07, đổi vật liệu)*

## Phase Minipower
**Architecture · Planning · Delivery** — đóng phần tài liệu. Hai cổng: Chốt kế hoạch · Chốt ca kiểm thử.

## Chuẩn bị của giảng viên
- **Bài tập buổi 08 nộp trước 2–3 ngày** — để đọc và chọn bài mẫu *(ràng buộc cứng)*
- Chọn **3 bài**: một ADR yếu · một bộ ca kiểm thử yếu · một làm tốt
- **Dự án mẫu** đã đủ ADR · kế hoạch · ca kiểm thử

---

# Phần 1 — Demo chốt kế hoạch *(20')*

## Hôm nay không dạy cái mới

Đọc lại thứ các bạn đã làm tuần trước, sửa, rồi ký. Giống hệt buổi 07 — chỉ khác là lần này
soi tài liệu kỹ thuật thay vì tài liệu nghiệp vụ.

## Cho xem đích trước

*(Mở dự án mẫu.)*

| Có gì | Trạng thái |
|---|---|
| 6 ADR | Mỗi cái có bảng phương án, có cái đã loại, có tên người ký |
| Kế hoạch | Mỗi Story trỏ về chức năng, thuộc một Epic, có dòng **XONG KHI** |
| Ca kiểm thử | Mỗi ca trỏ về tiêu chí; mỗi Story có ít nhất một ca âm |
| Tổng số ca | **Một con số đã ghi lại** |

## Làm mẫu ký hai cổng

*(Ký ngay trước lớp.)*

## Hỏi lớp

Tuần sau máy sẽ viết code cho toàn bộ sản phẩm. Trong bốn thứ trên, **thứ nào sai thì đau nhất**?

*(Chờ.)*

## Reveal

**Bộ ca kiểm thử.**

ADR sai thì code đặt sai chỗ — vẫn thấy được, vẫn sửa được.
Kế hoạch sai thì làm thừa hoặc sót việc — vẫn nhận ra.

Nhưng **ca kiểm thử sai thì mọi thứ đều báo đạt** — và các bạn sẽ tin.

Tuần sau **không ai mở code ra đọc**. Bộ ca này là thứ duy nhất bắt được lỗi.
Nên hôm nay soi nó kỹ hơn mọi thứ khác.

---

# Phần 2 — Chữa bài ADR *(25')*

## Danh sách kiểm — 5 điều

| # | Lỗi | Nhận ra trong 5 giây |
|---|---|---|
| 1 | **Bảng phương án chỉ có một dòng** | Không có gì để so — đó không phải quyết định, đó là thông báo |
| 2 | **Không ghi cái đã loại** | Sáu tháng sau không ai biết vì sao không chọn cách kia |
| 3 | **Không có mục đánh đổi** | Quyết định nào cũng có giá — không ghi giá là chưa nghĩ tới |
| 4 | **Không có tên người ký** | Lỗi phổ biến nhất. Chưa ký thì chưa phải quyết định |
| 5 | **ADR mâu thuẫn với buổi 05** | Ví dụ ghi dùng máy chủ dữ liệu riêng trong khi máy đang chạy SQLite |

## Bài mẫu 1 — ADR yếu *(ẩn danh)*

## Hỏi lớp

Bài này ghi *"Quyết định: dùng SQLite. Lý do: đơn giản, dễ dùng."* Thiếu gì?

*(Chờ.)*

## Reveal

Thiếu **cái giá phải trả**.

SQLite đơn giản thật — nhưng chỉ hợp một người dùng một máy. Không ghi dòng đó thì
ba tháng nữa có người đưa lên sản phẩm thật, và hỏng.

**ADR không phải để khoe lựa chọn đúng. ADR là để người sau biết mình đang đứng trên cái gì.**

---

# Phần 3 — Chữa bài kế hoạch *(25')*

## Danh sách kiểm — 4 điều

| # | Lỗi | Nhận ra |
|---|---|---|
| 1 | **Story mồ côi** | Cột *trỏ về chức năng* để trống |
| 2 | **Thiếu dòng XONG KHI** | Hoặc có mà ghi *"làm xong màn hình"* — vẫn là cảm giác |
| 3 | **Thiếu cột Epic** | Tuần sau máy không kiểm gộp theo Epic được |
| 4 | **Task to quá** | Một task ôm cả một Epic — không đo được tiến độ |

## Hỏi lớp

Story ghi *"XONG KHI: màn hình chạy được và không lỗi"*. Được không?

*(Chờ.)*

## Reveal

Không. **"Không lỗi"** là ai đo? Đo bằng gì?

Dòng XONG KHI phải là **danh sách mã tiêu chí**, không phải câu văn.

```
❌  XONG KHI: màn hình chạy được, không lỗi
✅  XONG KHI: LVE-AC-001 đạt · LVE-AC-002 đạt · LVE-AC-007 (âm) đạt
```

Máy đọc được dòng thứ hai. Dòng thứ nhất thì nó tự hiểu — và tự hiểu là chỗ bắt đầu đi lạc.

---

# Phần 4 — Chữa bài ca kiểm thử *(30')*

Phần dừng lâu nhất của buổi.

## Danh sách kiểm — 5 điều

| # | Lỗi | Nhận ra |
|---|---|---|
| 1 | **Ca chép nội dung tiêu chí** | Cùng một câu ở hai file — sửa một chỗ, chỗ kia lệch |
| 2 | **Story không có ca âm** | Vi phạm luật bắt buộc của buổi 08 |
| 3 | **Ca âm giả** | Có ca âm nhưng chỉ kiểm bỏ trống ô nhập — không kiểm ca âm **nghiệp vụ** |
| 4 | **Ca không trỏ tiêu chí nào** | Không biết nó đang kiểm cái gì |
| 5 | **Chưa đếm tổng số ca** | Tuần sau không có mốc để đối chiếu |

## Bài mẫu 2 — bộ ca kiểm thử yếu *(ẩn danh)*

## Hỏi lớp

Bài này có ca âm đầy đủ: *"để trống ngày nghỉ → báo lỗi"*, *"nhập chữ vào ô số → báo lỗi"*.
Đủ chưa?

*(Chờ.)*

## Reveal

Chưa. Đó là **ca âm kỹ thuật** — máy nào cũng tự làm được.

Thiếu **ca âm nghiệp vụ** — thứ chỉ có trong luật của khách:

- Hết quota mà vẫn xin nghỉ thì sao?
- Xin nghỉ trùng ngày với đơn đã duyệt thì sao?
- Người duyệt cấp 1 đã nghỉ việc thì đơn đi đâu?

Ba câu này lấy thẳng từ **quy tắc nghiệp vụ** viết ở buổi 06. Nếu ca âm không lần ra được
từ quy tắc nghiệp vụ, thì nó chưa kiểm cái đáng kiểm.

## Đếm số ca

Trước khi ký, mỗi người **đếm tổng số ca của mình và ghi vào sổ**.

## Hỏi lớp

Tôi bắt đếm để làm gì?

*(Chờ.)*

## Reveal

Vì tuần sau máy sẽ chạy bộ ca này hàng chục lần.

Và AI có một thói quen: khi một ca mãi không đạt, nó **nới điều kiện** hoặc **xoá ca đó đi**,
rồi báo *"tất cả đều đạt"*.

Con số hôm nay là **mốc để phát hiện chuyện đó**. Không có mốc thì không cách nào biết.

## Bài mẫu 3 — làm tốt *(để tên)*

---

# Phần 5 — Ký & giao bài *(20')*

## Tự ký hai cổng

**Chốt kế hoạch** và **Chốt ca kiểm thử**. Ba điều kiện để được ký, giống buổi 07:

- Đã **đọc**, không phải liếc qua
- Đã sửa hết lỗi trong ba danh sách kiểm
- Đã **đếm và ghi lại tổng số ca**

## Đây là cổng cuối trước khi máy viết code

Từ buổi sau, mọi thứ máy làm đều dựa trên những gì các bạn ký hôm nay.

Ký cẩu thả thì tuần sau máy làm sai — **và làm sai ở tám module cùng lúc**.

## Dặn chuẩn bị cho buổi 10

Ba việc, làm trước khi tới lớp:

1. Sửa xong, ký xong, đẩy GitHub
2. **Chạy thử fan-out cho một Epic** — chỉ một thôi, để biết máy mình chạy được
3. Máy phải mở lên là chạy

Việc số 2 là bảo hiểm: ai chạy trót lọt một Epic thì hôm sau chạy cả sản phẩm gần như chắc chắn được.

---

# Tổng kết

## Sau buổi này dự án có gì

| Có gì | Ở đâu |
|---|---|
| 6 ADR đã sửa, có tên người ký | `docs/04-platform/DOC-09-adr/` |
| Kế hoạch — Story trỏ chức năng, thuộc Epic, có XONG KHI | DOC-14 · DOC-15 |
| Ca kiểm thử — trỏ mã, có **ca âm nghiệp vụ** | DOC-16 |
| **Tổng số ca — một con số đã ghi** | Sổ tay |
| **Hai quyết định có tên người ký** | `memory/` |

**Toàn bộ phần tài liệu đã xong. Năm cổng đã ký.**

## Còn lại một việc

Máy chưa viết dòng nào.

👉 Buổi 10: bấm nút, và xem thứ nó làm ra.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Sửa hết lỗi trong ba danh sách kiểm | Bảng trước / sau |
| 2 | **Tự ký hai cổng**, có tên và ngày | `decision-log.md` |
| 3 | **Ghi lại tổng số ca kiểm thử** | 1 con số |
| 4 | **Chạy thử fan-out một Epic** | Ảnh chụp kết quả |
| 5 | Đẩy lên GitHub | Link repo |
