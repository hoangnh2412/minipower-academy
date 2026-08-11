# Minipower Academy — Lộ trình Vibe Coding (v2)

> Bản đồ toàn khoá **Vibe Coding với Minipower** — mức khởi đầu. Mỗi buổi có thư mục riêng theo
> 5 giai đoạn pipeline: `assets/workshops/NN-slug/`.
> Đi cùng `assets/lo-trinh-tham-khao/curriculum-v1.md` (lộ trình AI Software Engineering — 16 buổi) dành cho học viên
> muốn đi sâu sau khi qua khoá này. Hai khoá dùng chung **buổi 01–02 đã chạy** làm cửa ngõ.

---

## Triết lý xuyên suốt (không buổi nào được phá)

```
AI = trợ lý ra quyết định   ·   Con người = người quyết định cuối cùng
```

- **Vibe code ra sản phẩm** bằng AI — nhanh, nhưng **code theo framework jarvis** (Clean Architecture
  5 lớp) để khi có sự cố còn **lần ra mà sửa**, không phải "spaghetti AI" không ai debug nổi.
- Trọng tâm là **kỹ năng vibe coding**: brainstorm → write plan → test-driven → AI coding → code review
  (debug **lồng trong** các buổi coding). Không dạy code vỡ lòng — học viên có cả người đã biết code.
- **Deploy sớm:** dựng sẵn Git + **Dokploy auto-deploy** ngay buổi 04 → mỗi lần push là tự lên production,
  buổi nào cũng thấy kết quả thật.
- **Không** có buổi nào dạy "AI tự chạy dự án". AI brainstorm/sinh code rất nhanh, nhưng chính người
  **chốt plan** và **quyết định push/merge** — người vẫn **mở cổng** và **ghi quyết định** vào Minipower.
- Minipower giữ vai **bộ nhớ & trợ lý dự án** xuyên suốt khoá: mọi thứ học viên làm đều vào kho tri thức.

> **Stack khoá học:** backend **.NET 9 / C# (jarvis framework)** · frontend **ReactJS** · deploy **Dokploy**.

> **Gốc rễ từ 2 buổi đã chạy:** 12 nỗi đau (buổi 01) là vấn đề của **tri thức dự án**, không phải của AI;
> vòng đời **17 chặng / 6 nhóm** (buổi 02) cho thấy AI là **đồng nghiệp ở cả vòng đời**. Khoá này xây
> trên hai nền đó: học viên vừa *vibe-code* một sản phẩm thật, vừa học giữ tri thức của chính dự án mình.

---

## Đối tượng

| Nhóm | Buổi bắt buộc | Buổi nên dự |
|------|---------------|-------------|
| Người đã biết code (muốn vibe với AI) | 01–09 | — |
| Developer (khởi động với AI) | 01–09 | — |
| BA / PM | 01–09 | — |
| Tester / QA | 01–09 | — |
| Founder / Sinh viên | 01–09 | — |

> Tiên quyết: **đã qua buổi 01–02** (12 nỗi đau + vòng đời dự án). Học viên **có cả người đã biết code** —
> khoá không dạy code vỡ lòng, chỉ dạy **cách vibe code** ra sản phẩm và các kỹ năng AI-workflow.

---

## 9 buổi — 3 màn

### Màn 1 — Nền tảng *(đã chạy)*

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 01 | **Giới thiệu — 12 nỗi đau & Minipower** *(đã chạy)* | 90' | Minipower cài trên máy; hiểu 12 nỗi đau = vấn đề tri thức dự án |
| 02 | **Minipower là ai?** — vòng đời dự án *(đã chạy)* | 90–120' | Hiểu AI ở cả 17 chặng; biết pipeline 6 phase × skill × 19 DOC |
| 03 | **AI Foundation — LLM, Prompt & Context Engineering** | 120' | Prompt có context từ một biên bản họp thật + biết khi nào không tin AI |

