Tôi đang chuẩn bị nội dung workshop chia sẻ về AI. Tôi muốn sử dụng cách kể chuyện để khiến người nghe thích thú và hứng thú.

---

## Nội dung workshop

### Phần 1 — Buổi họp định mệnh

**Kể chuyện**

Công ty ABC triển khai CRM. Kickoff meeting.

**Thành phần tham dự:**

- Customer
- PM
- BA
- SA
- Dev Lead
- *(Tổng cộng 10 người)*

Khách hàng nói liên tục 2 tiếng. Kết thúc họp.

> **PM:** Em ghi kịp không?  
> **BA:** Chắc là kịp anh. 😅

**Tương tác lớp**

1. Hỏi: *Theo anh chị điều gì sẽ xảy ra tiếp theo?*
2. Cho mọi người trả lời → ghi lên màn hình
3. Sau đó **reveal**

---

#### Nỗi đau số 1 — Không ghi kịp nội dung họp

**Kết quả:**

- Thiếu requirement
- Thiếu business rule
- Thiếu decision
- Thiếu action item

**Hỏi:** Ai từng về nghe lại recording? *(Tiếp tục giơ tay)*

---

#### Nỗi đau số 2 — Biên bản họp ra quá muộn

**Thực tế:**

| Thời điểm | Sự kiện |
|-----------|---------|
| T2 | Họp |
| T4 | Mới gửi MOM |
| T6 | Khách mới đọc |
| Tuần sau | Họp tiếp |

**Hỏi lớp:** Lúc này khách hàng còn nhớ mình đã nói gì không?

**Hầu hết:** Không.

**Kết quả:**

- Requirement bị trôi
- Không ai xác nhận
- Không ai chịu trách nhiệm

---

#### Nỗi đau số 3 — Không rõ ai làm gì

**Hiển thị slide:** PM · BA · SA · QA · DEV · CUSTOMER

**Hỏi:**

- Ai approve FRD?
- Ai approve UAT?
- Ai approve Change Request?

*Thông thường mỗi công ty trả lời khác nhau — đó chính là vấn đề.*

**Hệ quả:**

- Đùn đẩy trách nhiệm
- Không có owner
- Việc bị treo

---

#### Nỗi đau số 4 — Dự án có quá nhiều tài liệu

**Ví dụ — một dự án có:**

- BRD
- FRD
- SRS
- Wireframe
- Test Case
- User Guide
- Training Material
- Release Note
- CR

**Hỏi:** Anh chị có từng copy nội dung từ tài liệu này sang tài liệu khác không?

**100% có.**

**Hệ quả:** Một sự thật → nhiều nơi lưu trữ → nguồn gốc của **outdate**.

---

#### Nỗi đau số 5 — Tài liệu chết dần theo thời gian

**Timeline:**

| Tháng | Giai đoạn |
|-------|-----------|
| 1 | BRD |
| 2 | FRD |
| 4 | Development |
| 6 | UAT |
| 7 | GoLive |

**Hỏi:** BRD tháng 1 có còn đúng 100% ở tháng 7 không?

**Không.** FRD, Test Case, User Guide cũng không còn đúng.

---

#### Nỗi đau số 6 — Không biết ai quyết định

Một câu hỏi rất phổ biến:

> **Khách hàng:** Tại sao hệ thống lại xử lý như thế này?  
> **Cả team:** …  
> **PM:** Em nhớ khách yêu cầu.  
> **Customer:** Tôi không nhớ. 😅

**Hỏi lớp:** Có ai từng mất vài giờ chỉ để tìm email cũ không?

---

#### Nỗi đau số 7 — Test case không trace được requirement

**Ví dụ — BRD:** *Khách VIP được giảm 10%*

**Hỏi:** Test case nào kiểm tra điều này?

QA mở 500 test case → **không biết**.

**Hệ quả:**

- Coverage không rõ
- Thiếu test
- Test trùng

---

#### Nỗi đau số 8 — Người mới vào dự án

