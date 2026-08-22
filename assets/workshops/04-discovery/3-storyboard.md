# Giai đoạn 3 — Storyboard (Bảng phân cảnh)

> Bản đồ **23 slide** của deck `docs/workshops/04-discovery/index.html`. Đã chốt.
> Deck kiểu **text**, dùng `_shared/css/slides.css` + **controller riêng** hỗ trợ `.reveal`.

## Ngôn ngữ hình ảnh — học từ buổi 03

| Thiết bị | Dùng làm gì | Số lượng |
|---|---|---|
| **`.cover-bg`** | Nền SVG mờ `.09` cho slide bìa — **không chữ** | 1 |
| **`.big-q`** | Slide câu hỏi lớn *(slide 6 · 7)* | 2 |
| **`.reveal`** | Hỏi trước → đáp sau; bấm tiếp mới hiện *(slide 9 · 12 · 14 · 16 · 17 · 18)* | 6 |
| **`.stepper`** | Ba nhóm câu hỏi hiện suốt phần 4, nhóm đang nói sáng lên | 8 |
| **`.concept`** | Hai cột: chữ trái, hình phải | 4 |
| **`svg`** | Hình vẽ tay trong HTML *(1 nền bìa + 5 hình minh hoạ)* | 6 |
| **`.afternote`** | Câu chốt viền trái xanh | 6 |
| **`.prompt`** | Khối prompt copy được *(11 prompt bài tập + 1 đoạn demo `Phase:`)* | 12 |

## Luật dựng slide

- **Không dòng "Phần N · X phút"**, **không badge chỉ đạo sân khấu** *(🙌 Lớp làm · 🖥 Làm mẫu đã gỡ hết)*.
  Chỉ còn badge `🔑` đánh dấu slide bài học.
- **Không dòng "→ bấm tiếp"** — câu hỏi tự làm tín hiệu.
- **Không mốc kiểm tra** — buổi này là buổi trình bày, phần tay chân dồn vào bài tập.
- **Nền SVG chỉ được có chữ khi lặp lại đúng chữ trong `h1`** *(như buổi 03)*; khác chữ là thành lỗi chồng chữ.
- Mọi nội dung **căn giữa màn hình**; riêng code · ô bảng · mục danh sách · thẻ · afternote giữ **canh trái**.
- **Không** Brainstorm · ADR · Plan · môi trường · code · thuật ngữ kiến trúc · `jarvis` · "scaffold".

## Bản đồ phần → slide

| Phần | Nội dung | Slide | Thời lượng gợi ý |
|---|---|---|---|
| 1 · Mở | Bìa | 1 | — |
| 2 · Ba tài liệu buổi 03 | 2–6 | | 25' |
| 3 · Hai luật gõ prompt | 7–10 | | 25' |
| 4 · Ba nhóm câu hỏi | 11–18 | | 45' |
| 5 · Kết & giao bài | 19–23 | | 15' |

*(+10' hỏi đáp = 120'.)*

---

## Danh sách slide