### Màn 2 — Vibe code ra sản phẩm

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 04 | **Thiết lập & đường ray deploy** — jarvis · Git · Dokploy | 120' | Scaffold jarvis + React, push lên Git, **Dokploy tự deploy** lên domain thật |
| 05 | **Brainstorm & Write Plan** | 120' | Brainstorm giải pháp (AI bày trade-off, người chốt) + Plan (Story/Task có *done*) đã confirm |
| 06 | **Test-Driven & AI Coding** | 120' | Định nghĩa test/*done* trước → AI code trên jarvis cho pass → push (auto-deploy) |
| 07 | **AI Coding** — hoàn thiện sản phẩm | 120' | Vibe code nốt các tính năng; **debug lồng trong** khi code; push auto-deploy |
| 08 | **Code Review với AI** | 120' | Review code AI sinh — không tin lời AI, chạy thật; refactor đúng chuẩn jarvis |

### Màn 3 — Ship & Demo

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 09 | **Demo sản phẩm — Capstone** | 120' | MVP chạy thật qua Dokploy + bộ nhớ dự án trong Minipower + lộ trình 30/60/90 |

---

## Chi tiết từng buổi

### Buổi 01–02 — Cửa ngõ (đã chạy, dùng chung hai khoá)
- **01 · 12 nỗi đau & Minipower:** nỗi đau 1→12 → cao trào "đây không phải vấn đề AI, mà là vấn đề
  tri thức dự án" → giới thiệu Minipower (Project Memory + Project Analyst + Project Assistant).
- **02 · Minipower là ai?:** bản đồ **17 chặng / 6 nhóm**; AI là đồng nghiệp ở cả vòng đời; Minipower
  là AI Project Assistant (pipeline 6 phase × skill × 19 DOC); thực hành init project.
- Không soạn mới — kế thừa `assets/workshops/01-gioi-thieu/` và `02-ai-dong-nghiep/`.

### Buổi 03 — AI Foundation & Prompt/Context Engineering
- **Nội dung:** LLM · token · context window · hallucination; Prompt Engineering; Context Engineering.
- **Bám buổi 01–02:** minh hoạ hallucination bằng chuyện *"khách nói 2 tiếng, BA không ghi kịp"* →
  nếu không có context, AI tự bịa requirement; Minipower chính là nguồn context đáng tin của dự án.
- **Thực hành:** lấy một biên bản họp thật → viết prompt có context → AI phản biện, đối chiếu với
  nguồn → **chốt**: yêu cầu nào đúng/đủ, ghi vào Minipower *(HW: DOC-01/02/03)*.

### Buổi 04 — Thiết lập & đường ray deploy *(mới)*
- **Nội dung:** scaffold **backend jarvis** (.NET 9, dùng AI skill `jarvis-dotnet`) + **frontend ReactJS**;
  khởi tạo **Git**, dùng AI **push toàn bộ tài liệu (docs Minipower) + source** lên GitHub; nối **Dokploy**
  → **push là tự build & deploy** lên domain thật.
- **Vì sao theo jarvis:** khung **Clean Architecture 5 lớp** (Domain.Shared · Domain · Application/CQRS ·
  Infrastructure/EF · Host) → khi sự cố còn **lần ra gốc mà sửa**, không phải code AI rối không debug nổi.
- **Vì sao deploy sớm:** dựng "đường ray" ngay đầu → từ buổi sau, mỗi lần push là **tự lên production**.
- **Bám buổi 01–02:** chặng **Triển khai & Vận hành** trong 17 chặng; AI dựng, **người chốt** cấu hình
  (domain · env · secret) và **quyết định push/merge** mới kích deploy.
- **Thực hành:** jarvis scaffold "cái chạy được" (Swagger + health check) + React "hello" → push →
  Dokploy tự deploy → mở domain thật thấy chạy; ghi cấu hình + "đã chốt" vào Minipower.

### Buổi 05 — Brainstorm & Write Plan
- **Brainstorm giải pháp:** từ yêu cầu (DOC-01/02/03 từ HW buổi 03), AI **bày các phương án + trade-off**
  (chọn module jarvis nào: Auth JWT? EF + Postgres? Redis? Blob/MinIO?; cấu trúc dữ liệu; cách làm) →
  **người chốt**, ghi lại quyết định (ADR — mỗi quyết định một file, *Accepted* thì không sửa).
- **Write Plan:** bóc **Epic / Story / Task**; mỗi task có **tiêu chí *done* (test)**; **trace ngược về
  yêu cầu** — không task mồ côi. **Confirm plan** trước khi bắt tay code.
