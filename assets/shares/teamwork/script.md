# Kịch bản trình bày: Teamwork trong thực chiến dự án

30/10/2026 · Nguyễn Huy Hoàng · đi kèm deck `docs/shares/teamwork/index.html` · tổng quan ở `README.md` cùng thư mục

## Tổng quan

Kịch bản này đi kèm bộ slide HTML 35 trang, cho buổi workshop 120 phút với đội phát triển phần mềm (PM, BA, Dev, QC, DevOps) và các vai trò làm việc với khách hàng (Sale, CSKH). Thông điệp xuyên suốt: đội ngũ được đo bằng kết quả chung, không phải thành tích của từng người.

Buổi đi theo năm mắt xích của một đội ngũ. Hai mắt xích đầu là nhận thức (niềm tin, giao tiếp), hai mắt xích sau là hành động (trách nhiệm, thực thi và phát triển), rồi đến thực hành.

| Thời điểm | Phần | Slide | Thời lượng |
| --- | --- | --- | --- |
| 0:00 | Mở đầu | 1–6 | 10 phút |
| 0:10 | Phần 1: Niềm tin và sự tôn trọng | 7–11 | 15 phút |
| 0:25 | Phần 2: Giao tiếp và phối hợp | 12–17 | 20 phút |
| 0:45 | Phần 3: Trách nhiệm và tinh thần làm chủ | 18–22 | 15 phút |
| 1:00 | Phần 4: Cùng thực thi, cùng phát triển | 23–28 | 20 phút |
| 1:20 | Phần 5: Thực hành | 29–33 | 35 phút |
| 1:55 | Kết | 34–35 | 5 phút |

Cách dùng kịch bản:

- Đoạn trong ngoặc kép là lời nói gợi ý. Anh không cần đọc nguyên văn, chỉ cần giữ ý chính.
- Chỗ ghi **[Câu chuyện của anh]** nên thay bằng một tình huống thật trong dự án anh từng làm, ẩn tên khách hàng. Đây là phần tạo sức nặng nhất cho buổi chia sẻ.
- Mỗi slide có phần tương tác và câu chuyển ý sang slide sau. Mỗi phần khép lại bằng một slide câu nói ngắn: đọc chậm, dừng một nhịp, không giải thích thêm.
- Khi trình chiếu: phím mũi tên để chuyển slide, phím F để toàn màn hình, phím N để xem ghi chú tóm tắt. Slide tự chạy hiệu ứng xuất hiện lần lượt, nên sau khi chuyển slide hãy đợi một nhịp rồi mới nói.

## Mở đầu (slide 1–6, 10 phút)

Mục tiêu của phần này là kéo người nghe vào bằng câu hỏi và một câu chuyện, chứ chưa giảng lý thuyết.

### Slide 1. Teamwork trong thực chiến dự án (1 phút)

"Chào mọi người. Hôm nay mình không dạy kỹ năng mềm. Mình muốn chia sẻ những chỗ dự án hay gãy nhất mà mình đã gặp, và cách anh em mình xử lý."

"Các bạn nhìn hình này: giá trị đi từ khách hàng qua BA, Dev, QC rồi mới đến phát hành. Mỗi người có thể làm rất tốt phần mình, nhưng dự án thường gãy ở chỗ chuyển giao giữa hai người. Hôm nay chúng ta nói về những chỗ gãy đó."

Để hình vẽ hết đường dây và vết nứt hiện ra rồi mới nói câu thứ hai.

### Slide 2. Dự án gần nhất của bạn gặp khó chủ yếu vì đâu? (3 phút)

"Mình hỏi nhanh một câu. Dự án gần nhất bạn tham gia gặp khó chủ yếu vì vấn đề kỹ thuật, hay vì vấn đề phối hợp? Ai chọn A giơ tay… Ai chọn B…"

Tương tác:

- Ghi tỉ lệ A/B lên bảng, giữ lại để slide 34 quay lại.
- Hỏi 1–2 người chọn B: "Chuyện gì đã xảy ra?"
- Nếu đa số chọn A, hỏi tiếp: "Vấn đề kỹ thuật đó có được phát hiện và báo sớm không?" Câu trả lời thường dẫn về B.

Chuyển ý: "Vậy cụ thể, một đội toàn người giỏi thì thất bại như thế nào?"

### Slide 3. Một đội toàn người giỏi vẫn có thể thất bại (3 phút)

"Mình kể một dự án. PM bám tiến độ rất sát. BA phân tích kỹ. Dev code tốt, đúng hạn. QC test cẩn thận. Nhìn từng người thì không ai sai cả."