Một BA nghỉ việc. BA mới vào.

> **PM:** Đọc tài liệu nhé.  
> **Tài liệu:** 500 trang  
> **BA mới:** 😨

**Hỏi lớp:** Bao lâu để onboard?

**Thực tế:** 2 tuần · 1 tháng · 2 tháng

---

#### Nỗi đau số 9 — Dự án phụ thuộc vào người nhớ nhiều nhất

Một số người trở thành **Human Database**. Họ nhớ:

- requirement
- customer
- lịch sử
- quyết định

**Nếu nghỉ việc:** Mất trí nhớ dự án.

---

#### Nỗi đau số 10 — Scope creep

> **Khách hàng:** Tiện thể làm thêm giúp anh.

- Không có CR
- Không có approval
- Không estimate

**3 tháng sau:** Dự án trễ — không ai biết vì sao.

---

#### Nỗi đau số 11 — Họp quá nhiều

**Ví dụ:** Kickoff · Clarification · Review · Daily · Weekly · UAT · CR

**Hỏi lớp:** Bao nhiêu % nội dung họp thực sự tạo ra giá trị?

*Rất nhiều người sẽ cười.*

---

#### Nỗi đau số 12 — Tìm kiếm tri thức dự án cực khó

**Thông tin nằm ở:** Zalo · Teams · Email · Word · Excel · Jira · Confluence · Drive

**Một câu hỏi đơn giản:** *Khách hàng A yêu cầu chức năng này khi nào?*

**Mất:** 15 phút · 30 phút · 1 giờ

---

### Cao trào

Sau khi liệt kê tất cả → hiện slide.

**Đây có phải vấn đề của AI không?**

**Câu trả lời: KHÔNG.**

Đây là vấn đề của **tri thức dự án** — đang:

- nằm rải rác
- không được liên kết
- không được cập nhật
- không truy vết được

---

### Chuyển sang AI

Lúc này mới hỏi: *Nếu có một "nhân viên"…*

- tham gia mọi cuộc họp
- ghi nhớ mọi quyết định
- cập nhật mọi tài liệu
- biết ai yêu cầu gì
- biết vì sao thay đổi
- biết test case nào liên quan requirement nào
- hỗ trợ người mới onboard

**… thì sao?**

Mọi người sẽ trả lời: *Quá tuyệt.*

**Lúc đó mới reveal:** Đó chính là **Minipower**.

Không phải chatbot. Không phải prompt. Không phải ChatGPT.

Mà là:

- **AI Project Memory**
- **+ AI Project Analyst**
- **+ AI Project Assistant**

**Kết thúc workshop 1**

---

## Prompt tạo kịch bản

Đây là prompt mẫu tôi đã làm cho nội dung đầu tiên của buổi kickoff dự án để tạo ảnh:

```
===
Học theo phong cách ảnh mẫu, tạo ảnh mới theo mô tả: Tại văn phòng công ty, mọi người đang họp kickoff dự án mới rất vui vẻ bao gồm Director, PM, SA, BA, Dev, Test. Director đang suy nghĩ đến viễn cảnh kiếmdc tiền. PM nghĩ đến dự án hoàn thành đúng hạn, sếp thưởng. BA nữ xinh đẹp sẵn sàng bộ tài liệu chỉnh chu để đi gặp khách hàng. SA nghĩ đến kiến trúc hoành tráng như microservice. Dev nghĩ đến những điều mới sắp dc học. Test nghĩ đến nhưng lỗi khó dc phát hiện.. Tất cả đều đang vui vẻ hào hứng trong phiên kickoff
===
```

Viết cho tôi từng prompt mẫu để tạo ảnh cho từng khung slide trong workshop. Đảm bảo hình ảnh nhân vật nhất quán và đẹp.

---

## Prompt tạo từng khung ảnh

Sử dụng ảnh mẫu các nhân vật. Giữ nguyên bộ nhân vật xuyên suốt toàn bộ câu chuyện. Phong cách minh họa corporate storytelling cao cấp, comic realism, màu sắc tươi sáng, chuyên nghiệp, điện ảnh, chi tiết cao, biểu cảm rõ nét, bố cục kể chuyện.

