# Workshop 4
# Discovery & Cổng 0 — "Việc này có đáng làm không?"

---

## Thời lượng

120 phút (75 kể chuyện + 45 hands-on)

---

## Mục tiêu

Sau buổi này, người tham gia:

- Dám hỏi **6 câu Premise Check** trước khi bắt tay viết bất cứ tài liệu nào
- Biết ba kết luận: **PROCEED / RESHAPE / STOP** — và dám nói STOP
- Biết cách để AI **nghị luận đa góc nhìn** thay vì gật đầu theo mình
- Tự sinh được DOC-01 Vision · DOC-02 Stakeholder · DOC-03 BRD
- Chốt được **Cổng 1** và hiểu vì sao cổng này mở khoá tất cả phần còn lại

---

## Nỗi đau xử lý hôm nay

#6 Không biết ai quyết định · #11 Họp quá nhiều · #3 Không rõ ai làm gì

---

# Mở đầu

## Câu chuyện — dự án chạy 3 tháng rồi mới biết sai

---

Khách hàng công ty ABC nói:

"Anh muốn làm CRM."

---

Team làm gì?

---

Cho lớp trả lời.

Câu trả lời thường gặp:

- Hỏi yêu cầu chi tiết
- Viết FRD
- Estimate
- Bắt tay code

---

3 tháng sau.

Hệ thống chạy.

Đẹp.

---

Khách hàng nhìn.

Khách hàng nói:

"Cái này không giải quyết được vấn đề của anh."

---

## Hỏi lớp

Ai từng nghe câu này rồi?

*(Rất nhiều tay giơ lên.)*

---

## Vấn đề nằm ở đâu?

Không phải ở code.

Không phải ở tài liệu.

---

Vấn đề nằm ở chỗ:

Suốt 3 tháng, **không ai hỏi vấn đề gốc là gì**.

---

# Chương 1
# Vì sao chúng ta không hỏi

---

Vì hỏi thì khó xử.

---

Khách hàng nói muốn làm CRM.

Mình hỏi lại: "Việc này có đáng làm không?"

---

Nghe như đang cãi khách.

Nghe như đang chê ý tưởng của người trả tiền.

---

## Nên chúng ta chọn cách an toàn

Gật đầu.

Ghi nhận.

Viết tài liệu.

---

Và 3 tháng sau cả team cùng sai.

---

## Đây là chỗ AI có lợi thế

AI hỏi không ngại mất lòng.

AI hỏi không sợ mất hợp đồng.

---

Nhưng AI cũng có tật:

**AI mặc định gật đầu theo mình.**

---

Bảo AI "viết SRS đi" thì nó viết.

Không hỏi lại.

---

Vì vậy Minipower đặt một cổng **trước cả cổng 1**.

Gọi là **Cổng 0**.

---

# Chương 2
# Cổng 0 — Premise Check

---

Trước khi bỏ công phân tích và viết tài liệu, trả lời 6 câu.

---

| # | Câu hỏi | Đang kiểm tra điều gì |
|---|---------|------------------------|
| 1 | Vấn đề gốc là gì? | Đây là gốc hay chỉ là triệu chứng — hỏi "tại sao" 3 lần |
| 2 | Ai đau? Đo được không? | Có người thật chịu đau, đo bằng số/tần suất/tiền |
| 3 | Đã có giải pháp chưa? | Quy trình hoặc công cụ hiện có giải quyết được không |
| 4 | Không làm thì sao? | So hậu quả của việc không làm với chi phí làm |
| 5 | Tài liệu này có người đọc không? | Dev đọc? Test đọc? Khách ký? Hay chỉ "cho đủ bộ"? |
| 6 | Tiền đề còn đúng không? | Có bằng chứng mới làm lung lay động cơ ban đầu |

---

## Ba kết luận — bắt buộc chọn một

| Kết luận | Khi nào | Làm gì |
|----------|---------|--------|
| ✅ **PROCEED** | Tiền đề vững, có người đọc, nỗi đau đo được | Vào giai đoạn, ghi giả định |
| ♻️ **RESHAPE** | Vấn đề có thật nhưng phát biểu sai | Sửa lại phát biểu vấn đề rồi mới làm |
| ⛔ **STOP** | Chỉ là triệu chứng, hoặc đã có giải pháp, hoặc không ai đọc | Ghi lý do, **không viết tài liệu** |

