# Giai đoạn 2a — Kịch bản thô (Raw script)

> Bản nháp ý. Bản gọt để đứng lớp: `2-script-final.md` *(bám số slide của deck)*.
>
> **Nguồn sự thật:** mã DOC · mã ID · tên skill · cách gọi prompt lấy từ repo
> `hoangnh2412/ai-skills`, thư mục `minipower/`. Rà lần cuối 2026-08-22.

---

## Ý lớn của buổi

Buổi 04 **thuần Minipower** — không môi trường, không code, không ADR, không Plan. Hai việc:

```
1. Soi lại ba tài liệu buổi 03 (DOC-01 · 02 · 03) — mục nào thiếu là hỏng
2. Hai luật gõ prompt + ba nhóm câu hỏi — để tự soi được mãi mãi
```

Câu chốt: **"Không ai lạc trong dự án vì thiếu tài liệu. Người ta lạc vì không biết hỏi tài liệu của mình."**

[note: Giá trị thật không phải "biết vài câu prompt", mà là học viên rời phòng TỰ TRẢ LỜI được câu "dự án này đang ở đâu" mà không cần đi hỏi người cũ.]

**Kiểu buổi:** trình bày. Không mốc kiểm tra, không khối "lớp làm" tại chỗ — phần tay chân dồn vào
bài tập về nhà: chạy 11 prompt, đẩy kết quả lên GitHub.

---

## Mạch 5 phần · 23 slide

| Phần | Nội dung | Slide |
|---|---|---|
| 1 | Bìa | 1 |
| 2 | Ba tài liệu buổi 03 — DOC-01 · 02 · 03 · *"đã có đủ chưa?"* | 2–6 |
| 3 | Hai luật gõ prompt — khai `Phase:` · có `@` | 7–10 |
| 4 | Ba nhóm câu hỏi — tiến độ · truy vết · điều hướng | 11–18 |
| 5 | Kết & giao bài — hai quy tắc · bài tập · GitHub · 11 prompt · hướng dẫn | 19–23 |

---

## Những chỗ phải nói cho đúng

**Ba mã rất hay nhầm** — `BO` mục tiêu · `BRQ` yêu cầu · `BR` **quy tắc** *(khác hẳn)*.
Ví dụ đơn nghỉ phép cho cả ba, lớp nhớ ngay.

**Minipower không soi đều tay.** Nó nhìn *việc mình định làm*: sửa typo thì cho qua; viết lại cả module
mà không khai `Phase · module · DOC` thì **chặn và liệt kê ra thiếu gì**. Đừng nói thành "cứ thiếu `@` là
bị chặn" — sai.

[note: Khung hai chốt chặn là thứ BẢO VỆ mình, không phải phiền phức. Nối bài hallucination buổi 03: AI bịa khi không đủ ngữ cảnh mà vẫn phải trả lời.]

**Hai câu quét** bắt hai bệnh: **BO không có BRQ = sót việc** · **BRQ không phục vụ BO nào = làm thừa**.

**Câu "BRQ đã có FR chưa?" sẽ trả lời "chưa có" — và đó là ĐÁP ÁN ĐÚNG.**

[note: BẮT BUỘC nói rõ, kẻo lớp tưởng Minipower hỏng. Đây là "tôi đang ở đâu" nhìn theo chiều tài liệu thay vì chiều thời gian.]

**RACI — chữ A = người chốt** (DOC-02 mục 4) và **Ràng buộc** (DOC-03 mục 9) là hai chỗ đáng dừng thêm
một nhịp: cái đầu trị nỗi đau *"không biết ai quyết định"* buổi 01, cái sau chặn buổi 05 brainstorm ra
phương án không làm được.

---

## Ý đã cân nhắc rồi bỏ

- **Câu hỏi mở màn** *"Vào một dự án lạ — làm sao biết nó đang ở đâu?"* — bỏ vì học viên đang **xây từ đầu**,
  không phải nhận dự án có sẵn.
- **Hai slide "kết quả thật"** dựng từ output thật *(bảng ba cổng doc-review → baseline BL-1.0; và bài học
  "AI thấy sai vẫn xin phép trước khi sửa")* — nội dung tốt nhưng làm buổi dài ra.
- **`auto-routing` · `read-guard` · `BYPASS`** — ba cơ chế thật, nhưng quá nhiều cho một buổi.
  *(`read-guard` chặn `docs/02-baseline/` là cái đáng tiếc nhất: dự án đã baseline thì hỏi vào đó sẽ bị từ chối.)*