Chỉ cần trả về hình ảnh, ko cần mô tả gì thêm

```
===
Các thành viên ứng dụng AI vào công việc, dự án
AI Project Memory
AI Project Analyst
AI Project Assistant
PM, BA, SA, QA, Dev Lead và Customer đều vui vẻ làm việc hiệu quả hơn. Các tài liệu, cuộc họp, requirement, test case được kết nối trong một hệ thống tri thức thống nhất. Không khí tích cực, tương lai, chuyên nghiệp, cinematic keynote ending scene.
===
```

```
===
Một nhân vật AI tên là Minipower chuyên nghiệp xuất hiện như thành viên thứ 11 của dự án. AI đang tham gia cuộc họp cùng PM, BA, SA, Dev Lead và Customer.
Minipower ghi nhớ mọi cuộc họp.
Minipower liên kết requirement với test case.
Minipower cập nhật tài liệu tự động.
Minipower biết ai yêu cầu thay đổi.
Minipower hỗ trợ onboarding thành viên mới.
Các luồng dữ liệu được kết nối thành một mạng tri thức thống nhất. Hình ảnh hiện đại, công nghệ cao, truyền cảm hứng.
===
```

```
===
Dự án đang gặp khó khăn, cần tìm giải pháp tối ưu cho các vấn đề: Missing Requirement, Outdated Document, Scope Creep, Lost Knowledge, Too Many Meetings, No Ownership, ...
PM cố gắng động viên các thành viên cố gắng, Director tìm kiếm và thuê chuyên gia tư vấn giải pháp. SA, DEV, QA cố gắng sửa code để dễ maintain hơn. BA cố gắng cập nhật tài liệu
===
```

```
===
Toàn bộ 12 nỗi đau xuất hiện xung quanh team dự án như những đám mây đen:
Missing Requirement
Outdated Document
Scope Creep
Lost Knowledge
Too Many Meetings
No Ownership
...
Team đứng ở trung tâm nhìn thấy toàn bộ vấn đề của dự án hiện ra cùng lúc. Không khí căng thẳng nhưng mang tính khám phá.
===
```

```
===
Lịch làm việc của PM bị phủ kín: Kickoff, Clarification, Review, Daily, Weekly, UAT, CR
PM chạy từ phòng họp này sang phòng họp khác như trên băng chuyền vô tận. Biểu cảm kiệt sức. Góc nhìn vui nhộn nhưng thực tế.
Lịch làm việc của cả team bị phủ kín: Review, Daily, Weekly. Các thành viên trong đội mệt mỏi khi họp và báo cáo công việc quá nhiều
===
```

```
===
Một mê cung khổng lồ được tạo thành từ: Zalo, Teams, Email, Jira, Confluence, Excel, Word, Drive
PM, BA cầm đèn pin đi tìm câu trả lời cho một yêu cầu của khách hàng. Đồng hồ phía trên hiển thị thời gian trôi qua 15 phút, 30 phút, 1 giờ.
===
```

```
===
Customer mỉm cười nói: "Tiện thể làm thêm giúp anh". Một yêu cầu nhỏ xuất hiện. Sau đó yêu cầu này phát triển thành quái vật nhiều đầu mang tên Scope Creep. PM, BA và Dev Lead đang cố kéo timeline dự án bị trễ. Không khí hài hước nhưng đầy áp lực.
===
```

```
===
SA kỳ cựu đứng ở trung tâm. Trong đầu chứa hàng nghìn requirement, quyết định, email, lịch sử dự án. Toàn bộ team phụ thuộc vào người này. Khi nhân viên bước ra khỏi khung hình, toàn bộ dữ liệu phía sau cũng biến mất theo. Hình ảnh tượng trưng cho mất trí nhớ dự án.
===
```

