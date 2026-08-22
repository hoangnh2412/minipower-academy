# Giai đoạn 1 — Ý tưởng & mục tiêu (Concept)

> Kim chỉ nam cho cả buổi. Bám `assets/curriculum.md` và triết lý: **AI chuẩn bị · Con người chốt**.
>
> **⚠️ Mọi nội dung nhắc tới Minipower phải khớp repo thật:**
> https://github.com/hoangnh2412/ai-skills (thư mục `minipower/`). Rà lần cuối 2026-08-22.
>
> **Trạng thái:** đã chốt · deck 23 slide tại `docs/workshops/04-discovery/index.html`.

## Chủ đề
**Khám phá cùng Minipower** — Soi lại **ba tài liệu** đã làm ở bài tập buổi 03 (DOC-01 · DOC-02 · DOC-03),
rồi học **hai luật gõ prompt** và **ba nhóm câu hỏi** để tự soi dự án của mình.

## Thông điệp chính (một câu)
*"Không ai lạc trong dự án vì thiếu tài liệu. Người ta lạc vì không biết hỏi tài liệu của mình."*

## Buổi 04 nằm ở đâu trong mạch vibe coding

```
Requirement  ←── HÔM NAY: soi và hoàn thiện yêu cầu
    ↓
Plan             buổi 05 — Brainstorm & Write Plan
    ↓
Execute          buổi 06 trở đi — code, test, review
```

Buổi 04 **vẫn nằm trong nhịp Requirement**. Chưa brainstorm, chưa lên plan, chưa đụng code.

## Kiểu buổi — **BUỔI TRÌNH BÀY**

Giảng viên đi hết deck, lớp nghe và ghi. **Không có mốc kiểm tra, không có khối "lớp làm" tại chỗ** —
toàn bộ phần tay chân dồn vào **bài tập về nhà**: chạy lại 11 prompt trên dự án của chính mình.

Deck dùng cơ chế **hỏi trước → đáp sau** (`.reveal`, 6 chỗ) để giữ nhịp: nêu vấn đề, chờ lớp nghĩ,
rồi mới mở đáp án.

**Nhẹ máy móc tại lớp:** học viên chỉ cần nghe. Việc cần máy nằm ở nhà.

## Độ sâu

**Viết cho ai:** dev thường **2–3 năm kinh nghiệm — biết lập trình, chưa từng làm tài liệu dự án bài bản**.

**KHÔNG đưa vào buổi:**
- Thuật ngữ kiến trúc (Clean Architecture, phân lớp, CQRS, 4+1 View) · sơ đồ phân lớp
- Bắt học viên đọc code · tên framework `jarvis` · chữ "scaffold"
- Skill nâng cao của Minipower: `deliberation`, `doc-review`, `fan-out`, `readiness-gate`
- Cơ chế `auto-routing`, `read-guard`, `BYPASS` *(đã cân nhắc rồi bỏ — quá nhiều cho một buổi)*
- Brainstorm · ADR · Plan *(buổi 05)* · môi trường · khởi tạo dự án · code *(buổi sau)*

**ĐƯỢC đưa vào buổi:**
- **Hai luật gõ prompt**: khai `Phase:` · có scope `@`
- **Ba nhóm câu hỏi** và các mã `BO · BRQ · BR · FR`
- **Cấu trúc và mục bắt buộc** của DOC-01 · DOC-02 · DOC-03
- Cách **nộp bài qua GitHub**

## Đối tượng
Học viên đã qua buổi 01–03, **đã có DOC-01 · DOC-02 · DOC-03** từ bài tập buổi 03.
Mọi thuật ngữ lần đầu xuất hiện phải có **một câu giải nghĩa đời thường ngay tại chỗ**.

## Học viên rời phòng với
1. **Biết ba tài liệu của mình phải có những mục gì** — và mục nào thiếu là hỏng
2. **Hai luật gõ prompt** — hiểu vì sao Minipower bắt khai `Phase:` và `@`
3. **Ba nhóm câu hỏi dùng được cả khoá** — tiến độ · truy vết · điều hướng
4. **Danh sách 11 prompt** để về nhà chạy trên dự án mình
5. **Cách nộp bài qua GitHub**

## Bài tập về nhà

**Chạy lại toàn bộ 11 prompt đã học trên dự án của mình, dán kết quả, đẩy lên GitHub.**

| Nhóm | Prompt | Nộp |
|---|---|---|
| Ba tài liệu | Soi DOC-01 · DOC-02 · DOC-03 | 3 kết quả |
| 1 · Tôi đang ở đâu | Đang ở phase nào · BRD đủ chưa, thiếu mục nào | 2 kết quả |
| 2 · Có khớp nhau không | BRQ phục vụ BO nào · BO nào chưa có BRQ · BRQ nào không phục vụ BO nào · đã có FR chưa | 4 kết quả |
| 3 · Tiếp theo làm gì | Tiếp theo cần làm gì · bước nào rút gọn được | 2 kết quả |

