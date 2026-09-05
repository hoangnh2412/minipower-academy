# Workshop 5
# Chuẩn bị môi trường — dựng nền trước khi xây

> **Giai đoạn 2 (raw).** **⚠️ Repo tham khảo và repo demo chỉ dùng để soạn — không bê vào slide.**
>
> **Kiểu buổi:** thuần kỹ thuật — **chỉ giới thiệu và hướng dẫn**, không có khối hỏi–đáp với lớp.

## Thời lượng
120 phút — 30' giới thiệu + 85' lớp làm + 5' tổng kết

## Bốn chương
1 · Vì sao chọn bộ này *(20')* · 2 · Thiết lập môi trường *(20')* ·
3 · Tạo không gian làm việc *(20')* · 4 · Tạo dự án *(45')*

## Phase Minipower
Không thuộc phase nào — đây là buổi chuẩn bị máy móc cho nửa sau khoá học.

## Chuẩn bị của giảng viên
- **Repo mốc** đã dựng sẵn, chạy được — cho ai cài hỏng
- Ba prompt của buổi đã chạy thử thật, để sẵn chỗ cho lớp copy
- Máy chiếu để lớp đối chiếu từng bước

---

# Mở đầu *(10')*

## Chúng ta đang ở đâu

*(Chiếu lộ trình 10 buổi.)*

Bốn buổi đầu làm tài liệu — chưa đụng tới một dòng code nào, chưa cài gì cả.
Từ hôm nay bắt đầu đụng tới máy.

Hai ô **tô vàng** là hai buổi có code: **buổi 07** dựng prototype, **buổi 10** AI viết code
cho toàn bộ sản phẩm. Còn lại vẫn là làm tài liệu.

## Bốn việc của hôm nay

| # | Việc | Cách làm |
|---|---|---|
| 1 | Cài công cụ | **Prompt** — AI kiểm máy và chỉ lệnh cài |
| 2 | Tạo không gian làm việc | **Prompt** — AI tạo bốn thư mục, tải hai bộ tiêu chuẩn về |
| 3 | Tạo dự án | **Prompt** — AI dựng backend · frontend · unittest · autotest |
| 4 | Kiểm thử | Build cả bốn phần · chạy thử trên trình duyệt |

**Cả buổi chỉ gõ prompt và bấm chạy.**

## Vì sao phải có buổi này

Nếu ngay bây giờ bảo AI *"viết cho tôi phần mềm quản lý nhân sự, 8 module"* — nó viết được,
và rất nhanh.

Nhưng **mỗi module sẽ một kiểu**. Module này đặt luật nghiệp vụ ở chỗ này, module kia đặt chỗ khác.
Cách gọi dữ liệu mỗi nơi một khác. Tám module ra tám phong cách.

Chạy thì chạy. Nhưng sáu tháng sau có lỗi thì **không ai biết bắt đầu từ đâu**.

Như mười người thợ xây chung một khu nhà mà không có bản vẽ chung — xong rồi không ai
sửa được nhà của người khác.

Ngược lại, **mọi dự án dựng theo cùng một bộ tiêu chuẩn** thì tài liệu cũng chuẩn hoá theo —
**tri thức dự án dễ xây, dễ tra lại**. Đó là **nỗi đau #12** của buổi 01 được giải.

Buổi hôm nay dựng bộ tiêu chuẩn đó.

---

# Chương 1 — Vì sao chọn bộ này *(20')*

## Bộ tiêu chuẩn là bản vẽ chung

Khi mọi module cùng một hình dạng, **AI làm được năm việc mà nó không tự nghĩ ra được**:

| # | Có tiêu chuẩn thì AI |
|---|---|
| 1 | Đặt code **đúng cấu trúc dự án** |
| 2 | Sửa **đúng file, đúng hàm** — không rải rác mỗi nơi một ít |
| 3 | **Không xoá code cũ** khi chưa được phép |
| 4 | **Không viết thêm code thừa** khi chưa được phép |
| 5 | **Tuân thủ quy ước viết code** của dự án |

