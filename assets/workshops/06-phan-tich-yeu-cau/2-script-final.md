# Giai đoạn 2b — Kịch bản biên tập (Final script)

> Lời giảng cho **deck 28 slide** — `docs/workshops/06-phan-tich-yeu-cau/index.html`.
> Số slide trong ngoặc `[n]` phải **khớp deck** — sửa deck thì sửa cả đây.
>
> **Kiểu buổi:** **thực hành**. Không hỏi trước–đáp sau. Slide là bảng hướng dẫn vừa nhìn vừa gõ,
> mỗi phần thực hành đóng bằng một **mốc kiểm tra** — làm được mới đi tiếp.
>
> **Nguồn sự thật:** dự án mẫu `minipower-work/einvoice-sample`. Mọi mã ID, đường dẫn, tên module,
> nội dung quy tắc trong kịch bản này **lấy nguyên từ đó**, không bịa.
>
> **Ngân sách (120'):** P1 8' · P2 12' · P3 25' · **P4 25'** · **P5 30'** · P6 12' · P7 8'

---

## Phần 1 — Mở *(≈8 phút)*

### [1] Bìa

Chào mọi người. Hôm nay là buổi **thực hành**.

Nói trước cho khỏi hồi hộp: hôm nay **không ai phải ngồi viết tài liệu**. Tài liệu tôi đã chuẩn bị
sẵn hết rồi. Việc của các bạn hôm nay là **đọc nó**, rồi **bấm cho ra một cái prototype chạy được**.

Cuối buổi, trên máy mỗi người sẽ có một màn hình **hoá đơn** bấm qua bấm lại được.

### [2] Chúng ta đang ở đâu

Buổi 06 trên lộ trình mười buổi, mở **phase Requirements**.

Nhịp của khoá là **06 dạy → 07 chốt**, y hệt cặp **08 dạy → 09 chốt** ở nửa sau.
Hôm nay là buổi **làm ra**, buổi sau mới **soi và ký**.

### [3] Hôm nay không viết tài liệu — hôm nay đọc rồi bấm

Ba việc, đúng ba việc:

1. **Đọc** bộ tài liệu yêu cầu đã có sẵn — đọc đúng chỗ, không đọc hết
2. **Ra màn hình** — bảo AI liệt kê cần những màn hình nào
3. **Vibe code** — bấm cho ra prototype chạy được

Và một thứ hôm nay **không làm**: **không ký cổng nào**. Mọi thứ ra lò hôm nay là **nháp**.

---

## Phần 2 — Cách cũ và cách mới *(≈12 phút)*

### [4] Cách cũ — sáu bước, và chúng nó ăn bao nhiêu thời gian

Ai từng làm BA thì quy trình này quen tới mức thuộc lòng:

```
Brainstorm → Ghi chép → Vẽ mockup → Confirm định hướng → Vẽ prototype → Confirm prototype
```

Sáu bước. Mỗi bước là một vòng chờ: chờ họp được, chờ ghi xong, chờ designer vẽ, chờ khách rảnh để
xem, chờ dựng prototype, rồi lại chờ khách xem lần nữa.

Từ lúc họp lần đầu tới lúc khách **bấm thử được cái gì đó** — tính bằng **tuần**.

### [5] Cùng sáu bước đó, làm theo cách mới

Không bỏ bước nào. **Bước nào máy làm được thì máy làm.**

| # | Bước | Cách mới | Ai làm |
|---|---|---|---|
| 1 | Brainstorm | Sáu nhóm câu hỏi AI soạn sẵn trước khi vào phòng khách | AI soạn · **người đi hỏi** |
| 2 | Ghi chép | AI cấu trúc hoá thành `DOC-04` quy tắc + `DOC-05` kịch bản | AI |
| 3 | Vẽ mockup | Sinh danh sách màn hình thẳng từ kịch bản | AI |
| 4 | **Confirm định hướng** | Khách nhìn, gật hoặc lắc | **Người** |
| 5 | Vẽ prototype | Kit Jarvis dựng prototype bấm được | AI |
| 6 | **Confirm prototype** | Khách **bấm thử thật** | **Người** |

### [6] Vài tuần xuống vài tiếng

Bốn bước AI làm: từ ngày xuống **phút**.

Hai bước in đậm — **bước 4 và bước 6** — vẫn nguyên si. Khách vẫn phải nhìn, vẫn phải gật.
Không có cách nào rút ngắn chuyện đó, và cũng **không nên** rút ngắn.

> **AI rút ngắn phần chuẩn bị. AI không rút ngắn phần quyết định.**

Đúng câu đã nói từ buổi 01: **AI chuẩn bị · con người chốt.**

### [7] Hôm nay ta vào từ bước 3

Bước 1 và 2 — brainstorm với ghi chép — tôi đã làm sẵn cho cả lớp rồi.
Tài liệu nằm trong dự án mẫu, lát nữa mở ra xem.

Nên hôm nay lớp vào thẳng **bước 3**: có tài liệu trong tay → ra màn hình → ra prototype.

---

## Phần 3 — Bộ tài liệu đã có sẵn *(≈25 phút)*

### [8] Dự án mẫu — nền tảng Hoá đơn điện tử

Cả khoá từ đây tới buổi 10 dùng **một dự án duy nhất**: nền tảng **SaaS Hoá đơn điện tử**.

Không phải ví dụ bịa. Nó tuân thủ thật: **NĐ 123/2020 · NĐ 70/2025 · TT 78/2021 · TT 32/2025**.

Vì sao chọn HĐĐT: nghiệp vụ ai cũng từng nhìn thấy hoá đơn, nhưng luật thì chặt — chỗ nào mơ hồ là
lòi ra ngay. Rất hợp để tập đọc tài liệu.

### [9] Chín module

| Mã | Module | | Mã | Module |
|---|---|---|---|---|
| `AUTH` | Xác thực & truy cập | | `RPT` | Báo cáo |
| `REG` | Đăng ký phát hành | | `CAT` | Danh mục |
| `INV` | **Hoá đơn đầu ra** ← hôm nay | | `SYS` | Hệ thống |
| `ERR` | Xử lý sai sót | | `SUP` | Hỗ trợ |
| `TXN` | Lịch sử truyền nhận | | | |

Hôm nay cả lớp làm **`INV` — Hoá đơn đầu ra**, route `#/hoa-don`. Đây là lõi của sản phẩm.

### [10] Tài liệu nằm ở đâu

```
einvoice-sample/
├── docs/
│   ├── 01-project/      DOC-01 vision · DOC-02 stakeholder · DOC-03 BRD
│   ├── 03-modules/
│   │   └── invoice/     DOC-04 quy tắc · DOC-05 kịch bản · DOC-06 đặc tả · DOC-10 ERD
│   ├── 04-platform/     DOC-08 SAD · nguyên tắc dùng Jarvis
│   └── 05-traceability/ trace-matrix.md · doc-registry.md
├── jarvis/              platform — React 19 + .NET 9
├── frontend/            ← chỗ prototype của chúng ta sẽ nằm
└── memory/              decision-log · open-questions
```

Mỗi module đủ bốn file. Hôm nay chỉ mở **ba file** trong `docs/03-modules/invoice/`.

### [11] Đọc tài liệu theo trục, đừng đọc từ đầu tới cuối

Đây là chỗ nhiều người mất thời gian nhất: mở tài liệu ra đọc tuần tự từ dòng một.

Đừng. **Đọc theo trục**, và trục đi ngược:

```
Chọn 1 kịch bản  →  xem nó đẻ ra chức năng nào  →  xem chức năng trỏ về quy tắc nào
   DOC-05 UC            DOC-06 FR                        DOC-04 BR
```

Ba file, mỗi file đọc đúng một lát cắt. Không file nào đọc hết.

### [12] `DOC-05` — chọn một kịch bản

Module `INV` có **15 kịch bản**, từ `INV-UC-001` tới `INV-UC-015`.

Hôm nay lấy **`INV-UC-002` — Lập hoá đơn mới**. Luồng chính của nó:

| Bước | Làm gì |
|---|---|
| 1 | Chọn ký hiệu hoá đơn |
| 2 | Bấm **Tạo mới (F4)** |
| 3 | Nhập thông tin chung: ngày HĐ, tiền tệ, tỷ giá, hình thức thanh toán |
| 4 | Thông tin bên bán — mặc định từ Hệ thống, cho sửa |
| 5 | Nhập **MST người mua** → Tìm kiếm → điền tên, địa chỉ, email |
| 6 | Thêm dòng hàng hoá: tên, SL, đơn giá, %VAT → máy tính thành tiền và thuế |
| 7 | Bấm **Lưu** → hoá đơn trạng thái **Chờ ký** |

Bảy bước. Đây chính là thứ lát nữa phải bấm được trên màn hình.

### [13] `DOC-06` và `DOC-04` — hai lát cắt còn lại

`INV-UC-002` đẻ ra **5 chức năng**, đọc trong `DOC-06`:

| FR | Chức năng |
|---|---|
| `INV-FR-02` | Lập HĐ mới (F4): ký hiệu, ngày, tiền tệ, tỷ giá, HTTT |
| `INV-FR-03` | Điền mặc định bên bán từ thông tin DN, cho sửa |
| `INV-FR-04` | Tra cứu người mua theo MST |
| `INV-FR-05` | Nhiều dòng HHDV, tính thành tiền và thuế tự động |
| `INV-FR-06` | Lưu trạng thái **Chờ ký** trước khi ký gửi |

Và chúng trỏ về quy tắc trong `DOC-04` — module này có **6 quy tắc**, hai cái đụng tới hôm nay:

- **`INV-BR-04`** — nhập MST người mua thì tra tên, địa chỉ từ dữ liệu Cơ quan thuế
- **`INV-BR-06`** — trạng thái: **Chờ ký → Thành công (có mã) / Có lỗi (xem chi tiết)**

Ba trạng thái đó lát nữa phải nhìn thấy trên màn hình. Nhớ lấy.

---

## Phần 4 — Thực hành 1: từ kịch bản ra màn hình *(≈25 phút)*

### [14] Việc của bước này

Chưa code gì cả. Bước này chỉ trả lời: **`INV-UC-002` cần những màn hình nào?**

Và quan trọng hơn — **bắt AI nói ra trước**, để mình nhìn và sửa, trước khi nó kịp sinh ra hàng trăm
dòng giao diện sai hướng.

### [15] Prompt 1 — liệt kê màn hình

```
Phase: requirements · module invoice
@docs/03-modules/invoice/DOC-05-use-cases.md
@docs/03-modules/invoice/DOC-04-business-rules.md

Đọc INV-UC-002. Liệt kê các màn hình cần có để đi hết luồng chính 7 bước.
Mỗi màn hình ghi: tên · phục vụ bước nào · trỏ về quy tắc nào.

Chỉ liệt kê. CHƯA sinh code. CHƯA tự thêm màn hình ngoài luồng.
```

Hai dòng cuối là hai dòng đáng tiền nhất. Không có chúng, AI sẽ vừa liệt kê vừa code luôn, và thêm
cho bạn mấy màn hình **nó nghĩ là dự án nào cũng cần**.

### [16] Kết quả mong đợi

Danh sách khoảng **ba tới bốn màn hình**, đại ý:

| Màn hình | Bước | Trỏ về |
|---|---|---|
| Danh sách hoá đơn | điểm vào | `INV-UC-001` |
| Form lập hoá đơn | 1–4 | `INV-FR-02` · `INV-FR-03` |
| Khối thông tin người mua *(có nút Tìm kiếm MST)* | 5 | `INV-BR-04` |
| Bảng dòng hàng hoá | 6 | `INV-FR-05` |

Nếu AI đẻ ra màn hình **không trỏ về đâu** — ví dụ "Dashboard thống kê hoá đơn" — thì **xoá**.
Không kịch bản nào yêu cầu nó.

### [17] ✅ Mốc kiểm tra 1

> **Làm được mới đi tiếp:**
> Mỗi màn hình trong danh sách **trỏ về được một bước** của `INV-UC-002` hoặc một quy tắc `INV-BR`.
> Màn hình nào không trỏ về đâu → xoá khỏi danh sách.

*(Đi một vòng lớp. Ai chưa ra thì chạy lại prompt 1.)*

---

## Phần 5 — Thực hành 2: vibe code ra prototype *(≈30 phút)*

### [18] Không vẽ trên giấy — dựng thẳng cái bấm được

Nền đã dựng từ buổi 05. Trong dự án có sẵn bộ kit giao diện **`@jarvis/core`** — đã có sẵn
layout trang quản trị, bảng dữ liệu, form, nút, thông báo.

Nghĩa là **không ai phải vẽ nút từ đầu**. Việc còn lại chỉ là ghép đúng thứ tự theo kịch bản.

| Cần gì | Kit có sẵn |
|---|---|
| Khung trang quản trị | `AdminLayout` |
| Bảng danh sách hoá đơn | `DataTable` |
| Lọc theo cột | `queryBuilder` |
| Xem in hoá đơn | `CraftPdf` |

### [19] Prompt 2 — dựng prototype

```
@.cursor/skills/minipower-frontend-crud-react/SKILL.md
@docs/03-modules/invoice/DOC-05-use-cases.md

Dựng prototype cho INV-UC-002 vào frontend/src/features/invoice/

- Dùng kit @jarvis/core: AdminLayout, DataTable, form
- Dữ liệu GIẢ, chưa nối API backend
- Bấm được trọn luồng: danh sách → Tạo mới (F4) → nhập → Lưu → Chờ ký
- Hiện đủ ba trạng thái: Chờ ký · Thành công · Có lỗi  (INV-BR-06)

Không sửa gì trong thư mục jarvis/.
```

Dòng cuối là luật của dự án: **Jarvis là nền, chỉ mở rộng, không sửa vào trong**.

### [20] Trong lúc máy chạy — nói về chuyện "dữ liệu giả"

Có người sẽ hỏi: prototype dữ liệu giả thì đưa khách xem làm gì?

Đưa được. Vì thứ khách cần trả lời ở bước này **không phải** *"số liệu đúng chưa"* mà là:
*"luồng này có giống cách tôi làm việc không?"*

Số liệu thật là chuyện của phase sau. Hỏi sai câu, khách sẽ soi sai chỗ.

### [21] Bấm thử — và bấm cả đường đi xấu

Chạy lên, bấm hết luồng chính bảy bước.

Rồi bấm thêm mấy thứ này — đây là chỗ AI hay bỏ sót nhất:

- Lưu khi **chưa nhập MST người mua** → có báo gì không?
- Hoá đơn trạng thái **Thành công** → bấm Sửa xem có **chặn** không *(`INV-BR-01`)*
- Danh sách rỗng → màn hình trông thế nào?

AI sinh giao diện thì gần như luôn chỉ sinh **đường đi đẹp**. Đường đi xấu phải đi bắt.

### [22] ✅ Mốc kiểm tra 2

> **Làm được mới đi tiếp:**
> Mở trình duyệt, đi **trọn vẹn từ danh sách → Tạo mới → nhập → Lưu**, và nhìn thấy hoá đơn vừa tạo
> nằm trong danh sách với trạng thái **Chờ ký**.

*(Ai xong giơ tay. Chưa xong thì xem lỗi ở bước nào, chạy lại prompt 2 với mô tả lỗi.)*

---

## Phần 6 — Đủ chưa thì đem cho khách *(≈12 phút)*

### [23] Danh sách kiểm prototype — 5 điều

| # | Kiểm | Không đạt nghĩa là |
|---|---|---|
| 1 | Mỗi kịch bản có **ít nhất một màn hình** | Sót màn hình |
| 2 | Mỗi màn hình **trỏ về kịch bản / quy tắc** | Màn hình thừa |
| 3 | **Đi được** từ đầu đến cuối một nghiệp vụ | Thiếu bước ở giữa |
| 4 | Dùng **đúng kit `@jarvis/core`**, không tự chế | Mỗi module một kiểu |
| 5 | Có màn hình cho **đường đi xấu** — báo lỗi, chặn sửa, danh sách rỗng | Chỉ vẽ đường đi đẹp |

Điều 5 là điều hay rụng nhất. Đó cũng là điều khách hay hỏi nhất khi ngồi bấm.

### [24] Hai chỗ confirm — chỗ duy nhất AI không làm thay

Quay lại mạch sáu bước đầu buổi. Hai bước in đậm giờ tới lượt:

**Confirm định hướng** *(bước 4)* — đưa danh sách màn hình, hỏi: *"luồng này có giống cách anh chị
đang làm không?"* Sai hướng thì sửa ở đây rẻ nhất.

**Confirm prototype** *(bước 6)* — **đặt máy trước mặt khách và để họ tự bấm**. Đừng demo hộ.
Người demo hộ luôn vô tình bấm đúng đường đẹp.

Khách **không đọc đặc tả**. Khách **nhìn màn hình**. Cho họ gật bằng mắt trước, rồi mới bàn bằng chữ.

### [25] Nhưng hôm nay chưa ký gì cả

Nói rõ để không ai hiểu nhầm:

| Cổng | Chốt gì | Trạng thái |
|---|---|---|
| 1 | BRD | ✅ Đã ký cuối buổi 04 |
| 2 | Quy tắc nghiệp vụ | ⬜ Chưa — buổi 07 |
| 3 | Prototype | ⬜ Chưa — buổi 07 |
| 4 | Đặc tả chức năng | ⬜ Chưa — buổi 07 |

Prototype hôm nay là **nháp để nhìn**, không phải bản đã duyệt. Buổi 07 soi xong mới ký.

---

## Phần 7 — Tổng kết *(≈8 phút)*

### [26] Mang về gì

Ba thứ, và thứ thứ ba là thứ dùng lại được nhiều nhất:

1. **Prototype `INV` chạy được** trên máy mình
2. Cách **đọc tài liệu theo trục** `UC → FR → BR` — không đọc tuần tự
3. **Hai prompt** — liệt kê màn hình, rồi dựng prototype — đổi tên module là dùng cho module khác

Và một câu để nhớ:

> **AI rút ngắn phần chuẩn bị. Phần quyết định vẫn là của người.**

### [27] Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Chọn **một module khác** trong 9 module *(gợi ý: `CAT` danh mục — nhẹ nhất)* | Tên module |
| 2 | Đọc theo trục: chọn **1 kịch bản** trong `DOC-05`, lần ra FR và BR của nó | 3 dòng ghi chú |
| 3 | Chạy **prompt 1** → danh sách màn hình, mỗi màn hình **trỏ về được** | Danh sách |
| 4 | Chạy **prompt 2** → prototype bấm được trọn một luồng | Ảnh chụp màn hình |
| 5 | Tự chấm theo **danh sách kiểm 5 điều**, ghi rõ điều nào chưa đạt | Bảng tự chấm |
| 6 | Bấm thử **ít nhất 2 đường đi xấu**, ghi lại cái nào chưa có màn hình | 2 dòng |
| 7 | Đẩy lên GitHub *(repo đã tạo từ buổi 04)* | Link repo |

> **Nộp trước buổi 07 hai ngày** — để chọn bài đem lên chữa tại lớp.
> **Chưa ký cổng nào** — tất cả còn là nháp.

### [28] Buổi sau

👉 **Buổi 07 — Chốt yêu cầu:** soi lại tài liệu và prototype theo danh sách kiểm, sửa, rồi
**tự ký ba cổng** — đóng phase Requirements.

Hôm nay các bạn làm ra. Buổi sau các bạn **chịu trách nhiệm** về thứ mình làm ra.
