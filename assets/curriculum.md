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

- Ở mức **Vibe Coding**, cổng người-chốt được làm **nhẹ** theo lối **spec/plan-driven** (giống *Superpower*):
  dựng sẵn **Git + CI/CD auto-deploy** (buổi 04) rồi từ yêu cầu → **ADR** (chốt quyết định) → **Plan**
  (Epic/Story/Task, mỗi task có tiêu chí *done*) → **code & test theo plan** → **push là tự deploy**.
  **Không** viết SRS/SAD đầy đủ như v1 — ADR + Plan là bản thiết kế nhẹ bắc cầu từ yêu cầu sang code.
- Nhưng **không** có buổi nào dạy "AI tự chạy dự án". CI/CD chạy tự động, nhưng chính người
  **quyết định push/merge** mới kích deploy — người vẫn **mở cổng** và **ghi quyết định** vào Minipower.
- Minipower giữ vai **bộ nhớ & trợ lý dự án** xuyên suốt khoá: mọi thứ học viên làm đều vào kho tri thức.

> **Gốc rễ từ 2 buổi đã chạy:** 12 nỗi đau (buổi 01) là vấn đề của **tri thức dự án**, không phải của AI;
> vòng đời **17 chặng / 6 nhóm** (buổi 02) cho thấy AI là **đồng nghiệp ở cả vòng đời**. Khoá này xây
> trên hai nền đó: học viên vừa *vibe-code* một sản phẩm thật, vừa học giữ tri thức của chính dự án mình.

---

## Đối tượng

| Nhóm | Buổi bắt buộc | Buổi nên dự |
|------|---------------|-------------|
| Người chưa biết AI Coding | 01–09 | — |
| BA / PM | 01–09 | — |
| Developer (muốn khởi động với AI) | 01–09 | — |
| Tester / QA | 01–09 | — |
| Founder / Sinh viên | 01–09 | — |

> Tiên quyết: **đã qua buổi 01–02** (12 nỗi đau + vòng đời dự án). Không yêu cầu kiến thức
> Software Engineering sâu — khoá này không đào sâu kiến trúc.

---

## 9 buổi — 3 màn

### Màn 1 — Nền tảng

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 01 | **Giới thiệu — 12 nỗi đau & Minipower** *(đã chạy)* | 90' | Minipower cài trên máy; hiểu 12 nỗi đau = vấn đề tri thức dự án |
| 02 | **Minipower là ai?** — vòng đời dự án *(đã chạy)* | 90–120' | Hiểu AI ở cả 17 chặng; biết pipeline 6 phase × skill × 19 DOC |
| 03 | **AI Foundation — LLM, Prompt & Context Engineering** | 120' | Prompt có context từ một biên bản họp thật + biết khi nào không tin AI |

### Màn 2 — Vibe code & Xây thật

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 04 | **Git & CI/CD auto-deploy** — dựng "đường ray" (jarvis) *(mới)* | 120' | Git khởi tạo · AI push code & tài liệu · scaffold jarvis · **push là CI/CD tự deploy** |
| 05 | **ADR & Plan → Code & Test theo Plan** | 120' | Chốt ADR → lập Plan → code từng Task → test theo *done* → push (auto-deploy) |
| 06 | **Vibe Coding Workflow** | 120' | Landing Page / Todo App chạy thật theo flow có **cổng người-chốt** |
| 07 | **Fullstack cơ bản** | 120' | CRUD + đăng nhập chạy được, không đào sâu kiến trúc |
| 08 | **AI Debugging** | 120' | Sửa bug bằng AI; mỗi bug ghi bài học vào Minipower |

### Màn 3 — Ship & Demo

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 09 | **Demo Day — Capstone** | 150' | MVP chạy thật + bộ nhớ dự án trong Minipower + lộ trình 30/60/90 |

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
  nguồn → **chốt**: yêu cầu nào đúng/đủ, ghi vào Minipower.

### Buổi 04 — Git & CI/CD auto-deploy *(mới · dựng "đường ray")*
- **Nội dung:** khởi tạo dự án trên **Git**; dùng AI **push code + tài liệu** (docs Minipower) lên repo;
  **scaffold dự án bằng jarvis framework**; nối **CI/CD** để **push là tự deploy** (không deploy tay).
