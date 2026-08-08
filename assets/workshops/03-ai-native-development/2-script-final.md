# Workshop 03 — AI-Native Software Development
# Bản đồ đường đi

> **Kịch bản biên tập (final).** Bản giảng viên cầm lên nói được ngay.
> Nguồn: `2-script-raw.md`. Giọng: kể chuyện, gần gũi, tương tác — mỗi chương mở bằng
> một câu hỏi cho lớp *trước khi* reveal.
> **Ký hiệu sân khấu:** 🎙️ lời kể · ❓ hỏi lớp · 🔴 reveal · ✋ tương tác · 📝 ghi bảng · ⏱️ nhịp thời lượng.

---

## Thông số buổi

| Mục | Nội dung |
|-----|----------|
| **Thời lượng** | 120 phút — **80′ kể chuyện + 40′ hands-on** |
| **Nỗi đau xử lý** | #3 Không rõ ai làm gì · #4 Quá nhiều tài liệu, copy lẫn nhau · #12 Tìm tri thức cực khó |
| **Học viên rời phòng với** | Dự án thật đã `init` — đúng 4 nhánh thư mục |
| **Chuẩn bị của GV** | Màn hình chia đôi (slide trái · IDE phải, dự án CRM ABC) · một dự án CRM đã init sẵn để demo nhanh |
| **Chuẩn bị của HV** | Laptop + IDE đã cài Minipower (buổi 01) · **một tài liệu thật** của dự án đang làm |

> **Ngân sách nhịp (gợi ý):** Mở đầu 8′ · Ch1 12′ · Ch2 10′ · Ch3 10′ · Ch4 10′ · Ch5 15′ · Ch6 8′ · Ch7 7′ → **80′**. Hands-on 40′.

---

# Mở đầu ⏱️ ~8′

## Nhìn lại Workshop 2

🎙️ Buổi trước chúng ta chốt một câu:

> AI không phải công cụ hỏi–đáp. AI là **đồng nghiệp** tham gia cả vòng đời dự án.

Hôm nay là buổi **đầu tiên mở laptop làm thật**. Nhưng trước khi làm, phải có bản đồ.

## Câu hỏi mở màn

❓ *Một đồng nghiệp mới vào dự án ngày đầu tiên. Anh chị đưa cho họ cái gì?*

✋ Cho lớp trả lời — 📝 ghi 3–4 câu lên bảng. Các câu thường gặp:

- Tài liệu dự án
- Quy trình làm việc
- Danh sách "ai phụ trách gì"

## Reveal

🔴 Chính xác. Đồng nghiệp mới cần **quy trình**, cần **chỗ để tài liệu**, cần biết **ai quyết**.

**AI cũng vậy.**

🎙️ Buổi trước chúng ta **tuyển AI vào team**. Hôm nay chúng ta **đưa AI bản đồ**.

> *Chuyển cảnh:* Vậy bản đồ đó trông thế nào — và vì sao thiếu nó thì AI giỏi đến mấy vẫn loạn?

---

# Chương 1 — Hai team, cùng một AI ⏱️ ~12′

🎙️ Hai team cùng nhận một dự án CRM. Cùng cài Minipower. Cùng một con AI.

## Team A — chat tự do

🎙️ Mở AI ra, chat tự do.

> "Viết giúp anh cái SRS." → AI viết. **Đẹp.**
> Tuần sau: "Viết giúp anh cái kiến trúc." → AI viết. **Cũng đẹp.**

Tuần thứ ba, Dev đọc cả hai, rồi hỏi:

> "Hai cái này nói khác nhau, em theo cái nào?"

❓ *Vì sao AI viết đẹp cả hai lần mà vẫn mâu thuẫn?*

✋ Cho lớp đoán vài câu.

🔴 **Reveal:** Vì mỗi lần chat là **một cuộc đời mới**. AI không biết lần trước nó đã chốt gì.

- Không có nơi lưu.
- Không có ai chốt.
- Không có ID để tham chiếu.

## Team B — đặt vào một pipeline

🎙️ Cũng dùng đúng con AI đó. Nhưng mọi thứ được đặt vào **một pipeline**:

> Mỗi tài liệu có **số**. Mỗi quyết định có **tên**. Mỗi chặng có **người chốt**.

Tuần thứ ba, Dev đọc SRS, thấy dòng: `ORD-FR-014` trace về `ORD-UC-003`.
Dev mở **đúng một chỗ**. Hết thắc mắc.

## Thông điệp chương

🔴 Cùng một AI. **Khác nhau ở tấm bản đồ.**