"Nhưng sản phẩm vẫn thất bại. BA và Dev hiểu requirement theo hai cách. Dev đổi logic mà không báo QC. PM chỉ nhìn tiến độ từng người, không nhìn kết quả chung. Và cuối cùng không ai chịu trách nhiệm về chất lượng của sản phẩm."

**[Câu chuyện của anh]**: thay bằng một dự án thật, nói rõ hậu quả (trễ bao lâu, làm lại bao nhiêu).

Chuyển ý: "Hiệu suất cá nhân cộng lại không tự thành hiệu suất đội. Vậy khác nhau ở chỗ nào?"

### Slide 4. Làm việc cạnh nhau, hay làm việc như một đội? (2 phút)

Đọc từng cặp, cột trái giọng bình thản, cột phải giọng dứt khoát:

- "Chia việc, mỗi người một phần" và "Phối hợp để cùng đạt một mục tiêu".
- "Xong phần mình là xong" và "Xong khi cả đội giao được giá trị".
- "Ai biết gì người đó giữ" và "Thông tin chảy đến người cần nó".
- "Lỗi ở khâu nào, khâu đó chịu" và "Kết quả cuối cùng là của cả đội".
- "Mỗi người một thành tích" và "Thành tích chung trước, cá nhân sau".

"Thành công cá nhân và thành công tập thể không mâu thuẫn. Nhưng thứ tự ưu tiên phải rõ: kết quả chung trước. Sức mạnh cộng hưởng, một cộng một lớn hơn hai, chỉ xuất hiện ở cột bên phải."

Tương tác: "Đội của mình đang ở cột nào nhiều hơn?" Không cần trả lời to, chỉ cần mỗi người tự nghĩ.

### Slide 5. Thông điệp xuyên suốt (30 giây)

Đọc chậm, dừng một nhịp sau câu:

"Đội ngũ không được đo bằng việc mỗi người làm tốt phần mình, mà bằng kết quả cả đội cùng tạo ra."

### Slide 6. Lộ trình 120 phút (1 phút)

"Buổi hôm nay đi theo năm mắt xích của một đội. Hai mắt xích đầu là nhận thức: niềm tin và giao tiếp. Hai mắt xích sau là hành động: trách nhiệm, rồi thực thi và phát triển. Cuối cùng là 35 phút thực hành, các bạn sẽ phân tích một tình huống và cùng viết cam kết của đội."

"Hơn một phần ba thời gian là làm việc nhóm. Ai có câu chuyện tương tự thì cứ ngắt lời mình."

## Phần 1: Niềm tin và sự tôn trọng (slide 7–11, 15 phút)

Niềm tin là nền. Thiếu nó thì daily, review, retro đều thành thủ tục. Phần này đi từ bốn tình huống quen thuộc đến khái niệm an toàn tâm lý và cách họp rút kinh nghiệm không đổ lỗi.

### Slide 7. Chuyển phần: Niềm tin và sự tôn trọng (30 giây)

"Dải phía dưới là năm mắt xích. Hôm nay mình đi từng mắt xích một, bắt đầu từ niềm tin, vì đây là nền móng. Không tin nhau thì mọi quy trình phía sau chỉ còn là hình thức."

### Slide 8. Bốn tình huống, một điểm chung (4 phút)

Đọc nhanh bốn tình huống, mỗi tình huống đọc cả câu nói thầm in nghiêng:

"Dev thấy BA phân tích sai, nhưng ngại phản biện, cứ thế code theo tài liệu. Trong đầu nghĩ: mình nói ra có bị cho là lấn sân không?"

"QC tìm ra lỗi nghiêm trọng, nhưng ghi nhẹ đi vì sợ ảnh hưởng thành tích của Dev. Báo đúng mức thì mất lòng anh em."

"Dev thấy rủi ro tiến độ, nhưng không dám báo quản lý, hy vọng sẽ kịp. Nói sớm thì bị đánh giá là yếu."

"Một người mắc lỗi, cả nhóm xúm vào chỉ trích trong buổi họp. Lần sau, có thấy gì cũng im cho lành."

Tương tác: "Ai từng ở một trong bốn vị trí này?" Thường cả phòng giơ tay.

Chuyển ý: "Điểm chung: ai cũng thấy vấn đề, nhưng không ai nói. Vì sợ. Sợ bị đánh giá, sợ mất lòng, sợ bị quy trách nhiệm. Chữ sợ đó có tên gọi."

### Slide 9. An toàn tâm lý: dám nói mà không sợ bị trừng phạt (5 phút)

"Đây là báo cáo daily của một bạn Dev trong sprint 10 ngày. Ngày 1: đang làm. Ngày 2 bạn ấy đã thấy task khó hơn dự kiến, nhưng vẫn báo đang làm. Ngày 4, 6, 8: đang làm. Ngày 10: không kịp."

