# Giai đoạn 3 — Storyboard (Bảng phân cảnh)

> Bản đồ **14 slide** của deck `docs/workshops/05-chuan-bi-moi-truong/index.html`.
> Deck kiểu **text**, dùng `_shared/css/slides.css` + `_shared/js/slides.js`.

## Kiểu buổi — **THUẦN KỸ THUẬT**

Chỉ **giới thiệu và hướng dẫn**. **Không** có `.reveal`, không có khối *Hỏi lớp → Chờ → Reveal* —
khác hẳn buổi 04. Nhịp giữ bằng **prompt · mốc kiểm tra · bảng thao tác**.

## Ngôn ngữ hình ảnh

| Thiết bị | Dùng làm gì | Số lượng |
|---|---|---|
| **`.cover-bg`** | Nền SVG mờ `.09` — ba hộp nối nhau, chữ **lặp đúng chữ trong `h1`** *(theo buổi 03)* | 1 |
| **`.roadmap`** | Lộ trình 10 buổi · ô đang học nhấp nháy · `.code` tô vàng buổi có code | 1 |
| **`.bigcard` + `ul.ticks`** | Khối ưu điểm có dấu tích xanh | 1 |
| **`.stackcard` + `ul.mini`** | Bốn cột Jarvis *(slide 6)* · ba cột lý do chọn công nghệ *(slide 7)* | 7 |
| **`.prompt`** | Khối prompt copy được *(biến thể `.sm` cho prompt dài)* | 3 |
| **`pre.tree` trong `.fig`** | Cây thư mục làm hình minh hoạ *(slide 20)* | 1 |
| **`.moc`** | Mốc kiểm tra viền xanh lá | 0 |
| **`.chot`** | Câu chốt viền trái | 1 |
| **`.concept` + `svg`** | Hai cột: chữ trái, hình phải — *không tiêu chuẩn vs có tiêu chuẩn* | 2 |
| **`pre.tree`** | Cây thư mục bốn nhánh *(slide 9)* | 1 |
| **`.afternote`** | Ghi chú viền trái xanh dương | 9 |
| **`.warnbox` · `.goodbox`** | Hộp cảnh báo · hộp tin tốt | 1 |
| **`.beat.hands`** | Badge `🖥 Lớp làm · N phút` | 3 |
| **`table.cmp`** | Bảng đối chiếu | 9 |

## Luật dựng slide

- **Không `.reveal`** — buổi kỹ thuật, không giấu đáp án.
- Mọi nội dung **căn giữa**; riêng code · ô bảng · mục danh sách · thẻ · afternote giữ **canh trái**.
- **Không dùng từ “khung”** — cả deck dùng **“tiêu chuẩn”** / **“bộ tiêu chuẩn”**.
- **Bìa theo đúng khuôn buổi 03 và 04**: `kicker` → `h1` hai dòng *(dòng hai `.grad`)* → `cover-tag`.
  Nền SVG bìa **không chữ** *(chỉ hộp và vòng tròn)* — chữ trong nền chỉ được phép khi lặp đúng chữ `h1`.
- Prompt dài dùng `.prompt.sm` để không tràn đáy.
- Đã kiểm **không slide nào tràn** ở 1024×640 · 1280×720 · 1440×810 · 1920×1080.

## Bản đồ chương → slide

| Chương | Slide | Phút |
|---|---|---|
| Mở đầu | 1–4 | 10 |
| 1 · Vì sao chọn bộ này | 5–7 | 20 |
| 2 · Thiết lập môi trường | 8 | 20 |
| 3 · Tạo không gian làm việc | 9–10 | 20 |
| 4 · Tạo dự án | 11–13 | 45 |
| Bài tập | 14 | 5 |

> **Không còn nhãn “Chương N”** trên slide — chỉ giữ 6 nhãn có nghĩa riêng:
> *Buổi 05 · MiniPower Academy · Lộ trình khoá học · Bốn việc của hôm nay ·
> Vì sao phải có buổi này · Tổng kết · Bài tập về nhà*.

---

## Danh sách slide