Khớp **rubric trong `curriculum.md`**: tiêu chí *"Nộp được"* = **bài tập đã đẩy đủ lên GitHub**.

> **Cần anh Hoàng điền:** hạn nộp · nơi nộp (dán link repo vào đâu).

## Mạch câu chuyện (5 phần · 23 slide)

| Phần | Nội dung | Slide |
|---|---|---|
| 1 · Mở | Bìa | 1 |
| 2 · Ba tài liệu buổi 03 | Bài tập ra cái gì · DOC-01 · DOC-02 · DOC-03 · *"Bạn đã có đủ chưa?"* | 2–6 |
| 3 · Hai luật gõ prompt | Hỏi Minipower về dự án · khai phase · có scope · prompt ba phần + 3 ví dụ | 7–10 |
| 4 · Ba nhóm câu hỏi | Giới thiệu · tiến độ · truy vết *(Drive vs Minipower · 3 mã · truy ngược · 2 câu quét · nhìn về phía trước)* · điều hướng | 11–18 |
| 5 · Kết & giao bài | Hai quy tắc · bài tập · nộp qua GitHub · 11 prompt · hướng dẫn khi tắc | 19–23 |

## Ba nhóm câu hỏi — nội dung lõi

Cách gọi đúng theo repo: **`/minipower` + `Phase: …` + `@đường-dẫn`**.

| Nhóm | Trả lời câu gì | Số prompt |
|---|---|---|
| **1 · Tôi đang ở đâu?** | Tiến độ | 2 |
| **2 · Có khớp nhau không?** | Truy vết | 4 |
| **3 · Tiếp theo làm gì?** | Điều hướng | 2 |

Cộng **3 prompt soi ba tài liệu** ở phần 3 → **tổng 11 prompt**.

**Mã ID thật** *(nguồn: `minipower/templates/DOC-03-brd.md`)*:

| Mã | Là gì | Ở đâu |
|---|---|---|
| `BO-xxx` | **Mục tiêu nghiệp vụ** | DOC-03 mục 3 |
| **`BRQ-xxx`** | **Yêu cầu nghiệp vụ** | DOC-03 mục 7 |
| **`BR-xxx`** | **Quy tắc nghiệp vụ** *(khác BRQ)* | DOC-04 *(tóm tắt ở DOC-03 mục 8)* |
| `{MOD}-FR-001` | Chức năng hệ thống | DOC-06 — **chưa có, buổi sau** |

> **Điểm dạy dễ hiểu nhầm:** câu *"BRQ đã có FR chưa?"* sẽ trả lời **"chưa có"** — và **đó là đáp án đúng**.
> Nó cho thấy lớp đang đứng ở đâu trên chuỗi `BO → BRQ → BR → UC → FR → AC → test`.
> Phải nói rõ kẻo lớp tưởng Minipower hỏng.

## Mục bắt buộc của ba tài liệu *(lấy từ bản mẫu thật)*

| Tài liệu | Mục thiếu là hỏng |
|---|---|
| **DOC-01** Tầm nhìn & Hồ sơ kinh doanh *(10 mục)* | 3 Vấn đề nghiệp vụ · 4 Mục tiêu & chỉ số `G-001` · 6 Lợi ích vs chi phí · 8 Rủi ro cấp cao `R-001` |
| **DOC-02** Phân tích stakeholder *(6 mục)* | 2 Đăng ký stakeholder `SH-001` · 3 Bản đồ quyền lực × quan tâm · **4 RACI** *(chữ A = người chốt)* |
| **DOC-03** BRD *(13 mục)* | 3 Mục tiêu `BO` · 4 Phạm vi · 7 Yêu cầu `BRQ` · 8 Quy tắc `BR` · 9 Ràng buộc |

## Ràng buộc / điều không được phá
- **Mọi mã DOC, mã ID, tên skill, cách gọi prompt phải khớp repo `ai-skills`** — không bịa
- **Không dạy Brainstorm, ADR, Plan** — buổi 05
- **Không cài môi trường, không khởi tạo dự án, không code** — buổi sau
- **Không thuật ngữ kiến trúc, không bắt đọc code, không nhắc `jarvis`, không dùng "scaffold"**
- **AI soạn — người chốt** — mọi thứ AI viết vào tài liệu là **nháp** cho tới khi có tên người chốt
- **Bám buổi 01–02** — nỗi đau *"không biết ai quyết định"* và *"tri thức nằm trong đầu một người"*