- **Bám buổi 01–02:** "chốt" giải nỗi đau #6 (ai quyết định — có tên người); Minipower là "bộ nhớ".
- **Thực hành:** 1 module lõi (vd *Đơn nghỉ phép*) → brainstorm phương án → chốt → viết Plan (Story/Task
  + *done*), ghi Minipower. Kết bài: **"có plan đã confirm, sẵn sàng code"**.

### Buổi 06 — Test-Driven & AI Coding
- **Cách làm (test-driven):** định nghĩa **test / tiêu chí *done* TRƯỚC** → AI code (backend jarvis: CQRS
  command/query + EF; frontend React gọi API) cho tới khi **pass test** → push (**Dokploy auto-deploy**).
  Test là "hợp đồng" giữ AI không code lạc; **pass test = done thật**.
- **AI Coding Tools:** Cursor · Claude Code · OpenCode; 5 thao tác — buổi này nhấn **sinh code · explain**.
- **Bám buổi 01–02:** công cụ là "đôi tay", Minipower là "bộ nhớ" — giải nỗi đau #12 (tìm tri thức cực khó).
- **Thực hành:** code module *Đơn nghỉ phép* theo plan buổi 05, **test trước — code sau**, push thấy tự
  lên production; mỗi task xong ghi trạng thái vào Minipower.

### Buổi 07 — AI Coding — hoàn thiện sản phẩm
- **Nội dung:** tiếp tục **vibe code** các tính năng còn lại theo plan (thêm module/màn, frontend React +
  backend jarvis). **Debug lồng trong**: khi test fail / gặp lỗi → nhờ **cấu trúc jarvis** lần ra gốc,
  fix cùng AI ngay trong lúc code. Code nhanh nhưng **có kiểm soát**.
- **Bám buổi 01–02:** nỗi đau #7 (test không trace requirement) — khi fix, ghi "bug do yêu cầu/task nào".
- **Thực hành:** mở rộng sản phẩm; gặp lỗi debug cùng AI tại chỗ; push auto-deploy; ghi bài học Minipower.

### Buổi 08 — Code Review với AI
- **Nội dung:** review code AI sinh — **không tin lời AI, luôn chạy thật**; đối chiếu **plan/test**;
  **refactor** cho gọn & **đúng chuẩn jarvis** (đặt đúng lớp Domain/Application/Infrastructure);
  soi nhanh **bảo mật & hiệu năng** cơ bản.
- **Bám buổi 01–02:** kỷ luật "không tin AI mù quáng" — mọi thay đổi có bằng chứng chạy thử.
- **Thực hành:** cho AI review chính PR của mình → **học viên chốt** sửa gì → refactor → push; ghi quyết
  định review vào Minipower.

### Buổi 09 — Demo sản phẩm · Capstone
- **Yêu cầu:** MVP (CRM Mini · HRM Mini · POS Mini · Chat AI · CMS) chạy thật trên internet **qua Dokploy**;
  AI hỗ trợ ≥70% mã; **đi qua đủ 6 nhóm chặng của vòng đời** (từ buổi 02), mỗi chặng có quyết định
  người-chốt ghi trong Minipower; demo kể lại hành trình bằng chính sản phẩm.
- **Hình thức:** trình bày; chấm theo rubric rút gọn; chốt lộ trình 30/60/90 cho dự án của mình.

---

## Chuẩn đầu ra

Sau khoá, học viên:

- ✅ **Vibe code ra MVP chạy thật** trên nền **jarvis (.NET) + React**, deploy internet qua **Dokploy**
- ✅ Dựng **Git + Dokploy auto-deploy** — **push là tự lên production**
- ✅ Thành thạo vòng lặp **brainstorm → write plan → test-driven → AI coding → code review**
- ✅ **Debug** được nhờ code theo khung jarvis — lần ra gốc sự cố, không sửa mò
- ✅ Biết **review kết quả AI** — không tin lời AI, luôn chạy thử
- ✅ **Quản lý tri thức dự án bằng Minipower** — quyết định (ADR), plan, bug đều truy vết được
- ✅ Quen **cổng người-chốt**: làm nhanh nhưng không mất kiểm soát

---

## Rubric chấm bài (dùng từ buổi 04)

| Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|----------|--------|--------|--------|
| **Chạy được** | Không có gì chạy | Chạy local | Deploy thật qua Dokploy + chạy ổn |
| **Cổng** | AI tự đi tiếp | Có quyết định nhưng người không đọc | Mỗi cổng có người chốt + ghi vào Minipower |
| **Trace** | Không ghi gì | Ghi rời rạc | Yêu cầu → plan → code → bug truy được trong Minipower |
| **Bằng chứng** | Tin lời AI | Có chạy thử nhưng không ghi | Test pass + review + ghi assumption/TBD rõ |

Tổng 8 điểm. Dưới 60% → làm lại trước buổi kế.

---

## Chuẩn bị mỗi buổi

**Giảng viên**
- Màn hình chia đôi: slide trái, IDE phải — dùng đúng dự án mẫu (jarvis + React).
- Chuẩn bị sẵn một trạng thái "đã chạy đến bước trước" để không mất thời gian.
- Vài **lỗi cố ý** để lồng vào buổi coding (07) cho học viên debug cùng AI.
- Một **server Dokploy** dựng sẵn để học viên nối repo và deploy.

**Học viên**
- Laptop + IDE (Cursor / Claude Code / OpenCode) có Minipower cài ở buổi 01.
- **.NET 9 SDK** + **Node.js** (cho React) cài sẵn.
- Tài khoản **Git (GitHub)**; từ buổi 04 nối **Dokploy** (giảng viên cấp server) để auto-deploy.
- Một ý tưởng app / biên bản yêu cầu thật để xây xuyên khoá.
- Ngân sách token: nhắc việc nhỏ đừng bật đủ cổng nặng.

---

## Quan hệ với curriculum v1 (AI Software Engineering)

| | v1 · SE (16 buổi) | v2 · Vibe Coding (9 buổi) |
|--|-------------------|---------------------------|
| Đối tượng | BA/PM/SA/QA/Dev có kinh nghiệm | Người mới **hoặc đã biết code**, muốn vibe với AI |
| Trọng tâm | AI trong **toàn bộ SDLC** (cổng đủ) | **Vibe code ra sản phẩm** + kỹ năng AI-workflow (cổng nhẹ) |
| Tài liệu | BRD/SRS/SAD/AC đầy đủ | Brainstorm → **ADR + Plan** (bỏ SRS) |
| Stack | tuỳ dự án | jarvis (.NET) + React + Dokploy |
| Dùng chung | Buổi 01–02 | Buổi 01–02 |

> Vibe Coding là **cửa ngõ** dẫn tới lộ trình SE: học viên có thể học xong v2 rồi tiếp v1
> (v1 không dạy lại buổi 01–02).

---

## Quy ước file trong repo academy

```
assets/
├── curriculum.md                  ← file này (v2 · Vibe Coding) — LỘ TRÌNH CHÍNH THỨC
├── lo-trinh-tham-khao/            ← các lộ trình cũ/nháp/tham khảo (không dùng để tra cứu chính)
│   ├── curriculum-v1.md           ← lộ trình SE 16 buổi (lưu trữ)
│   ├── lotrinh-tham-khao.md       ← lộ trình tham khảo trên internet
│   └── lotrinh-vibe-coding-minipower.md  ← bản nháp chưa chốt
├── _shared/                       ← tài sản dùng chung mọi buổi
├── _template/                     ← khung 5 file giai đoạn
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

Buổi 01–02 dùng chung thư mục `01-gioi-thieu/`, `02-ai-dong-nghiep/`. Buổi mới (03–09) copy khung
từ `_template/` và đăng ký trong `docs/js/site.js`.

### Sơ đồ thư mục buổi (03 → 09) — v2

| # | Slug thư mục | Ghi chú |
|---|--------------|---------|
| 03 | `03-ai-foundation` | **mới** |
| 04 | `04-setup-deploy` | **mới** · jarvis + Git + Dokploy (đường ray) |
| 05 | `05-brainstorm-plan` | **mới** · brainstorm + write plan |
| 06 | `06-test-driven-coding` | **mới** · test-driven + AI coding |
| 07 | `07-ai-coding` | **mới** · hoàn thiện sản phẩm (debug lồng trong) |
| 08 | `08-code-review` | **mới** · code review với AI |
| 09 | `09-demo-day-capstone` | **mới** |
