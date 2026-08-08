# Minipower Academy — Lộ trình đào tạo (v1)

> **Bản v1 — lưu trữ (AI Software Engineering toàn vòng đời, 16 buổi).**
> File này là ảnh lưu của `assets/curriculum.md` trước khi chuyển sang v2 (mức Vibe Coding).
> Tham khảo tiếp: `assets/curriculum.md` (v2 — Vibe Coding) · `assets/lotrinh-tham-khao.md`.

> Bản đồ toàn khoá. Mỗi buổi có thư mục riêng theo 5 giai đoạn pipeline: `assets/workshops/NN-slug/`.
> **Thiết kế lại (từng là v2):** giữ nguyên buổi 01–02; từ buổi 03 ghép thêm nhánh **xây & ship thật**
> lấy cảm hứng từ cấu trúc "làm app fullstack cùng AI" — để cuối khoá học viên có **một sản phẩm chạy thật
> trên internet, đi qua đủ 7 cổng người-chốt**. Khoá mở rộng cho cả **maker/solo builder**.

---

## Triết lý xuyên suốt (không buổi nào được phá)

```
AI = trợ lý ra quyết định   ·   Con người = người quyết định cuối cùng
```

- AI **chuẩn bị** — soạn tài liệu, phản biện, liệt kê trade-off, soạn quyết định nháp, **viết code nháp**.
- Con người **mở cổng** — chốt từng chặng bằng một quyết định có tên (DEC).
- Giữa hai cổng, AI được **fan-out song song** theo module / theo chiều review.
- Khoá học **không** dạy "AI tự chạy dự án". Buổi nào nghe như vậy là buổi đó sai.

> **Khác biệt với "vibecode để AI làm hộ":** ngay cả khi **một người** làm (solo builder), người đó vẫn
> là **người mở cổng ở mọi chặng**. AI xây rất nhanh, nhưng không tự ký BRD, không tự chốt kiến trúc,
> không tự đẩy lên production. Tốc độ của maker + kỷ luật của cổng = sản phẩm nhanh mà không mất kiểm soát.

---

## Đối tượng

| Nhóm | Buổi bắt buộc | Buổi nên dự |
|------|---------------|-------------|
| BA | 01–06, 15, 16 | 07, 08, 13 |
| PM | 01–05, 09, 15, 16 | 06, 08, 13 |
| SA / Tech Lead | 01–03, 06–08, 10, 14, 16 | 09, 11, 12 |
| QA / QC | 01–03, 06, 08, 11, 12, 16 | 10, 15 |
| Dev | 01–03, 07–14, 16 | 05, 06 |
| **Maker / Solo builder** | **01–16** | — (đi trọn, tự đóng mọi vai ở mỗi cổng) |

> **Solo builder** đóng **cả 5 vai** một mình: tự viết BRD, tự chốt kiến trúc, tự review QC, tự deploy.
> Cổng không biến mất khi làm một mình — chỉ là **một người ngồi ở cả bảy cổng**.

---

## 16 buổi — 4 màn

### Màn 0 — Vì sao *(giữ nguyên)*

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 01 | **Giới thiệu — 12 nỗi đau & Minipower** *(đã chạy)* | 90' | Minipower đã cài trên máy |
| 02 | **Minipower là ai?** — toàn cảnh vòng đời *(đã chốt)* | 90–120' | Hiểu AI tham gia cả vòng đời, không chỉ hỏi–đáp |

### Màn 1 — Bản đồ & Khởi động

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 03 | **AI-Native Development — bản đồ đường đi** | 120' | Dự án thật đã `init`, đúng 4 nhánh thư mục + "cái chạy được" đầu tiên |
| 04 | **Discovery & Cổng 0 — "Có đáng làm không?"** | 120' | DOC-01→03 (Vision·Stakeholder·**BRD/PRD**) + verdict Premise Check + DEC chốt BRD |

### Màn 2 — Thiết kế trước khi code

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 05 | **Requirements & Fan-out — 1 người chạy nhiều module** | 120' | BR → SRS → AC cho ≥1 module + trace matrix |
| 06 | **Prototype & Thiết kế giao diện bằng AI** | 120' | Mockup UI khoá lại **trước khi code** + DEC chốt Prototype |
| 07 | **Thiết kế kỹ thuật (SAD/ADR/TDD) & Cơ sở dữ liệu** | 120' | TDD + data model + API + DEC chốt Architecture |
| 08 | **QC đối kháng & Baseline** | 120' | Bảng finding 5 chiều + verdict PASS/BLOCK + baseline đã ký |