Dừng một nhịp khi ô "Không kịp" rung lên.

"Tại sao không nói? Sợ bị đánh giá là yếu. Có thể lần trước báo tin xấu đã bị phản ứng gay gắt, nên cả đội học cách im lặng. Và daily chỉ hỏi làm đến đâu, không hỏi đang vướng gì."

"Câu mình muốn các bạn nhớ: tin xấu đến sớm là tin tốt. Báo rủi ro sớm, kèm ít nhất một phương án. Trưởng nhóm cảm ơn người báo tin xấu, không phạt người nói thật. Daily hỏi thêm: có gì đang chặn bạn không? Và người có vị trí cao hơn dám nhận sai trước, thì người khác mới dám lên tiếng."

Nhấn mạnh với trưởng nhóm trong phòng: cách mình phản ứng với tin xấu lần này quyết định lần sau người ta có nói hay không.

Khái niệm liên quan là an toàn tâm lý (psychological safety) của Amy Edmondson; dự án Project Aristotle của Google cũng nêu đây là yếu tố hàng đầu của đội hiệu quả. Kiểm tra lại nguồn trước khi trích dẫn.

### Slide 10. Không đổ lỗi không có nghĩa là không ai chịu trách nhiệm (4 phút)

"Production lỗi tối thứ Sáu. Sáng thứ Hai họp, và buổi họp biến thành buổi truy xem ai gây ra lỗi. Kết quả là lần sau, người phát hiện lỗi chọn cách im lặng."

"Thay vào đó, hãy họp rút kinh nghiệm không đổ lỗi. Bốn bước: dựng lại dòng thời gian, chuyện gì xảy ra lúc nào. Tìm nguyên nhân gốc bằng cách hỏi tại sao nhiều lần cho đến khi chạm tới lỗ hổng quy trình. Đưa ra hành động khắc phục, mỗi việc có người phụ trách và thời hạn. Rồi theo dõi đến khi đóng, xem lại ở retro sprint sau."

"Không đổ lỗi không có nghĩa là không có trách nhiệm. Mỗi hành động khắc phục vẫn có người phụ trách, đó là trách nhiệm. Đừng hỏi lỗi của ai. Hãy hỏi quy trình hở ở đâu mà lỗi lọt qua được."

**[Câu chuyện của anh]**: một sự cố thật và điều đội đã thay đổi sau đó.

### Slide 11. Câu kết phần 1 (1 phút)

"Một đội mạnh không phải là đội không bao giờ sai, mà là đội dám nhìn thẳng vào sai lầm và cùng nhau sửa nó."

"Niềm tin không đến từ lời hứa, mà từ cách đội phản ứng khi có chuyện xấu."

## Phần 2: Giao tiếp và phối hợp (slide 12–17, 20 phút)

Ba tình huống thực chiến: hiểu sai yêu cầu, bàn giao dồn cuối, và cách góp ý cho nhau. Mỗi tình huống đi qua ba bước: chuyện gì xảy ra, gốc rễ, cách làm cụ thể.

### Slide 12. Chuyển phần: Giao tiếp và phối hợp (30 giây)

"Mắt xích thứ hai. Phần lớn lỗi mà ta gọi là lỗi kỹ thuật, thực ra là lỗi của một câu chưa được hỏi."

### Slide 13. Requirement: mỗi người hiểu một kiểu (5 phút)

"BA ghi một dòng: cho phép xuất báo cáo. Dev làm xuất Excel. QC test đúng tài liệu, đạt. Đến buổi demo, khách hàng nói: tôi cần file PDF có chữ ký số. Làm lại."

"Không ai sai theo tài liệu. Gốc rễ là mỗi vai trò đọc tài liệu một mình, tự suy diễn thay vì hỏi lại, và yêu cầu viết chung chung, không có ví dụ."

"Cách làm: tiêu chí nghiệm thu phải có ví dụ cụ thể về đầu vào, đầu ra, định dạng. BA, Dev, QC cùng đọc yêu cầu trước khi code, Agile gọi là Three Amigos. Demo sớm và thường xuyên với khách hàng. Thay đổi yêu cầu đi qua một đầu mối và nói rõ ảnh hưởng đến tiến độ."

**[Câu chuyện của anh]**: một lần hiểu sai yêu cầu và chi phí làm lại.

Tương tác: "Lần gần nhất bạn tự suy diễn yêu cầu là khi nào? Sửa lại tốn bao nhiêu công?"

### Slide 14. Bàn giao xong là hết việc (5 phút)

"Chuỗi này chắc ai cũng gặp. Dev sửa thêm một logic nhỏ, không ghi chú. Bàn giao dồn vào ngày cuối sprint. QC không kịp test hồi quy. Lỗi lọt lên production."

