# Workshop 6
# Phân tích yêu cầu — 32 tài liệu, một mình vẫn chạy

> **Giai đoạn 2 (raw).** Nguồn để chẻ storyboard. Bám `1-concept.md`.
> **⚠️ Repo tham khảo `minipower/` và repo demo `minipower-hrm` chỉ dùng để soạn — không bê vào slide.**

## Thời lượng
120 phút — **buổi trình bày** (hỏi trước → đáp sau), phần tay chân dồn vào bài tập

## Phase Minipower
**Requirements** — mở phase. Đóng phase ở buổi 07.

## Nỗi đau xử lý hôm nay
#4 quá nhiều tài liệu · #7 test case không trace requirement

## Ví dụ xuyên suốt
HRM Mini — dự án có **8 module**, đi sâu vào module **Đơn nghỉ phép**

---

# Mở đầu *(5')*

## Hai buổi trước dừng ở đâu

**Buổi 04** kết bằng một câu bỏ ngỏ. Lớp hỏi Minipower *"yêu cầu nghiệp vụ đã có chức năng nào chưa?"*
và nhận về: **"chưa có."** Hôm đó tôi nói: đó là **đáp án đúng**.

**Buổi 05** dựng xong nền. Máy chạy được, nhưng chưa có chức năng nghiệp vụ nào —
vì nền không tự biết nghiệp vụ của bạn.

## Hôm nay

Hôm nay đi lấp chỗ trống ấy.

BRD đã chốt. Cổng đầu tiên đã có người ký. Bên kia cổng là một đống việc.

---

# Chương 1 — Bài toán *(15')*

## Mở BRD ra đếm

Dự án HRM có **8 module**: hồ sơ nhân sự · đơn nghỉ phép · chấm công · bảng lương ·
cảnh báo · nhận việc · nghỉ việc · báo cáo.

Mỗi module cần bốn tài liệu:

```
Quy tắc nghiệp vụ  →  Kịch bản sử dụng  →  Đặc tả chức năng  →  Tiêu chí chấp nhận
     DOC-04              DOC-05              DOC-06              DOC-07
```

**8 × 4 = 32 tài liệu.**

## Hỏi lớp

Một mình bạn viết 32 tài liệu này, mất bao lâu?

*(Cho lớp đoán. Câu trả lời thường gặp: một tháng, hai tháng, ba tháng.)*

## Hỏi tiếp

Vậy chia cho bốn người làm song song thì sao?

*(Chờ.)*

## Reveal

Nhanh hơn thật. Nhưng đến tuần thứ hai bắt đầu có chuyện.

- Người thứ nhất định nghĩa *"nhân viên chính thức"* một kiểu.
- Người thứ ba định nghĩa một kiểu khác.
- Hai người cùng mở một file chung để sửa.
- Mã số yêu cầu trùng nhau, không ai biết trùng.

## Bài toán thật của hôm nay

Không phải **làm nhanh hơn**.

Mà là **làm song song mà không giẫm chân nhau**.

---

# Chương 2 — Bốn bước, và vì sao không được đảo *(30')*

## Chuỗi bắt buộc

```
Quy tắc nghiệp vụ → Kịch bản sử dụng → Đặc tả chức năng → Tiêu chí chấp nhận
```

## Hỏi lớp

Vì sao không viết đặc tả chức năng trước cho nhanh?

*(Chờ.)*

---

## Bước 1 — Quy tắc nghiệp vụ đi trước · DOC-04

Quy tắc nghiệp vụ là **luật của khách**, tồn tại kể cả khi không có phần mềm.

> *"Đơn nghỉ phép phải qua quản lý trực tiếp duyệt, rồi mới tới nhân sự."*

Luật này có từ trước khi dự án bắt đầu. Nó không sinh ra vì mình làm phần mềm.

**Viết đặc tả trước luật** = mô tả cách hệ thống làm, khi còn chưa biết luật là gì.
Kết quả: đúng kỹ thuật, sai nghiệp vụ.

Mỗi quy tắc có một dạng cố định: **NẾU … THÌ … TRỪ KHI …**

---

## Bước 2 — Kịch bản sử dụng · DOC-05

Có luật rồi mới biết **ai** bị luật chi phối, và họ **đi qua những bước nào**.

Kịch bản trả lời: ai làm · muốn gì · đi mấy bước · bước nào có thể trật.

**Luồng chính** thì ai cũng viết được. Cái quyết định chất lượng là **luồng thay thế** —
người duyệt đi vắng thì sao, nhân viên rút đơn giữa chừng thì sao.

---

## Bước 3 — Đặc tả chức năng · DOC-06

Đến đây mới nói tới **hệ thống phải làm được gì**.

Mỗi chức năng có một mã, và **trỏ ngược** về quy tắc và kịch bản sinh ra nó.

Chức năng không trỏ về đâu được = **làm thừa**, hoặc dấu hiệu tài liệu trên bị sót.

---

## Bước 4 — Tiêu chí chấp nhận đi cuối · DOC-07