> *Chuyển cảnh:* Giờ mở tấm bản đồ đó ra. Bắt đầu từ con đường lớn — 6 giai đoạn.

---

# Chương 2 — 6 giai đoạn ⏱️ ~10′

🎙️ Minipower mô hình hoá vòng đời dự án theo một trật tự **bất di bất dịch**:

```
Business Goal → Stakeholder → Process → Requirement → Solution → Planning → Delivery
```

Một câu để nhớ: **Nghiệp vụ trước. Giải pháp sau.**

| Giai đoạn | Vai chính | Đầu ra |
|-----------|-----------|--------|
| Discovery | BA, PM | Phạm vi, stakeholder, BRD, danh sách module |
| Requirements | BA (theo module) | UC, Business Rule, Prototype, FR, AC, NFR |
| Architecture | SA | SAD, ADR, tích hợp, data model, API |
| Planning | PM | WBS, ước lượng, kế hoạch, roadmap |
| Delivery | QA, DevOps | Test strategy, triển khai, go-live |
| Change control | BA, SA, PM | CR, delta, re-baseline |

✋ **Tương tác — neo vào thực tế lớp:**
❓ *Dự án của anh chị hiện đang ở giai đoạn nào?* → cho vài người trả lời → 📝 ghi tên + giai đoạn lên bảng.

> **Ghi chú GV:** giữ danh sách này tới hands-on Bước 4 — lớp sẽ tự đối chiếu với câu trả lời của AI.

---

# Chương 3 — 19 tài liệu, nhưng đừng sợ ⏱️ ~10′

🎙️ Nghe "19 tài liệu" là ai cũng mệt. Nhưng nhìn kỹ:

🔴 Đây **không phải** 19 tài liệu mới. Đây là **19 tài liệu anh chị vẫn đang viết** — chỉ là đang viết
rải rác, trùng nhau, không đánh số.

| Nhóm | DOC | Anh chị vẫn gọi là |
|------|-----|--------------------|
| 01–03 | Vision · Stakeholder · BRD | "Tài liệu đề xuất", "Scope" |
| 04–07, 19 | Business Rule · UC · Prototype · SRS · AC | "FRD", "Wireframe", "Test điều kiện" |
| 08–12 | SAD · ADR · Integration · Data Model · API | "Tài liệu kiến trúc", "Swagger" |
| 13–15 | NFR · WBS · Project Plan | "Yêu cầu phi chức năng", "Kế hoạch" |
| 16–17 | Test Strategy · Deployment | "Kế hoạch test", "Hướng dẫn triển khai" |
| 18 | Change Request Register | "Danh sách phát sinh" |

## Khác biệt duy nhất — *(đây là nỗi đau #4)*

🎙️ Trước đây: một sự thật nằm ở **nhiều tài liệu** → copy → outdate.
Bây giờ: một sự thật nằm ở **một tài liệu**, chỗ khác **tham chiếu bằng ID**.

**Ví dụ sống:**

> Requirement "Khách VIP giảm 10%" chỉ nằm ở **một chỗ**: `ORD-FR-014`.
> Test case **không chép lại** nội dung — test case ghi: *trace `ORD-AC-021` ← `ORD-FR-014`*.

🔴 Sửa một chỗ. **Cả dây biết.**

---

# Chương 4 — 4 thư mục, nơi tri thức sống ⏱️ ~10′

🎙️ Khi khởi tạo dự án, Minipower tạo ra **4 nhánh**. Chỉ 4 thôi.

```
{dự án}/
├── assets/       ← bản gốc khách gửi, biên bản họp — KHÔNG sửa
├── brainstorm/   ← nháp, trao đổi, phân tích — file theo ngày
├── memory/       ← trí nhớ dự án, chia theo 6 giai đoạn
└── docs/         ← tài liệu chính thức, 19 DOC có số
```

## Luồng đi một chiều

```
assets/ → brainstorm/ → docs/ → docs/02-baseline/
                                     ↓ sau khi ký
                              docs/06-changes/CR-xxx/
```

✋ **Tương tác — chạm đúng nỗi đau #12:**
❓ *Hiện tại tài liệu dự án của anh chị nằm ở đâu?*
Câu trả lời thường gặp: Zalo, Teams, Drive, máy cá nhân, **"trong đầu anh A"**.

🔴 Đó chính là **nỗi đau #12** của buổi 01 — tìm tri thức cực khó. Bản đồ này cho tri thức **một địa chỉ**.

## Quy tắc chỉ có ba câu