"Gốc rễ là coi xong task là xong việc. QC bị xem là chốt chặn cuối, không phải người đồng hành. Và đội không có định nghĩa chung thế nào là xong."

"Cách làm là cả đội thống nhất Definition of Done: code đã review, có unit test cho phần sửa, đã chạy trên môi trường test, có ghi chú thay đổi và phạm vi ảnh hưởng, QC đã nắm thay đổi, và bàn giao theo lô nhỏ, không dồn cuối."

"Definition of Done phải do cả đội thống nhất và ghi ra, không phải một người tự quy định. Đây là phối hợp liên chức năng ở dạng cụ thể nhất: Dev và QC cùng sở hữu chất lượng."

Tương tác: nếu đội đã có Definition of Done, chiếu bản hiện tại và hỏi: "Có ai thực sự làm đúng không? Mục nào hay bị bỏ qua nhất?"

### Slide 15. Cùng một tình huống, hai cách ứng xử (4 phút)

Đọc từng hàng, cột giữa đọc nhanh, cột phải đọc chậm:

- Không đồng ý với giải pháp: im lặng hoặc phản đối suông, thay bằng phân tích và đưa phương án thay thế.
- Phát hiện lỗi: tìm người chịu trách nhiệm, thay bằng tìm nguyên nhân và cách khắc phục.
- Không hiểu yêu cầu: tự suy diễn rồi làm, thay bằng hỏi lại, xác nhận bằng ví dụ cụ thể.
- Bị góp ý: phản ứng phòng thủ, thay bằng lắng nghe, hỏi rõ, rồi cải thiện.
- Không kịp hoàn thành: im lặng đến hạn, thay bằng cảnh báo sớm, xin hỗ trợ.

Tương tác: "Hàng nào đội mình hay gặp nhất?"

Nhấn hàng cuối: muốn người ta cảnh báo sớm thì phải an toàn khi cảnh báo, nối thẳng về phần 1. Lắng nghe chủ động nằm ở hàng "bị góp ý": nghe hết, hỏi rõ, rồi mới trả lời.

### Slide 16. Góp ý và tranh luận: về việc, không về người (4 phút)

"Khi đưa góp ý: nói về hành vi và kết quả, không nói về tính cách. Theo ba ý: tình huống, tác động, đề xuất. Lỗi cá nhân nói riêng, bài học chung nói trước cả đội."

Ví dụ mẫu câu: "Hôm qua PR merge mà chưa chạy test, đó là tình huống. QC phải test lại từ đầu, đó là tác động. Lần sau mình chạy test trước khi merge nhé, đó là đề xuất."

"Khi nhận góp ý: nghe hết, hỏi rõ trước khi trả lời. Tách mình ra khỏi sản phẩm của mình. Cảm ơn, rồi tự quyết định sẽ thay đổi gì."

"Và gác lại cái tôi. Không phải lúc nào ý tưởng của mình cũng đúng. Thay 'cách đó sai rồi' bằng 'mình có một phương án khác, thử so sánh nhé'. Phản biện ý tưởng, không phản biện con người. Tranh luận tích cực là tranh luận có kết quả: ra được phương án tốt hơn, không ai bị tổn thương."

Tương tác: xin phòng một ví dụ góp ý đã nhận mà họ thấy hữu ích.

### Slide 17. Câu kết phần 2 (1 phút)

"Đừng kỳ vọng người khác hiểu những điều mà mình chưa từng chia sẻ."

## Phần 3: Trách nhiệm và tinh thần làm chủ (slide 18–22, 15 phút)

Đây là phần quan trọng nhất với đội kỹ thuật: tinh thần làm chủ không phải khẩu hiệu, nó thể hiện ở từng phản xạ nhỏ khi gặp vấn đề.

### Slide 18. Chuyển phần: Trách nhiệm và tinh thần làm chủ (30 giây)

"Hai phần vừa rồi là nhận thức. Từ đây là hành động. Quy trình chỉ chạy khi mỗi người coi kết quả chung là việc của mình."

### Slide 19. Thụ động hay làm chủ? (4 phút)

Đọc từng cặp, câu bên trái giọng hơi chán, câu bên phải giọng dứt khoát:

- "Tôi chỉ làm theo yêu cầu" và "Tôi hiểu mục tiêu của công việc".
- "Đây không phải việc của tôi" và "Tôi tìm đúng người để cùng xử lý".
- "Tôi đã xong task" và "Tôi quan tâm kết quả cuối cùng".
- "Không ai giao nên tôi không làm" và "Tôi chủ động nhận diện vấn đề".
- "Tôi báo rồi mà" và "Tôi theo dõi đến khi vấn đề được xử lý".