Vì nó là **điều kiện nghiệm thu**. Viết được nó nghĩa là yêu cầu đã đủ rõ để đem đi kiểm.

### Đây là chỗ chậm lại — ví dụ

AI vừa sinh cho bạn dòng này:

> *"Hệ thống phải xử lý đơn nghỉ phép nhanh chóng."*

## Hỏi lớp

Câu này sai ở đâu?

*(Chờ.)*

## Reveal

- *"Nhanh chóng"* là bao nhiêu giây?
- Ai đo?
- Đo ở máy chủ hay ở màn hình người dùng?
- Bao nhiêu đơn cùng lúc?

**Không đo được → không kiểm được → không nghiệm thu được.**

### Viết lại cho đo được

```
Chức năng: hệ thống xác nhận đơn nghỉ trong vòng 3 giây, với 200 đơn mỗi phút.

Tiêu chí đạt:   200 đơn/phút liên tục 10 phút → 95% phản hồi dưới 3 giây.
Tiêu chí âm:    quá 500 đơn/phút → hệ thống xếp hàng, KHÔNG mất đơn nào.
```

## Chú ý dòng cuối — **tiêu chí âm**

Chuyện gì xảy ra khi sai, khi quá tải, khi thiếu dữ liệu, khi người dùng bấm bậy.

Đa số tài liệu chỉ viết **đường đi đẹp**.
Nhưng lỗi khi chạy thật gần như luôn nằm ở **đường đi xấu**.

## Cách tự kiểm

Với mỗi chức năng, thử viết câu **"đạt khi …"** có con số trong đó.

Viết không ra thì đừng đi tiếp — quay lại bước 3 sửa đặc tả cho rõ, hoặc quay lại bước 1
xem luật nghiệp vụ có thiếu điều kiện nào không.

---

# Chương 3 — Mã số quan trọng hơn nội dung *(20')*

## Nhớ lại chuyện buổi 01

Người kiểm thử mở 500 ca kiểm thử.

Yêu cầu ghi: *"Khách VIP giảm 10%."*

