# minipower-academy

Kho tri thức chính thức của MiniPower, lưu trữ tài liệu đào tạo, slide, workshop, hướng dẫn kỹ thuật, lộ trình học tập và các kinh nghiệm thực tiễn.

## GitHub Pages

Site tĩnh nằm trong thư mục `docs/`. Bật GitHub Pages:

1. **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/docs`
4. Lưu — site sẽ có tại `https://<username>.github.io/minipower-academy/`

## Cấu trúc

```
docs/
├── index.html              # Trang chủ — danh sách workshop
├── css/site.css
├── js/site.js              # Khai báo danh sách workshop
├── .nojekyll
└── workshops/
    ├── _shared/            # CSS/JS dùng chung cho slide
    │   ├── css/slides.css
    │   └── js/slides.js
    ├── _template/          # Sao chép để tạo buổi mới
    │   └── index.html
    └── 01-gioi-thieu/      # Slide từng buổi (chỉ cần index.html)
        └── index.html
```

## Tạo buổi workshop mới

1. Sao chép thư mục `docs/workshops/_template/` → `docs/workshops/02-ten-buoi/`
2. Sửa nội dung slide trong `index.html` (mỗi `<section class="slide">` là một slide)
3. Thêm mục vào mảng `WORKSHOPS` trong `docs/js/site.js`:

```js
{
  id: "02-ten-buoi",
  title: "Buổi 02 — Tên buổi",
  description: "Mô tả ngắn.",
  date: "2026-07-11",
  path: "workshops/02-ten-buoi/",
},
```

4. Commit và push — GitHub Pages tự cập nhật.

## Điều hướng slide

| Phím | Hành động |
|------|-----------|
| `→` `↓` `Space` | Slide tiếp |
| `←` `↑` | Slide trước |
| `Home` / `End` | Đầu / cuối |

## Xem local

```bash
cd docs && python3 -m http.server 8080
# Mở http://localhost:8080
```
