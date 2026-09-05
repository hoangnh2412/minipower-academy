# Workshop 10
# Demo Day — Capstone & Lộ trình áp dụng

---

## Thời lượng

150 phút (30 ôn tập + 90 demo học viên + 30 lộ trình)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Trình bày được một dự án thật đã đi qua pipeline Minipower
- Tự đánh giá dự án mình theo rubric của khoá
- Có **lộ trình áp dụng 30 / 60 / 90 ngày** cho dự án đang chạy
- Biết chỗ Minipower **chưa** làm được để không kỳ vọng sai

---

# Phần 1
# Ôn lại cả khoá bằng một câu chuyện

*(30 phút)*

---

## Chúng ta đã đi những đâu

| Buổi | Một câu |
|------|---------|
| 01 | 12 nỗi đau — vấn đề không phải AI, mà là tri thức dự án |
| 02 | AI không phải chatbot — AI là đồng nghiệp cả vòng đời |
| 03 | Bản đồ: 6 giai đoạn, 19 tài liệu, 4 thư mục, 7 cổng, 3 tầng chi phí |
| 04 | Cổng 0 — dám hỏi "có đáng làm không" |
| 05 | Fan-out — một người chạy nhiều module, ID hơn nội dung |
| 06 | QC đối kháng — trôi chảy không phải là đúng |
| 07 | Cổng thực thi — AI chỉ làm thật khi tiền đề đủ |
| 08 | Kế hoạch & bàn giao — ước lượng dựa SRS, go-live có checklist |
| 09 | Thay đổi — cho khách thấy cái giá, tri thức sống |

---

## Một câu tóm tắt cả khoá

Con người mở cổng.

AI chạy trong hành lang.

Tri thức nằm trong repo, không nằm trong đầu ai.

---

## Hỏi lớp

Nỗi đau nào của buổi 01 mà đến giờ anh chị thấy đã thật sự được giải?

Cho vài người trả lời, đối chiếu bảng 12 nỗi đau.

---

# Phần 2
# Demo học viên

*(90 phút — mỗi nhóm 10–12 phút)*

---

## Luật demo

Mỗi nhóm trình bày dự án thật của mình đã chạy qua khoá học.

---

## Mỗi nhóm phải cho thấy

1. **Premise Check** — verdict gì, có RESHAPE chỗ nào không
2. **DOC-03** — in/out scope + danh sách module
3. **Một module đi hết chuỗi** — BR → Prototype → SRS → AC
4. **Trace matrix** — ít nhất một dòng UC → FR → AC → Test liền mạch
5. **Ít nhất 2 cổng** đã chốt bằng quyết định thật
6. **Một finding QC** đã tìm ra và sửa
7. **Một điều học được** ngoài mong đợi

---

## Chấm theo rubric của khoá

| Tiêu chí | 0 | 1 | 2 |
|----------|---|---|---|
| Trace | Không có | Đứt đoạn | Liền mạch |
| Cổng | AI tự đi tiếp | Có DEC người không đọc | DEC người chốt thật |
| Bằng chứng | AI bịa | Assumption chưa đánh dấu | TBD/sổ nợ rõ ràng |
| Chi phí | Việc nhỏ chạy đủ gate | Không phân tầng | Phân tầng hợp lý |
| Tri thức | Không cập nhật memory | Nhồi memory.md | memory/{phase} gọn |

Tổng 10 điểm.

---

## Phản hồi kiểu đối kháng

Cả lớp đóng vai QC.

Mỗi demo, lớp phải tìm ra **một chỗ trace có thể đứt** hoặc **một requirement mơ hồ**.

Đây là bài tập chiều 1 và 3 của buổi 06, làm trên dự án thật.

---

# Phần 3
# Lộ trình áp dụng 30 / 60 / 90 ngày

*(30 phút)*

---

## Đừng áp dụng tất cả cùng lúc

Sai lầm phổ biến: về đòi cả team dùng đủ 19 DOC + 7 cổng ngay tuần sau.

Cả team bỏ cuộc.

---

## 30 ngày đầu — một dự án, một người

- Chọn **một** dự án nhỏ đang chạy
- Chỉ dùng: `init` + Discovery + Cổng 1 + `decision-log`
- Mục tiêu: quen luồng `assets → brainstorm → docs`, quen ghi quyết định

---

## 60 ngày — thêm requirements và QC

- Thêm: fan-out requirements + `doc-review`
- Bắt đầu dùng trace matrix
- Mục tiêu: một module đi hết BR → SRS → AC → test, trace liền mạch

---

## 90 ngày — nhân rộng