| # | Slide | Thiết bị | Nội dung chính |
|---|---|---|---|
| 1 | **Bìa** | cover-bg | kicker *"Buổi 05 · MiniPower Academy"* · h1 dòng hai **"Jarvis framework"** `.grad` · nền SVG **không chữ** · tag `VIBE CODING` |
| 2 | **Chúng ta đang ở đâu?** | roadmap | Lộ trình 10 buổi · ô buổi 05 nhấp nháy · **buổi 07 và 10 tô vàng** *(buổi có code — giảng viên nói miệng)* |
| 3 | **Bốn việc của hôm nay** | bảng | Cài công cụ · tạo không gian làm việc · tạo dự án · kiểm thử |
| 4 | **Không có tiêu chuẩn thì tám module ra tám phong cách** 🔑 | concept + svg · afternote | Ví von mười thợ · **nỗi đau #12 được giải** |
| 5 | **Bộ tiêu chuẩn là bản vẽ chung** 🔑 | bigcard + ul.ticks · 2 thẻ | **5 ưu điểm phía AI** + 2 ưu điểm phía người |
| 6 | **Jarvis framework — bộ tiêu chuẩn của khoá học** 🔑 | 4 stackcard · ul.mini | `backend · frontend · autotest · `**`skills`** — cột cuối là cột hay bị bỏ qua |
| 7 | **Vì sao .NET 9 · ReactJS · SQLite** 🔑 | 3 stackcard · ul.mini | Ba cột lý do **kèm phiên bản** · tiêu chí: **đơn giản cho MVP** |
| 8 | **Thiết lập môi trường** | beat · prompt · bảng | Prompt **kèm link bộ cài** + **hai lệnh kiểm** |
| 9 | **Bốn thư mục, bốn vai** | pre.tree · bảng | `ai-skills · jarvis · documents · hrm` |
| 10 | **Tạo không gian làm việc** | beat · prompt · bảng | Prompt 4 dòng gõ tay được + **4 dòng kiểm** |
| 11 | **Dự án gồm bốn phần** | bảng | backend · frontend · **unittest** · **autotest** |
| 12 | **Tạo dự án Hrm** 🔑 | prompt.sm · bảng | Prompt chính thức **5 mục** + bảng **ba dòng `@` trỏ vào ba thư mục** |
| 13 | **Kiểm thử** | beat · bảng | **Năm lệnh** build và chạy |
| 14 | **Bài tập về nhà** | bảng | **4 thứ phải nộp** — ảnh đăng nhập · ảnh Swagger · ảnh kết quả test · link GitHub buổi 04 |

---

## Slide cần chậm lại

**4 · 5 · 6 · 7 · 12** — năm chỗ mang bài học, không phải thao tác:

- **4** — vì sao cần tiêu chuẩn: có tiêu chuẩn thì tài liệu chuẩn hoá, tri thức dự án dễ xây
- **5** — năm ưu điểm phía AI; nhấn ba cái giữa: *sửa đúng chỗ · không xoá bừa · không thêm thừa*
- **6** — Jarvis: nhấn **cột cuối** *(bộ kỹ năng cho AI)* — thứ khiến buổi 10 chạy được
- **7** — ba cột lý do: nhấn *C# kiểu tường minh* và *cái giá của SQLite* bằng miệng, slide không ghi
- **9** — bốn thứ AI cần: kỹ năng · khung · trí nhớ · chỗ để làm
- **12** — prompt ngắn được là nhờ bốn thư mục chương 3; đây là chỗ trả công cho chương 3

## Việc còn lại

- Chưa có `homework.html`
- **Bảng “ba lỗi hay gặp”** khi cài đặt đã gỡ khỏi deck — chỉ còn trong kịch bản thô cho giảng viên
- **“Bốn thư mục = bốn thứ AI cần”** *(kỹ năng · tiêu chuẩn · trí nhớ · chỗ để làm)* cũng đã gỡ khỏi deck —
  giảng viên nói bằng miệng ở slide 8
- **“Vì sao tạo sẵn hai thư mục kiểm thử”** cũng gỡ khỏi deck — nói bằng miệng ở slide 10
- **“Chỉ một file `Hrm.sln`”**, **“Nếu chưa chạy được”** — gỡ khỏi deck, chỉ còn trong kịch bản thô
- **Cả chương 5 “đi một vòng cấu trúc”** đã bỏ — 15' dồn vào chương 4
- `minipower-sample` hiện còn `hrm/Hrm.sln` — trạng thái cũ, chưa khớp prompt mới
  *(prompt yêu cầu `.sln` nằm ngoài `hrm/`)*