- **Mốc kiểm tra** — bỏ khi buổi chuyển từ thực hành sang trình bày.

---

# KHO Ý CHƯA DÙNG — vật liệu đã soạn, chuyển sang buổi khác

> Các bản kịch bản trước của buổi 04 đã soạn xong những phần dưới đây. Anh Hoàng chốt ngày 2026-08-22:
> **Brainstorm và Plan là buổi 05**, buổi 04 thuần Minipower. Giữ lại đây để buổi sau lấy ra dùng ngay,
> **không phải soạn lại từ đầu**.

## → Chuyển sang BUỔI 05 (Brainstorm & Write Plan)

### ADR — Bản ghi Quyết định Kiến trúc (DOC-09)

**Định nghĩa để gỡ ngại:** ADR = *biên bản một quyết định*. **Không phải** tài liệu thiết kế hệ thống.
Một trang giấy: quyết cái gì · vì sao · đã cân nhắc phương án nào khác · chấp nhận đánh đổi gì · **ai ký**.

**Ba luật:** một quyết định = một file · Accepted thì không sửa *(muốn đảo thì viết ADR mới)* ·
**phải nêu phương án đã loại** *(không có phần này thì chỉ là thông báo)*.

**Vì sao dev cần:** ba tháng sau có người hỏi *"sao hồi đó chọn cái này?"* — không có ADR thì câu trả lời
nằm trong trí nhớ một người, mà người đó có khi đã nghỉ. **Nỗi đau #6 buổi 01.**

**File:** `docs/04-platform/DOC-09-adr/ADR-001-<slug>.md` · chỉ mục ở `README.md` cùng thư mục.
**Template:** DOC-09, chuẩn **Michael Nygard** — Status · Date · **Deciders** · Bối cảnh · Quyết định ·
Lý do · **Các phương án đã xem xét** *(bảng Option/Pros/Cons)* · Hệ quả *(tích cực / đánh đổi / rủi ro)* ·
Tuân thủ & NFR · Truy vết.

**Prompt soạn nháp:**
```
/minipower
Phase: architecture
Soạn nháp ADR-001 chốt <quyết định> cho dự án. @docs/01-project/DOC-03-brd.md để lấy bối cảnh.
Theo template DOC-09. Nêu ít nhất 2 phương án đã loại, kèm lý do loại.
```

**Bản nhẹ hơn ADR:** `memory/{phase}/decision-log.md`, ID kiểu `DEC-ARC-001` — dùng cho quyết định nhỏ,
trỏ tới ADR khi được formal hoá.

**Mẹo prompt quan trọng:** khi nhờ AI bày phương án, thêm câu
*"Đừng khuyến nghị — chỉ bày ra ưu nhược điểm để tôi tự chọn."*
Nếu để AI khuyến nghị luôn, ta rất dễ gật theo mà không nghĩ — **AI vừa quyết hộ ta**.

### Bảng phương án mẫu *(nếu buổi 05 chốt stack)*

| Phương án | Được | Mất |
|---|---|---|
| ReactJS + .NET 9 + SQLite | Không cài server; máy nào cũng chạy; copy file là copy cả dữ liệu | Không hợp nhiều người dùng cùng lúc quy mô lớn |
| … + PostgreSQL | Chịu tải tốt, dùng lâu dài | Phải cài & cấu hình server — mỗi máy hỏng một kiểu |
| Next.js làm cả hai đầu | Một chỗ để chạy, không phải xử lý CORS | Nhiều khái niệm mới; trộn giao diện với xử lý |

## → Chuyển sang BUỔI TRƯỚC KHI CODE

### Cổng thực thi (`readiness-gate`)

Router **tự kích hoạt** khi intent là thực thi — không phải người chọn skill.

```
/minipower
Phase: delivery
Tôi muốn bắt đầu viết code cho dự án này. @docs/ — soát tiền đề giúp tôi.
```

Bảng tiền đề thật cho intent **"Viết code / hiện thực module"**:
**DOC-06 (SRS) · DOC-07 (AC) · DOC-08 (SAD) · DOC-11 (Data Model) · DOC-12 (API Spec) · DOC-19 (Prototype)**

**Không chặn cứng.** Ba nguyên tắc: hỏi trọn gói một lượt · *"đủ" là do **người** quyết* ·
cho hoãn nhưng **phải ghi nợ**. Verdict: **✅ Đủ · ⏸️ Đủ tạm · ⛔ Chưa đủ**.

