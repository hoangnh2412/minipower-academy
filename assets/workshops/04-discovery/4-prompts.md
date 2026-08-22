# Giai đoạn 4 — Prompt & tạo tài sản (Asset generation)

> **Deck kiểu text — không sinh ảnh cho từng slide.** Prompt phải copy được, đường dẫn phải rõ
> từng ký tự, nhiều bảng tra, nội dung còn chỉnh theo phản hồi lớp.
>
> File này là **kho 11 prompt** học viên chạy ở nhà — dán được thẳng vào tài liệu bài tập.

## Hai luật bắt buộc

*(nguồn: `hoangnh2412/ai-skills` — `minipower/SKILL.md` và `minipower/agents/token-guard.md`)*

1. **Khai `Phase:`** — `discovery` · `requirements` · `architecture` · `planning` · `delivery` · `change-control`.
   Buổi 04 chỉ dùng **`discovery`**.
2. **Có scope bằng `@`** — Minipower nhìn *việc mình định làm*: việc nhỏ cho qua, việc đụng tài liệu thì
   bắt khai **Phase · module · DOC**; thiếu thì **chặn và liệt kê ra thiếu gì**.

Mọi prompt dưới đây đều bắt đầu bằng:

```text
/minipower
Phase: discovery
```

---

## Nhóm A — Soi ba tài liệu *(3 prompt)*

### 1 · DOC-01 — Tầm nhìn & Hồ sơ kinh doanh
```text
/minipower
Phase: discovery
@docs/01-project/DOC-01-vision-business-case.md — mục tiêu đã có chỉ số
đo được chưa? Ai là người duyệt?
```

### 2 · DOC-02 — Phân tích stakeholder
```text
/minipower
Phase: discovery
@docs/01-project/DOC-02-stakeholder-analysis.md — ai là A trong RACI?
```

### 3 · DOC-03 — BRD
```text
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — cái gì trong phạm vi, cái gì ngoài?
```

---

## Nhóm B — Tôi đang ở đâu? *(2 prompt · tiến độ)*

### 4 · Toàn cảnh
```text
/minipower
Phase: discovery
@docs/ — dự án đang ở phase nào? Liệt kê DOC đã có và trạng thái.
```

### 5 · Soi BRD — **câu đắt nhất buổi**
```text
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — BRD đã đủ chưa? Thiếu mục nào?
```

> Không chỉ trả lời xong/chưa — nó đưa ra **danh sách việc phải bù**.
> *Câu dự phòng nếu Minipower bảo đã đủ:* `@…DOC-03-brd.md — mục 7 có bao nhiêu BRQ? Có BRQ nào quá chung chung không?`

---

## Nhóm C — Có khớp nhau không? *(4 prompt · truy vết)*

### 6 · Truy ngược
```text
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — với mỗi BRQ ở mục 7, cho biết nó phục vụ
mục tiêu BO nào ở mục 3. Trình bày thành bảng.
```

### 7 · Câu quét — bắt **sót việc**
```text
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — có mục tiêu BO nào ở mục 3 mà chưa có
BRQ nào phục vụ không? Liệt kê ra.
```

### 8 · Câu quét — bắt **làm thừa**
```text
/minipower
Phase: discovery
@docs/01-project/DOC-03-brd.md — có BRQ nào ở mục 7 không phục vụ mục tiêu
BO nào không? Liệt kê ra.
```

### 9 · Nhìn về phía trước
```text
/minipower
Phase: discovery
@docs/ — mỗi BRQ trong BRD đã có FR nào ở DOC-06 giải quyết chưa?
```

> ⚠️ **Sẽ trả lời "chưa có" — đó là kết quả đúng.** Lớp chưa làm tới DOC-06.
> Nó cho biết mình đang đứng ở đâu trên chuỗi `BO → BRQ → BR → UC → FR → AC → test`.
> Giảng viên phải nói rõ, kẻo lớp tưởng hỏi sai.

---

## Nhóm D — Tiếp theo làm gì? *(2 prompt · điều hướng)*

### 10 · Bước kế tiếp
```text
/minipower
Phase: discovery
@docs/ — tiếp theo tôi cần làm gì? Trả lời ngắn, theo ưu tiên.
```

### 11 · Rút gọn được không
```text
/minipower
Phase: discovery
@docs/ — dự án nhỏ, một người làm. Bước nào rút gọn được? Bỏ thì mất gì?
```

---

## Mã ID phải nhớ

| Mã | Là gì | Ở đâu |
|---|---|---|
| `BO-xxx` | Mục tiêu nghiệp vụ | DOC-03 mục 3 |
| **`BRQ-xxx`** | Yêu cầu nghiệp vụ | DOC-03 mục 7 |
| **`BR-xxx`** | **Quy tắc** nghiệp vụ — *khác BRQ* | DOC-04 *(tóm tắt ở DOC-03 mục 8)* |
| `G-001` | Mục tiêu & chỉ số | DOC-01 mục 4 |
| `R-001` | Rủi ro cấp cao | DOC-01 mục 8 |
| `SH-001` | Stakeholder | DOC-02 mục 2 |
| `{MOD}-FR-001` | Chức năng hệ thống | DOC-06 — **chưa có** |

---

## Ảnh minh hoạ — tuỳ chọn, deck không cần vẫn chạy

Deck hiện **không dùng ảnh bitmap nào**; 5 hình trong deck đều là **SVG vẽ tay trong HTML**.
Nếu sau này muốn thêm nền cho slide bìa:

```text
Một người ngồi trước laptop trong không gian làm việc ấm cúng, trên màn hình lờ mờ thấy một tài liệu đang mở; bên cạnh là trợ lý AI dạng hologram xanh cyan cùng nhìn vào tài liệu đó, hai tay không chạm vào bàn phím; chừa trống hoàn toàn phần giữa và phần trên khung hình cho chữ; tông rất trầm để chữ trắng nổi lên
STYLE: nền tối xanh đen, điểm nhấn xanh cyan, ánh sáng ấm dịu, không watermark, không chữ, tỷ lệ 16:9
```

---

## Kiểm trước khi phát tài liệu

- [ ] **11/11** prompt có `Phase: discovery` và `@` scope
- [ ] Mã ID khớp `minipower/templates/` trong repo `ai-skills`
- [ ] Không prompt nào nhắc `jarvis`, "scaffold", ADR, Plan, hay thuật ngữ kiến trúc
- [ ] Số prompt trong deck (slide 20 và 22) khớp con số **11**