Ba việc giữa — *sửa đúng chỗ · không xoá bừa · không thêm thừa* — là ba thứ khiến người ta
sợ giao việc cho AI nhất. Bộ tiêu chuẩn là thứ chặn chúng lại.

Còn về phía người:

- **Đọc một module là hiểu được cả tám**
- **Con người dễ dàng follow AI để xử lý lỗi**

---

## Jarvis framework — bộ tiêu chuẩn của khoá học

Không phải một thư viện.

Là **bộ khuôn dựng sẵn** cho backend, frontend, autotest — và cho chính AI.

| backend *(.NET 9)* | frontend *(ReactJS)* | autotest *(Playwright)* | skills *(jarvis)* |
|---|---|---|---|
| **Năm lớp cố định** | **Bộ giao diện dựng sẵn** — nút, bảng, biểu mẫu | **Bộ chạy kiểm thử dựng sẵn** | **Mỗi phần có hướng dẫn riêng** cho AI |
| Sẵn **xác thực · phân quyền** | Sẵn **đăng nhập · tài khoản · phân vai** | Kiểm **cả luồng** như người dùng thật bấm | AI **đọc rồi làm theo**, không tự đoán |
| Sẵn **lưu tệp · bộ nhớ đệm · thông báo** | Sẵn **dashboard · quản lý tệp** | Là lưới bắt lỗi của **buổi 10** | Thứ khiến buổi 10 **chạy được** |
| Sẵn **trang tài liệu API** | | | |

Cột cuối là cột hay bị bỏ qua nhất. Người ta hay nghĩ framework chỉ để cho người dùng;
ở đây nó còn là **tài liệu cho máy đọc**.

---

## Ba lựa chọn, một tiêu chí chung

Trên đời có hàng chục ngôn ngữ, hàng chục thư viện giao diện, hàng chục loại cơ sở dữ liệu.
Khoá này chọn **.NET 9 · ReactJS · SQLite**, cả ba theo cùng một tiêu chí: **đơn giản cho MVP.**

| .NET 9 *(SDK 9.x)* | ReactJS *(Node 22 LTS)* | SQLite *(không cài gì)* |
|---|---|---|
| Tiêu chuẩn Jarvis viết trên .NET | Bộ giao diện Jarvis viết bằng React — có sẵn nút, bảng, biểu mẫu | ✓ **Một file** trong thư mục dự án — không cài, không cấu hình |
| **C# có kiểu tường minh** — sai kiểu là báo lỗi lúc dựng | Hệ sinh thái lớn nhất → AI sinh giao diện ít sai | ✗ Chỉ hợp **một người dùng, một máy** |
| Một bộ công cụ duy nhất: cài `dotnet` một lần | **Chia theo module** — giống cách chia module trong BRD buổi 04 | Đổi sang máy chủ thật = **một dòng cấu hình**, nhờ đi qua EF Core |
| AI sinh C# ít đoán mò — ngôn ngữ luật chặt | | |

Ba con số phiên bản là ba thứ lát nữa phải có trên máy: **SDK 9.x** và **Node 22**.
SQLite không phải cài gì — nó đi kèm khi dựng dự án.

---

# Chương 2 — Prompt cài công cụ *(20')*

## Thiết lập môi trường

```text
Kiểm tra máy đã cài .Net 9 và Node 22 chưa?

Nếu chưa thì tải bộ cài theo hệ điều hành và cài đặt:
- .Net 9: https://dotnet.microsoft.com/en-us/download/dotnet/9.0
- Node 22: https://nodejs.org/en/download

Sau khi cài xong, tự kiểm tra lại kết quả, sau đó hướng dẫn tôi cách kiểm tra
```

## 🖥 Lớp làm — 15'

Chạy prompt trên, cài theo hướng dẫn, rồi tự kiểm bằng hai lệnh:

| Kiểm bằng lệnh | Ra gì là đạt |
|---|---|
| `dotnet --list-sdks` | Có dòng bắt đầu bằng `9.` |
| `node -v` | `v22.x` |

**Ai thấy đủ hai dòng này thì giơ tay.**


## Ba lỗi hay gặp *(giảng viên nắm, không lên slide)*