### Màn 3 — Xây thật

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 09 | **Kế hoạch, bóc việc & Git/GitHub** | 120' | WBS/Epic-Story-Task trace FR + repo Git khởi tạo, commit đầu tiên |
| 10 | **Vòng lặp xây dựng với Claude Code** | 120' | ≥1 tính năng chạy được + `CLAUDE.md` điều hướng AI đúng ý |
| 11 | **Test tự động & kiểm soát chất lượng** | 120' | Bộ test tự động xanh, chặn regression |
| 12 | **Bảo mật web & làm việc nhóm trên GitHub** | 120' | Auth an toàn + phân quyền + luồng PR nhóm không giẫm chân |
| 13 | **Lưu trữ file & tối ưu chi phí** | 120' | File storage gắn vào app + bảng phân tầng chi phí micro/light/full |

### Màn 4 — Ship & Vận hành

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 14 | **Đưa app lên internet + Docker & migration** | 120' | App chạy trên **domain thật, HTTPS** + đóng gói Docker |
| 15 | **Vận hành lâu dài + Thay đổi & tri thức sống** | 120' | Backup·monitor + 1 CR chạy hết vòng: impact → delta → re-baseline |
| 16 | **Demo Day — Capstone** | 150' | Sản phẩm thật đi hết pipeline + lộ trình áp dụng 30/60/90 |

---

## 7 cổng người-chốt — nằm ở đâu trên 16 buổi

| Cổng | Chốt cái gì | Mở khoá cho AI làm gì | Buổi |
|------|-------------|------------------------|------|
| 1 | BRD / PRD | Sinh Business Rule + SRS cho tất cả module | 04 |
| 2 | Business Rules & SRS / AC | Dựng Prototype cho tất cả module | 05 |
| 3 | Prototype / UI | Thiết kế kỹ thuật, data model, API | 06 |
| 4 | Kiến trúc & CSDL (SAD/ADR/TDD) | Bóc Epic / Story / Task | 07 |
| 5 | Baseline (QC pass) | Bắt đầu code theo bản đã ký | 08 |
| 6 | Kế hoạch & bóc việc | Viết test + code từng story | 09 |
| 7 | Sẵn sàng production (test xanh + bảo mật đạt) | Deploy lên domain thật | 12–14 |

> **Nguyên tắc bất biến:** giữa hai cổng AI fan-out song song; **không có cổng chốt phía trước thì không đi tiếp**.
> AI không tự mở cổng cho chính nó — kể cả khi bạn làm một mình.

---

## 12 nỗi đau (buổi 01) được giải ở buổi nào

| Nỗi đau | Buổi giải | Cách giải |
|---------|-----------|-----------|
| #1 Không ghi kịp nội dung họp | 02, 03 | `assets/` giữ bản gốc · AI bóc tách sang `brainstorm/` |
| #2 MOM ra quá muộn | 02, 03 | MOM là điểm bắt đầu, không phải đích |
| #3 Không rõ ai làm gì | 03, 04 | 7 cổng người-chốt — mỗi cổng có một người duyệt |
| #4 Quá nhiều tài liệu, copy lẫn nhau | 03, 05 | 19 DOC có chủ + cross-ref bằng ID, **không copy nội dung** |
| #5 Tài liệu chết dần | 08, 15 | Baseline có kiểm soát + CR + regression tài liệu |
| #6 Không biết ai quyết định | 04, 15 | `decision-log.md` — quyết định **kèm phương án bị loại** |
| #7 Test case không trace requirement | 05, 08, 11 | UC → FR → AC → Test trong `trace-matrix.md` + test tự động |
| #8 Người mới onboard chậm | 10, 15 | `CLAUDE.md` + `memory/{phase}/` — hỏi AI thay vì đọc 500 trang |
| #9 Phụ thuộc "Human Database" | 15, 16 | Tri thức nằm trong repo, không nằm trong đầu một người |
| #10 Scope creep | 15 | Sau baseline mọi thay đổi đi qua CR + impact |
| #11 Họp quá nhiều | 04, 07 | Hỏi **trọn gói một lượt**, không hỏi nhỏ giọt |
| #12 Tìm tri thức cực khó | 03, 15 | Một repo, một quy ước ID, một chỗ để tìm |

---

## Hai dự án chạy song song trong khoá

1. **Case chung — CRM công ty ABC.** Dùng để kể chuyện và demo trên màn hình. Nối tiếp câu chuyện buổi 01–02.
2. **Sản phẩm thật của học viên.** Từ buổi 03 trở đi, mọi bài tập làm trên sản phẩm học viên đang xây:
   - **Team dự án** → dự án công ty đang chạy.
   - **Maker / solo builder** → ý tưởng app của chính mình, đi từ Discovery đến deploy thật.
   - Không có gì để mang theo → dùng CRM ABC.

> Nguyên tắc: **học viên không xem demo — học viên chạy.** Mỗi buổi để dành ≥30 phút hands-on tại lớp.
> Từ Màn 3, mỗi buổi kết thúc bằng **một artefact chạy được** (commit, test xanh, feature, deploy).