Tương tác: "Câu bên trái nào bạn đã từng nói? Mình thì từng nói câu… **[anh tự chọn một câu]**." Không phán xét, ai cũng có lúc ở bên trái.

Chuyển ý: "Hàng cuối là chỗ mình muốn dừng lâu hơn. Báo rồi, thì sao nữa?"

### Slide 20. Báo rồi chờ, hay theo đến cùng? (4 phút)

"API của hệ thống đối tác trả dữ liệu sai định dạng. Cách thứ nhất: nhắn bên kia 'API lỗi rồi nhé', rồi chờ. Một tuần sau chưa ai sửa, sprint trễ, hai bên đổ lỗi cho nhau."

Chỉ vào đường nét đứt đang chạy trên slide: đó là một tuần trôi qua.

"Cách thứ hai, năm bước: khoanh vùng lỗi, gửi kèm log và request mẫu. Đánh giá ảnh hưởng đến hệ thống của mình. Đề xuất phương án tạm để không chặn tiến độ. Thống nhất mốc xử lý với đối tác. Theo dõi đến khi đóng và cập nhật cho cả đội."

"Làm chủ không có nghĩa là tự sửa hệ thống của người khác. Nó có nghĩa là làm hết phần mình để vấn đề được giải quyết nhanh nhất. Tập trung giải quyết vấn đề, không tập trung chứng minh lỗi thuộc về ai."

**[Câu chuyện của anh]**: thay bằng một tình huống tích hợp thật nếu có.

### Slide 21. Lãnh đạo không cần chức danh (5 phút)

"Không cần là trưởng nhóm mới dẫn dắt được. Một bạn Dev, khi có sự cố, đứng ra điều phối: gom thông tin, chia việc, cập nhật cho mọi người. Một bạn QC, sau mỗi lần lỗi lọt, đề xuất một cải tiến cho quy trình test thay vì chỉ ghi nhận lỗi. Một bạn BA, khi bắt đầu tính năng, giúp cả đội hiểu vì sao làm, không chỉ làm gì."

"Ảnh hưởng đến từ hành động, không từ vị trí."

"Về chuyện làm nhiều hơn khi cần: sẵn sàng gánh thêm lúc đội cần là đáng quý, và đội nên ghi nhận. Nhưng nếu sprint nào cũng phải làm ngoài giờ để chữa cháy, đó là vấn đề của kế hoạch, không phải thước đo tinh thần đồng đội."

Tương tác: xin mỗi vai trò trong phòng một ví dụ họ đã dẫn dắt mà không cần chức danh.

### Slide 22. Câu kết phần 3 (1 phút)

"Đừng chỉ hoàn thành công việc được giao. Hãy chịu trách nhiệm với giá trị mà công việc đó tạo ra."

## Phần 4: Cùng thực thi, cùng phát triển (slide 23–28, 20 phút)

Hai mắt xích cuối đi cùng nhau vì chung một gốc: chia sẻ. Chia sẻ vai trò, chia sẻ rủi ro, chia sẻ tri thức. Phần này nặng về kinh nghiệm thực tế, chọn 2–3 tình huống để kể kỹ.

### Slide 23. Chuyển phần: Cùng thực thi, cùng phát triển (30 giây)

"Hai mắt xích cuối. Teamwork không có nghĩa là tất cả mọi người đều làm tất cả mọi việc. Nó có nghĩa là mỗi người đúng vai, và không ai là điểm nghẽn."

### Slide 24. Một đội thực thi tốt cần năm điều (3 phút)

"Tầm nhìn chung, mục tiêu chung nghe thì hay, nhưng chỉ có giá trị khi được dịch thành năm điều này trong từng sprint."

"Đúng người, đúng vai trò: không ép mọi người giống nhau, đặt người vào việc họ làm tốt nhất. Rõ trách nhiệm: mỗi kết quả có một người sở hữu, cả đội biết đó là ai. Rõ phụ thuộc: việc nào chờ việc nào, chờ ai, nói ra trước khi bị chặn. Minh bạch tiến độ và rủi ro: bảng việc thật, không xanh cho đẹp. Có cơ chế hỗ trợ: khi một người gặp khó, đội có cách san việc, không đợi người đó gục."

Tương tác: "Đội mình yếu nhất ở điều nào?" Thường là rõ phụ thuộc và cơ chế hỗ trợ.

### Slide 25. Khi áp lực đến, đội tốt khác đội thường ở đâu? (7 phút)

Không đi hết sáu ô. Chọn 2–3 ô anh có câu chuyện thật, kể kỹ: lúc đó đội đã làm gì, điều gì giá như làm khác.

