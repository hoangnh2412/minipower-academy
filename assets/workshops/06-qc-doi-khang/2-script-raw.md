# Workshop 6
# QC đối kháng & Baseline — Dám nói tài liệu có lỗi

---

## Thời lượng

120 phút (65 kể chuyện + 55 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Hiểu vì sao AI viết trôi chảy **không** đồng nghĩa với đúng
- Soi tài liệu theo **5 chiều đối kháng**
- Phân biệt Blocker / Major / Minor và không làm tê liệt tiến độ
- Cho verdict **PASS / BLOCK** trước khi ký baseline
- Hiểu baseline là gì và vì sao sau baseline không được sửa tay

---

## Nỗi đau xử lý hôm nay

#5 Tài liệu chết dần · #7 Test case không trace requirement

---

# Mở đầu

## Trò chơi mở màn — tìm lỗi

---

Chiếu lên màn hình một đoạn SRS AI vừa viết.

Đẹp. Trôi chảy. Đầy đủ mục.

---

Cho lớp 3 phút.

"Tìm cho tôi 3 lỗi trong đoạn này."

---

Đa số sẽ nói: "trông ổn mà."

---

## Reveal

Đó chính là cái bẫy.

Tài liệu AI viết **luôn trông ổn**.

Vì AI giỏi viết cho trôi.

---

Trôi chảy là kỹ năng ngôn ngữ.

Đúng là chuyện khác.

---

# Chương 1
# Vì sao cần tư thế đối kháng

---

## Cách đọc tài liệu thông thường

Đọc để **hiểu**.

Đọc xong gật đầu: "ừ hợp lý."

---

## Cách đọc của QC

Đọc để **phá**.

Giả định tài liệu **có lỗi**, và đi tìm cho ra.

---

## Vì sao phải đổi tư thế

Đọc-để-hiểu thì não tự lấp chỗ trống.

Câu mơ hồ, não tự đoán nghĩa hợp lý nhất.

Và bỏ qua lỗi.

---

Dev không đoán giống mình.

Dev code theo nghĩa đen.

Chỗ mình tự lấp, dev làm sai.

---

## Câu để lớp nhớ

Chỗ nào mình phải đoán.

Chỗ đó có lỗi.

---

# Chương 2
# 5 chiều đối kháng

---

| # | Chiều | Săn lỗi gì |
|---|-------|-----------|
| 1 | **Traceability** | FR không có UC/BR · AC không trace FR · test không trace AC |
| 2 | **Mâu thuẫn chéo** | Scope nói "ngoài" nhưng SRS lại có · hai tài liệu định nghĩa một khái niệm khác nhau |
| 3 | **Testable / mơ hồ** | "Nhanh", "thân thiện", "v.v." · NFR thiếu ngưỡng · thiếu điều kiện âm |
| 4 | **Đầy đủ** | Thiếu security/audit/backup · thiếu edge case · chỉ có đường đi đẹp |
| 5 | **Nhất quán ID / version** | Sai quy ước mã số · gán version khi chưa ký · nháp lẫn baseline |

---

## Chiều 1 — Traceability

Câu hỏi: mỗi dòng requirement này **từ đâu ra**?

Nếu một FR không trace về UC hay BR nào → nó từ đâu chui ra?

Rất có thể AI tự bịa. Hoặc ai đó thêm mà quên nguồn.

---

## Chiều 2 — Mâu thuẫn chéo

DOC-03 ghi: "Không làm tính năng tích điểm."

DOC-06 module Khuyến mãi lại có: "FR tính điểm thưởng."

---

Ai đúng?

Không quan trọng.

Quan trọng là **hai tài liệu đang cãi nhau**, và dev sẽ tin nhầm một trong hai.

---

## Chiều 3 — Testable

"Hệ thống phải thân thiện với người dùng."

Viết test cho câu này thế nào?

Không viết được → không phải requirement, chỉ là mong muốn.

---

## Chiều 4 — Đầy đủ

Đây là chiều AI hay thiếu nhất.

AI viết đường đi đẹp rất giỏi.

Nhưng:

- Mất mạng giữa chừng thì sao?
- Hai người sửa cùng lúc thì sao?
- Dữ liệu vào sai định dạng thì sao?

---

## Chiều 5 — Nhất quán ID

`ORD-FR-014` ở tài liệu này.

`ORD-FR-14` ở tài liệu kia.

`ORD_FR_014` ở chỗ thứ ba.

Máy đọc là ba requirement khác nhau. Trace đứt âm thầm.

---

# Chương 3
# Không phải lỗi nào cũng như nhau

---

| Mức | Nghĩa | Làm gì |
|-----|-------|--------|
| 🔴 **Blocker** | Chặn ký/go-live: trace đứt, mâu thuẫn nghiệp vụ | Chủ sửa trước khi đi tiếp |
| 🟡 **Major** | Rủi ro cao: mơ hồ, thiếu điều kiện âm | Sửa trong giai đoạn, ghi backlog |
| ⚪ **Minor** | Hình thức, nhất quán nhỏ | Gộp sửa cuối giai đoạn |

---

## Cảnh báo

Đừng biến mọi Minor thành Blocker.

---

Có người soi tài liệu rồi liệt kê 200 lỗi, 90% là dấu phẩy.

Dự án tê liệt.

---

QC giỏi không phải người tìm nhiều lỗi nhất.

QC giỏi là người **phân đúng mức** lỗi nào chặn, lỗi nào chờ.

---

# Chương 4
# AI soi AI

---

## Điểm hay nhất của Minipower

AI viết tài liệu.

Rồi **một AI khác, ngữ cảnh sạch**, đi soi tài liệu đó.

---

AI soi không biết AI viết đã "nghĩ gì".

Nó chỉ thấy tài liệu.

Đúng như dev sẽ thấy.

---

## Cơ chế

Với dự án lớn:

- Một luồng soi mỗi chiều, **hoặc**
- Một luồng soi mỗi module

Rồi gộp lại, bỏ lỗi trùng.

---

## Ranh giới quan trọng

AI soi **không được tự sửa** tài liệu của chủ khác.

Nó **báo lỗi cho chủ**.

Vì một module một chủ — nguyên tắc từ buổi 05.

---

## Mỗi lỗi phải có ba phần

```
[Mức] Chiều — tài liệu nào, mục nào
Bằng chứng: trích dẫn cụ thể
Vì sao lỗi: hệ quả — dev hiểu sai / test không viết được / khách từ chối
Đề xuất: sửa gì, ai là chủ
```

---

Không có bằng chứng thì không phải lỗi.

Chỉ là "cảm giác".

---

# Chương 5
# Baseline — đóng băng sự thật

---

## Baseline là gì

Là ảnh chụp bộ tài liệu tại thời điểm **được ký**.

Từ giây phút đó: chỉ đọc.

---

## Vì sao cần

Buổi 01, nỗi đau #5: tài liệu chết dần.

BRD tháng 1 đến tháng 7 không còn đúng.

Vì ai cũng sửa, không ai biết bản nào là bản thật.

---

## Baseline giải quyết

Bản đã ký nằm trong `docs/02-baseline/` — **không ai được sửa tay**.

Muốn thay đổi → phải qua Change Request. *(buổi 09)*

---

## Verdict trước baseline

Trước khi ký, chạy QC đối kháng làm cổng.

```
0 Blocker → PASS → được ký
Còn Blocker → BLOCK → sửa xong mới ký lại
```

---

Major và Minor không chặn ký.

Nhưng phải ghi vào sổ để không quên.

---

# Hands-on
# 55 phút

---

## Bước 1 — Soi một slice

Chọn **một** module hoặc **một** tài liệu (đừng soi cả dự án — tốn token):

```
/minipower
Phase: doc-review — soi DOC-06 module <TÊN> theo 5 chiều đối kháng.
Giả định tài liệu có lỗi. Mỗi lỗi ghi: mức, bằng chứng, hệ quả, đề xuất.
Đừng tự sửa.
```

---

## Bước 2 — Đọc bảng finding

Sắp xếp từ Blocker xuống Minor.

Tự hỏi từng lỗi: cái này thật sự chặn ký, hay chỉ khó chịu?

---

## Bước 3 — Fan-out soi (dự án lớn)

```
/minipower
Phase: doc-review — dự án nhiều module. Mỗi module một luồng soi ngữ cảnh sạch.
Gộp finding, bỏ trùng theo mã tài liệu và mục. Trả về một bảng duy nhất.
```

---

## Bước 4 — Tìm lỗi giảng viên cài sẵn

Giảng viên đã cố ý cài **một Blocker** vào tài liệu mẫu.

Ai tìm ra đầu tiên và giải thích được **hệ quả** thì thắng.

---

## Bước 5 — Verdict baseline

```
/minipower
Phase: doc-review — dựa trên finding ở trên, cho verdict PASS hay BLOCK baseline.
Nếu BLOCK, liệt kê chính xác các Blocker phải sửa trước khi ký.
```

---

## Bước 6 — Sửa và soi lại

Sửa các Blocker (chủ tài liệu sửa, không phải AI soi sửa).

Chạy lại bước 5.

PASS thì mới bàn tới ký.

---

# Tổng kết

---

Ba điều mang về:

- **Trôi chảy ≠ đúng.** Đọc để phá, không đọc để gật.
- **5 chiều** để không bỏ sót loại lỗi nào, nhất là chiều "đầy đủ".
- **Phân đúng mức** lỗi — Blocker chặn ký, Minor chờ.

---

Và baseline là lời hứa:

Từ đây, sự thật được đóng băng.

Ai muốn đổi phải xin phép.

---

## Câu hỏi kết thúc

Tài liệu đã sạch.

Đã ký.

---

Nhưng chưa ai thiết kế hệ thống.

Chưa ai lên kế hoạch.

Chưa ai viết một dòng code.

---

Khi nào thì AI được phép **bắt đầu làm thật**?

👉 Workshop 7: **Kiến trúc & Cổng thực thi**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Soi một tài liệu theo 5 chiều | Bảng finding có mức + bằng chứng |
| 2 | Phân loại đúng Blocker / Major / Minor | Ảnh chụp bảng đã phân mức |
| 3 | Tìm ít nhất 1 lỗi chiều "đầy đủ" (edge/âm/security) | Trích dẫn + hệ quả |
| 4 | Cho verdict PASS / BLOCK có lý do | 3 dòng |
| 5 | Sửa 1 Blocker rồi soi lại đến PASS | Trước / sau |
| 6 | Trả lời: dự án cũ của anh chị có bao giờ "baseline" thật không? Nếu không, hậu quả gì? | 5 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Một tài liệu SRS phát sáng đẹp đẽ và trơn tru treo giữa không trung, đội dự án đứng ngắm và gật đầu hài lòng, nhưng ẩn dưới lớp hào nhoáng là những vết nứt lỗi phát sáng đỏ chưa ai thấy, tỷ lệ 16:9
```

```text
Hai tư thế đọc — Chia đôi khung hình: bên trái một người đọc tài liệu và gật đầu mỉm cười, bên phải một QC đeo kính lúp soi vào từng dòng với ánh mắt truy tìm, phát hiện vết nứt phát sáng đỏ, tỷ lệ 16:9
```

```text
5 chiều đối kháng — Năm luồng ánh sáng từ năm hướng chiếu vào một tài liệu trung tâm, mỗi luồng mang nhãn Traceability, Mâu thuẫn, Testable, Đầy đủ, Nhất quán, soi lộ ra các lỗi ẩn, tỷ lệ 16:9
```

```text
Ba mức lỗi — Ba đèn tín hiệu phát sáng đỏ Blocker, vàng Major, trắng Minor, một QC đang phân loại từng lỗi vào đúng đèn, cảnh báo không biến mọi lỗi nhỏ thành đèn đỏ, tỷ lệ 16:9
```

```text
AI soi AI — Một AI vừa viết xong tài liệu, một AI khác với ánh sáng khác màu và ngữ cảnh sạch bước tới soi lại tài liệu đó bằng kính lúp, hai thực thể độc lập, tỷ lệ 16:9
```

```text
Baseline đóng băng — Một bộ tài liệu được đóng băng trong khối băng pha lê trong suốt phát sáng xanh, có con dấu ký chính thức, xung quanh là biển cấm sửa tay, trang nghiêm và dứt khoát, tỷ lệ 16:9
```

```text
Verdict — Một cánh cổng lớn với hai bảng hiệu, PASS màu xanh mở đường đi tiếp và BLOCK màu đỏ chặn lại, một người thật đứng cầm danh sách Blocker quyết định mở hay chặn, tỷ lệ 16:9
```