| Triệu chứng | Nguyên nhân thường gặp |
|---|---|
| Gõ `dotnet` báo không tìm thấy lệnh | Cài xong chưa mở lại cửa sổ dòng lệnh |
| `node -v` ra bản cũ hơn 22 | Máy có sẵn bản cũ — gỡ, hoặc dùng trình quản lý phiên bản Node |
| Máy công ty chặn cài đặt | Dùng **repo mốc**, xử lý quyền sau buổi |

Ai kẹt quá 10 phút thì chuyển sang dùng repo mốc, không để mất cả buổi.

---

# Chương 3 — Prompt dựng chỗ làm việc *(20')*

## Bốn thư mục, bốn vai

Trước khi tạo dự án, phải có **chỗ để đặt nó**. Cấu trúc của cả khoá:

```
workspace/
├── ai-skills/     ← bộ kỹ năng của AI
├── jarvis/        ← bộ tiêu chuẩn
├── documents/     ← tri thức dự án
└── hrm/           ← sản phẩm
```

| Thư mục | Vai | Nội dung |
|---|---|---|
| **ai-skills** | AI **biết làm gì** | Tải về từ repo `ai-skills` — chứa Minipower và bộ kỹ năng Jarvis |
| **jarvis** | AI **đặt code theo hình gì** | Tải về từ repo `jarvis` — tiêu chuẩn backend và bộ giao diện |
| **documents** | AI **biết mình đang làm dự án gì** | Toàn bộ tài liệu từ buổi 03 tới giờ, và tài liệu các buổi sau |
| **hrm** | **Sản phẩm** | Toàn bộ mã nguồn — tạo ở chương sau |

## Prompt

```text
Tạo không gian làm việc tại <đường-dẫn> gồm 4 thư mục:

- ai-skills: clone từ https://github.com/hoangnh2412/ai-skills
- jarvis: clone từ https://github.com/hoangnh2412/jarvis
- documents: chứa tài liệu dự án của tôi
- hrm: để trống

Xong thì in cây thư mục để tôi kiểm.
```

## 🖥 Lớp làm — 15'

Chạy prompt, rồi kiểm cây thư mục in ra:

| Kiểm | Đạt khi |
|---|---|
| `ai-skills/` | Có `minipower/` và `jarvis/` bên trong |
| `jarvis/` | Có `frameworks/` và `modules/` |
| `documents/` | Có `docs/` chứa tài liệu buổi 03–04 của bạn |
| `hrm/` | Rỗng |

## Nói thêm bằng miệng *(không lên slide)*

Bốn thư mục này chính là **bốn thứ AI cần** để làm việc thay mình:
**kỹ năng · tiêu chuẩn · trí nhớ · chỗ để làm.**

Thiếu *kỹ năng* thì nó không biết cách. Thiếu *tiêu chuẩn* thì nó đặt code lung tung.
Thiếu *trí nhớ* thì nó bịa yêu cầu. Ba buổi vừa qua các bạn đã dựng cái thứ ba —
hôm nay dựng ba cái còn lại.

---

# Chương 4 — Prompt tạo dự án *(30')*

## Dự án gồm bốn phần

| Phần | Là gì | Vì sao cần |
|---|---|---|
| **backend** | Máy chủ xử lý nghiệp vụ và lưu dữ liệu | Nơi luật nghiệp vụ sống |
| **frontend** | Màn hình người dùng nhìn thấy | Nơi khách gật đầu bằng mắt *(buổi 07)* |
| **unittest** | Kiểm từng mảnh nhỏ của backend | **Lưới bắt lỗi tầng 1 của buổi 10** |
| **autotest** | Kiểm cả luồng như người dùng thật bấm | **Lưới bắt lỗi tầng 2 và 3 của buổi 10** |

## Vì sao tạo sẵn hai thư mục kiểm thử *(nói bằng miệng, không lên slide)*

Buổi 10 máy sẽ tự viết code và **tự chạy kiểm thử sau mỗi bước**. Không có chỗ sẵn thì máy vừa
viết code vừa phải nghĩ ra chỗ đặt kiểm thử — mỗi module một kiểu.
**Chuẩn bị chỗ trước, để sau này máy chỉ việc điền vào.**

## Prompt