Gợi ý khi đọc ô:

- Gần deadline, Dev chưa xong: nói ra sớm, cắt phạm vi hoặc san việc, không một mình gánh đến phút cuối.
- BA đổi yêu cầu giữa chừng: qua một đầu mối, nói rõ ảnh hưởng, cả đội cùng quyết nhận hay lùi.
- QC phát hiện nhiều lỗi sát ngày release: phân loại theo mức độ, quyết release hay hoãn dựa trên dữ liệu, không trên áp lực.
- Production sự cố ngoài giờ: có lịch trực, có runbook, người trực điều phối, cả đội không đổ dồn vào một người.
- Một người giỏi đang quá tải: quá tải là rủi ro của đội, không phải vinh dự cá nhân.
- Hai team phụ thuộc nhau: chốt giao diện và mốc bàn giao trước, một người điều phối chung.

**[Câu chuyện của anh]**: ít nhất một ô kể bằng dự án thật.

Tương tác: "Chọn một ô: đội của bạn đã xử lý thế nào?" Cải tiến liên tục nằm ở câu hỏi cuối: lần sau làm khác đi điều gì?

### Slide 26. Cả đội trông vào một người (5 phút)

"Có một khái niệm gọi là bus factor: cần bao nhiêu người vắng mặt thì dự án đứng lại. Nếu con số đó là 1, đội đang gặp rủi ro."

Chỉ vào hình: sáu người, tất cả nối vào một người ở giữa, và người đó đang đập nhịp như một quả tim gánh cả đội.

"Chỉ một người hiểu phần deploy và module lõi. Sự cố nào cũng gọi người đó, kể cả nửa đêm. Khi người đó nghỉ phép, cả đội đứng hình."

"Cách làm: phần quan trọng luôn có ít nhất hai người hiểu, qua review chéo và làm cặp. Viết tài liệu vận hành cho deploy và xử lý sự cố. Lập lịch trực sự cố luân phiên thay vì gọi người hùng. Và ghi nhận người chia sẻ kiến thức, không chỉ người chữa cháy."

"Một đội luôn phải dựa vào một Dev giỏi, một BA giỏi chưa chắc là đội mạnh. Đó là rủi ro tổ chức. Giữ kiến thức cho riêng mình là lợi thế cá nhân ngắn hạn, chia sẻ là sức mạnh của đội dài hạn."

Tương tác: "Nếu một người nghỉ phép hai tuần, dự án của bạn có chạy tiếp được không?"

### Slide 27. Cùng nhau phát triển (4 phút)

Hỏi phòng 1–2 câu bên trái, để người nghe trả lời thật:

- "Khi một đồng đội giỏi hơn mình, mình nhìn nhận thế nào?"
- "Khi một đồng đội mắc lỗi, mình hỗ trợ hay phê bình?"
- "Nếu mình biết một cách làm tốt hơn, có chia sẻ cho cả đội không?"
- "Thành công của đồng nghiệp có phải cũng là thành công của mình?"

Câu "giỏi hơn mình" thường cho câu trả lời hay nhất: người giỏi hơn là cơ hội học, không phải mối đe dọa.

"Bên phải là những việc cụ thể để đội học hỏi lâu dài: chia sẻ kiến thức 30 phút mỗi sprint, luân phiên người nói. Người mới có người kèm, người kèm được ghi nhận. Thất bại thành bài học chung qua buổi rút kinh nghiệm. Góp ý hai chiều, kể cả từ dưới lên. Ăn mừng kết quả của đội trước khi khen từng cá nhân."

### Slide 28. Câu kết phần 4 (1 phút)

"Một người giỏi có thể tạo ra thành tích. Một đội biết chia sẻ và cùng phát triển tạo ra thành tựu lớn hơn nhiều."

Chuyển ý: "Giờ đến lượt các bạn."

## Phần 5: Thực hành (slide 29–33, 35 phút)

Phần này chuyển từ hiểu sang làm: các nhóm phân tích một tình huống, rồi cả phòng cùng viết cam kết của đội. Vai trò của anh là điều phối, nói ít, để người nghe làm nhiều.

Chia nhóm trước khi vào phần này (tốt nhất là ngay sau phần 2, lúc nghỉ giữa giờ nếu có): 4–5 người một nhóm, trộn các vai trò PM, BA, Dev, QC, DevOps, và nếu có thì cả Sale, CSKH. Tránh để người cùng vai trò ngồi chung một nhóm.

### Slide 29. Chuyển phần: Thực hành (1 phút)

"Từ hiểu sang làm. Hai hoạt động: phân tích một dự án trễ hai tuần, rồi retro cho chính đội của chúng ta để viết cam kết."

