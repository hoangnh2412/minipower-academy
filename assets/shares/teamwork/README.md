# Workshop: Teamwork trong thực chiến dự án

Buổi chia sẻ 120 phút về cách con người phối hợp trong dự án phần mềm, dành cho PM, BA, Dev, QC, DevOps và cả Sale, CSKH. Đây là **share** (chia sẻ kinh nghiệm), không thuộc lộ trình 10 buổi trong `assets/curriculum.md`.

Thông điệp xuyên suốt: *đội ngũ được đo bằng kết quả chung, không phải thành tích của từng người.*

## Nội dung trong thư mục này

| File | Vai trò |
| --- | --- |
| `README.md` | Tổng quan, cấu trúc buổi, nơi đặt deck |
| `script.md` | Kịch bản trình bày đầy đủ: lời nói gợi ý cho 35 slide, chỗ tương tác, câu chuyển ý, bước điều phối thực hành, checklist chuẩn bị |

Deck trình chiếu (đã xuất bản) nằm ở `docs/shares/teamwork/index.html`. Deck kiểu text, một file tự chứa: font, CSS, icon SVG, animation và ghi chú người nói đều nằm trong file. Ghi chú trong deck là bản tóm tắt của `script.md`.

- Xem local: `python3 -m http.server 4173 --directory docs`, mở `/shares/teamwork/`.
- Trên web: trang chủ MiniPower Academy, mục chia sẻ. Deck được đăng ký trong `SHARES[]` tại `docs/js/site.js`.
- Phím khi trình chiếu: mũi tên chuyển slide, `F` toàn màn hình, `N` bật ghi chú.

## Cấu trúc buổi (35 slide)

| Thời điểm | Phần | Slide | Phút |
| --- | --- | --- | --- |
| 0:00 | Mở đầu: câu hỏi A/B, đội toàn người giỏi vẫn thất bại | 1–6 | 10 |
| 0:10 | Phần 1: Niềm tin và sự tôn trọng | 7–11 | 15 |
| 0:25 | Phần 2: Giao tiếp và phối hợp | 12–17 | 20 |
| 0:45 | Phần 3: Trách nhiệm và tinh thần làm chủ | 18–22 | 15 |
| 1:00 | Phần 4: Cùng thực thi, cùng phát triển | 23–28 | 20 |
| 1:20 | Phần 5: Thực hành ("Đổ lỗi hay làm chủ?", Retro, cam kết của đội) | 29–33 | 35 |
| 1:55 | Kết: năm chuyển đổi tư duy | 34–35 | 5 |

Mỗi phần nội dung đi theo ba bước: tình huống, gốc rễ, cách làm cụ thể, và khép lại bằng một câu nói ngắn.

## Bài tập thực hành

- **Đổ lỗi hay làm chủ? Dự án trễ 2 tuần** (slide 30–31): bối cảnh dự án hoá đơn điện tử cho chuỗi 40 cửa hàng, khung thời gian 10 tuần, sáu lời thoại của PM, Dev, BA, QC, Sale, CSKH. Nhóm trả lời bốn câu trong 12 phút, luật chơi: không câu nào bắt đầu bằng "Tại vì bạn…".
- **Retro Start, Stop, Continue** (slide 32–33): 6 phút viết giấy nhớ, 5 phút gom và bình chọn, 4 phút chốt 3–5 cam kết của đội.

## Khi sửa deck

- Giữ biến CSS và bố cục có sẵn trong `index.html`; animation dùng class `.an` do script gán tự động, không cần thêm tay.
- Icon là `<symbol>` trong sprite đầu file, gọi bằng `<svg class="ico"><use href="#i-ten"/></svg>`.
- Thêm hoặc bớt slide thì cập nhật bảng thời lượng ở slide 6, `script.md` và README này.
