# Minipower Academy — Lộ trình đào tạo

> Bản đồ toàn khoá. Mỗi buổi có thư mục riêng theo 5 giai đoạn pipeline: `assets/workshops/NN-slug/`.

---

## Triết lý xuyên suốt (không buổi nào được phá)

```
AI = trợ lý ra quyết định   ·   Con người = người quyết định cuối cùng
```

- AI **chuẩn bị** — soạn tài liệu, phản biện, liệt kê trade-off, soạn quyết định nháp.
- Con người **mở cổng** — chốt từng chặng bằng một quyết định có tên (DEC).
- Giữa hai cổng, AI được **fan-out song song** theo module / theo chiều review.
- Khoá học **không** dạy "AI tự chạy dự án". Buổi nào nghe như vậy là buổi đó sai.

---

## Đối tượng

| Nhóm | Buổi bắt buộc | Buổi nên dự |
|------|---------------|-------------|
| BA | 01–06, 09, 10 | 07, 08 |
| PM | 01–04, 08, 09, 10 | 05, 06 |
| SA / Tech Lead | 01–03, 05, 07, 10 | 06, 08 |
| QA / QC | 01–03, 05, 06, 08, 10 | 09 |
| Dev | 01–03, 07, 08 | 05, 06 |

---

## 10 buổi

| # | Tên buổi | Thời lượng | Học viên rời phòng với |
|---|----------|-----------|------------------------|
| 01 | **Giới thiệu — 12 nỗi đau & Minipower** *(đã chạy)* | 90' | Minipower đã cài trên máy |
| 02 | **Minipower là ai?** — toàn cảnh 17 chặng *(đã chốt)* | 90–120' | Hiểu AI tham gia cả vòng đời, không chỉ hỏi–đáp |
| 03 | **AI-Native Software Development — bản đồ đường đi** | 120' | Dự án thật đã `init`, đúng 4 nhánh thư mục |
| 04 | **Discovery & Cổng 0 — "Có đáng làm không?"** | 120' | DOC-01→03 + verdict Premise Check + DEC chốt BRD |
| 05 | **Requirements & Fan-out — 1 người chạy 8 module** | 120' | BR → Prototype → SRS → AC cho ≥1 module + trace matrix |
| 06 | **QC đối kháng & Baseline** | 120' | Bảng finding 5 chiều + verdict PASS/BLOCK |
| 07 | **Kiến trúc & Cổng thực thi** | 120' | SAD/ADR + sổ nợ `open-questions.md` |
| 08 | **Kế hoạch & Bàn giao** | 120' | WBS trace FR + test strategy + checklist go-live |
| 09 | **Thay đổi & tri thức sống** | 120' | 1 CR chạy hết vòng: impact → delta → re-baseline |
| 10 | **Demo Day — Capstone** | 150' | Dự án thật đi hết pipeline + lộ trình áp dụng 30/60/90 |

---

## 12 nỗi đau (buổi 01) được giải ở buổi nào

| Nỗi đau | Buổi giải | Cách giải |
|---------|-----------|-----------|
| #1 Không ghi kịp nội dung họp | 02, 03 | `assets/` giữ bản gốc · AI bóc tách sang `brainstorm/` |
| #2 MOM ra quá muộn | 02, 03 | MOM là điểm bắt đầu, không phải đích |
| #3 Không rõ ai làm gì | 03, 04 | 7 cổng người-chốt — mỗi cổng có một người duyệt |
| #4 Quá nhiều tài liệu, copy lẫn nhau | 03, 05 | 19 DOC có chủ + cross-ref bằng ID, **không copy nội dung** |
| #5 Tài liệu chết dần | 06, 09 | Baseline có kiểm soát + CR + regression tài liệu |
| #6 Không biết ai quyết định | 04, 09 | `decision-log.md` — quyết định **kèm phương án bị loại** |
| #7 Test case không trace requirement | 05, 06, 08 | UC → FR → AC → Test trong `trace-matrix.md` |
| #8 Người mới onboard chậm | 09 | `memory/{phase}/` — hỏi AI thay vì đọc 500 trang |
| #9 Phụ thuộc "Human Database" | 09, 10 | Tri thức nằm trong repo, không nằm trong đầu một người |
| #10 Scope creep | 09 | Sau baseline mọi thay đổi đi qua CR + impact |
| #11 Họp quá nhiều | 04, 07 | Hỏi **trọn gói một lượt**, không hỏi nhỏ giọt |
| #12 Tìm tri thức cực khó | 03, 09 | Một repo, một quy ước ID, một chỗ để tìm |

---

## Hai dự án chạy song song trong khoá

1. **Case chung — CRM công ty ABC.** Dùng để kể chuyện và demo trên màn hình. Nối tiếp câu chuyện buổi 01–02.
2. **Dự án thật của học viên.** Từ buổi 03 trở đi, mọi bài tập làm trên dự án học viên đang chạy. Không có dự án thật → dùng CRM ABC.

> Nguyên tắc: **học viên không xem demo — học viên chạy.** Mỗi buổi để dành ≥30 phút hands-on tại lớp.

---

## Rubric chấm bài (dùng chung từ buổi 03)

| Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|----------|--------|--------|--------|
| **Trace** | Không có trace | Có nhưng đứt đoạn | UC → FR → AC → Test liền mạch |
| **Cổng** | AI tự đi tiếp | Có DEC nhưng người không đọc | Mỗi cổng có DEC người chốt thật |
| **Bằng chứng** | Nội dung AI bịa | Có assumption chưa đánh dấu | Assumption/TBD ghi rõ, có sổ nợ |
| **Chi phí** | Việc nhỏ chạy đủ gate | Không phân tầng | Phân tầng micro/light/full hợp lý |
| **Tri thức** | Không cập nhật memory | Nhồi hết vào `memory.md` | `memory/{phase}/` + decision-log gọn |

Tổng 10 điểm. Dưới 6 → làm lại trước buổi kế.

---

## Chuẩn bị mỗi buổi

**Giảng viên**
- Màn hình chia đôi: slide bên trái, IDE bên phải — dùng đúng dự án CRM ABC.
- Chuẩn bị sẵn một trạng thái "đã chạy đến bước trước" để không mất thời gian chạy lại.
- Chuẩn bị **một lỗi cố ý** trong DOC để lớp tìm ra (buổi 06 bắt buộc).

**Học viên**
- Laptop + IDE (Cursor / Claude Code / OpenCode) đã cài Minipower ở buổi 01.
- Một tài liệu thật của dự án đang làm (biên bản họp, email yêu cầu, file khách gửi).
- Ngân sách token: nhắc lớp việc nhỏ đừng bật đủ gate — buổi 03 và 09 nói kỹ.

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