---

## Demo tại lớp — chạy thật trên màn hình

Nhập:

```
/minipower
Phase: discovery — khách hàng muốn làm hệ thống CRM để "quản lý khách hàng tốt hơn".
Chạy Premise Check trước khi tôi viết bất cứ tài liệu nào.
```

---

AI hỏi ngược.

Rất có thể AI sẽ hỏi:

- "Quản lý tốt hơn" nghĩa là gì — đo bằng gì?
- Hiện tại đang mất khách ở khâu nào?
- Con số cụ thể: mỗi tháng mất bao nhiêu lead?
- Không làm CRM thì hậu quả là gì?

---

## Hỏi lớp

Có ai trong phòng trả lời được cả 4 câu cho dự án mình đang làm không?

*(Thường là im lặng.)*

---

## Điểm quan trọng

Nếu team không trả lời được.

Thì tài liệu viết ra chỉ là **phỏng đoán được đánh máy đẹp**.

---

# Chương 3
# Ví dụ một lần RESHAPE thật

---

Khách nói:

"Anh muốn làm CRM."

---

Hỏi tại sao lần 1:

"Vì sale không chăm khách kịp."

---

Hỏi tại sao lần 2:

"Vì mỗi sale ôm 300 khách."

---

Hỏi tại sao lần 3:

"Vì lead vào không được phân bổ tự động, ai nhanh tay thì lấy."

---

## Vấn đề gốc

Không phải "thiếu CRM".

Là **phân bổ lead không có quy tắc**.

---

## Kết luận

♻️ RESHAPE.

Phát biểu lại vấn đề.

---

Phạm vi giai đoạn 1 co lại còn: **quy tắc phân bổ lead + theo dõi SLA chăm sóc**.

---

## Kết quả

Dự án nhỏ hơn.

Ra kết quả nhanh hơn.

Khách hài lòng hơn.

---

## Hỏi lớp

Nếu bỏ qua bước này, team sẽ làm gì?

*(Làm CRM 12 module. Trong đó 9 module khách không dùng.)*

---

# Chương 4
# AI nghị luận đa góc nhìn

---

Premise Check trả lời: có đáng làm không.

Còn một câu nữa:

**Đáng làm theo góc nhìn của ai?**

---

## Vấn đề muôn thuở

Trong phòng họp, ai nói to nhất thì góc nhìn đó thắng.

---

Sponsor nói ROI.

Nhưng vận hành thì lo trực đêm.

Security thì lo dữ liệu khách.

QA thì lo không test được.

---

Thường thì ba góc sau **không có ai đại diện** trong phòng.

---

## Minipower làm gì

Cho mỗi góc nhìn phát biểu **đúng một lượt**.

Không tranh luận qua lại.

Không chốt giải pháp giữa chừng.

---

| Góc nhìn | Quan tâm | Sợ mất |
|----------|----------|--------|
| Sponsor / Business | ROI, mục tiêu kinh doanh | Ngân sách, thời gian ra thị trường |
| Người dùng cuối | Dễ dùng, đúng việc | Thao tác rườm rà |
| Vận hành / Support | Giám sát, xử lý sự cố | Khó rollback |
| Security / Compliance | Rủi ro, tuân thủ | Rò rỉ, vi phạm audit |
| Kỹ thuật / Kiến trúc | Khả thi, nợ kỹ thuật | Coupling, khó bảo trì |
| QC | Testable, coverage | Yêu cầu mơ hồ, không đo được |

---

## Đầu ra chỉ có hai mục

**Điểm hội tụ** — mọi góc đồng ý → thành ràng buộc cứng.

**Căng thẳng còn sống** — trade-off chưa giải → mang lên cho người quyết.

---

Chú ý:

AI **không giải** căng thẳng.

AI **trình bày** căng thẳng.

Người quyết.

---

# Chương 5
# Ba tài liệu đầu tiên

---

Có verdict PROCEED hoặc RESHAPE rồi, mới viết.

---

