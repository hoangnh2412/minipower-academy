# Workshop 8
# Kế hoạch thực thi — kiến trúc, kế hoạch, bộ ca kiểm thử

> **Giai đoạn 2 (raw).** **⚠️ Repo tham khảo và repo demo chỉ dùng để soạn — không bê vào slide.**

## Thời lượng
120 phút

## Phase Minipower
**Architecture** *(ADR)* + **Planning** *(WBS, kế hoạch)* + **Delivery** *(ca kiểm thử)*.
Hai cổng: Chốt Plan · Chốt ca kiểm thử — học viên tự ký ở nhà.

## Chuẩn bị của giảng viên
Dự án mẫu đã có đủ **ADR · kế hoạch · bộ ca kiểm thử** để chiếu đầu buổi.

---

# Phần 1 — Show kết quả *(25')*

## Buổi trước đóng phase yêu cầu

Ba chữ ký. 32 tài liệu. Prototype bấm được.

## Hỏi lớp

Bây giờ đưa hết chừng đó cho AI, bảo *"viết code cho tôi"* — được chưa?

*(Chờ.)*

## Reveal

Chưa. Còn thiếu ba thứ, và hôm nay làm cả ba.

*(Mở dự án mẫu.)*

| Thiếu gì | Trả lời câu gì | Tài liệu |
|---|---|---|
| **Kiến trúc** | Làm **bằng gì** | ADR |
| **Kế hoạch** | Chia việc thế nào, **thế nào là xong** | DOC-14 · DOC-15 |
| **Ca kiểm thử** | Lấy gì làm **bằng chứng** đã xong | DOC-16 |

## Hai nhóm tài liệu

| | **Nhóm nghiệp vụ** *(buổi 03 → 07)* | **Nhóm kỹ thuật** *(hôm nay)* |
|---|---|---|
| Trả lời | Làm **cái gì**, cho ai, thế nào là xong | Làm **bằng gì**, chia ra sao |
| Ai chốt | Chủ nghiệp vụ, người dùng thật | Người làm kỹ thuật |
| Ai đọc | Khách · BA · kiểm thử · lập trình | Đội làm — **khách không đọc** |

**Cả hai đều là đề bài cho máy.** Tiêu chí nghiệm thu nói máy *phải làm được gì*;
kiến trúc nói máy *phải làm theo cách nào*.

---

# Phần 2 — Kiến trúc *(30')*

## ADR là gì

**Một quyết định — một file.** Đã chấp thuận thì **không sửa**; đổi ý thì viết cái mới thay thế.

## Hỏi lớp

Vì sao không sửa thẳng vào file cũ cho gọn?

*(Chờ.)*

## Reveal

Vì sáu tháng sau có người hỏi *"sao hồi đó không dùng cái kia?"*

Sửa đè thì **lý do biến mất**, cả đội cãi lại từ đầu. Giữ nguyên thì đọc mất ba mươi giây.

## Khung một ADR

| Mục | Trả lời |
|---|---|
| Bối cảnh | Đang phải quyết cái gì, bị ràng buộc bởi gì |
| Quyết định | *"Chúng tôi sẽ…"* — một câu |
| Lý do | Vì sao chọn cái này |
| **Các phương án đã xem xét** | Bảng A/B/C kèm được – mất |
| Hệ quả | Tích cực · đánh đổi phải chịu · rủi ro |

## Mục quan trọng nhất

Là **các phương án đã loại**. Phương án đã chọn thì nhìn code cũng đoán ra;
phương án đã loại thì không ở đâu ghi ngoài ADR.

## Sáu quyết định của dự án

| ADR | Quyết gì |
|---|---|
| **001** | Kiến trúc tổng quan — một khối, phần sau .NET + phần trước React, chia theo module |
| **002** | Dữ liệu — SQLite + EF Core |
| **003** | Xác thực — ai đăng nhập được, ai không |
| **004** | Giao diện — bộ kit Jarvis |
| **005** | Bộ nhớ đệm · lưu tệp — **có dùng hay không** |
| **006** | Chạy ở đâu |