| # | Slide | Thiết bị | Nội dung chính |
|---|---|---|---|
| 1 | **Bìa** | cover-bg | h1 "Khám phá" / grad "cùng Minipower" · nền SVG ba hộp nối nhau, không chữ · tag "VIBE CODING" |
| 2 | **Bài tập buổi 03 ra cái gì?** | svg · bảng | Bảng DOC-01/02/03 → *trả lời câu gì* (trên) · cây `docs/01-project/` (dưới) |
| 3 | **DOC-01 đủ trông thế nào?** | bảng | 4 mục: 3 vấn đề · 4 mục tiêu `G-001` · 6 lợi ích vs chi phí · **8 rủi ro `R-001`** |
| 4 | **DOC-02 đủ trông thế nào?** | bảng | 3 mục: 2 `SH-001` · 3 bản đồ quyền lực × quan tâm · **4 RACI — chữ A = người chốt** |
| 5 | **DOC-03 (BRD) đủ trông thế nào?** | bảng | 5 mục: 3 `BO` · 4 phạm vi · 7 `BRQ` · 8 `BR` · **9 Ràng buộc** |
| 6 | **Bạn đã có đủ 3 tài liệu này chưa?** | big-q | Câu hỏi để lớp tự đối chiếu |
| 7 | **Hỏi Minipower về dự án** | big-q · 2 thẻ | Luôn phải cho biết hai thứ: *đang ở giai đoạn nào* `Phase` · *đang hỏi tài liệu nào* `scope · @` |
| 8 | **Luật 1 — khai phase** | concept + svg · prompt | Hình 6 giai đoạn, `discovery` sáng · vì sao phải khai |
| 9 | **Luật 2 — có scope** 🔑 | bảng · reveal | **Minipower không soi đều tay** — bảng 3 ca: typo *(qua)* · viết lại module *(chặn, liệt kê thiếu gì)* · đủ scope *(qua)*. Đáp: nối bài hallucination buổi 03 |
| 10 | **Prompt đúng có ba phần** | 3 thẻ · prompt ×3 | `/minipower` → `Phase:` → `@đường-dẫn` · ba ví dụ thật cho DOC-01/02/03 |
| 11 | **Ba nhóm câu hỏi** | stepper | Giới thiệu bộ ba |
| 12 | **Nhóm 1 — hai câu tiến độ** | stepper · prompt ×2 · reveal | Đáp: câu 2 cho **danh sách việc phải bù** |
| 13 | **Drive cất file — Minipower biết liên quan** | stepper · concept + svg | Hình: Drive rời rạc ↔ Minipower nối nhau |
| 14 | **Ba mã BO · BRQ · BR** 🔑 | stepper · bảng · reveal | Đáp: ví dụ đơn nghỉ phép cho cả ba mã |
| 15 | **Truy ngược trong BRD** | stepper · prompt | Lập bảng BRQ → BO |
| 16 | *(không tiêu đề)* **Hai câu quét** 🔑 | stepper · concept + svg · prompt ×2 · reveal | Hình BO/BRQ có 1 BO mồ côi (cam) + 1 BRQ mồ côi (đỏ). Đáp: **sót việc** / **làm thừa** |
| 17 | *(không tiêu đề)* **Nhìn về phía trước** 🔑 | stepper · prompt · reveal + svg | Đáp: **"chưa có" là đáp án đúng** + hình chuỗi `BO→…→test`, ba ô đầu sáng |
| 18 | *(không tiêu đề)* **Nhóm 3 — điều hướng** | stepper · prompt ×2 · reveal | Đáp: rút gọn được nhưng phải biết rút gì; hai chỗ không được rút |
| 19 | **Hai quy tắc mang về** | kicker *Tổng kết* · 2 thẻ | Không hỏi trống · AI soạn, mình ký |
| 20 | **Bài tập về nhà** | bảng · afternote | 4 nhóm → 3+2+4+2 = **11 kết quả** |
| 21 | **Nộp bài qua GitHub** | concept | 4 bước chuẩn bị (trái) · 6 lệnh git (phải) · cảnh báo không đẩy khoá bí mật |
| 22 | **11 prompt cần chạy** | 2 thẻ | Danh sách kiểm 1→11, chia 4 nhóm |
| 23 | **Hướng dẫn dành cho bạn** | bảng | 3 triệu chứng → nguyên nhân → xử lý |

---

## Slide mang bài học — chỗ giảng viên chậm lại

**9 · 14 · 16 · 17** — đều có `.reveal`, nhịp đã tự chậm: nêu vấn đề, chờ lớp nghĩ, rồi mới mở.

**Slide 17** phải nói rõ kẻo lớp tưởng Minipower hỏng: câu trả lời *"chưa có FR nào"* là **đúng**.

**Slide 4 và 5** đáng dừng thêm một nhịp — RACI *(chữ A = người chốt)* và mục **Ràng buộc**
đều nối thẳng sang buổi 05.