Nghiên cứu về đào tạo teamwork cho thấy thực hành và mô phỏng hiệu quả hơn nghe giảng thụ động (McEwan và cộng sự, 2017, PLOS ONE); kiểm tra lại nguồn trước khi trích.

### Slide 30. Đổ lỗi hay làm chủ? Dự án trễ 2 tuần (2 phút)

Đọc bối cảnh cho cả phòng, chưa phân tích:

"Dự án triển khai hệ thống hoá đơn điện tử cho một chuỗi 40 cửa hàng. Hợp đồng ký đầu tháng 3, cam kết go-live sau 8 tuần. Đội gồm PM, BA, ba Dev, một QC. Sale là người ký hợp đồng và giữ quan hệ với giám đốc chuỗi. CSKH tiếp nhận phản hồi từ các cửa hàng sau khi ký."

Đi theo khung thời gian trên slide:

"Tuần 0, Sale ký hợp đồng, hứa miệng thêm tích hợp với phần mềm kế toán, dù không có trong phạm vi. Tuần 1 đến 2, BA phân tích theo hợp đồng; khách bận, chỉ xác nhận qua Zalo với Sale, BA không được xem. Tuần 3 đến 5, Dev code; CSKH nhận ba yêu cầu sửa từ cửa hàng, chuyển thẳng vào nhóm chat chung, không ai nhận. Tuần 6, Dev tự làm thêm tích hợp kế toán vì Sale đã hứa, không báo PM, không báo QC, không ghi tài liệu. Tuần 7, bàn giao QC dồn một lần: 40 lỗi, 6 lỗi nghiêm trọng, phần tích hợp không có tài liệu để test. Tuần 10, go-live trễ 2 tuần. Giám đốc chuỗi phàn nàn với Sale, CSKH phải xin lỗi từng cửa hàng."

Chuyển ý: "Sáu người ngồi vào buổi họp sau go-live. Mỗi người một câu."

Lưu ý cho anh, không nói ra lúc này: ba điểm gãy là Sale hứa ngoài hợp đồng mà đội không biết; thông tin từ khách đi theo hai đường (Sale và CSKH) nhưng không đường nào đến BA; Dev đổi phạm vi mà không báo ai.

### Slide 31. Sáu người, sáu câu trả lời (17 phút)

Đọc sáu câu, mỗi câu đổi giọng theo vai:

"PM: Dev làm chậm, tuần nào cũng xin thêm thời gian. Dev: BA và CSKH đổi yêu cầu liên tục, Sale thì hứa thêm việc. BA: khách không bao giờ xác nhận với tôi, chỉ nói với Sale. QC: bàn giao dồn một cục ở tuần 7, test kiểu gì cho kịp. Sale: tôi bán được hợp đồng, làm ra được hay không là việc của kỹ thuật. CSKH: khách gọi hỏi tiến độ, tôi không có thông tin gì để trả lời."

"Mỗi nhóm có 12 phút để trả lời bốn câu: nguyên nhân gốc là gì, không phải ai có lỗi. Mỗi vai trò, kể cả Sale và CSKH, lẽ ra có thể làm gì khác. Phương án gỡ hai tuần trễ và giữ được khách. Và một thay đổi để không lặp lại ở dự án sau."

"Luật chơi: không câu nào được bắt đầu bằng 'Tại vì bạn…'."

Điều phối:

1. Bấm "Bắt đầu" trên đồng hồ 12 phút ở slide.
2. Đi quanh các nhóm, nhắc luật chơi khi nghe thấy câu đổ lỗi. Nếu nhóm nào chỉ xoay quanh đội kỹ thuật, gợi ý: "Sale và CSKH trong câu chuyện này đứng ở đâu?"
3. Hết giờ, mỗi nhóm trình bày 1–2 phút, chỉ nêu nguyên nhân gốc và một thay đổi (tổng khoảng 5 phút).
4. Tổng kết: "Cả sáu người đều đúng một phần. Không ai sai phần việc của mình, nhưng không ai nhìn bức tranh chung và không ai báo rủi ro sớm."

Nhấn riêng hai vai trò ngoài đội kỹ thuật: Sale hứa thêm mà không đưa vào phạm vi là tạo nợ cho cả đội. CSKH nhận yêu cầu khách mà không có đầu mối chuyển vào dự án là để thông tin rơi. Teamwork không dừng ở đội kỹ thuật, nó bao gồm cả người bán và người chăm sóc khách.

### Slide 32. Retro: Start, Stop, Continue (15 phút)

"Giờ mình áp dụng vào chính đội của chúng ta. Ba câu hỏi: đội nên bắt đầu làm gì để phối hợp tốt hơn? Thói quen nào đang làm cả đội chậm lại? Điều gì đang làm tốt, cần giữ lại?"

