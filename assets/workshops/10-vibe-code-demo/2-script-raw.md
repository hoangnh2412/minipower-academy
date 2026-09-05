# Workshop 10
# Vibe code & Demo — bấm nút và xem thứ nó làm ra

> **Giai đoạn 2 (raw).** **⚠️ Repo tham khảo và repo demo chỉ dùng để soạn — không bê vào slide.**

## Thời lượng
**150 phút** — buổi cuối, dài hơn các buổi khác

## Phase Minipower
**Delivery** — thực thi và nghiệm thu.

## Chuẩn bị của giảng viên
- **Repo mốc đã fan-out sẵn** — cho nhóm chạy hỏng
- Giảng viên **chạy song song** trên dự án mẫu từ đầu phần 3, để luôn có một sản phẩm hoàn chỉnh trên màn chiếu
- Bộ **thẻ bốc thăm** câu hỏi nghiệm thu
- Group hỗ trợ đã lập, để nhận câu hỏi sau buổi

---

# Phần 1 — Mở *(10')*

## Chín buổi vừa qua

```
03 → 04   ba tài liệu tổng quát, một chữ ký
05        nền đã dựng
06 → 07   32 tài liệu chi tiết, prototype, ba chữ ký
08 → 09   kiến trúc, kế hoạch, ca kiểm thử, hai chữ ký
```

Năm cổng. Toàn bộ đề bài đã xong. **Máy vẫn chưa viết dòng nào.**

## Hôm nay

Hôm nay bấm nút.

## Hỏi lớp

Trước khi bấm — điều gì đáng lo nhất có thể xảy ra?

*(Chờ. Lớp sẽ nói: code sai, không chạy, tốn tiền.)*

## Reveal

Đáng lo nhất **không phải code sai**. Code sai thì ca kiểm thử bắt được.

Đáng lo nhất là **báo đạt hết trong khi thực ra chưa xong** — và mình tin.

Nửa đầu buổi học cách để chuyện đó không xảy ra.

---

# Phần 2 — Cách điều khiển máy *(30')*

## Máy làm theo nhịp nào

```
┌─ Với mỗi Story ────────────────────────────┐
│  AI viết code cho Story                    │
│  → chạy ca kiểm thử CỦA STORY đó           │   tầng 1
│  → chưa đạt thì sửa code, chạy lại         │
│  → đạt thì đánh dấu Story xong             │
└────────────────────────────────────────────┘
            ↓  hết Story trong Epic
   chạy TOÀN BỘ ca kiểm thử của Epic             tầng 2
            ↓  hết Epic
   chạy LẠI TẤT CẢ ca kiểm thử                   tầng 3
```

## Ba câu hỏi mở ra ba tầng

## Hỏi lớp — câu 1

Code hết mọi Story rồi mới chạy kiểm thử một lần cuối — được không?

*(Chờ.)*

## Reveal

Được, nhưng khi hỏng thì **không biết Story nào gây ra**.
Tầng 1 tồn tại để **khoanh vùng**, không phải để cầu toàn.

## Hỏi lớp — câu 2

Story này vừa đạt. Chạy tiếp Story sau — có cần ngó lại Story trước không?

*(Chờ.)*

## Reveal

Có. Story sau đụng vào chỗ dùng chung — dữ liệu, phân quyền, cách tính quota — là Story trước hỏng.
**Tầng 2 bắt đúng chuyện đó.**

## Hỏi lớp — câu 3

Cả ba Epic đều đạt riêng lẻ. Ghép lại thì sao?

*(Chờ.)*

## Reveal

Chưa chắc đạt. Tầng 3 là **lần kiểm cuối trước khi được nói là xong**.

## Đây chính là nỗi đau #11 của buổi 01

*Sửa chỗ này hỏng chỗ kia.*

Chín buổi qua các bạn nghe nó như một câu than. Hôm nay nhìn thấy nó xảy ra trên máy mình —
và thấy **cái gì bắt được nó**.

---

## Bốn điều kiện dừng

## Hỏi lớp

Giao cho AI tám module rồi đi uống cà phê — được không?

*(Chờ.)*

## Reveal

Được — **nếu đã dặn trước nó khi nào phải dừng lại gọi mình**.

| Tầng | Máy phải dừng khi | Vì sao |
|---|---|---|
| 1 | Định **sửa hoặc xoá ca kiểm thử** | Đó là hợp đồng — đổi hợp đồng phải có người ký |
| 1 | Sửa cùng một Story quá **3 vòng** vẫn chưa đạt | Nó đang đoán, không phải đang sửa |
| 2 | **Ca vốn đã đạt bỗng hỏng** | Phải báo — không được tự nới ca cũ cho qua |
| 3 | **Tổng số ca lệch** so với con số ghi ở buổi 09 | Có ca đã biến mất |

## 🚩 Điều kiện thứ nhất

AI rất hay "sửa" ca không đạt bằng cách nới điều kiện hoặc xoá nó đi, rồi báo *"tất cả đều đạt"*.
Và đúng là đạt thật.

