# Minipower Academy — Lộ trình Vibe Coding (v3 · 10 buổi)

> Bản đồ toàn khoá **Vibe Coding với Minipower**. Mỗi buổi có thư mục riêng theo 5 giai đoạn
> pipeline: `assets/workshops/NN-slug/`.
> Đi cùng `assets/lo-trinh-tham-khao/curriculum-v1.md` (lộ trình AI Software Engineering — 16 buổi)
> dành cho học viên muốn đi sâu sau khoá này. Hai khoá dùng chung **buổi 01–02** làm cửa ngõ.
>
> **Cập nhật 2026-09-05** — v3 thay v2 (9 buổi). Thay đổi lớn: thêm buổi *Chuẩn bị môi trường*,
> tách nhịp **dạy → chốt** hai lần, chuyển vibe code về buổi cuối.

---

## Triết lý xuyên suốt (không buổi nào được phá)

```
AI = trợ lý ra quyết định   ·   Con người = người quyết định cuối cùng
```

- **Vibe code ra sản phẩm** bằng AI — nhanh, nhưng code theo **khung jarvis** để mọi module cùng
  một hình dạng: đọc một module là hiểu cả tám, có sự cố thì lần ra mà sửa.
- **Không dạy đọc code.** Học viên quản **tài liệu và yêu cầu**; máy lo phần viết code.
  Kiểm sản phẩm bằng ba thứ: **bấm theo tiêu chí nghiệm thu · đọc kết quả kiểm thử · đối chiếu ADR**.
- **Không** có buổi nào dạy "AI tự chạy dự án". AI chạy **giữa hai cổng**; **người ký ở mỗi cổng**.
- Minipower giữ vai **bộ nhớ & trợ lý dự án** xuyên suốt: mọi thứ học viên làm đều vào kho tri thức.

> **Stack khoá học:** backend **.NET 9 / C# (khung jarvis)** · frontend **ReactJS (kit jarvis)** ·
> dữ liệu **SQLite + EF Core**. Sản phẩm **chạy trên máy học viên**; code và tài liệu **đẩy lên GitHub**.

> **Gốc rễ từ 2 buổi đã chạy:** 12 nỗi đau (buổi 01) là vấn đề của **tri thức dự án**, không phải của AI;
> vòng đời **17 chặng / 6 nhóm** (buổi 02) cho thấy AI là **đồng nghiệp ở cả vòng đời**.

---

## Đối tượng

| Nhóm | Buổi bắt buộc |
|------|---------------|
| Người đã biết code (muốn vibe với AI) | 01–10 |
| Developer khởi động với AI | 01–10 |
| BA / PM | 01–10 |
| Tester / QA | 01–10 |
| Founder / Sinh viên | 01–10 |

> Tiên quyết: **đã qua buổi 01–02**. Khoá **không dạy code vỡ lòng và không dạy đọc code** —
> dạy cách **giao việc cho máy và nghiệm thu thứ máy làm ra**.

---

## Lộ trình 10 buổi