Không đi sâu kỹ thuật. Học viên chỉ cần **đọc được cột được – mất và chọn**.

## Điểm dạy ở ADR-005

**"Quyết định không dùng" cũng là quyết định phải ghi.**

Không ghi thì ba tháng sau có người tự thêm vào, không ai biết nó vào lúc nào và vì sao.

## AI soạn — người ký

AI bày bảng phương án, **đề xuất** một cái, nhưng để trạng thái **chờ người chốt**.
Chỉ khi có **tên người** thì mới thành đã chấp thuận.

## Ví dụ có sẵn: SQLite

Buổi 05 tôi bảo *"khoá này dùng SQLite để không ai phải cài máy chủ"*. Đó là một ADR thật —
và các bạn đã sống với nó ba buổi rồi. Mở ra:

| Mục | Nội dung |
|---|---|
| **Bối cảnh** | Lớp học · máy cá nhân · không ai quản trị máy chủ · clone về là phải chạy |
| **Quyết định** | SQLite + EF Core |
| **Đã loại** | Máy chủ dữ liệu riêng *(phải cài, phải cấu hình)* |
| **Đánh đổi** | Chỉ hợp một người dùng, một máy |
| **Hệ quả** | **Lên sản phẩm thật phải đổi** — và đổi được vì đã đi qua EF Core |

## Hỏi lớp

Dự án thật của bạn thì chọn gì?

*(Đây là ADR-002 của riêng mỗi người — làm trong bài tập.)*

---

# Phần 3 — Bóc kế hoạch *(30')*

## Từ yêu cầu xuống việc

```
Chức năng + Tiêu chí nghiệm thu  →  Epic  →  Story  →  Task
```

- **Epic** — một mảng lớn *(toàn bộ nghiệp vụ nghỉ phép)*
- **Story** — một việc người dùng cảm nhận được *(nhân viên tạo được đơn)*
- **Task** — một việc làm được trong ngày

## Luật một — không có task mồ côi

Mỗi Story **trỏ về mã chức năng**. Mỗi Task thuộc một Story.

Task không trỏ về đâu = **việc thừa**, hoặc dấu hiệu yêu cầu bị sót.

## Hỏi lớp

Task ghi *"Làm màn hình tạo đơn nghỉ phép"*. **Xong** nghĩa là gì?

*(Chờ — nhiều đáp án khác nhau. Chính sự khác nhau đó là điều cần thấy.)*

## Reveal — luật hai

**Xong không phải cảm giác. Xong là một danh sách tiêu chí đã đạt.**

```
Story:     Nhân viên tạo đơn nghỉ phép
Thuộc:     Epic — Nghiệp vụ nghỉ phép
Trỏ về:    LVE-FR-001, LVE-FR-003
XONG KHI:  LVE-AC-001 đạt · LVE-AC-002 đạt · LVE-AC-007 (âm) đạt
```

Không viết được dòng **XONG KHI** thì task chưa đủ rõ để giao cho ai — kể cả AI.

## Luật ba — mỗi Story ghi rõ thuộc Epic nào

Buổi sau máy sẽ kiểm theo Epic. Không có cột này thì không kiểm được.

## Vì sao lần này khắt khe hơn

Ngày xưa task mơ hồ: một người code lạc, hỏi lại là xong.

Bây giờ: **AI code lạc ở tám module cùng lúc — và nó rất tự tin.**

## Hai tài liệu

| DOC | Nhớ gì |
|---|---|
| **DOC-14** | Epic · Story · Task — **phải có cột trỏ về chức năng và cột Epic** |
| **DOC-15** | Thứ tự làm, mốc. Đủ để biết làm cái gì trước |

## Cổng — Chốt kế hoạch

