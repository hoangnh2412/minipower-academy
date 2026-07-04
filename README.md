# minipower-academy

Kho tri thức chính thức của MiniPower, lưu trữ tài liệu đào tạo, slide, workshop, hướng dẫn kỹ thuật, lộ trình học tập và các kinh nghiệm thực tiễn.

## GitHub Pages

Site tĩnh nằm trong thư mục `docs/`. Workflow deploy: `.github/workflows/deploy-pages.yml`.

### Cài đặt (lần đầu)

1. Push code lên nhánh `main`
2. **Settings → Pages → Build and deployment → Source:** chọn **GitHub Actions** (không dùng "Deploy from a branch")
3. Vào tab **Actions**, chạy workflow **Deploy GitHub Pages** (hoặc đợi push tự kích hoạt)
4. Site sẽ có tại `https://hoangnh2412.github.io/minipower-academy/`

### Lỗi `Deployment failed, try again later`

Thường do cấu hình Pages hoặc deploy bị kẹt. Thử lần lượt:

1. **Đổi Source sang GitHub Actions** — nếu đang chọn "Deploy from a branch", hai cơ chế có thể xung đột
2. **Re-run workflow** — tab Actions → run thất bại → **Re-run all jobs**
3. **Kiểm tra environment** — Settings → Environments → `github-pages` phải tồn tại (tự tạo khi deploy lần đầu)
4. **Repo public** — GitHub Pages miễn phí yêu cầu repo public (hoặc gói Pro cho repo private)

Cảnh báo `punycode module is deprecated` chỉ là warning, không phải nguyên nhân lỗi.

### Redirect sang `hoangnh.com` / trang không tìm thấy

**Nguyên nhân:** Repo user site [`hoangnh2412.github.io`](https://github.com/hoangnh2412/hoangnh2412.github.io) có file `CNAME` chứa `hoangnh.com`. Domain này **không** nằm ở Verified domains (profile) hay Custom domain của repo `minipower-academy`.

Khi user site dùng custom domain, GitHub redirect mọi Pages sang domain đó:

| URL github.io | Redirect tới |
|---------------|--------------|
| `hoangnh2412.github.io/` | `hoangnh.com/` |
| `hoangnh2412.github.io/minipower-academy/` | `hoangnh.com/minipower-academy/` |

Site **đã deploy thành công** — `http://hoangnh.com/minipower-academy/` trả về nội dung đúng. Lỗi xảy ra vì redirect sang **HTTPS** nhưng GitHub chưa cấp chứng chỉ TLS cho `hoangnh.com` (cert hiện tại là `*.github.io`).

**Cách A — Sửa HTTPS cho hoangnh.com (giữ domain riêng)**

1. Vào [hoangnh2412.github.io → Settings → Pages](https://github.com/hoangnh2412/hoangnh2412.github.io/settings/pages)
2. Nhập `hoangnh.com` vào **Custom domain** → **Save**
3. Đợi DNS check thành công (A records đã trỏ GitHub: `185.199.108.153` …)
4. Đợi GitHub cấp Let's Encrypt cert (vài phút – 24 giờ)
5. Bật **Enforce HTTPS**
6. Truy cập `https://hoangnh.com/minipower-academy/`

**Cách B — Dùng github.io (không redirect)**

1. Vào [hoangnh2412.github.io](https://github.com/hoangnh2412/hoangnh2412.github.io) → xóa file `CNAME` (hoặc gỡ Custom domain trong Settings → Pages)
2. Commit & push
3. Truy cập `https://hoangnh2412.github.io/minipower-academy/` — HTTPS hoạt động ngay

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