**Câu phải hỏi mỗi lần AI đụng vào ca kiểm thử: nó sửa bài làm, hay sửa đề bài?**

## Ranh giới cũ, vật liệu mới

Buổi 06 đã học: **fan-out chỉ chạy giữa hai cổng.**
Hôm nay vẫn thế — trước là tài liệu, giờ là code. Cổng *Chốt ca kiểm thử* buổi 09 mở đường cho hôm nay.

---

# Phần 3 — Lớp bấm nút *(40')*

## 🖥 Ba việc

1. **Viết ra bốn điều kiện dừng** — viết ra, đừng nhớ trong đầu
2. **Chạy**
3. **Theo dõi tầng 1** chạy hết vài Story đầu, xem máy có dừng không

*(Giảng viên chạy song song trên dự án mẫu. Nhóm nào hỏng thì lấy repo mốc.)*

## Trong lúc chờ

Máy chạy mất thời gian. Không ngồi nhìn — sang phần 4.

---

# Phần 4 — Nghiệm thu *(25' — trong lúc máy chạy)*

## Hỏi lớp

AI viết gần hết số code này. Vậy **sản phẩm này là của ai**?

*(Chờ.)*

## Reveal

Là của bạn — **nếu bạn kiểm được nó**.

Không phải kiểm bằng cách đọc code. Kiểm bằng ba thứ đã có sẵn trong tay.

## Ba cách kiểm — không mở code

| Cách | Làm gì | Đạt khi |
|---|---|---|
| **Bấm theo tiêu chí** | Mở từng tiêu chí nghiệm thu, làm đúng như nó viết | Sản phẩm phản ứng đúng, **kể cả đường đi xấu** |
| **Đọc kết quả kiểm thử** | Chạy toàn bộ, **đếm số ca** | Đạt hết **và** tổng số ca không ít đi |
| **Đối chiếu ADR** | Sản phẩm có đúng thứ đã chốt không | Đúng cơ sở dữ liệu · đúng cách đăng nhập · màn hình dùng đúng bộ kit |

## Cách thứ hai là cách dễ bị qua mặt nhất

*"Tất cả đều đạt"* nghe rất yên tâm. Nhưng **đạt bao nhiêu trên bao nhiêu?**

Con số đếm ở buổi 09 dùng ở đây. Ít hơn nghĩa là có ca đã biến mất.

## 🖥 Bốc thăm — mỗi nhóm một câu, 2 phút

- *"Chức năng tính quota phép năm ra sai. Bạn nói với AI thế nào để nó sửa đúng chỗ?"*
- *"Khách muốn thêm một loại nghỉ mới. Bạn sửa tài liệu nào trước, rồi bảo AI làm gì?"*
- *"Sản phẩm chạy đúng hết, nhưng tổng số ca ít hơn lúc chốt 3 ca. Bạn làm gì?"*
- *"Khách hỏi vì sao dùng cơ sở dữ liệu này. Bạn trả lời bằng cái gì?"*

## Đáp án tốt trông thế nào

Không nói *"tôi mở code ra xem"*. Mà nói:

> *"Ca kiểm thử LVE-TC-004 không đạt. Nó kiểm tiêu chí LVE-AC-002.
> Đây là kết quả chạy. Giải thích vì sao sai trước, đừng sửa vội, đừng đụng ca kiểm thử."*

Hoặc với câu cuối: *"Mở ADR-002 — có bối cảnh, có phương án đã loại, có đánh đổi phải chịu."*

## Ba kết cục — cả ba đều tốt

| Trả lời | Nghĩa là |
|---|---|
| ✅ Đúng và nhanh | **Sản phẩm có chủ** |
| ⚠️ Không biết tra tài liệu nào | Tài liệu có, chưa quen dùng — tập vài lần là được |
| ⚠️ Tài liệu không có thứ cần tra | Tài liệu viết thiếu → **sửa tài liệu**, không phải sửa code |

**Không có kết cục xấu.** Cái xấu duy nhất là không bao giờ hỏi câu này.

---

# Phần 5 — Demo *(30')*

## Luật

Mỗi nhóm **4 phút**. Mở **sản phẩm vừa được sinh ra ngay tại lớp**.

Không cần hoàn hảo. Đây là kết quả tới thời điểm này — phần còn lại về nhà hoàn thiện.

## Bốn thứ cho thấy

| # | Cho thấy gì |
|---|---|
| 1 | **Một luồng nghiệp vụ chạy được** — làm thật, không kể chuyện |
| 2 | **Một tiêu chí nghiệm thu** — mở ra, bấm đúng như nó viết, kể cả đường đi xấu |
| 3 | **Bảng kết quả ba tầng** — đạt bao nhiêu trên bao nhiêu, so với con số buổi 09 |
| 4 | **Một lần máy bị dừng** — dừng vì điều kiện nào, bạn xử lý ra sao |

## Và một câu

**"Một điều tôi học được ngoài dự tính."**

## Điểm hay của việc demo tại chỗ