- **Vì sao đặt sớm:** dựng sẵn "đường ray" ngay đầu → từ buổi sau, mỗi lần push là **tự lên production**,
  buổi nào cũng thấy kết quả thật. Đây là bản nâng cấp của "deploy sớm" — gộp luôn khâu triển khai vào
  **một lần thiết lập**.
- **Bám buổi 01–02:** chặng **Triển khai & Vận hành** trong 17 chặng; AI dựng pipeline, **người chốt**
  cấu hình (nhánh, secret, môi trường) và **quyết định push/merge** mới kích deploy.
- **Thực hành:** init repo → jarvis scaffold "cái chạy được" đầu tiên → push → xem **CI/CD tự deploy**
  lên domain thật; ghi cấu hình + "đã chốt" vào Minipower. *(Chi tiết jarvis chờ tài liệu framework.)*

### Buổi 05 — ADR & Plan → Code & Test theo Plan
- **Thiết kế nhẹ (spec/plan-driven, giống *Superpower*):** từ yêu cầu thô (DOC-01/02/03 — nháp từ bài về
  nhà buổi 03), **không viết SRS**. Thay vào đó:
  1. **ADR (DOC-09)** — mỗi quyết định chính (stack · cấu trúc dữ liệu · cách làm) một file: bối cảnh →
     phương án → **vì sao chọn / loại**. *Accepted* thì không sửa; đổi ý → viết ADR mới.
  2. **Plan (DOC-08)** — bóc **Epic / Story / Task**, mỗi task có **tiêu chí *done* (test)**, trace ngược
     về yêu cầu — không task mồ côi.
- **Rồi code luôn trong buổi:** dùng **AI Coding Tools** (Cursor · Claude Code · OpenCode; 5 thao tác) để
  code **từng Task theo plan** → **test theo *done*** → tick plan → **người chốt** → **push (auto-deploy
  từ buổi 04)**. AI thực thi nhanh, người mở cổng từng mốc.
- **Bám buổi 01–02:** ADR giải nỗi đau #6 (ai quyết định — có tên người chốt); Minipower là "bộ nhớ"
  giải nỗi đau #12 (tìm tri thức cực khó).
- **Thực hành:** 1 module lõi (vd *Đơn nghỉ phép*) đi trọn **ADR → Plan → Code → Test → push**; mỗi task
  xong ghi trạng thái vào Minipower.

### Buổi 06 — Vibe Coding Workflow
- **Flow (có cổng người-chốt nhẹ):**

  ```text
  Ý tưởng → Prompt → AI sinh ứng dụng → Kiểm thử (chạy thật, không tin lời AI)
      → [Cổng 1 · Người chốt: đúng ý? bug đã biết?] → Deploy
      → [Cổng 2 · Người chốt: quyết định deploy + ghi vào Minipower]
  ```

- **Bám buổi 01–02:** "chốt" giải nỗi đau #6 (không biết ai quyết định) — quyết định **có tên,
  có người, ghi `decision-log`** trong Minipower.
- **Thực hành:** Landing Page + Todo App.

### Buổi 07 — Fullstack cơ bản
- **Nội dung:** frontend · backend · database · authentication — đủ để chạy, **không** đào sâu kiến trúc.
- **Bám buổi 01–02:** nối tiếp câu chuyện CRM công ty ABC (case chung từ buổi 01) → học viên làm bản
  "CRM Mini" của mình.
- **Thực hành:** CRUD + đăng nhập; Minipower ghi requirement/AC từng màn hình, trace yêu cầu → code.

### Buổi 08 — AI Debugging
- **Nội dung:** debug bằng AI · fix bug · refactor · review code.
- **Bám buổi 01–02:** nỗi đau #7 (test không trace requirement) — ghi "bug nào do yêu cầu nào"
  để không sửa sai gốc.
- **Thực hành:** giảng viên **cố tình cài một lỗi** trong code; học viên tìm bằng AI; mỗi bug xong
  ghi bài học vào Minipower.