Người kiểm thử **không biết ca nào đang kiểm cái đó**. *(nỗi đau #7)*

## Hỏi lớp

Vì sao lại thành ra như vậy?

*(Chờ.)*

## Reveal

Vì ca kiểm thử **chép nội dung** của yêu cầu.

Chép xong thì hai bên **rời nhau ra**. Yêu cầu sửa, ca kiểm thử không hay biết.
Sáu tháng sau không ai dám xoá cái nào, vì không biết cái nào còn dùng.

## Quy tắc vàng

**Chỗ khác không chép nội dung. Chỗ khác trỏ vào mã số.**

## Bộ mã của một module

| Mã | Là gì | Ở đâu |
|---|---|---|
| `LVE-BR-001` | Quy tắc nghiệp vụ | DOC-04 |
| `LVE-UC-001` | Kịch bản sử dụng | DOC-05 |
| `LVE-FR-001` | Chức năng hệ thống | DOC-06 |
| `LVE-AC-001` | Tiêu chí chấp nhận | DOC-07 |

`LVE` là mã module. Đổi module thì đổi tiền tố — **không bao giờ trùng nhau**.

## Nối vào buổi 04

Hôm đó lớp học hai mã đầu chuỗi: mục tiêu nghiệp vụ và yêu cầu nghiệp vụ.
Hôm nay chuỗi dài ra đủ:

```
Mục tiêu → Yêu cầu → Quy tắc → Kịch bản → Chức năng → Tiêu chí → Kiểm thử
```

Buổi 04 mới sáng ba ô đầu. Hôm nay sáng tới ô thứ sáu.

## Bảng truy vết

Tất cả nối vào một bảng: `docs/05-traceability/trace-matrix.md`

Hai câu quét tìm bệnh — **giống hệt hai câu của buổi 04, chỉ tụt xuống một tầng**:

1. **Chức năng nào không trỏ về quy tắc hay kịch bản nào?** → làm thừa
2. **Tiêu chí nào không trỏ về chức năng nào?** → kiểm thử lạc đề

---

# Chương 4 — Hai cổng và cơ chế fan-out *(25')*

## Cổng của giai đoạn này

| Cổng | Người chốt | Mở khoá |
|---|---|---|
| 1 · Chốt BRD | Tài liệu yêu cầu nghiệp vụ | *(đã ký cuối buổi 04)* |
| **2 · Chốt quy tắc nghiệp vụ** | DOC-04 | Viết kịch bản và đặc tả |
| **4 · Chốt đặc tả chức năng** | DOC-06 | Sang giai đoạn kế |

*(Cổng số 3 — chốt bản mẫu màn hình — khoá này để sang buổi 07, chốt trên màn hình chạy thật
thay vì bản vẽ. Nói rõ để lớp đối chiếu repo không thấy hụt.)*

## Giao thức tại mỗi cổng

```
AI làm xong tài liệu
   → AI SOẠN SẴN bản quyết định nháp
       (đã làm gì · chỗ nào cần người quyết · chỗ nào còn treo)
   → Người đọc:  ✅ duyệt   ✍️ sửa   ⛔ trả lại
   → Duyệt thì ghi "đã chốt" kèm TÊN NGƯỜI → mở khoá bước sau
```

**Không có quyết định đã chốt = không qua cổng.**

## Điểm dạy

AI **soạn sẵn cho người bấm duyệt** — chứ không bắt người ngồi viết từ đầu,
cũng không hỏi lắt nhắt từng câu. Đây đúng là thứ lớp than phiền ở buổi 01.

## Mẹo

Duyệt cổng **không có nghĩa tài liệu hoàn hảo**. Duyệt nghĩa là **đủ tốt để đi tiếp**;
chỗ chưa chắc thì **ghi nợ** vào sổ câu hỏi mở.

---

## Cổng mở rồi thì AI được làm gì?

## Không phải làm tuần tự

Không phải module 1 xong → module 2 → module 3.

## Mà là fan-out

**Một lệnh. Tám luồng chạy cùng lúc. Mỗi luồng lo đúng một module.**

```
        🔒 Cổng đã có người ký
                 ↓
   ┌──────┬──────┬──────┬─────┐
 Module Module Module Module ...
   A      B      C      D
   └──────┴──────┴──────┴─────┘
                 ↓
      Gom về bảng truy vết
                 ↓
   Soạn quyết định nháp → trình cổng kế
```

## Hỏi lớp

Vì sao không nhồi cả 8 module vào một cuộc trò chuyện cho tiện?

*(Chờ.)*

## Reveal

Vì AI sẽ **trộn ngữ cảnh**.

Quy tắc của module Chấm công rò sang module Nghỉ phép. Mã số lệch. Truy vết sai.
Và tốn gấp nhiều lần.

Mỗi luồng cần **ngữ cảnh sạch**: chỉ một module, chỉ tài liệu liên quan.

## Bốn ranh giới không được phá

**Một.** Cổng trước chưa ký → **không fan-out**. Không ngoại lệ.
**Hai.** Một module một chủ. Luồng module A không ghi vào thư mục module B.
**Ba.** File dùng chung — mỗi module chỉ **thêm dòng của mình**, không viết lại cả file.
**Bốn.** Fan-out xong **không tự qua cổng kế**. Chỉ soạn nháp rồi chờ.

## Kiểm nhanh trước khi fan-out

Ba câu hỏi, đủ cả ba mới chạy:

1. Cổng trước đã có quyết định ghi *"đã chốt"* kèm tên người chưa?
2. Danh sách module lấy từ BRD, không phải tự nghĩ ra?
3. Mỗi module chạy một luồng riêng, không gộp chung một cuộc trò chuyện?

---

# Tổng kết *(15')*

## Sau buổi này dự án có gì

| Có gì | Ở đâu |
|---|---|
| DOC-04 quy tắc nghiệp vụ — 8 module | `docs/03-modules/{module}/` |
| DOC-05 kịch bản sử dụng — 8 module | `docs/03-modules/{module}/` |
| DOC-06 đặc tả chức năng — 8 module | `docs/03-modules/{module}/` |
| DOC-07 tiêu chí nghiệm thu — 8 module | `docs/03-modules/{module}/` |
| Bảng truy vết đã cập nhật | `docs/05-traceability/trace-matrix.md` |

**32 tài liệu — tất cả ở trạng thái nháp.**

## Ba kỹ thuật đã học

| Kỹ thuật | Dùng để |
|---|---|
| Thứ tự bốn bước | Không viết đặc tả khi chưa biết luật |
| Trỏ mã thay vì chép nội dung | Sửa một chỗ, các chỗ khác không lệch |
| Fan-out giữa hai cổng | Làm 8 module song song, không giẫm chân |

## Nhưng tất cả vẫn là nháp

Chưa ai đọc kỹ. Chưa ai ký. Chưa có màn hình nào để khách nhìn.

👉 Buổi 07: soi lại, dựng prototype, rồi đóng phase Requirements bằng ba chữ ký.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Fan-out **DOC-04 quy tắc nghiệp vụ** cho tất cả module trong BRD | Cây thư mục `docs/03-modules/` |
| 2 | **Một module** đi hết bốn bước: DOC-04 → 05 → 06 → 07 | 4 tài liệu |
| 3 | Cập nhật bảng truy vết, chạy **hai câu quét**, chỉ ra chỗ đứt | Bảng + 2 kết quả |
| 4 | Tự tìm **3 yêu cầu mơ hồ** AI vừa sinh, sửa cho đo được | Trước / sau |
| 5 | Đẩy tất cả lên GitHub | Link repo |

> **Chưa ký cổng nào ở bước này.** Tất cả còn là nháp — buổi 07 soi xong mới ký.

> Ghi nợ có chủ đích: **yêu cầu phi chức năng (DOC-13)** khoá này chưa làm — ghi vào sổ câu hỏi mở.
