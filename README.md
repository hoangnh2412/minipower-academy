# MiniPower Academy

Kho tri thức chính thức của [MiniPower](https://github.com/hoangnh2412/minipower-academy) — nơi lưu trữ và chia sẻ mọi thứ team cần để học, dạy và làm việc hiệu quả hơn với AI.

## Giới thiệu

MiniPower Academy tập trung các tài liệu đào tạo nội bộ thành một nguồn duy nhất, dễ tra cứu và dễ cập nhật. Thay vì rải rác slide, ghi chú hay hướng dẫn ở nhiều nơi, mọi nội dung được tổ chức theo từng buổi workshop và có thể xem trực tiếp trên trình duyệt.

**Trong kho tri thức này có:**

- **Workshop & slide trình chiếu** — buổi học tương tác, kể chuyện thực tế, demo sản phẩm
- **Tài liệu đào tạo** — lộ trình học, hướng dẫn kỹ thuật, kinh nghiệm thực tiễn
- **Nguồn gốc nội dung** — script, hình ảnh slide gốc trong `assets/` để chỉnh sửa và tái sử dụng

## Workshop hiện có

| Buổi | Nội dung |
|------|----------|
| [01 — Giới thiệu](docs/workshops/01-gioi-thieu/) | Quản lý dự án và cách AI MiniPower thay đổi cuộc chơi |
| [02 — Minipower là ai?](docs/workshops/02-ai-dong-nghiep/) | Toàn cảnh 17 chặng vòng đời dự án — AI đồng hành ở mọi chặng |

## Phát triển

Cài dependency và chạy script xử lý slide khi cần:

```bash
npm install
npm run compress:slides          # Nén PNG lossless
npm run convert:slides:webp    # Chuyển slide sang WebP và cập nhật HTML
```

Để thêm workshop mới, sao chép `docs/workshops/_template/` rồi đăng ký trong `docs/js/site.js`.