```text
Dùng skill @ai-skills/jarvis/README.md và code @jarvis (không cài Jarvis từ NuGet).
1. Tạo project Hrm vào @hrm gồm 4 phần: backend, frontend, autotest, unittest.
2. Chỉ 1 file Hrm.sln, đặt trong folder hrm
3. Backend cài đặt sẵn Swagger, OTEL, Healthcheck, CORS
5. Kiểm tra backend đã hoạt động bao gồm cả healcheck, swagger
6. Kiểm tra frontend đã hoạt động
7. Kiểm tra autotest đã hoạt động
8. Kiểm tra unittest đã hoạt động
9. Gửi các lệnh để kiểm tra từng phần
```

## Ba dòng `@` trỏ vào ba thư mục

Prompt chỉ bốn câu, mà máy vẫn biết phải làm gì:

| Dòng trong prompt | Trỏ vào thư mục nào | Cho máy biết gì |
|---|---|---|
| `@ai-skills/jarvis/README.md` | **ai-skills** | Cách dựng project — **kỹ năng** |
| `@jarvis` | **jarvis** | Tiêu chuẩn để bám và tham chiếu — **hình dạng** |
| `@hrm` | **hrm** | Chỗ đặt sản phẩm |

Đây là lý do chương 3 phải làm trước chương 4. Không có bốn thư mục thì prompt này
phải dài gấp mười lần — và vẫn sai.

## 🖥 Lớp làm — 25'

Chạy prompt, đợi máy dựng, rồi kiểm bằng năm lệnh:

| Kiểm gì | Lệnh |
|---|---|
| Build backend + unittest | `dotnet build hrm/Hrm.sln` |
| Build frontend | `cd hrm/frontend && npm install && npm run build` |
| Build autotest | `cd hrm/autotest && npm install && npm run build` |
| Chạy API | `dotnet run --project hrm/backend/Hrm.Host` → mở trang tài liệu API |
| Chạy giao diện | `cd hrm/frontend && npm run dev` → màn hình đăng nhập |

## Nếu chưa chạy được *(giảng viên nắm, không lên slide)*

1. Đọc **thông báo lỗi thật** — không đoán
2. Đưa nguyên văn thông báo lỗi cho AI, kèm câu *"giải thích trước, đừng sửa vội"*
3. Vẫn không xong → lấy **repo mốc** về chạy, xử lý máy mình sau buổi

Ba bước này sẽ dùng lại nguyên xi ở buổi 10 khi máy sinh code hỏng.

## Chỉ một file `Hrm.sln` *(nói bằng miệng, không lên slide)*

Một solution là **một danh sách project mở chung trong máy**. Nhiều solution là cách nhanh nhất
để mỗi người mở một kiểu và build ra kết quả khác nhau.

---

# Tổng kết *(5')*

👉 Buổi 06: bóc yêu cầu ra chi tiết cho từng module.

---

# Bài tập về nhà

Làm trên **dự án của chính mình**. Bốn thứ phải nộp:

| # | Nộp gì |
|---|---|
| 1 | Ảnh chụp **giao diện trang đăng nhập** của frontend |
| 2 | Ảnh chụp **truy cập được Swagger** |
| 3 | Ảnh chụp **kết quả test** |
| 4 | Code đẩy lên **GitHub repo đã tạo từ buổi 04** |

---

# GHI CHÚ CHO ANH HOÀNG

1. **Prompt chương 4 là bản chính thức của anh Hoàng** *(`minipower-sample/prompt-init.md`)*.
   Solution đặt **trong** `hrm/`, khớp trạng thái hiện tại của `minipower-sample`.
2. **Hai prompt chương 2 và 3** em soạn — anh chạy thử rồi chỉnh giúp em, nhất là bước chuyển
   thư mục tài liệu vào `documents/`.
3. **Chương 5 “đi một vòng cấu trúc” đã bỏ** — 15' đó dồn vào chương 4, vì cài đặt và tạo dự án
   thực tế hay tràn giờ. Nội dung cấu trúc *(backend năm lớp · frontend theo module · unittest vs
   autotest)* để giảng viên nói khi đi vòng hỗ trợ, không lên slide.