Thứ các bạn vừa mở ra **mới ra lò mấy chục phút trước**. Không ai kịp đánh bóng.

Đó là lý do demo hôm nay đáng tin hơn mọi bản demo chuẩn bị sẵn.

---

# Phần 6 — Giao bài & kết khoá *(15')*

## Bài tập cuối khoá

Hoàn thiện sản phẩm. Không có buổi chữa bài — **hỗ trợ qua group trao đổi**.

| # | Việc | Nộp gì |
|---|------|--------|
| 1 | Chạy hết vòng lặp ba tầng cho **toàn bộ tính năng** | Bảng kết quả ba tầng |
| 2 | Đối chiếu tổng số ca với con số buổi 09, giải thích chênh lệch | 1 dòng |
| 3 | Ghi lại **mỗi lần máy dừng** — vì điều kiện nào, xử lý ra sao | Sổ ghi |
| 4 | **Bấm thử toàn bộ tiêu chí nghiệm thu** trên sản phẩm | Danh sách đạt / chưa đạt |
| 5 | Đối chiếu sản phẩm với 6 ADR | 6 dòng |
| 6 | Đẩy lên GitHub | Link repo |

## Chấm theo rubric — trên bài nộp cuối

| Tiêu chí | 0 | 1 | 2 |
|---|---|---|---|
| **Nộp được** | Không đẩy gì lên | Đẩy nhưng thiếu | Đủ trên GitHub |
| **Cổng** | AI tự đi tiếp | Có quyết định người không đọc | **Năm cổng có tên người ký** |
| **Truy vết** | Không ghi gì | Rời rạc | Yêu cầu → kế hoạch → kiểm thử → task truy được |
| **Bằng chứng** | Tin lời AI | Có chạy thử không ghi | Kiểm thử đạt · **tổng số ca không đổi** · có ca âm nghiệp vụ |

Tổng 8 điểm. Dưới 60% thì làm lại trước khi áp vào dự án thật.

## Lộ trình 30 / 60 / 90 ngày

Đừng áp dụng tất cả cùng lúc. Về công ty mà dựng đủ 19 tài liệu, 7 cổng → hai tuần sau cả đội bỏ.

| Mốc | Làm gì | Dấu hiệu đã ăn |
|---|---|---|
| **30 ngày** | Một dự án · một module · chuỗi yêu cầu tới tiêu chí nghiệm thu · mỗi cổng có tên người | Người ngoài đội đọc tài liệu và hiểu |
| **60 ngày** | Thêm kế hoạch có *XONG KHI* + ca kiểm thử trỏ tiêu chí | Không còn cãi nhau "thế nào là xong" |
| **90 ngày** | Fan-out nhiều module · ADR thành thói quen · tri thức vào repo | Người mới tự đọc repo mà làm được |

Mỗi người viết **ba dòng** cho dự án của mình trước khi ra về.

## Khoá này đã đi qua 12 tài liệu

| Buổi | Tài liệu |
|---|---|
| 03 | DOC-01 · DOC-02 · DOC-03 |
| 06 | DOC-04 · DOC-05 · DOC-06 · DOC-07 — ×8 module |
| 07 | DOC-19 Prototype |
| 08 · 09 | DOC-09 ADR · DOC-14 · DOC-15 · DOC-16 |
| 10 | Code + kiểm thử |

**Bảy tài liệu không dùng:** DOC-08 · 10 · 11 · 12 · **13** · 17 · **18**.
Năm cái không cần cho sản phẩm này. Hai cái in đậm là **món nợ** đã ghi trong sổ câu hỏi mở:
**yêu cầu phi chức năng** và **thay đổi sau khi đã chốt**.

## Nói thật về giới hạn

- AI **không** tự chạy dự án. Mỗi cổng đều có tên người — đó không phải hình thức.
- Máy sinh nhanh **không** có nghĩa là đúng. Ca kiểm thử là bằng chứng, lời AI nói thì không.
- Tự động hoá được **là nhờ có khung dựng sẵn**. Không có khung thì không có buổi hôm nay.
- Công cụ đổi liên tục. Thứ không đổi là **thứ tự làm việc** và **kỷ luật chốt cổng**.

## Câu cuối khoá

**AI chuẩn bị. Con người quyết định.**

---

# GHI CHÚ CHO ANH HOÀNG

1. **Buổi này 150'.** Ép về 120' thì phải bỏ phần 4 hoặc phần 5 — cả hai đều không nên bỏ.
2. **Phần 5 demo 30' đủ cho 6–7 nhóm** ở mức 4 phút. Đông hơn thì cho demo theo bàn, chọn 3 nhóm lên trước lớp.
3. **Ba lớp bảo hiểm** phải có đủ: repo mốc đã fan-out · bài tập buổi 09 bắt chạy thử một Epic ·
   giảng viên chạy song song trên dự án mẫu.
4. **Thẻ bốc thăm** bốc ngẫu nhiên. Báo trước thì cả lớp học thuộc.