AI bóc plan → soạn quyết định nháp → **người đọc, sửa, ký**.

---

# Phần 4 — Ca kiểm thử *(30')*

## Hỏi lớp

Vì sao phải viết ca kiểm thử **trước** khi code?

*(Chờ.)*

## Reveal

Vì với AI, ca kiểm thử không phải để **bắt lỗi**. Nó là **hợp đồng**.

AI code rất nhanh và rất trôi. Không có hợp đồng, nó cho ra thứ **chạy được nhưng không phải
thứ mình cần** — và mình chỉ phát hiện sau khi đã đi rất xa.

Và với khoá này còn một lý do nữa: **chúng ta không đọc code.**
Ca kiểm thử là **bằng chứng duy nhất** còn lại.

## Sinh từ đâu

Không từ đầu người. **Từ tiêu chí nghiệm thu.**

```
LVE-AC-001  →  LVE-TC-001
LVE-AC-007  →  LVE-TC-008   (ca âm)
```

**Nhắc lại quy tắc vàng buổi 06:** ca kiểm thử **không chép nội dung** tiêu chí — nó **trỏ vào mã**.

Đây là chỗ nỗi đau #7 của buổi 01 được trị dứt: người kiểm mở ca số 8, thấy nó trỏ `LVE-AC-007`,
biết ngay đang kiểm cái gì.

## Luật bắt buộc — mỗi Story ít nhất một ca âm

Buổi 06 nói *đừng quên đường đi xấu*. Hôm nay thành **luật**, và vào rubric chấm cuối khoá.

Ba câu mở ra hết ca âm cho đơn nghỉ phép:
- Hết quota rồi thì sao?
- Ngày nghỉ chồng lên đơn đã duyệt thì sao?
- Người duyệt nghỉ việc rồi thì sao?

## Vì sao siết chỗ này

Vì không ai đọc code. Nếu ca kiểm thử lỏng thì **không còn gì bắt được lỗi**.

## Cổng — Chốt ca kiểm thử

Đây là **cổng cuối trước khi máy bắt đầu viết code**.

## Ghi lại một con số

Chốt xong, **đếm tổng số ca kiểm thử và ghi lại**.

Buổi sau sẽ dùng con số này. Đừng bỏ qua.

---

# Tổng kết *(5')*

## Sau buổi này dự án có gì

| Có gì | Ở đâu |
|---|---|
| 6 ADR — kiến trúc và công nghệ *(còn nháp)* | `docs/04-platform/DOC-09-adr/` |
| DOC-14 — Epic · Story · Task, có **XONG KHI** và cột Epic | `docs/04-platform/` |
| DOC-15 — thứ tự làm và mốc | `docs/00-governance/` |
| DOC-16 — ca kiểm thử trỏ mã, mỗi Story có ca âm | `docs/03-modules/{module}/` |
| **Tổng số ca kiểm thử** — ghi lại con số | Sổ tay |

## Nhưng tất cả vẫn là nháp

Giống hệt buổi 06: hôm nay học cách làm, sản phẩm nằm ở bài tập — và **chưa ai đọc, chưa ai ký**.

👉 Buổi 09: soi lại ba thứ này, sửa, rồi ký hai cổng.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | **6 ADR** cho dự án mình, mỗi cái có bảng phương án và tên người ký | 6 file |
| 2 | **DOC-14** — Epic · Story · Task, đủ cột *trỏ về*, cột *Epic*, dòng *XONG KHI* | 1 file |
| 3 | **DOC-15** — thứ tự làm và mốc | 1 file |
| 4 | **DOC-16** — ca kiểm thử, mỗi ca trỏ mã, **≥1 ca âm mỗi Story** | 1 file |
| 5 | Ghi lại **tổng số ca kiểm thử** | 1 con số |
| 6 | Đẩy lên GitHub | Link repo |

> **Chưa ký cổng nào ở bước này.** Buổi 09 soi xong mới ký.