| DOC | Tên | Trả lời câu hỏi |
|-----|-----|-----------------|
| **01** | Vision & Business Case | Làm để được gì? Đo bằng chỉ số nào? |
| **02** | Stakeholder Analysis | Ai liên quan? Ai duyệt? Ai chỉ cần biết? |
| **03** | BRD — Business Requirements | Cái gì trong phạm vi, cái gì ngoài, có bao nhiêu module |

---

## DOC-03 là tài liệu quan trọng nhất khoá học

Vì hai lý do.

---

**Một:** nó chốt in-scope / out-of-scope.

Sau này khách nói "tiện thể làm thêm" → mở DOC-03 ra đối chiếu. *(nỗi đau #10)*

---

**Hai:** nó chứa **danh sách module**.

Danh sách này là nguyên liệu để AI fan-out song song ở buổi sau.

---

Không có danh sách module → không fan-out được.

AI sẽ dừng lại và hỏi.

---

# Chương 6
# Cổng 1 — Chốt BRD

---

Ba tài liệu xong.

AI **không** tự đi tiếp.

---

AI soạn một **quyết định nháp**:

- Đã làm gì
- Điểm nào cần người quyết
- Giả định nào đang treo
- Chỗ nào còn TBD

---

Người đọc.

Duyệt / sửa / trả lại.

---

Duyệt → ghi "đã chốt" → **cổng mở**.

---

Từ giây phút đó, AI được phép fan-out sinh Business Rule cho **tất cả module cùng lúc**.

---

## Cổng không phải rào chắn tuyệt đối

Người có quyền duyệt kèm **ghi nợ**.

---

Ví dụ: "Chưa có số liệu lead/tháng — cứ đi tiếp, bổ sung sau."

Mục đó rơi vào sổ nợ `memory/discovery/open-questions.md`.

---

Đi tiếp được.

Nhưng không quên.

---

# Hands-on
# 45 phút — chạy trên dự án thật

---

## Bước 1 — Premise Check

```
/minipower
Phase: discovery — @assets/public/<file thật của anh chị>
Chạy Premise Check: đây là vấn đề gốc hay triệu chứng? Ai đau, đo được không?
Cho tôi verdict PROCEED / RESHAPE / STOP kèm lý do.
```

---

## Bước 2 — Nghị luận đa góc nhìn

```
/minipower
Phase: discovery — cho 5 góc nhìn (sponsor, người dùng cuối, vận hành,
security, QC) mỗi góc phát biểu một lượt về bài toán này.
Tách rõ: điểm hội tụ và căng thẳng còn sống. Đừng chốt giải pháp.
```

---

## Bước 3 — Bộ câu hỏi khảo sát

```
/minipower
Phase: discovery — soạn tối đa 10 câu hỏi khảo sát để gửi khách,
phân loại Đã rõ / Chưa rõ / Chưa đề cập, gắn nhãn Assumption cho phần tôi đang đoán.
```

> Đây là bộ câu hỏi **gửi khách một lượt**, không hỏi nhỏ giọt. *(nỗi đau #11)*

---

## Bước 4 — Sinh 3 tài liệu

```
/minipower
Phase: discovery — sinh DOC-01, DOC-02, DOC-03 từ những gì đã chốt ở trên.
DOC-03 phải có in-scope / out-of-scope và danh sách module.
```

---

## Bước 5 — Trình cổng 1

```
/minipower
Soạn quyết định nháp để tôi duyệt cổng "Chốt BRD": đã làm gì, tôi cần quyết gì,
rủi ro và giả định nào đang treo.
```

Đọc kỹ.

Đây là lúc **con người làm việc**.

---

## Bước 6 — Duyệt kèm ghi nợ

Chỗ nào chưa chắc, bảo AI:

```
Mục <X> tôi chưa có số liệu, ghi nợ vào memory/discovery/open-questions.md
và đánh dấu là chặn hay không chặn. Các mục còn lại tôi duyệt.
```

---

# Tổng kết

---

Buổi 03 chúng ta có bản đồ.

Buổi 04 chúng ta bước qua cổng đầu tiên.

---

Ba điều mang về:

- Hỏi **6 câu** trước khi viết bất cứ dòng nào
- Dám nói **STOP** và **RESHAPE** — đó là lúc tiết kiệm nhất
- Cổng mở bằng **quyết định của người**, không bằng sự sốt ruột

---

## Câu hỏi kết thúc

Cổng 1 đã mở.

Dự án có 8 module.

Mỗi module cần Business Rule, Prototype, SRS, Acceptance Criteria.

---

Một BA làm 8 module mất bao lâu?

Và làm sao để 8 luồng chạy cùng lúc mà không giẫm chân nhau?

👉 Workshop 5: **Requirements & Fan-out**.

---

# Bài tập về nhà

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Chạy Premise Check trên dự án thật | Ảnh chụp verdict + lý do |
| 2 | Chạy nghị luận ≥3 góc nhìn | Bảng điểm hội tụ / căng thẳng còn sống |
| 3 | Sinh DOC-03 có in/out scope + danh sách module | Ảnh chụp mục scope và module |
| 4 | Chốt cổng 1 bằng một quyết định thật | Ảnh chụp `decision-log.md` |
| 5 | Trả lời: dự án của anh chị đáng lẽ nên **RESHAPE** ở đâu? | 5 dòng |
| 6 | Trả lời: góc nhìn nào lâu nay không có ai đại diện trong phòng họp? | 3 dòng |

---

# Phụ lục — Prompt tạo ảnh

> Phong cách chung: điện ảnh, kể chuyện doanh nghiệp, biểu cảm chân thực, giữ nguyên bộ nhân vật xuyên suốt khoá học, tỷ lệ 16:9.

```text
Mở đầu — Sau ba tháng phát triển, đội dự án hào hứng bàn giao hệ thống CRM sáng bóng cho khách hàng, nhưng khách hàng nhìn màn hình với vẻ mặt thất vọng, phía sau khách hàng là vấn đề thật của họ vẫn còn nguyên trong bóng tối, tỷ lệ 16:9
```

```text
Không ai dám hỏi — Trong phòng họp, BA muốn giơ tay hỏi một câu nhưng ngập ngừng, phía trên đầu BA hiện lên bong bóng suy nghĩ có dòng chữ "Việc này có đáng làm không?" đang mờ dần vì không được nói ra, tỷ lệ 16:9
```

```text
Cổng 0 — Một cánh cổng đá cổ kính khắc sáu câu hỏi phát sáng chắn trước con đường dẫn vào dự án, đội dự án đứng trước cổng, AI hologram cầm đèn soi vào từng câu hỏi, tỷ lệ 16:9
```

```text
Ba kết luận — Ba con đường rẽ ra từ cùng một điểm, biển chỉ đường phát sáng ghi PROCEED màu xanh, RESHAPE màu vàng, STOP màu đỏ, đội dự án đứng ở ngã ba cân nhắc, tỷ lệ 16:9
```

```text
Hỏi tại sao ba lần — Một củ hành khổng lồ bằng ánh sáng đang được bóc từng lớp, lớp ngoài ghi "muốn làm CRM", lớp giữa ghi "sale không chăm khách kịp", lõi trong cùng phát sáng rực ghi "lead không được phân bổ theo quy tắc", tỷ lệ 16:9
```

```text
Sáu góc nhìn — Sáu nhân vật đại diện Sponsor, Người dùng, Vận hành, Security, Kiến trúc, QC ngồi thành vòng tròn quanh một bài toán phát sáng ở giữa, mỗi người cầm một chiếc micro và chỉ được nói một lượt, tỷ lệ 16:9
```

```text
Điểm hội tụ và căng thẳng — Một chiếc cân khổng lồ, một bên là những điểm mọi người đồng ý phát sáng xanh vững chắc, bên kia là những căng thẳng chưa giải quyết phát sáng đỏ đang rung lắc, con người đứng giữa chuẩn bị ra quyết định, tỷ lệ 16:9
```

```text
Cổng 1 mở — Một người thật đóng con dấu duyệt lên tài liệu BRD, ngay lập tức cánh cổng ánh sáng phía sau mở ra và tám luồng AI song song lao vào tám module khác nhau, khoảnh khắc bùng nổ năng lượng, tỷ lệ 16:9
```
