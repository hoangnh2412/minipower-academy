# Giai đoạn 4 — Prompt tạo ảnh

> **Lưu ý:** deck buổi 03 dựng **coded-HTML** (bảng, công thức, sơ đồ 3 bước đều là HTML/CSS), nên
> **không bắt buộc** ảnh AI. Danh sách dưới là **ảnh hero tuỳ chọn** — nếu muốn chèn cho vài khung
> "cảm xúc" (cover, AI bịa chuyện, autocomplete, 3 bước Minipower, teaser). Đặt ảnh vào
> `docs/workshops/03-ai-foundation/slides/<khung>/1.webp` rồi chèn nền cho slide tương ứng.
>
> **Phong cách chung:** điện ảnh, kể chuyện doanh nghiệp, ánh sáng công nghệ xanh, biểu cảm nhân vật
> chân thực, giữ bộ nhân vật xuyên suốt khoá (theo `assets/_shared/base_prompt.md` nếu có), tỷ lệ 16:9.

---

## Khung 01 — Cover *(tuỳ chọn)*

```text
Một lập trình viên ngồi trước màn hình, bên cạnh là một AI hologram đang đưa ra hai câu trả lời song song — một câu phát sáng xanh đáng tin, một câu phát sáng đỏ mờ ảo như ảo ảnh, ẩn dụ "AI lúc hay lúc bịa", ánh sáng công nghệ điện ảnh, tỷ lệ 16:9
```

## Khung 05 — AI bịa một danh sách đẹp *(nên có)*

```text
Một màn hình chat AI hiển thị một danh sách yêu cầu dự án trông rất chuyên nghiệp và gọn gàng, nhưng phía sau danh sách là làn sương mờ ảo cho thấy nó được dựng lên từ hư không, không có tài liệu nguồn nào, ẩn dụ về hallucination nghe rất thuyết phục, điện ảnh, tỷ lệ 16:9
```

## Khung 08 — Hallucination / autocomplete *(nên có)*

```text
Cận cảnh một dòng code trong IDE với gợi ý autocomplete đang tự điền vào chỗ trống bằng những mảnh chữ phát sáng, xung quanh là các viên token trôi nổi, ẩn dụ AI đoán từ tiếp theo mà không biết mình đang đoán, phong cách công nghệ điện ảnh, tỷ lệ 16:9
```

## Khung 18–19 — Minipower nguồn context & 3 bước *(nên có)*

```text
Bốn khối tri thức phát sáng mang nhãn Biên bản họp, Yêu cầu, Quyết định, Bug cùng chảy vào một lõi trung tâm Project Memory, từ lõi đó một luồng sáng đi qua ba trạm Lấy ngữ cảnh, Dùng trong prompt, Con người chốt, trạm cuối có một bàn tay người đóng dấu duyệt, infographic điện ảnh, tỷ lệ 16:9
```

## Khung 22 — Teaser buổi 04 *(tuỳ chọn)*

```text
Một lập trình viên mở trình soạn thảo code, một AI Agent hologram bắt đầu viết code, giải thích và sửa lỗi ngay trong repo, không khí sẵn sàng bước vào thực chiến, ánh sáng xanh công nghệ, tỷ lệ 16:9
```

---

## Nhịp 3B — Từ vựng & 4 nhầm lẫn (khung 16–27)

> **Mặc định các khung này dùng hình SVG inline** vẽ sẵn trong `index.html` (chính xác về khái niệm, không
> cần ảnh AI). Các prompt dưới đây **chỉ dùng nếu** muốn thay bằng ảnh minh hoạ raster cho sinh động.

```text
Prompt = System + User — Hình infographic hai lớp xếp chồng: lớp nền mờ khắc dòng "System Prompt" với biểu tượng bánh răng luật lệ, lớp trên sáng là bong bóng chat "User Prompt", một dấu ngoặc gộp cả hai lại thành "Prompt", nền tối công nghệ, phẳng, rõ ràng, tỷ lệ 16:9
```

```text
Context vs Memory — Hình ẩn dụ: bên trái một thanh RAM phát sáng nhãn "Context — chỉ lần này", bên phải một ổ cứng nhãn "Memory — còn mãi qua nhiều phiên", ở giữa dấu khác nhau, phong cách infographic công nghệ sạch, tỷ lệ 16:9
```

```text
Token không phải Word — Hình một từ tiếng Việt bị chẻ thành nhiều viên gạch token màu, bên cạnh từ tiếng Anh chatbot tách thành chat và bot, nhấn mạnh máy đọc mảnh chữ chứ không đọc từ, phẳng, rõ, tỷ lệ 16:9
```

```text
Context Window vs Prompt Length — Hình một khung chứa lớn chia thành các phần System, Lịch sử, Tài liệu, Chừa chỗ trả lời, trong đó chỉ một lát nhỏ được tô sáng nhãn "Prompt của bạn", ẩn dụ sức chứa tối đa so với câu bạn gõ, infographic công nghệ, tỷ lệ 16:9
```
