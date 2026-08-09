# Lộ trình dự kiến — Khóa Vibe Coding với Minipower

> **Bản nháp để trao đổi** — chưa chốt. Điều chỉnh từ lộ trình tham khảo (`assets/lotrinh-tham-khao.md`),
> neo vào 2 buổi đã chạy (`01-gioi-thieu`, `02-ai-dong-nghiep`) và triết lý Minipower
> (AI chuẩn bị · Con người chốt — xem `assets/curriculum.md`).

---

## 1. Nguyên tắc điều chỉnh

1. **Giữ khung của bản tham khảo** — 6 module + dự án cuối khóa của Khóa 1 Vibe Coding.
2. **Minipower xuyên suốt** — khác bản tham khảo (chỉ dạy công cụ AI Coding), khóa này đặt
   **Minipower làm bộ nhớ & trợ lý dự án** của cả hành trình: mọi thứ học viên làm (MOM, yêu cầu,
   quyết định, bug đã sửa) đều ghi vào Minipower. Học viên rời khóa với **một app chạy thật**
   + **một dự án tri thức sống** trong Minipower.
3. **Không phá 2 buổi đã chạy** — buổi 01 (12 nỗi đau → vấn đề tri thức dự án) và buổi 02
   (17 chặng, AI đồng nghiệp cả vòng đời) là **điểm khởi đầu**, không dạy lại từ zero.
4. **Vẫn giữ cổng người-chốt nhẹ** — đây là khóa *vibe coding* nên cổng **nhẹ**, không đòi
   BRD/SAD/QC đầy đủ như lộ trình 16 buổi; nhưng **không** có bước nào "AI tự đẩy lên production".
   Trước khi deploy có **một chốt của người** (kèm ghi quyết định vào Minipower).

---

## 2. Điểm neo vào 2 buổi đã chạy

| Buổi đã chạy | Nội dung giữ lại | Đi vào module nào |
|--------------|------------------|-------------------|
| **01 — Giới thiệu · 12 nỗi đau** | 12 nỗi đau = vấn đề **tri thức dự án**, không phải vấn đề AI. Minipower = Project Memory + Analyst + Assistant | M0 (tái hiện nhanh) + toàn khóa |
| **02 — Minipower là ai?** | Vòng đời **17 chặng / 6 nhóm**; AI = đồng nghiệp cả vòng đời; Minipower = AI Project Assistant (6 phase × skill × 19 DOC); **không** "AI tự chạy dự án" | M0, M3, M6, Capstone |

> Ghi chú: 2 buổi này **làm M0 của khóa** (học viên đã đi). Với lớp mới, vẫn bắt đầu từ 2 buổi này.

---

## 3. Lộ trình đề xuất (dự kiến 8 buổi + demo)

| Module | Buổi dự kiến | Tên | Học viên rời phòng với |
|--------|-------------|-----|------------------------|
| M0 | 01, 02 *(đã chạy)* | **12 nỗi đau & vòng đời dự án** — đã có, không dạy lại | Hiểu tri thức dự án là gốc · Minipower cài trên máy · biết 17 chặng |
| M1 | 03 | **AI Foundation & Prompt/Context** | Prompt + context engineering viết được; hiểu hallucination, biết khi nào không tin AI |
| M2 | 04 | **AI Coding Tools** — Cursor · Claude Code · OpenCode | Bộ 5 thao tác (sinh code · explain · debug · refactor · doc) thành thạo |
| M3 | 05 | **Vibe Coding Workflow** | Landing Page / Todo App chạy thật theo flow có chốt người |
| M4 | 06 | **Fullstack cơ bản** | CRUD + Auth chạy được, không đào sâu kiến trúc |
| M5 | 07 | **AI Debugging** | Sửa bug bằng AI; mọi bug ghi vào Minipower |
| M6 | 08 | **AI Deployment** | Deploy lên Vercel/Railway/Render qua Docker |
| Capstone | 09 | **Dự án cuối — demo** | MVP (CRM/HRM/POS/Chat/CMS Mini) chạy thật + bộ nhớ dự án trong Minipower |

---

## 4. Chi tiết từng module

### M0 — Đã chạy (buổi 01–02)
Không soạn mới. Dùng làm "buổi nhập môn": 12 nỗi đau → tri thức dự án → Minipower là ai → 17 chặng.

### M1 — AI Foundation & Prompt/Context (buổi 03)
- **Nội dung:** LLM, token, context window, hallucination; Prompt Engineering; Context Engineering.
- **Bám buổi 01–02:** minh hoạ hallucination bằng chính chuyện "khách nói 2 tiếng, ghi không kịp" →
  AI đoán bừa requirement nếu không có context; Minipower giữ context thật của dự án.
- **Thực hành:** viết prompt có context từ một biên bản họp; cho AI phản biện, đối chiếu với
  nguồn; **chốt**: yêu cầu nào đúng/đủ, ghi vào Minipower.

### M2 — AI Coding Tools (buổi 04)
- **Nội dung:** làm quen Cursor, Claude Code, OpenCode; 5 thao tác cốt lõi (sinh · explain ·
  debug · refactor · documentation).
- **Bám buổi 01–02:** tool = "tay" để code; Minipower = "bộ nhớ" của cả dự án (nỗi đau #12 —
  tìm tri thức cực khó).