```
===
BA cũ rời khỏi công ty. BA mới bước vào văn phòng. PM trao cho BA mới một chồng tài liệu cao gần bằng người với hơn 500 trang. BA mới tái mặt, choáng váng. Phía sau là núi tài liệu khổng lồ. Tông màu hài hước nhưng phản ánh thực tế.
===
```

```
===
QA mở màn hình với hơn 500 test case. Một requirement nổi bật:
"VIP Customer receives 10% discount"
QA đang cố tìm test case liên quan nhưng giữa requirement và test case không có đường kết nối nào. Nhiều dấu hỏi xuất hiện. Phong cách infographic storytelling.
===
```

```
===
Customer hỏi: "Tại sao hệ thống xử lý như thế này?". PM, BA, SA, Dev Lead và QA đều đứng im lặng. Phía sau họ là mê cung email, chat, biên bản họp và tài liệu. Mọi người đang cố tìm nguồn gốc quyết định trong tuyệt vọng.
===
```

```
===
Timeline dự án:
- January - BRD
- February - FRD
- April - Development
- June - UAT
- July - GoLive
Tài liệu BRD ban đầu rất mới và sáng rõ, nhưng càng đi về cuối timeline càng cũ kỹ, phai màu và rách dần. Hình ảnh trực quan thể hiện tri thức bị lỗi thời.
===
```

```
===
Một mạng lưới tài liệu kết nối với nhau. Khi BA sửa một requirement trong BRD, các tài liệu FRD, Test Case, User Guide ở nhiều nơi bắt đầu chuyển màu đỏ vì bị outdate. Hình ảnh domino effect thể hiện dữ liệu không đồng bộ.
===
```

```
===
PM, BA, SA, QA, DEV và Customer đứng thành vòng tròn. Ở giữa là các câu hỏi lớn:
Ai approve FRD?
Ai approve UAT?
Ai approve Change Request?
Mọi người nhìn nhau và chỉ tay sang PM. Các mũi tên trách nhiệm chồng chéo hỗn loạn. Hình ảnh tượng trưng cho sự đùn đẩy trách nhiệm.
===
```

```
===
Học theo phong cách ảnh mẫu. Tạo ảnh theo phong cách minh họa corporate storytelling cao cấp, comic realism, màu sắc tươi sáng. Hình ảnh ko cần tiêu đề, chỉ cần khung riêng từng nhân vật

Nhân vật gồm:
- Director nam 45 tuổi, vest xanh đậm, đeo kính
- PM nam 35 tuổi, áo sơ mi xanh nhạt
- BA nữ 28 tuổi xinh đẹp, tóc dài, áo blazer trắng, luôn mang laptop và sổ ghi chép
- SA nam 35 tuổi, áo sơ mi xám, đeo kính
- Dev Lead nam 30 tuổi, áo polo đen
- QA nữ 27 tuổi, áo xanh navy
- Customer 1 nam 40 tuổi, vest xám
- Customer 2 nữ 35 tuổi, áo blazer trắng
- Customer 3 nữ 30 tuổi, áo sơ mi xanh nhạt

Mỗi nhân vật gồm các góc quay sau:
- Đang đứng thẳng và nhìn trực diện
- Đang đứng thẳng và quay lưng
- Đang đứng thẳng và quay sang trái /phải
- Đang ngồi bàn làm việc nhìn trực diện
- Đang ngồi bàn làm việc nhìn sang trái / phải
- Gương mặt trực diện
- Gương mặt quay sang trái

Các vật dụng riêng gồm: Slide trình chiếu, laptop, hồ sơ tài liệu
===
```

```
PM, BA, SA, QA, DEV và Customer đứng thành vòng tròn. Ở giữa là các câu hỏi lớn:
- Ai approve FRD?
- Ai approve UAT?
- Ai approve Change Request?
Mọi người nhìn nhau và chỉ tay sang PM. Các mũi tên trách nhiệm chồng chéo hỗn loạn. Hình ảnh tượng trưng cho sự đùn đẩy trách nhiệm.
```