> Bản gốc thì **không sửa**.
> Nháp thì **không mang đi ký**.
> Ký rồi thì **không sửa tay**.

---

# Chương 5 — 7 cổng, chỗ con người ngồi ⏱️ ~15′  ⭐ *(phần quan trọng nhất buổi)*

🎙️ Đây là phần quan trọng nhất hôm nay. Chậm lại ở đây.

❓ *Nếu AI làm được hết — thì con người làm gì?*

✋ Cho lớp trả lời. Nhiều người sẽ nói: **"kiểm tra lại."**

🔴 Gần đúng. Chính xác hơn: **con người MỞ CỔNG.**

| # | Cổng | Người chốt cái gì | Mở khoá cho AI làm gì |
|---|------|-------------------|------------------------|
| 1 | Chốt BRD | DOC-03 | Sinh Business Rule cho **tất cả** module |
| 2 | Chốt Business Rules | DOC-04 | Sinh Prototype cho tất cả module |
| 3 | Chốt Prototype | DOC-19 | Viết SRS cho tất cả module |
| 4 | Chốt SRS | DOC-06 | Thiết kế kiến trúc, data model, API |
| 5 | Chốt Architecture | DOC-08 | Bóc Epic / Story / Task |
| 6 | Chốt Project Plan | DOC-15 | Viết test case + code |
| 7 | Chốt Test case | DOC-16 | Code + unit test |

## Cơ chế tại mỗi cổng

🎙️ AI làm xong việc **giữa hai cổng**, rồi **soạn sẵn quyết định nháp**:

> đã làm gì · còn điểm nào cần người quyết · rủi ro gì.

Người **đọc** → duyệt / sửa / trả lại.

- **Duyệt** → quyết định ghi "đã chốt" → cổng mở → AI chạy tiếp.
- **Chưa duyệt** → AI **không** được đi tiếp; chỉ được hoàn thiện tài liệu hiện tại.

## Điểm mấu chốt

🔴 Người **không** ngồi viết từ đầu. Người ngồi **bấm duyệt**. AI viết nháp — **kể cả nháp của quyết định**.

✋ **Tương tác — nỗi đau #3 có chỗ ngồi:**
❓ *Ở công ty mình, ai duyệt FRD? Ai duyệt UAT? Ai duyệt Change Request?*
Buổi 01 câu này gây lúng túng — hôm nay mỗi cổng có **một người chốt rõ tên**.

---

# Chương 6 — Giữa hai cổng, AI chạy song song ⏱️ ~8′

🎙️ Sau khi người chốt BRD, dự án có **8 module**.

## Cách cũ

> BA làm module 1 → xong → module 2 → xong → module 3…
> **8 module × 3 ngày = 24 ngày.**

## Cách mới

🎙️ Cổng đã mở. AI **fan-out 8 luồng song song** — mỗi module một luồng, mỗi luồng một chủ.

> Luồng module *Đơn hàng* **không được** ghi vào thư mục module *Khuyến mãi*. Ai lo phần nấy.

## Nhưng — điều kiện của fan-out

🔴 Fan-out chỉ chạy **giữa hai cổng**:

- Không có cổng chốt phía trước → **không** fan-out.
- Chạy xong → **dừng lại**, soạn nháp, chờ người duyệt cổng sau.

## Câu để cả lớp mang về

> ## **Người mở cổng. AI chạy trong hành lang.**
> AI **không** tự mở cổng cho chính nó.

---

# Chương 7 — Chi phí tương xứng ⏱️ ~7′

🎙️ Buổi 01 có câu đùa: *"Cài thiếu là bay $20 một ngày."* Hôm nay nói **nghiêm túc** về tiền.

Không phải việc nào cũng chạy đủ quy trình:

| Tầng | Ví dụ | Chạy gì |
|------|-------|---------|
| **Micro** | Sửa typo, đổi format, đổi version | Sửa luôn, **không cổng** |
| **Light** | Sửa 1 requirement trong tài liệu đã có | Khai giai đoạn, khuyến nghị review |
| **Full** | Module mới, tài liệu mới, đổi kiến trúc, đụng bản đã ký | **Bật đủ cổng** |

## Phép thử một câu

> ❓ *Việc này có **đổi nội dung / đổi quyết định**, hay **ảnh hưởng tài liệu khác** không?*
> - Không → **micro**
> - Đổi nội dung trong tài liệu đã có → **light**
> - Cấu trúc mới, quyết định mới, hoặc đụng bản đã ký → **full**