Điều phối, bấm đồng hồ 15 phút trên slide:

1. 6 phút: mỗi người viết giấy nhớ cho cả ba cột, mỗi ý một tờ, đúng màu theo cột.
2. 5 phút: dán lên bảng, người điều phối gom các ý giống nhau, mỗi người bình chọn 3 phiếu bằng dấu chấm.
3. 4 phút: chọn 3–5 ý nhiều phiếu nhất, chuyển thành cam kết. Chiếu slide 33 trong lúc này.

### Slide 33. Cam kết làm việc của đội (trong 4 phút cuối của Retro)

Chiếu slide này khi đội đang chốt, như một ví dụ tham khảo.

"Đây là một bản gợi ý: không rõ thì hỏi, báo rủi ro trong ngày kèm phương án, xong nghĩa là đạt Definition of Done, sự cố thì sửa quy trình không truy người, phần quan trọng luôn có ít nhất hai người hiểu. Cam kết thật phải do chính các bạn viết."

"Để cam kết không chết sau buổi hôm nay: mỗi cam kết có một người theo dõi, xem lại ở mỗi buổi retro, và tối đa 5 điều, ngắn và kiểm chứng được."

Sau buổi: chụp ảnh bảng cam kết, gửi cho cả đội, dán ở nơi làm việc hoặc trang dự án, xem lại sau 1 sprint.

## Kết (slide 34–35, 5 phút)

Phần kết quay lại câu hỏi mở đầu và khép lại bằng hình ảnh chỗ gãy đã được nối.

### Slide 34. Năm chuyển đổi tư duy (3 phút)

"Đầu buổi mình hỏi: dự án gặp khó vì kỹ thuật hay vì phối hợp. Lúc đó **[x]** người chọn B. Giờ nhìn lại, các bạn nghĩ sao?"

Đọc năm chuyển đổi, mỗi dòng dừng một nhịp để câu cũ bị gạch đi rồi câu mới hiện ra:

"Từ 'tôi hoàn thành việc của tôi' sang 'chúng ta hoàn thành mục tiêu chung'. Từ 'đó không phải trách nhiệm của tôi' sang 'tôi chủ động tìm cách giải quyết'. Từ 'tôi đúng, bạn sai' sang 'cùng tìm phương án tốt nhất'. Từ 'kiến thức là lợi thế riêng' sang 'chia sẻ để cả đội mạnh lên'. Và từ 'thành công của tôi' sang 'thành công của chúng ta'."

### Slide 35. Lời kết (2 phút)

"Một đội tuyệt vời không phải là nhóm người làm việc cùng nhau, mà là những người tin nhau, đỡ nhau, dám phản biện nhau và cùng nhau lớn lên."

Chỉ vào hình: "Chỗ gãy ở slide đầu tiên giờ đã được nối lại. Đó là việc của cả đội, không của riêng ai."

"Cảm ơn mọi người. Mình dành thời gian còn lại cho câu hỏi."

## Checklist chuẩn bị

Việc quan trọng nhất là chuẩn bị các câu chuyện thật cho những chỗ đánh dấu **[Câu chuyện của anh]**.

- [ ] Câu chuyện cho slide 3: một đội giỏi nhưng dự án vẫn trễ hoặc phải làm lại
- [ ] Câu chuyện cho slide 10: một sự cố thật và điều đội đã thay đổi sau đó
- [ ] Câu chuyện cho slide 13: một lần hiểu sai yêu cầu và chi phí sửa
- [ ] Câu chuyện cho slide 20: một lần tích hợp với đối tác bị kẹt
- [ ] Câu chuyện cho slide 25: chọn trước 2–3 ô áp lực để kể kỹ
- [ ] Một câu "bên trái" của chính anh cho slide 19
- [ ] Kiểm tra lại nguồn về an toàn tâm lý (Amy Edmondson, Project Aristotle) và nghiên cứu McEwan 2017 nếu định trích dẫn
- [ ] Nếu đội đã có Definition of Done, chuẩn bị bản hiện tại để chiếu ở slide 14
- [ ] Mở deck trên laptop trình chiếu, thử phím F (toàn màn hình), phím N (ghi chú) và hai đồng hồ đếm ngược ở slide 31, 32
- [ ] Chuẩn bị giấy nhớ 3 màu, bút dạ, bảng hoặc tường để dán
- [ ] Lên danh sách chia nhóm 4–5 người, trộn đủ vai trò, mời cả Sale và CSKH nếu có
- [ ] Chuẩn bị điện thoại để chụp ảnh bảng cam kết cuối buổi