---

## Rubric chấm bài (dùng chung từ buổi 03)

| Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|----------|--------|--------|--------|
| **Trace** | Không có trace | Có nhưng đứt đoạn | UC → FR → AC → Test → Code liền mạch |
| **Cổng** | AI tự đi tiếp | Có DEC nhưng người không đọc | Mỗi cổng có DEC người chốt thật |
| **Bằng chứng** | Nội dung AI bịa | Có assumption chưa đánh dấu | Assumption/TBD ghi rõ, có sổ nợ |
| **Chi phí** | Việc nhỏ chạy đủ gate | Không phân tầng | Phân tầng micro/light/full hợp lý |
| **Tri thức** | Không cập nhật memory | Nhồi hết vào `memory.md` | `CLAUDE.md` + `memory/{phase}/` + decision-log gọn |
| **Chạy được** *(từ Màn 3)* | Không có gì chạy | Chạy local, chưa deploy | Deploy thật + test xanh |

Tổng 10–12 điểm. Dưới 60% → làm lại trước buổi kế.

---

## Chuẩn bị mỗi buổi

**Giảng viên**
- Màn hình chia đôi: slide bên trái, IDE bên phải — dùng đúng dự án CRM ABC.
- Chuẩn bị sẵn một trạng thái "đã chạy đến bước trước" để không mất thời gian chạy lại.
- Chuẩn bị **một lỗi cố ý** trong DOC/code để lớp tìm ra (buổi 08, 11 bắt buộc).

**Học viên**
- Laptop + IDE (Cursor / Claude Code / OpenCode) đã cài Minipower ở buổi 01.
- Một tài liệu thật của dự án đang làm (biên bản họp, email yêu cầu, file khách gửi) **hoặc** một ý tưởng app để xây.
- Từ Màn 3: tài khoản **GitHub**; từ Màn 4: tài khoản **hosting + domain** (giảng viên hướng dẫn chọn loại rẻ).
- Ngân sách token: nhắc lớp việc nhỏ đừng bật đủ gate — buổi 03 và 13 nói kỹ.

---

## Quy ước file trong repo academy

```
assets/
├── curriculum.md                 ← file này (lộ trình toàn khoá)
├── _shared/                      ← tài sản dùng chung mọi buổi
│   ├── base_prompt.md            ← prompt gốc để sinh prompt ảnh
│   └── characters_*.png          ← nhân vật, giữ nhất quán xuyên suốt
├── _template/                    ← khung 5 file giai đoạn, copy khi mở buổi mới
└── workshops/NN-slug/            ← nội dung buổi N theo 5 giai đoạn pipeline
    ├── 1-concept.md              ← ý tưởng & mục tiêu
    ├── 2-script-raw.md           ← kịch bản thô
    ├── 2-script-final.md         ← kịch bản biên tập (nguồn để chẻ storyboard)
    ├── 3-storyboard.md           ← phân cảnh: chẻ kịch bản thành từng khung/slide
    └── 4-prompts.md              ← prompt tạo nhân vật, hình ảnh cho từng khung
docs/workshops/NN-slug/           ← giai đoạn 5: dựng deck xuất bản
├── index.html                    ← deck trình chiếu
├── homework.html                 ← bài tập về nhà
└── slides/{khung}/{n}.webp
```

Thêm buổi mới → copy `assets/_template/` sang `assets/workshops/NN-slug/` và
`docs/workshops/_template/` sang `docs/workshops/NN-slug/`, đăng ký trong `docs/js/site.js`.

### Sơ đồ thư mục buổi (03 → 16) — bản v2

| # | Slug thư mục | Ghi chú migration |
|---|--------------|-------------------|
| 03 | `03-ai-native-development` | giữ (đã có Concept + Script final) |
| 04 | `04-discovery-cong-0` | giữ |
| 05 | `05-requirements-fanout` | giữ |
| 06 | `06-prototype-ui` | **mới** |
| 07 | `07-thiet-ke-ky-thuat` | từ `07-kien-truc`, gộp thêm TDD & CSDL |
| 08 | `08-qc-baseline` | từ `06-qc-doi-khang` (chuyển số) |
| 09 | `09-ke-hoach-git` | từ `08-ke-hoach-ban-giao`, thêm Git/GitHub |
| 10 | `10-vong-lap-xay-dung` | **mới** |
| 11 | `11-test-tu-dong` | **mới** |
| 12 | `12-bao-mat-teamwork` | **mới** |
| 13 | `13-luu-tru-chi-phi` | **mới** |
| 14 | `14-deploy-docker` | **mới** |
| 15 | `15-van-hanh-thay-doi` | từ `09-thay-doi`, gộp vận hành/backup/monitor |
| 16 | `16-demo-day` | từ `10-demo-day` |