```
Buổi họp tiếp theo chỉ còn BA với khách hàng. Customer nhìn tài liệu MOM với vẻ mặt bối rối. BA đang cố giải thích nội dung cuộc họp tuần trước. Các đoạn requirement xuất hiện dưới dạng bong bóng mờ đang bay mất khỏi đầu Customer. Không khí khó xử và thiếu chắc chắn.
```

```
Timeline trực quan:
- Monday: Meeting
- Wednesday: MOM Sent
- Friday: Customer Reads
- Next Week: New Meeting
Các tài liệu đang di chuyển rất chậm giữa PM, BA và Customer. Trong khi đó requirement phía sau đang mờ dần như bị quên lãng. Hình ảnh thể hiện sự chậm trễ trong truyền đạt thông tin.
```

```
BA ngồi làm việc buổi tối muộn trong văn phòng gần như trống. Đeo tai nghe nghe lại recording cuộc họp. Thanh timeline audio dài hàng giờ trên màn hình. Ly cà phê đã nguội, đồng hồ chỉ 22:30. Gương mặt mệt mỏi nhưng vẫn phải tua đi tua lại để tìm thông tin. Không khí áp lực công việc.
```

```
BA ngồi một mình sau cuộc họp, nhìn màn hình laptop đầy các ghi chú rời rạc và thiếu sót. Xung quanh xuất hiện các mảnh giấy bị mất nội dung với các dòng chữ:
- Missing Requirement
- Missing Business Rule
- Missing Decision
- Missing Action Item
BA lo lắng, căng thẳng. Các mảnh thông tin đang bay biến mất như puzzle bị thiếu. Hình ảnh thể hiện sự thất thoát tri thức dự án.
```

```
Customer đứng trình bày liên tục trước màn hình lớn đầy sơ đồ quy trình nghiệp vụ. Đồng hồ trên tường hiển thị thời gian trôi từ 9:00 đến 11:00. Customer nói không ngừng, rất nhiều speech bubble xuất hiện. BA nữ xinh đẹp cố gắng ghi chép với tốc độ cao, giấy note và laptop đầy nội dung. PM bắt đầu lo lắng nhìn BA. Các thành viên khác tập trung nghe. Góc nhìn điện ảnh, nhấn mạnh lượng thông tin khổng lồ đang đổ vào cuộc họp.
```

### === Nội dung: Đi khảo sát khách hàng ===

```
Khung cảnh bàn họp. Khách hàng gồm 3 người ngồi bên trái bàn họp, ngồi bên phải là các thành viên dự án gồm BA, SA, Dev Lead, QA. Trên đầu khách hàng xuất hiện thought bubble:
- Customer 1 nghĩ đến việc tăng doanh thu
- Customer 2 nghĩ đến việc giảm thiểu rủi ro
- Customer 3 nghĩ đến việc tăng hiệu suất
Không khí cực kỳ tích cực, mọi người cười vui vẻ, văn phòng hiện đại, có nhiều cửa sổ, đầy ánh sáng
```

### === 1. Nội dung: Kickoff Meeting ===

```
Tại phòng họp hiện đại của công ty ABC, kickoff dự án. Customer đang trình bày rất hào hứng trước màn hình lớn. Director, PM, BA, SA, Dev Lead, QA và các thành viên khác đang ngồi họp. Trên đầu mỗi người xuất hiện thought bubble:
- Director nghĩ đến doanh thu tăng trưởng mạnh
- PM nghĩ đến dự án hoàn thành đúng hạn và được khen thưởng
- BA nữ xinh đẹp nghĩ đến bộ tài liệu chuyên nghiệp chuẩn bị cho khách hàng
- SA nghĩ đến kiến trúc hệ thống CRM hiện đại
- Dev Lead nghĩ đến công nghệ mới sẽ được áp dụng
- QA nghĩ đến việc tìm ra các bug khó
Không khí cực kỳ tích cực, mọi người cười vui vẻ, ánh sáng văn phòng hiện đại, phong cách cinematic storytelling, chất lượng cao.
```
