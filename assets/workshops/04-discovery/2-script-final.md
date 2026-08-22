# Giai đoạn 2b — Kịch bản biên tập (Final script)

> Lời giảng cho **deck 23 slide** tại `docs/workshops/04-discovery/index.html`.
> Số slide trong ngoặc `[n]` bám đúng deck — sửa deck thì sửa cả đây.
>
> **Kiểu buổi:** trình bày. Không có mốc kiểm tra, không có khối "lớp làm" tại chỗ —
> phần tay chân dồn vào bài tập về nhà.
> `⏸` = chỗ có **đáp án ẩn**, bấm tiếp mới hiện *(6 chỗ: slide 9 · 12 · 14 · 16 · 17 · 18)*.
>
> **Nguồn sự thật:** mã DOC · mã ID · tên skill · cách gọi prompt lấy từ repo `hoangnh2412/ai-skills`.
>
> **Ngân sách gợi ý (120'):** P2 25' · P3 25' · P4 45' · P5 15' · **10' hỏi đáp**

---

## Phần 1 — Mở

### [1] Bìa

Chào mọi người. Hôm nay ta **khám phá cùng Minipower**.

Buổi 03 mọi người có bài tập đầu tiên chạm vào tài liệu thật. Hôm nay ta làm hai việc: **soi lại xem
bài tập đó ra sao**, và **học cách tự soi** — để từ nay không cần ai chấm hộ.

---

## Phần 2 — Ba tài liệu của buổi 03 *(≈25 phút)*

### [2] Bài tập buổi 03 đã cho ra cái gì?

Bài tập buổi trước sinh ra **ba tài liệu đầu tiên** của dự án:

| Mã | Tên | Trả lời câu gì |
|---|---|---|
| **DOC-01** | Vision & Business Case | Làm dự án này để làm gì? |
| **DOC-02** | Stakeholder Analysis | Ai liên quan, ai quyết? |
| **DOC-03** | **BRD** | Cần làm cái gì? |

Nhìn sang hình bên phải: cả ba nằm chung một chỗ — `docs/01-project/`.

*(Nếu lớp hỏi: đây là **file markdown trong thư mục dự án**, không phải một trang web để đăng nhập.)*

### [3] DOC-01 đủ thì trông thế nào?

**Tầm nhìn & Hồ sơ kinh doanh** — trả lời *làm dự án này để làm gì*. Bản mẫu 10 mục, **bốn mục thiếu là hỏng**:

| Mục | Tên | Vì sao không được thiếu |
|---|---|---|
| **3** | Vấn đề nghiệp vụ | Không nêu được vấn đề thì dự án **không có lý do tồn tại** |
| **4** | Mục tiêu & chỉ số — `G-001` | Không có chỉ số thì không ai biết **bao giờ là thành công** |
| **6** | Hồ sơ kinh doanh — lợi ích vs chi phí | Không cân được thì không biết **có đáng làm không** |
| **8** | Rủi ro cấp cao — `R-001` | Không gọi tên rủi ro trước thì **đến lúc vỡ mới biết** |

### [4] DOC-02 đủ thì trông thế nào?

**Phân tích stakeholder** — trả lời *ai liên quan, ai quyết*. Bản mẫu 6 mục, **ba mục thiếu là hỏng**:

| Mục | Tên | Vì sao không được thiếu |
|---|---|---|
| **2** | Đăng ký stakeholder — `SH-001` | Sót một người liên quan thì **đến lúc duyệt mới lòi ra** |
| **3** | Bản đồ quyền lực × quan tâm | Biết ai phải *quản chặt*, ai chỉ cần *báo tin* |
| **4** | RACI | Chữ **A** = người chốt — chỗ trị nỗi đau **"không biết ai quyết định"** của buổi 01 |

Dừng lại ở dòng RACI. Buổi 01 ta đã nói về nỗi đau *không biết ai quyết định*. Đây chính là chỗ ghi nó ra giấy.

### [5] DOC-03 (BRD) đủ thì trông thế nào?

Bản mẫu 13 mục, **năm mục thiếu là hỏng**:

| Mục | Tên | Vì sao không được thiếu |
|---|---|---|
| **3** | Mục tiêu nghiệp vụ — `BO-xxx` | Không có mục tiêu thì không biết làm để làm gì |
| **4** | Phạm vi — trong / ngoài | Không chốt phạm vi thì dự án phình mãi |
| **7** | Yêu cầu nghiệp vụ — `BRQ-xxx` | Đây là ruột của BRD |
| **8** | Quy tắc nghiệp vụ — `BR-xxx` | Luật nghiệp vụ phải tuân |
| **9** | Ràng buộc — pháp lý · ngân sách · thời hạn · công nghệ | Không ghi thì buổi 05 brainstorm ra phương án **không làm được** |

### [6] Bạn đã có đủ 3 tài liệu này chưa?

*(Để câu hỏi trên màn hình một nhịp. Cho lớp tự đối chiếu — không cần ai trả lời to.)*

Ai còn thiếu cũng không sao. Phần tiếp theo sẽ cho công cụ để **tự tìm ra mình thiếu gì**.

---

## Phần 3 — Hai luật gõ prompt *(≈25 phút)*

### [7] Hỏi Minipower về dự án

Muốn hỏi Minipower về dự án của mình, **luôn phải cho nó biết hai thứ**:

- **Đang ở giai đoạn nào** → `Phase`
- **Đang hỏi về tài liệu nào** → scope, dùng `@`

Hai thứ đó chính là hai luật của phần này.

### [8] Luật 1 — khai phase

Gõ `/minipower`, rồi ghi rõ giai đoạn:

```
/minipower
Phase: discovery
```

Sáu giai đoạn: `discovery` · `requirements` · `architecture` · `planning` · `delivery` · `change-control`.
Hôm nay ta hầu như chỉ dùng **`discovery`** — đó là chỗ chứa DOC-01, 02, 03.

Vì sao phải khai? Vì khai phase thì Minipower mới **đọc đúng bộ hướng dẫn** và **đúng phần ghi nhớ**
của giai đoạn đó trước khi trả lời. Không khai thì Minipower phải đoán — mà đoán là bắt đầu sai.

### [9] Luật 2 — có scope ⏸

**Minipower không soi đều tay.** Nó nhìn **việc mình định làm**: việc nhỏ thì cho qua, việc đụng vào
tài liệu thì bắt khai **Phase · module · DOC**.

| Prompt | Kết quả |
|---|---|
| `Sửa typo chính tả trong README.md` | ✓ Qua — việc nhỏ, **không cần khai gì** |
| `Viết lại toàn bộ docs/03-modules/employee` | ✗ **Chặn** — và liệt kê ra **thiếu gì**: Phase · module · DOC |
| `Phase: discovery · module leave · DOC-04: nháp UC…` | ✓ Qua — **đủ scope** |

**⏸ Đáp án:** Để ý — Minipower **không im lặng từ chối**, mà **nói rõ mình còn thiếu gì** để bổ sung.
Nhớ bài **hallucination** buổi 03: AI bịa khi *không đủ ngữ cảnh mà vẫn phải trả lời*. Luật này buộc
mình khoanh vùng trước — vừa đỡ tốn, vừa tránh câu trả lời nghe hay mà sai.

### [10] Một prompt đúng luôn có ba phần

```
/minipower   →   Phase: …   →   @đường-dẫn — câu hỏi
   gọi           luật 1            luật 2
```

Ba ví dụ thật, mỗi tài liệu một loại câu hỏi khác nhau:

```
/minipower
Phase: discovery
@docs/01-project/DOC-01-vision-business-case.md — mục tiêu đã có chỉ số
đo được chưa? Ai là người duyệt?
```

```
/minipower
Phase: discovery
@docs/01-project/DOC-02-stakeholder-analysis.md — ai là A trong RACI?
```

```
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — cái gì trong phạm vi, cái gì ngoài?
```

---

## Phần 4 — Ba nhóm câu hỏi *(≈45 phút)*

### [11] Ba nhóm câu hỏi

```
1. TÔI ĐANG Ở ĐÂU?        → tiến độ
2. CÓ KHỚP NHAU KHÔNG?    → truy vết
3. TIẾP THEO LÀM GÌ?      → điều hướng
```

*(Dải ba nhóm này hiện suốt phần còn lại, nhóm đang nói sẽ sáng lên.)*

### [12] Nhóm 1 — hai câu hỏi tiến độ ⏸

```
/minipower
Phase: discovery
@docs/ — dự án đang ở phase nào? Liệt kê DOC đã có và trạng thái.
```

```
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — BRD đã đủ chưa? Thiếu mục nào?
```

**⏸ Đáp án:** Câu thứ hai. Minipower không chỉ trả lời xong hay chưa — mà đưa ra
**danh sách việc phải bù**.

### [13] Nhóm 2 — Drive cất file, Minipower biết chúng liên quan

Đây là chỗ khác biệt lớn nhất. Google Drive chỉ **cất** file — muốn biết chúng ăn khớp không thì phải
tự mở ra đọc. Minipower **biết các tài liệu nối vào nhau thế nào**, và có hẳn một file ma trận truy vết
trong `docs/05-traceability/`.

### [14] Ba mã — `BO` · `BRQ` · `BR` ⏸

| Mã | Là gì | Nằm ở đâu |
|---|---|---|
| `BO-xxx` | **Mục tiêu nghiệp vụ** | BRD mục 3 |
| `BRQ-xxx` | **Yêu cầu nghiệp vụ** | BRD mục 7 |
| `BR-xxx` | **Quy tắc nghiệp vụ** *(khác hẳn)* | DOC-04 *(tóm tắt ở BRD mục 8)* |

**⏸ Đáp án — ví dụ đơn nghỉ phép:**
- **BO** — *"Giảm thời gian duyệt đơn nghỉ phép xuống dưới 1 ngày."*
- **BRQ** — *"Nhân viên phải gửi được đơn nghỉ phép trực tuyến."*
- **BR** — *"Đơn nghỉ quá 3 ngày phải có cấp trưởng phòng duyệt."*

### [15] Truy ngược trong chính BRD

```
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — với mỗi BRQ ở mục 7, cho biết nó phục vụ
mục tiêu BO nào ở mục 3. Trình bày thành bảng.
```

### [16] Hai câu quét ⏸

```
@…DOC-03-brd.md — có mục tiêu BO nào ở mục 3 mà chưa có BRQ nào phục vụ không?
```

```
@…DOC-03-brd.md — có BRQ nào ở mục 7 không phục vụ mục tiêu BO nào không?
```

Nhìn hình bên phải: một `BO-002` mồ côi màu cam, một `BRQ-002` mồ côi màu đỏ.

**⏸ Đáp án — hai loại bệnh:**
- **BO không có BRQ** = **sót việc** — có mục tiêu mà chưa ai định làm gì
- **BRQ không phục vụ BO nào** = **làm thừa** — sắp làm một việc không phục vụ mục tiêu nào

### [17] Nhìn về phía trước ⏸

```
/minipower
Phase: discovery
@docs/ — mỗi BRQ trong BRD đã có FR nào ở DOC-06 giải quyết chưa?
```

Minipower sẽ trả lời **"chưa có cái nào"**.

**⏸ Đáp án:** Đó **chính là câu trả lời đúng** — không phải hỏi sai, không phải Minipower hỏng.

```
BO  →  BRQ  →  BR  →  UC  →  FR  →  AC  →  test
└── mình đang ở đây ──┘        └── buổi 05, 06 ──┘
```

Câu hỏi này cho biết mình đang đứng ở đoạn nào và còn bao xa nữa — cũng là một dạng *"tôi đang ở đâu"*,
nhưng nhìn theo **chiều tài liệu** chứ không theo chiều thời gian.

### [18] Nhóm 3 — hai câu điều hướng ⏸

```
/minipower
Phase: discovery
@docs/ — tiếp theo tôi cần làm gì? Trả lời ngắn, theo ưu tiên.
```

```
/minipower
Phase: discovery
@docs/ — dự án nhỏ, một người làm. Bước nào rút gọn được? Bỏ thì mất gì?
```

Bộ đầy đủ có **19 tài liệu** — không dự án nhỏ nào cần đủ.

**⏸ Đáp án:** Rút gọn được — **nhưng phải biết mình đang rút cái gì**, chứ không phải bỏ vì lười.
Có hai chỗ **không được rút**: chốt phạm vi dự án, và sửa tài liệu đã ký. Và **người quyết rút là mình**
— AI chỉ bày ra cái giá phải trả.

---

## Phần 5 — Kết & giao bài *(≈15 phút)*

### [19] Hai quy tắc mang về

**1 · Không hỏi trống.** Mọi câu hỏi về tài liệu đều phải có `Phase:` và `@`. Hỏi trống thì hoặc bị chặn,
hoặc tệ hơn — nhận một câu trả lời nghe hay mà bịa.

**2 · AI soạn, mình ký.** Mọi thứ AI viết vào tài liệu đều là **nháp** cho tới khi có tên người chốt bên dưới.

### [20] Bài tập về nhà

Chạy lại **toàn bộ prompt đã học hôm nay** trên dự án của mình — dán kết quả nộp lại.

| Nhóm | Prompt | Nộp |
|---|---|---|
| Ba tài liệu | Soi DOC-01 · DOC-02 · DOC-03 | 3 kết quả |
| 1 · Tôi đang ở đâu | Đang ở phase nào · BRD đủ chưa, thiếu mục nào | 2 kết quả |
| 2 · Có khớp nhau không | BRQ phục vụ BO nào · BO nào chưa có BRQ · BRQ nào không phục vụ BO nào · đã có FR chưa | 4 kết quả |
| 3 · Tiếp theo làm gì | Tiếp theo cần làm gì · bước nào rút gọn được | 2 kết quả |

**Tổng 11 prompt** — mọi câu đều nằm trong các slide vừa rồi.

### [21] Nộp bài qua GitHub

1. Tạo tài khoản ở **github.com** *(nếu chưa có)*
2. Cài **Git** từ `git-scm.com` — kiểm bằng `git --version`
3. Trên GitHub bấm **New** → tạo repository, để **Private**
4. Copy đường dẫn repo, rồi chạy sáu lệnh:

```
git init
git add .
git commit -m "Bài tập buổi 04"
git remote add origin <đường-dẫn-repo>
git branch -M main
git push -u origin main
```

**Không bao giờ** đẩy mật khẩu hay khoá bí mật lên GitHub.

*(Hạn nộp và nơi dán link repo: giảng viên công bố tại lớp.)*

### [22] 11 prompt cần chạy

Danh sách kiểm — bản đầy đủ nằm ở các slide trước. Mọi prompt đều bắt đầu bằng
`/minipower` + `Phase: discovery` + `@đường-dẫn`.

| # | Prompt |
|---|---|
| 1 | DOC-01 — mục tiêu có chỉ số đo được chưa? Ai duyệt? |
| 2 | DOC-02 — ai là **A** trong RACI? |
| 3 | DOC-03 — cái gì trong phạm vi, cái gì ngoài? |
| 4 | Dự án đang ở phase nào? Liệt kê DOC đã có và trạng thái |
| 5 | BRD đã đủ chưa? Thiếu mục nào? |
| 6 | Mỗi BRQ phục vụ mục tiêu BO nào? |
| 7 | BO nào chưa có BRQ nào phục vụ? |
| 8 | BRQ nào không phục vụ BO nào? |
| 9 | Mỗi BRQ đã có FR nào giải quyết chưa? |
| 10 | Tiếp theo tôi cần làm gì? |
| 11 | Bước nào rút gọn được? Bỏ thì mất gì? |

### [23] Hướng dẫn dành cho bạn

| Triệu chứng | Nguyên nhân thường gặp | Xử lý |
|---|---|---|
| Trả về **checklist** thay vì câu trả lời | Thiếu `@` scope, hoặc sai đường dẫn | Kiểm lại đường dẫn; copy từ IDE cho chắc |
| **Mọi lệnh minipower bị chặn** | Thiếu `memory/profile.json` | Chạy `Init project`, trả lời 5 câu |
| Trả lời chung chung, không bám tài liệu | Quên khai `Phase:` | Thêm dòng `Phase: discovery` |

---

## Câu đóng buổi

> **"Không ai lạc trong dự án vì thiếu tài liệu. Người ta lạc vì không biết hỏi tài liệu của mình."**

Từ trước tới giờ, vào một dự án lạ, mọi người biết cách nào để trả lời câu *"dự án này đang ở đâu,
tài liệu có khớp nhau không"* — ngoài cách đi hỏi người cũ? **Hôm nay mọi người có cách đó.**

Buổi 05 sang nhịp **Plan**: brainstorm phương án, ghi lại quyết định, viết plan — dựa thẳng vào tài liệu
hôm nay vừa soi.
