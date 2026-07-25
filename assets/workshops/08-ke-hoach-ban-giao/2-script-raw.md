# Workshop 8
# Kế hoạch & Bàn giao — Từ tài liệu đến go-live

---

## Thời lượng

120 phút (60 kể chuyện + 60 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Chấm được độ phức tạp và ước lượng dựa trên SRS, không phải cảm tính
- Lập WBS **trace về FR** — mỗi việc đến từ một requirement
- Soạn được test strategy trace về Acceptance Criteria
- Biết checklist go-live và vì sao phải dry-run rollback
- Hiểu vì sao ước lượng không dựa SRS là "đoán mò được đánh máy"

---

## Nỗi đau xử lý hôm nay

#7 Test không trace requirement · #10 Scope creep (estimate mù)

---

# Mở đầu

## Câu chuyện — con số trên trời

---

Sếp hỏi PM:

"Dự án này bao lâu?"

---

PM nói:

"Khoảng 3 tháng."

---

## Hỏi lớp

Con số "3 tháng" đó từ đâu ra?

---

Cho lớp trả lời.

Câu trả lời thành thật nhất: **từ cảm giác**.

---

## Hệ quả

3 tháng thành 6 tháng.

Không ai giải thích được vì sao trễ.

Vì con số ban đầu không dựa trên gì cả. *(liên quan nỗi đau #10)*

---

## Điểm khác của Minipower

Ước lượng phải dựa trên **SRS đã chốt**.

Mỗi con số trace về một requirement cụ thể.

Trễ ở đâu, nhìn ra ngay ở đó.

---

# Chương 1
# Chấm độ phức tạp trước

---

Không ước lượng thẳng bằng ngày.

---

Chấm **độ phức tạp** trước, theo 5 chiều, mỗi chiều 0–20.

---

Ví dụ 5 chiều:

- Số lượng thực thể dữ liệu
- Số tích hợp với hệ ngoài
- Độ phức tạp luật nghiệp vụ
- Yêu cầu phi chức năng (bảo mật, hiệu năng)
- Độ mới của công nghệ

---

Tổng điểm → phân loại: Small · Medium · Large · Enterprise.

---

## Vì sao chấm phức tạp trước

Vì "3 ngày" của module đơn giản khác "3 ngày" của module 10 tích hợp.

Chấm phức tạp cho anh chị một **thước đo khách quan** trước khi quy ra thời gian.

---

# Chương 2
# WBS trace về FR

---

WBS = chia nhỏ công việc.

Epic → Feature → Story.

---

## Nguyên tắc

Mỗi Story phải trace về một FR.

---

## Hỏi lớp

Nếu một Story không đến từ FR nào thì sao?

---

Hai khả năng:

- Đang làm việc thừa (khách không yêu cầu), **hoặc**
- Có FR mà chưa ai viết ra

---

Cả hai đều là vấn đề cần dừng lại hỏi.

---

## Chiều ngược lại cũng đúng

Một FR không có Story nào → tính năng đó **chưa được lên kế hoạch làm**.

Rất dễ rơi vào lỗ hổng nghiệm thu.

---

# Chương 3
# Test Strategy trace về AC

---

Buổi 05 chúng ta viết Acceptance Criteria.

Buổi 06 chúng ta soi nó có testable không.

Bây giờ dùng nó để test thật.

---

## Bốn tầng test

```
Unit → Integration → System → UAT
```

| Tầng | Ai chủ |
|------|--------|
| Unit | Dev |
| Integration | Dev |
| System | QA |
| UAT | Business / khách hàng |

---

## Nguyên tắc

Mỗi test case trace về một AC.

Mỗi AC "Must-have" phải có ít nhất một test case.

---

## Kết quả

Câu hỏi buổi 01: "requirement này test chưa?"

Bây giờ: mở trace matrix → thấy ngay AC nào chưa có test. *(nỗi đau #7 — đóng lại hoàn toàn)*

---

# Chương 4
# Go-live — không ai bấm nút trong sợ hãi

---

## Câu hỏi

Khi nào được go-live?

---

Không phải "khi code xong".

Mà khi qua một checklist cụ thể.

---

## Checklist go-live tối thiểu

- Mọi AC "Must-have" đã pass
- Trace matrix xanh — không mắt xích đứt
- Đã **dry-run rollback** — thử quay lui trước khi lên thật
- QC đối kháng verdict PASS, 0 Blocker
- Deployment guide đã có, người vận hành đọc được

---

## Vì sao dry-run rollback

Ai cũng chuẩn bị cho lúc lên.

Ít người chuẩn bị cho lúc **phải quay lui**.

---

Sự cố xảy ra lúc 2 giờ sáng.

Lúc đó không phải lúc học cách rollback.

Phải thử trước, lúc tỉnh táo.

---

# Chương 5
# Kế hoạch cũng là tài liệu sống

---

WBS không phải viết một lần rồi để đó.

---

Requirement đổi → Story đổi → estimate đổi.

Vì mọi thứ trace nhau, một thay đổi lan ra thấy được.

---

## Đây là điều buổi 09 sẽ đào sâu

Khi khách đổi ý sau khi đã ký.

Làm sao biết đổi một requirement thì kế hoạch, test, chi phí đội lên bao nhiêu.

---

# Hands-on
# 60 phút

---

## Bước 1 — Chấm độ phức tạp

```
/minipower
Phase: planning — chấm complexity cho từng module theo rubric 5 chiều (0–20),
phân loại Small/Medium/Large/Enterprise. Dựa trên SRS đã chốt, không đoán.
```

---

## Bước 2 — WBS trace FR

```
/minipower
Phase: planning — lập WBS (Epic/Feature/Story) cho module <TÊN>.
Mỗi Story ghi rõ trace về FR nào. Liệt kê FR nào chưa có Story.
```

---

## Bước 3 — Tìm việc thừa và lỗ hổng

```
/minipower
Phase: planning — đối chiếu WBS với DOC-06: Story nào không trace FR nào (việc thừa)?
FR Must-have nào không có Story (lỗ hổng)? Liệt kê cả hai chiều.
```

---

## Bước 4 — Test strategy

```
/minipower
Phase: delivery — soạn DOC-16 Test Strategy cho module <TÊN>.
Mỗi AC Must-have phải có ít nhất một test case trace tới. Liệt kê AC nào chưa được test.
```

---

## Bước 5 — Checklist go-live

```
/minipower
Phase: delivery — dựng checklist go-live cho dự án: điều kiện entry/exit,
trace matrix, dry-run rollback, verdict doc-review. Đánh dấu mục nào chưa đạt.
```

---

## Bước 6 — Chạy QC làm cổng go-live

```
/minipower
Phase: doc-review — trước go-live, soi trace matrix toàn dự án. Verdict PASS/BLOCK.
Nếu còn AC Must-have chưa có test → BLOCK.
```

---

# Tổng kết

---

Ba điều mang về:

- Ước lượng dựa **SRS + độ phức tạp**, không dựa cảm giác
- Mọi việc (Story), mọi test **trace về requirement** — hai chiều
- Go-live là qua **checklist**, có dry-run rollback, không phải "code xong là lên"

---

## Câu hỏi kết thúc

Dự án đã lên.

Khách đang dùng.

---

Rồi khách gọi:

"Tiện thể cho anh thêm cái này..."

---

Câu nói quen thuộc nhất trong nghề.

Xử lý thế nào cho đúng?

👉 Workshop 9: **Thay đổi & tri thức sống**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Chấm complexity 5 chiều cho ≥2 module | Bảng điểm |
| 2 | WBS module có trace FR đầy đủ | Ảnh chụp WBS |
| 3 | Tìm ≥1 việc thừa và ≥1 lỗ hổng nghiệm thu | Liệt kê cả hai |
| 4 | Test strategy có mọi AC Must-have được test | Ảnh chụp bảng trace AC → test |
| 5 | Checklist go-live đánh dấu đạt/chưa đạt | Ảnh chụp |
| 6 | Trả lời: dự án cũ ước lượng bằng gì? Trễ bao nhiêu %? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Một PM bị sếp hỏi thời gian dự án, phía trên đầu PM hiện con số "3 tháng" đang lơ lửng không có nền móng nào đỡ bên dưới, chỉ là đám mây mờ, tỷ lệ 16:9
```

```text
Chấm độ phức tạp — Năm chiếc đồng hồ đo phát sáng mang nhãn dữ liệu, tích hợp, luật nghiệp vụ, phi chức năng, công nghệ mới, mỗi module được đo qua cả năm đồng hồ trước khi quy ra thời gian, tỷ lệ 16:9
```

```text
WBS trace — Một cây công việc phân nhánh Epic đến Feature đến Story, mỗi lá Story nối bằng sợi chỉ ánh sáng xuống đúng một requirement gốc, một lá không có sợi nối phát sáng đỏ, tỷ lệ 16:9
```

```text
Bốn tầng test — Bốn tầng kim tự tháp phát sáng Unit, Integration, System, UAT, mỗi tầng có nhân vật phụ trách đứng gác, các test case nối lên requirement bằng ánh sáng, tỷ lệ 16:9
```

```text
Dry-run rollback — Một đội vận hành bình tĩnh diễn tập quay lui hệ thống trong ánh sáng ban ngày, đối lập với hình ảnh mờ phía sau một người hoảng loạn lúc 2 giờ sáng vì chưa từng thử, tỷ lệ 16:9
```

```text
Checklist go-live — Một bảng kiểm khổng lồ phát sáng với các dấu tick xanh và vài ô còn trống đỏ, một người thật đứng trước nút go-live nhưng chưa bấm vì còn ô chưa đạt, tỷ lệ 16:9
```

```text
Kế hoạch sống — Một tấm kế hoạch dự án phát sáng tự cập nhật khi một requirement thay đổi, các Story và con số ước lượng dịch chuyển theo bằng hiệu ứng gợn sóng ánh sáng, tỷ lệ 16:9
```