Sổ nợ `memory/{phase}/open-questions.md`:
```
- [ ] OQ-001 Chưa có DOC-06 (SRS) · intent: implement · hoãn ngày <hôm nay> · chặn: có
```
`chặn: có` = tiền đề bắt buộc, chưa có thì artifact sinh ra **chỉ là nháp**.

**Câu chốt mạnh nhất của phần này:** *"Code hôm nay chính thức là bản nháp. Không phải vì làm ẩu — mà vì
ta biết mình thiếu gì và đã ghi lại. Ngoài đời có hai cách sai: giả vờ là đủ, hoặc đứng im chờ đủ.
Cách đúng là cách thứ ba — đi tiếp, đánh dấu nháp, ghi nợ, quay lại trả."*

### Cài môi trường & khởi tạo dự án

Sáu thứ: .NET 9 SDK · Node.js 22 · Git · GitHub · SQLite *(không cài riêng — tự có)* · IDE có AI.
Kiểm: `dotnet --version` → 9.x · `node --version` → v22.x · `git --version` → 2.x.

Khởi tạo: dán mục 7 BRD vào prompt tạo web API .NET 9 + SQLite có Swagger và `/health`;
prompt thứ hai tạo giao diện ReactJS trong `frontend`.

**Đối chiếu bằng kết quả, không đọc code:** đủ hai đầu chưa · đúng stack đã chốt chưa
*(hỏi AI "dự án này dùng công nghệ gì?")* · có màn hình cho yêu cầu chính chưa · chạy thử có lỗi đỏ không.

### Chạy & xử lý lỗi

`dotnet dev-certs https --trust` *(một lần)* → `dotnet run` → kiểm `/swagger` và `/health` → `Healthy`.
Terminal thứ hai: `npm install` → **`npm run dev`** *(không phải `npm start`)* → `localhost:5173`.

**Ba bước khi đỏ:** F12 → Console · copy **nguyên văn** dòng đỏ · đưa AI kèm ngữ cảnh.
*"Ta không cần hiểu dòng đỏ. AI hiểu. Việc của ta là đưa đúng thông tin cho nó."*

| Trong dòng đỏ | Nghĩa | Bảo AI |
|---|---|---|
| `CORS` | Hai địa chỉ khác nhau, trình duyệt chưa cho nói chuyện | *"Cho phép localhost:5173 gọi API này."* |
| `ERR_CERT` | Máy chưa tin địa chỉ bảo mật | Chạy lại `dev-certs` |
| `Connection refused` | Backend chưa chạy / sai port | Kiểm terminal thứ nhất |

**Quy trình hỗ trợ 4 tầng:** tự xử → hỏi AI kỹ hơn *(tối đa 3 lượt, bảo nó giải thích trước sửa sau)*
→ nhắn nhóm lớp *(gửi đủ 4 thứ: đang ở bước nào · dòng đỏ nguyên văn · ảnh màn hình · đã thử gì)*
→ đầu buổi sau gỡ chung.

**Ba quy tắc vàng:** đừng sửa tay · bước trước chưa đạt thì đừng làm bước sau ·
rối quá thì xoá làm lại *(~10 phút, nhanh hơn gỡ một tiếng)*.

### Cất giữ

`.gitignore` nhờ AI một câu · **không bao giờ đẩy mật khẩu/khoá bí mật** ·
`docs/` vốn đã nằm trong dự án nên đẩy code là đẩy luôn tài liệu ·
5 lệnh git: `init` → `add .` → `commit` → `remote add origin` → `push -u origin main`.
GitHub = **kho cất giữ**, chưa phải đưa lên internet cho người khác dùng.

## → KHÔNG dùng trong khoá này

- **DOC-08 SAD** — cần DOC-06 + DOC-13 baseline; chuẩn SEI + Kruchten 4+1; duyệt bởi SA + Tech Lead.
  Quá tầm và sai vai *(`roles/DEV.md` không sở hữu DOC-08–12)*.
- **Skill nâng cao:** `deliberation` · `doc-review` · `fan-out` · phân tầng micro/light/full.
- **Dokploy · deploy · production** — **đã bỏ khỏi cả khoá** (chốt 2026-08-22). Sản phẩm chạy trên máy
  học viên; code + tài liệu đẩy lên GitHub. Stack khoá giữ **jarvis (.NET) + ReactJS**.