## Ba ngoại lệ không được phá

- Xác định phạm vi dự án mới → **luôn full**
- Change Request sau khi đã ký → **luôn full**
- Đụng vào bản baseline đã ký → **luôn full**

🎙️ Không chắc micro hay light → chọn **light**. (Nhắc lớp: đây là chuyện ngân sách token — buổi 09 nói kỹ.)

---

# Hands-on ⏱️ 40′ — mở laptop

> **Nguyên tắc:** học viên **chạy**, không xem demo. Làm trên **dự án thật** đang chạy;
> không có dự án thật → dùng **CRM ABC**. GV đi vòng lớp, không chiếu màn hình làm hộ.

## Bước 1 — Khởi tạo dự án thật ⏱️ ~8′

```
/minipower
Init project — tạo dự án "<tên dự án của anh chị>"
```

Chờ AI tạo xong 4 nhánh thư mục.

## Bước 2 — Kiểm tra thủ công ⏱️ ~7′

🎙️ Mở thư mục, **tự mắt nhìn**, đủ 4 nhánh chưa:

- `assets/public/` và `assets/internal/`
- `brainstorm/` (không có thư mục con)
- `memory/memory.md` + 6 thư mục giai đoạn
- `docs/` với 7 thư mục con

Thiếu → bảo AI bổ sung. **Đừng tin 100%.**

## Bước 3 — Đưa tri thức thật vào ⏱️ ~8′

Copy **một tài liệu thật** của dự án đang làm vào:

- Khách gửi / đã share với khách → `assets/public/`
- Họp nội bộ, không gửi khách → `assets/internal/`

## Bước 4 — Hỏi AI "mình đang ở đâu" ⏱️ ~10′

```
/minipower
Đọc @assets/public/<file của anh chị> — dự án của tôi đang ở giai đoạn nào
trong 6 phase? Cổng gần nhất tôi cần chốt là cổng nào? Trả lời ngắn.
```

📝 Đối chiếu với giai đoạn HV tự đoán ở **Chương 2** — khớp không?

## Bước 5 — Thử phân tầng ⏱️ ~7′

```
/minipower
Tôi cần sửa lại một dòng mô tả trong tài liệu đã có. Việc này là micro,
light hay full? Vì sao?
```

Xem AI phân tầng có khớp **phép thử một câu** ở Chương 7 không.

---

# Tổng kết

🎙️ Ba buổi, ba nhịp:

> Buổi 01: chúng ta **thấy nỗi đau**.
> Buổi 02: chúng ta **tuyển AI vào team**.
> Buổi 03: chúng ta **đưa AI bản đồ**.

Bản đồ gồm:

- **6 giai đoạn** — nghiệp vụ trước, giải pháp sau
- **19 tài liệu** có số, tham chiếu bằng ID *(hết copy — nỗi đau #4)*
- **4 thư mục**, luồng đi một chiều *(tri thức có địa chỉ — nỗi đau #12)*
- **7 cổng** — chỗ con người ngồi *(ai làm gì đã rõ — nỗi đau #3)*
- **Hành lang giữa hai cổng** — chỗ AI chạy song song
- **Ba tầng chi phí** — để không đốt tiền vô ích

## Câu hỏi kết thúc

❓ Bản đồ đã có. Nhưng **bắt đầu từ đâu?**

🔴 Từ câu hỏi ít người dám hỏi khách hàng:

> ## **"Việc này có đáng làm không?"**

👉 Đó là **Workshop 04 — Discovery & Cổng 0.**

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Khởi tạo dự án thật bằng `Init project` | Ảnh chụp cây thư mục đủ 4 nhánh |
| 2 | Đưa ≥1 tài liệu thật vào `assets/` | Ảnh chụp thư mục `assets/` |
| 3 | Hỏi AI dự án đang ở giai đoạn nào | Ảnh chụp câu trả lời |
| 4 | Trả lời: dự án của anh chị đang **thiếu cổng nào nhất**? Vì sao? | 3–5 dòng |
| 5 | Trả lời: tài liệu nào ở công ty mình **đang bị copy nhiều nhất**? | 3–5 dòng |

---

> **Ghi chú cho giai đoạn sau (storyboard):** kịch bản này có **8 mốc kể chuyện lớn**
> (Mở đầu + Ch1–7) + Hands-on + Tổng kết + Teaser — bám đúng để chẻ khung slide.
> Bộ prompt ảnh gợi ý đã có ở phụ lục `2-script-raw.md`, sẽ chuyển sang `4-prompts.md` khi dựng.