- **Thực hành:** mỗi học viên `init` một dự án, mở đúng cấu trúc thư mục; đặt câu hỏi theo
  từng chặng của 17 chặng để thấy AI trả lời tốt chỗ nào, tệ chỗ nào.

### M3 — Vibe Coding Workflow (buổi 05)
- **Flow điều chỉnh** (so với bản tham khảo — **thêm cổng người-chốt nhẹ**):

  ```text
  Ý tưởng
    ↓
  Prompt
    ↓
  AI sinh ứng dụng
    ↓
  Kiểm thử (chạy thử thật, không tin lời AI)
    ↓
  [Cổng 1 — Người chốt: app đúng ý? Bug nào biết?]   ← bổ sung
    ↓
  Deploy
    ↓
  [Cổng 2 — Người chốt: quyết định deploy + ghi vào Minipower]   ← bổ sung
  ```
- **Bám buổi 01–02:** "chốt" chính là nỗi đau #6 (không biết ai quyết định) được giải —
  quyết định **có tên + có người + ghi vào Minipower**.
- **Thực hành:** Landing Page + Todo App; mỗi lần chốt ghi một dòng vào `decision-log` trong Minipower.

### M4 — Fullstack cơ bản (buổi 06)
- **Nội dung:** frontend, backend, database, authentication — đủ để chạy, **không** đào sâu kiến trúc.
- **Bám buổi 01–02:** nối chuyện CRM công ty ABC (case dùng chung từ buổi 01) → học viên làm
  bản "CRM Mini" của mình.
- **Thực hành:** CRUD + đăng nhập; Minipower ghi requirement/AC mỗi màn hình, trace từ yêu cầu → code.

### M5 — AI Debugging (buổi 05 tham khảo → buổi 07)
- **Nội dung:** debug bằng AI, fix bug, refactor, review code.
- **Bám buổi 01–02:** nỗi đau #7 (test không trace requirement) — học viên bắt đầu ghi
  "bug nào → do requirement nào" để không sửa sai gốc.
- **Thực hành:** giảng viên cố tình cài lỗi (như quy ước buổi 08/11 của lộ trình chính);
  mỗi bug xong → ghi bài học vào Minipower.

### M6 — AI Deployment (buổi 08)
- **Nội dung:** Docker, Vercel, Railway, Render.
- **Bám buổi 01–02:** chặng cuối của 17 chặng — **Triển khai & Vận hành**; AI giúp chuẩn bị
  checklist deploy, **người bấm nút và chốt**.
- **Thực hành:** app cá nhân lên domain thật; checklist deploy + màn hình "đã chốt" ghi trong Minipower.

### Capstone — Dự án cuối (buổi 09)
- **Yêu cầu (điều chỉnh từ bản tham khảo):**
  - MVP: CRM Mini · HRM Mini · POS Mini · Chat AI · CMS (chọn 1).
  - AI hỗ trợ ≥70% mã.
  - **Chạy thực tế** trên internet.
  - **Mới so với bản tham khảo:** dự án đi qua **đủ 6 chặng chính của vòng đời** (từ M0),
    mỗi chặng có quyết định người-chốt ghi trong Minipower; demo **kể lại 17 chặng** bằng chính
    sản phẩm của mình.
- **Hình thức:** demo 150', chấm theo rubric rút gọn (chạy được · trace · cổng người-chốt).

---

## 5. Khác biệt so với bản tham khảo

| Tiêu chí | Bản tham khảo (Khóa 1) | Bản điều chỉnh Minipower |
|----------|------------------------|--------------------------|
| Trọng tâm | AI Coding Tools | AI Coding **+ quản lý tri thức dự án** |
| Công cụ xuyên suốt | Cursor/Claude/Copilot… | Các tool trên **+ Minipower** làm bộ nhớ dự án |
| Workflow | Ý tưởng → Prompt → AI sinh → Kiểm thử → Deploy | **+ 2 cổng người-chốt** (trước deploy & sau deploy) |
| Đầu ra | App chạy thật | App chạy thật **+ dự án tri thức sống trong Minipower** |
| Bám nền tảng | Bắt đầu từ số 0 | Nối tiếp buổi 01–02 (12 nỗi đau, 17 chặng) |
| Đối tượng | Người mới | Người mới **đã qua buổi 01–02** |

---

## 6. Câu hỏi mở để trao đổi

1. **Số buổi:** đề xuất 9 (8 module + demo). Anh muốn dày hơn hay gọn hơn? Nên tách AI Coding
   Tools thành 2 buổi (nếu học viên chưa quen IDE)?
2. **Cổng người-chốt:** với khóa vibe coding, cổng "nhẹ" mức nào là vừa? (Đề xuất: chỉ 1 chốt
   trước deploy + ghi quyết định, chưa cần BRD/QC.)
3. **Chạy 2 dự án?** Lộ trình chính (16 buổi) có CRM ABC + sản phẩm học viên. Khóa vibe coding
   này nên **chỉ sản phẩm học viên**, hay vẫn giữ CRM ABC làm ví dụ dẫn dắt?
4. **Chuẩn đầu ra** của khóa này — có nên tách riêng 4 năng lực (như bản tham khảo) hay kèm
   thêm "biết quản lý tri thức dự án bằng Minipower"?
5. **Lộ trình này đi song song** với lộ trình 16 buổi trong `curriculum.md` (2 khoá riêng),
   hay là **bản thay thế/gộp**? — Cần anh chốt để em cập nhật `curriculum.md` cho đồng bộ.