### Buổi 09 — Demo Day · Capstone
- **Yêu cầu:** MVP (CRM Mini · HRM Mini · POS Mini · Chat AI · CMS) chạy thật trên internet;
  AI hỗ trợ ≥70% mã; **đi qua đủ 6 nhóm chặng của vòng đời** (từ buổi 02), mỗi chặng có quyết định
  người-chốt ghi trong Minipower; demo kể lại hành trình bằng chính sản phẩm.
- **Hình thức:** trình bày 150'; chấm theo rubric rút gọn.

---

## Chuẩn đầu ra

Sau khoá, học viên:

- ✅ **Xây MVP chạy thật** trong vài giờ và deploy lên internet
- ✅ Dựng **Git + CI/CD auto-deploy** (scaffold jarvis) — **push là tự lên production**
- ✅ Biết **Prompt & Context Engineering** — viết đúng câu hỏi, đủ ngữ cảnh
- ✅ Chạy được lối **ADR → Plan → Code → Test theo plan** (spec/plan-driven, kiểu *Superpower*) — nhẹ mà vẫn truy vết
- ✅ Dùng được **AI Coding Tools** (sinh · explain · debug · refactor · doc)
- ✅ Biết **review kết quả AI** — không tin lời AI, luôn chạy thử
- ✅ **Quản lý tri thức dự án bằng Minipower** — MOM, yêu cầu, quyết định, bug đều truy vết được
- ✅ Quen **cổng người-chốt**: làm nhanh nhưng không mất kiểm soát

---

## Rubric chấm bài (dùng từ buổi 03)

| Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|----------|--------|--------|--------|
| **Chạy được** | Không có gì chạy | Chạy local | Deploy thật + chạy ổn |
| **Cổng** | AI tự đi tiếp | Có quyết định nhưng người không đọc | Mỗi cổng có người chốt + ghi vào Minipower |
| **Trace** | Không ghi gì | Ghi rời rạc | Yêu cầu → quyết định → bug truy được trong Minipower |
| **Bằng chứng** | Tin lời AI | Có chạy thử nhưng không ghi | Chạy thử + ghi assumption/TBD rõ |

Tổng 8 điểm. Dưới 60% → làm lại trước buổi kế.

---

## Chuẩn bị mỗi buổi

**Giảng viên**
- Màn hình chia đôi: slide trái, IDE phải — dùng đúng dự án mẫu.
- Chuẩn bị sẵn một trạng thái "đã chạy đến bước trước" để không mất thời gian.
- Một **lỗi cố ý** trong code cho buổi 08 (bắt buộc).

**Học viên**
- Laptop + IDE (Cursor / Claude Code / OpenCode) có Minipower cài ở buổi 01.
- Một biên bản họp / email yêu cầu thật **hoặc** một ý tưởng app để xây.
- Từ buổi 04: tài khoản **Git (GitHub)** + hosting/domain (giảng viên hướng dẫn loại rẻ).
- Ngân sách token: nhắc việc nhỏ đừng bật đủ cổng nặng.

---

## Quan hệ với curriculum v1 (AI Software Engineering)

| | v1 · SE (16 buổi) | v2 · Vibe Coding (9 buổi) |
|--|-------------------|---------------------------|
| Đối tượng | BA/PM/SA/QA/Dev có kinh nghiệm | Người mới, chưa cần kiến thức SE |
| Trọng tâm | AI trong **toàn bộ SDLC** (cổng đủ) | AI Coding + **cổng nhẹ** (ADR/Plan, bỏ SRS) + CI/CD auto-deploy |
| Kiến trúc | SAD/ADR/TDD/CSDL | Không đào sâu |
| Đầu ra | Sản phẩm đi qua 7 cổng người-chốt | MVP chạy thật + tri thức dự án trong Minipower |
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
| 04 | `04-git-cicd` | **mới** · Git + CI/CD auto-deploy (jarvis) |
| 05 | `05-adr-plan-code` | **mới** · ADR + Plan → Code & Test |
| 06 | `06-vibe-coding-workflow` | **mới** |
| 07 | `07-fullstack-co-ban` | **mới** |
| 08 | `08-ai-debugging` | **mới** |
| 09 | `09-demo-day-capstone` | **mới** |