| # | Tên buổi | Phase Minipower | Cổng ký | Bài tập về nhà |
|---|----------|-----------------|---------|----------------|
| **01** | 12 nỗi đau & Minipower | — | — | Chọn dự án theo suốt khoá |
| **02** | Minipower là ai | Bản đồ 6 phase | — | Khởi tạo dự án trên GitHub |
| **03** | AI Foundation · Prompt & Context | **Discovery** | — | DOC-01 · 02 · 03 |
| **04** | Khám phá cùng Minipower | **Discovery** | 1 · Chốt BRD | 11 prompt soi ba tài liệu |
| **05** | Chuẩn bị môi trường | — | — | Cài xong · dựng nền · chạy được |
| **06** | Phân tích yêu cầu | **Requirements** | — | 32 tài liệu nháp + bảng truy vết |
| **07** | Chốt yêu cầu cùng Minipower | **Requirements** — đóng phase | 2 · 3 · 4 *(tự ký)* | Hoàn thiện prototype · tự ký ba cổng |
| **08** | Kế hoạch thực thi | **Architecture · Planning · Delivery** | — | ADR ×6 · DOC-14 · 15 · 16 |
| **09** | Chốt kế hoạch thực thi | đóng phần tài liệu | 6 · 7 *(tự ký)* | Sửa · tự ký hai cổng · chạy thử một Epic |
| **10** | Vibe code & Demo *(150')* | **Delivery** | — | Hoàn thiện sản phẩm |

**Nhịp khoá học:**

```
03 → 04   ba tài liệu tổng quát   →  1 chữ ký
05        dựng nền
06 → 07   32 tài liệu chi tiết     →  3 chữ ký
08 → 09   kiến trúc · kế hoạch · ca kiểm thử  →  2 chữ ký
10        bấm nút & demo
```

Hai cặp **dạy → chốt** đối xứng (06→07, 08→09), mỗi cặp kết bằng học viên **tự ký** trên dự án
của chính mình. Buổi 10 là buổi duy nhất máy viết code.

---

## Chi tiết từng buổi

### Buổi 01–02 — Cửa ngõ *(đã chạy)*
- **01 · 12 nỗi đau & Minipower:** nỗi đau 1→12 → cao trào *"đây không phải vấn đề AI, mà là vấn đề
  tri thức dự án"* → giới thiệu Minipower.
- **02 · Minipower là ai:** bản đồ 17 chặng / 6 nhóm; pipeline 6 phase × 19 DOC; thực hành khởi tạo dự án.

### Buổi 03 — AI Foundation & Prompt/Context Engineering *(đã chạy)*
- LLM · token · context window · hallucination; Prompt Engineering; Context Engineering.
- **Bài tập:** DOC-01 Tầm nhìn · DOC-02 Stakeholder · DOC-03 BRD.

### Buổi 04 — Khám phá cùng Minipower *(đã chạy 28/08/2026)*
- Soi lại ba tài liệu buổi 03 · **hai luật gõ prompt** (`Phase:` và `@scope`) · **ba nhóm câu hỏi**.
- **Cổng 1 · Chốt BRD.** Bài tập: chạy 11 prompt trên dự án mình.

### Buổi 05 — Chuẩn bị môi trường
- **Vì sao phải có khung dựng sẵn:** không có khung thì AI sinh mỗi module một kiểu, không ai đọc nổi.
- Cài **.NET 9 SDK · Node · kit Jarvis**; dữ liệu dùng **SQLite** (không cài gì).
- **Bảo AI dựng nền** — mốc kiểm tra: hiện được trang tài liệu API + màn hình đăng nhập.
- Đi một vòng cấu trúc ở mức bản đồ — không giảng kiến trúc.
- **Bài tập:** dựng nền cho dự án mình, chạy được, đẩy GitHub.

### Buổi 06 — Phân tích yêu cầu
- Bài toán **8 module × 4 tài liệu = 32 tài liệu**: làm song song mà không giẫm chân.
- Chuỗi **`BR → UC → SRS → AC`** và vì sao không đảo; yêu cầu phải **đo được** và có **tiêu chí âm**.
- **Mã ID quan trọng hơn nội dung** — trỏ mã, không chép nội dung; bảng truy vết + hai câu quét.
- **Fan-out** theo module: một lệnh, tám luồng, ngữ cảnh sạch; bốn ranh giới không được phá.
- **Bài tập:** 32 tài liệu nháp + bảng truy vết. *Chưa ký cổng nào.*

### Buổi 07 — Chốt yêu cầu cùng Minipower
- **Demo chốt phase** trên dự án mẫu → chữa bài 32 tài liệu theo **danh sách kiểm 11 lỗi**
  (nội dung · truy vết · **lỗi của việc làm với AI**).
- **Prototype** dựng bằng kit Jarvis — màn hình chạy được, không phải bản vẽ.
- **Cổng 2 · 3 · 4** — học viên **tự ký ở nhà** khi đã hoàn thiện, **không ghi nợ**.

### Buổi 08 — Kế hoạch thực thi
- **Kiến trúc (ADR ×6):** quyết công nghệ và kiến trúc tổng quan — **không đi sâu vào code**.
  Mục quan trọng nhất là **các phương án đã loại**.
- **Kế hoạch (DOC-14 · 15):** Epic · Story · Task; mỗi Task có dòng **XONG KHI** = danh sách mã tiêu chí;
  mỗi Story ghi rõ thuộc Epic nào.
- **Ca kiểm thử (DOC-16):** sinh từ tiêu chí nghiệm thu, **trỏ mã** chứ không chép; **mỗi Story ≥1 ca âm**.
  Cuối buổi **đếm và ghi lại tổng số ca**.
- **Bài tập:** làm cả ba. *Chưa ký cổng nào.*

### Buổi 09 — Chốt kế hoạch thực thi
- Chữa bài ba loại tài liệu; phần **ca kiểm thử dừng lâu nhất** — phân biệt **ca âm kỹ thuật**
  và **ca âm nghiệp vụ**.
- **Cổng 6 · 7** — học viên tự ký. Đây là **cổng cuối trước khi máy viết code**.
- **Bài tập:** sửa · ký · ghi tổng số ca · **chạy thử fan-out một Epic** *(bảo hiểm cho buổi 10)*.

### Buổi 10 — Vibe code & Demo *(150 phút)*
- **Vòng lặp ba tầng:** Story → Epic → toàn bộ. Cộng **bốn điều kiện dừng** — quan trọng nhất là
  *"AI không được sửa hoặc xoá ca kiểm thử"*.
- **Lớp bấm nút**; trong lúc máy chạy học **ba cách nghiệm thu không mở code** và bốc thăm câu hỏi.
- **Demo** sản phẩm vừa sinh ra ngay tại lớp.
- **Bài tập cuối:** hoàn thiện sản phẩm. **Không có buổi chữa bài — hỗ trợ qua group trao đổi.**

---

## Bản đồ tài liệu — dùng 12 trên 19 DOC

| DOC | Tên | Ra ở buổi |
|-----|-----|-----------|
| 01 · 02 · 03 | Tầm nhìn · Stakeholder · BRD | 03 |
| 04 · 05 · 06 · 07 | Quy tắc nghiệp vụ · Kịch bản · SRS · Tiêu chí chấp nhận *(×8 module)* | 06 |
| 19 | Prototype | 07 |
| 09 · 14 · 15 · 16 | ADR · WBS · Kế hoạch · Ca kiểm thử | 08 |

**Bảy DOC không dùng:** DOC-08 SAD · DOC-10 Tích hợp · DOC-11 Mô hình dữ liệu · DOC-12 API ·
**DOC-13 NFR** · DOC-17 Triển khai · **DOC-18 Yêu cầu thay đổi**.

Năm cái đầu **không cần cho MVP này**. Hai cái in đậm là **món nợ** — nói thẳng ở buổi 10,
ghi vào `memory/*/open-questions.md`.

## Bảy cổng — khoá đi qua sáu

| Cổng | Chốt gì | Ở buổi | Ai ký |
|------|---------|--------|-------|
| 1 | BRD | 04 | Tại lớp |
| 2 | Quy tắc nghiệp vụ | 07 | Học viên tự ký |
| 3 | Prototype | 07 | Học viên tự ký |
| 4 | SRS | 07 | Học viên tự ký |
| ~~5~~ | ~~Architecture (DOC-08 SAD)~~ | — | **Thay bằng ADR ở buổi 08** |
| 6 | Kế hoạch | 09 | Học viên tự ký |
| 7 | Ca kiểm thử | 09 | Học viên tự ký |

---

## Chuẩn đầu ra

Sau khoá, học viên:

- ✅ **Vibe code ra sản phẩm chạy thật** trên nền jarvis (.NET) + React + SQLite
- ✅ Đi trọn chuỗi **yêu cầu → kiến trúc → kế hoạch → ca kiểm thử → code**, mọi thứ truy vết được
- ✅ Biết **giao đề bài cho máy**: tiêu chí đo được · task có *XONG KHI* · ca kiểm thử là hợp đồng
- ✅ Biết **nghiệm thu mà không đọc code**: bấm theo tiêu chí · đọc kết quả kiểm thử · đối chiếu ADR
- ✅ Biết **đặt điều kiện dừng** cho máy và nhận ra khi AI sửa đề bài thay vì sửa bài làm
- ✅ **Quản lý tri thức dự án bằng Minipower** — mọi quyết định có tên người ký
- ✅ Dùng **Git/GitHub** — code và tài liệu nằm cùng một chỗ

---

## Rubric chấm bài *(công bố từ buổi 04, chấm trên bài nộp cuối khoá)*

| Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|----------|--------|--------|--------|
| **Nộp được** | Không đẩy gì lên | Đẩy lên GitHub nhưng thiếu | Đủ trên GitHub |
| **Cổng** | AI tự đi tiếp | Có quyết định nhưng người không đọc | **Năm cổng có tên người ký** |
| **Truy vết** | Không ghi gì | Ghi rời rạc | Yêu cầu → kế hoạch → kiểm thử → task truy được |
| **Bằng chứng** | Tin lời AI | Có chạy thử nhưng không ghi | Kiểm thử đạt · **tổng số ca không đổi** · có ca âm nghiệp vụ |

Tổng 8 điểm. Dưới 60% → làm lại trước khi áp vào dự án thật.

---

## Chuẩn bị mỗi buổi

**Giảng viên**
- Màn hình chia đôi: slide trái, IDE phải — dùng đúng dự án mẫu.
- **Dự án mẫu đi trước lớp một buổi** — buổi 07 và 09 phải có bản hoàn chỉnh để demo chốt phase.
- **Hai repo mốc dự phòng:** một đã dựng nền *(buổi 05)*, một đã fan-out code *(buổi 10)*.
- Bài tập buổi 06 và 08 **nộp trước buổi chữa bài 2–3 ngày** để chọn bài mẫu *(ràng buộc cứng)*.
- Buổi 10: **chạy song song trên dự án mẫu** để luôn có sản phẩm hoàn chỉnh trên màn chiếu.

**Học viên**
- Laptop + IDE (Cursor / Claude Code / OpenCode) có Minipower.
- Từ buổi 05: **.NET 9 SDK · Node.js · kit Jarvis**. Dữ liệu dùng SQLite — không cài gì thêm.
- Tài khoản **GitHub**.
- Một dự án thật để xây xuyên khoá.

---

## Phụ thuộc kỹ thuật cần xong trước

| # | Việc | Cần trước buổi |
|---|------|----------------|
| 1 | **Jarvis hỗ trợ SQLite** — scaffold hiện gắn cứng Npgsql (5 chỗ trong `skills/jarvis-dotnet/`) | 05 |
| 2 | **Kit Jarvis frontend cài được** + hướng dẫn để AI sinh màn hình theo kit | 05 · 07 |
| 3 | **Lệnh điều phối fan-out code** đã chạy thử thật | 10 |

---

## Quan hệ với curriculum v1 (AI Software Engineering)

| | v1 · SE (16 buổi) | v3 · Vibe Coding (10 buổi) |
|--|-------------------|----------------------------|
| Đối tượng | BA/PM/SA/QA/Dev có kinh nghiệm | Người mới hoặc đã biết code, muốn vibe với AI |
| Trọng tâm | AI trong toàn bộ SDLC (cổng đủ) | **Giao việc cho máy và nghiệm thu** (6/7 cổng) |
| Tài liệu | 19 DOC đầy đủ | **12 DOC** — bỏ SAD, tích hợp, data model, API, NFR |
| Đọc code | Có | **Không** |
| Stack | tuỳ dự án | jarvis (.NET) + React + SQLite |
| Dùng chung | Buổi 01–02 | Buổi 01–02 |

---

## Quy ước file trong repo academy

```
assets/
├── curriculum.md                  ← file này (v3 · Vibe Coding 10 buổi) — LỘ TRÌNH CHÍNH THỨC
├── lo-trinh-tham-khao/            ← lộ trình cũ/nháp/tham khảo
├── _shared/                       ← tài sản dùng chung mọi buổi
├── _template/                     ← khung 5 file giai đoạn
├── _archive/                      ← nội dung buổi của lộ trình cũ (không dùng)
└── workshops/NN-slug/             ← nội dung buổi theo 5 giai đoạn pipeline
    ├── 1-concept.md
    ├── 2-script-raw.md
    ├── 2-script-final.md
    ├── 3-storyboard.md
    └── 4-prompts.md
docs/workshops/NN-slug/            ← giai đoạn 5: deck xuất bản
├── index.html
├── homework.html
└── slides/{khung}/{n}.webp
```

### Bản đồ thư mục 10 buổi

| # | Slug | Trạng thái |
|---|------|-----------|
| 01 | `01-gioi-thieu` | đã chạy |
| 02 | `02-ai-dong-nghiep` *(docs: `02-minipower-la-ai`)* | đã chạy |
| 03 | `03-ai-foundation` | đã chạy |
| 04 | `04-discovery` | đã chạy 28/08/2026 |
| 05 | `05-chuan-bi-moi-truong` | kịch bản thô xong |
| 06 | `06-phan-tich-yeu-cau` | kịch bản thô xong |
| 07 | `07-chot-yeu-cau` | kịch bản thô xong |
| 08 | `08-ke-hoach-thuc-thi` | kịch bản thô xong |
| 09 | `09-chot-ke-hoach` | kịch bản thô xong |
| 10 | `10-vibe-code-demo` | kịch bản thô xong |