- Thêm: architecture + planning + change-control
- Đưa cho **người thứ hai** trong team dùng cùng repo
- Mục tiêu: hai người làm song song hai module không giẫm chân

---

## Nguyên tắc nhân rộng

Bắt đầu nhỏ.

Chứng minh bằng một dự án thật.

Rồi mới mời người khác vào.

---

# Phần 4
# Minipower CHƯA làm được gì

*(nói thẳng để không kỳ vọng sai)*

---

- **Không** tự vẽ wireframe HTML — phần đó chờ tích hợp công cụ ngoài
- **Không** tự chạy dự án đầu-cuối không cần người — mỗi cổng vẫn cần người duyệt
- **Không** thay thế BA/SA/PM/QA — nó khuếch đại họ, không thay
- **Không** đảm bảo đúng nếu tiền đề đầu vào sai — rác vào, rác ra
- Kiểm tra cài đặt vẫn phải **thủ công** — đừng tin AI 100% (bài học buổi 01)

---

## Vì sao nói phần này

Vì kỳ vọng sai giết công cụ nhanh hơn cả lỗi kỹ thuật.

Ai tưởng nó là "AI tự làm hết" sẽ thất vọng và bỏ.

Ai hiểu nó là "trợ lý ra quyết định" sẽ dùng được lâu dài.

---

# Kết khoá

---

Chúng ta bắt đầu bằng một buổi họp định mệnh.

Khách nói hai tiếng.

BA ghi không kịp.

---

Chúng ta kết thúc bằng một dự án:

Mọi cuộc họp được ghi.

Mọi quyết định có tên.

Mọi requirement trace được.

Người mới hỏi được.

Người cũ nghỉ không mất tri thức.

---

Không phải vì AI giỏi hơn con người.

Mà vì con người và AI ngồi đúng chỗ của mình:

**Con người quyết. AI chuẩn bị.**

---

## Câu hỏi cuối cùng cho cả lớp

Dự án tiếp theo của anh chị.

Buổi họp kickoff tuần sau.

Anh chị sẽ để ai làm "thành viên thứ 11"?

---

Cảm ơn cả khoá.

---

# Bài tập tốt nghiệp

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Một dự án thật đi qua ≥4 giai đoạn | Link repo hoặc ảnh chụp cây `docs/` |
| 2 | Tự chấm dự án mình theo rubric 10 điểm | Bảng tự chấm + lý do |
| 3 | Viết lộ trình 30/60/90 cho dự án của anh chị | 1 trang |
| 4 | Trả lời: nỗi đau nào của buổi 01 dự án anh chị vẫn còn? Vì sao Minipower chưa giải được? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Ôn tập cả khoá — Một hành trình chín chặng phát sáng uốn lượn từ hỗn loạn ở điểm đầu đến một dự án thông minh có tổ chức ở điểm cuối, đội dự án và AI cùng đi hết chặng đường, tỷ lệ 16:9
```

```text
Demo Day — Một sân khấu thuyết trình hiện đại, từng nhóm học viên trình bày dự án thật của mình với sơ đồ trace matrix phát sáng phía sau, cả lớp đóng vai QC chăm chú soi lỗi, không khí tự hào, tỷ lệ 16:9
```

```text
Lộ trình 30-60-90 — Ba bậc thang thời gian phát sáng mang nhãn 30 ngày, 60 ngày, 90 ngày, ở mỗi bậc số người và số module tăng dần từ một người lên cả team, tỷ lệ 16:9
```

```text
Giới hạn của công cụ — Một AI hologram khiêm tốn giơ tay chỉ vào một tấm bảng ghi rõ những việc nó chưa làm được, xung quanh là con người đảm nhận đúng phần của mình, thông điệp trung thực, tỷ lệ 16:9
```

```text
Con người quyết, AI chuẩn bị — Một khung hình cân đối hoàn hảo, bên trái con người ngồi ở ghế người quyết định cầm con dấu, bên phải AI chuẩn bị sẵn tài liệu và phân tích trình lên, hai bên tôn trọng nhau, tỷ lệ 16:9
```

```text
Thành viên thứ 11 — Buổi họp kickoff của một dự án mới, mười thành viên con người quanh bàn và một AI hologram làm thành viên thứ mười một ngồi cùng ngay từ phút đầu, ánh sáng hy vọng cho một chu kỳ mới, tỷ lệ 16:9
```

```text
Kết khoá — Đối lập hai khung: bên trái buổi họp định mệnh hỗn loạn của workshop 01 với BA ghi không kịp, bên phải cùng buổi họp đó nhưng có AI ghi nhận mọi thứ và cả team thư thái, hành trình đã hoàn tất, tỷ lệ 16:9
```
