# Giai đoạn 1 — Ý tưởng & mục tiêu (Concept)

> Kim chỉ nam cho cả buổi. Bám lộ trình 10 buổi và triết lý: **AI chuẩn bị · Con người chốt**.
>
> **⚠️ Dự án mẫu xuyên suốt khoá:** `/Volumes/Data/Working/Personal/minipower-work/einvoice-sample`
> — **nền tảng Hoá đơn điện tử (HĐĐT)**. Mọi ví dụ, mã ID, đường dẫn, tên module trong buổi
> **phải lấy từ thư mục này**. Rà lần cuối 2026-10-03.
>
> **⚠️ Bản HRM Mini / module Đơn nghỉ phép / mã `LVE-*` của bản concept cũ đã bỏ** — không dùng lại.

## Chủ đề
**Từ tài liệu đến prototype.** Buổi 04 chốt *muốn gì* (BRD), buổi 05 dựng xong nền.
Buổi này học viên **đọc bộ tài liệu yêu cầu đã có sẵn** của dự án HĐĐT, rồi **vibe code ra prototype
bấm được** — thứ đem cho khách nhìn và gật đầu.

Tài liệu **giảng viên chuẩn bị sẵn**, học viên **không phải tự viết**. Việc của học viên là
**đọc đúng chỗ** và **biến nó thành màn hình**.

## Thông điệp chính
**Cách cũ mất vài tuần mới có prototype cho khách xem. Với Minipower + Jarvis, chỉ còn vài tiếng.**

Nhưng hai chỗ **confirm** vẫn là người: AI rút ngắn phần **chuẩn bị**, không rút ngắn phần **quyết định**.

## Buổi 06 nằm ở đâu

```
04  Discovery — BRD đã chốt (cổng 1)
05  Dựng nền — máy chạy được
06  ←── HÔM NAY: đọc tài liệu → prototype bấm được
07  Chốt yêu cầu — soi, sửa, ba chữ ký
```

Buổi này **chỉ ra nháp**. Không ký cổng nào — việc ký để buổi 07.

## Kiểu buổi — **BUỔI THỰC HÀNH**
**Không** dùng cơ chế hỏi trước–đáp sau (`.reveal`). Slide là **bảng hướng dẫn để học viên vừa nhìn
vừa gõ**: prompt to đọc được từ cuối phòng, một ý một slide, và **mốc kiểm tra** *("làm được mới đi
tiếp")* chốt mỗi phần thực hành. Mẫu: deck buổi 05.

## Mạch 6 bước — xương sống của buổi

| # | Cách làm cũ | Cách mới (Minipower + Jarvis) | Ai làm |
|---|---|---|---|
| 1 | Brainstorm | Sáu nhóm câu hỏi AI soạn sẵn trước khi gặp khách | AI chuẩn bị · **người đi hỏi** |
| 2 | Ghi chép | AI cấu trúc hoá thành `DOC-04 BR` + `DOC-05 UC` | AI |
| 3 | Vẽ mockup | Sinh danh sách màn hình thẳng từ UC | AI |
| 4 | Confirm định hướng | Khách nhìn, gật hoặc lắc | **Người chốt** |
| 5 | Vẽ prototype | Kit Jarvis dựng prototype **bấm được** | AI |
| 6 | Confirm prototype | Khách **bấm thử thật** | **Người chốt** |

Bước 1–2 đã làm sẵn trong dự án mẫu → buổi học đi từ **bước 3**.

## Ví dụ xuyên suốt
**Dự án HĐĐT — module `INV` Hoá đơn đầu ra**, route `#/hoa-don`.
Trục chính: **`INV-UC-002` Lập hoá đơn mới** *(luồng chính 7 bước)*, kéo theo `INV-UC-001` danh sách.
Tài liệu nguồn: `docs/03-modules/invoice/DOC-04` *(6 quy tắc)* · `DOC-05` *(15 use case)* ·
`DOC-06` *(15 FR + 14 AC)*.

## Độ sâu

**KHÔNG đưa vào buổi:** đọc code · kiến trúc backend (layer, DI, CQRS) · ADR · kế hoạch ·
ca kiểm thử *(buổi 08)* · ký cổng *(buổi 07)* · yêu cầu phi chức năng.

**ĐƯỢC đưa vào buổi:** mạch 6 bước cũ → mới · cấu trúc `docs/` của dự án thật · **đọc tài liệu
theo trục `UC → FR → BR`** · prompt sinh danh sách màn hình · prompt vibe code prototype ·
bộ kit `@jarvis/core` *(dùng gì, không giải thích code)* · danh sách kiểm prototype 5 điều ·
hai chỗ confirm với khách.

## Học viên rời phòng với
1. **Prototype module `INV` chạy được** trên máy mình — bấm từ danh sách → tạo mới → lưu → Chờ ký
2. Biết **đọc tài liệu yêu cầu theo trục**, không đọc tuần tự từ đầu tới cuối
3. Hai **prompt mẫu** dùng lại được cho module khác
4. Biết **mốc kiểm tra** nào là đủ để đem prototype cho khách xem
5. Hiểu vì sao **confirm vẫn là việc của người**

## Mạch câu chuyện — 120'

| Phần | Nội dung | Phút | Slide |
|---|---|---|---|
| 1 · Mở | Hôm nay không viết tài liệu — hôm nay đọc rồi bấm | 8 | 1–3 |
| 2 · Cũ và mới | 6 bước BA · vài tuần → vài tiếng · hai chỗ confirm | 12 | 4–7 |
| 3 · Bộ tài liệu có sẵn | Dự án HĐĐT · 9 module · đọc gì trong DOC-04/05/06 | 25 | 8–13 |
| **4 · Thực hành 1 — ra màn hình** | **Prompt sinh danh sách màn hình từ `INV-UC-002`** | **25** | 14–17 |
| **5 · Thực hành 2 — vibe code prototype** | **Prompt dựng prototype bấm được bằng kit Jarvis** | **30** | 18–22 |
| 6 · Đủ chưa thì đem cho khách | Danh sách kiểm 5 điều · hai chỗ confirm | 12 | 23–25 |
| 7 · Tổng kết | Mang về gì · giao bài | 8 | 26–28 |

*(120'. Deck **28 slide**.)*

## Ràng buộc / điều không được phá
- **Mọi ví dụ phải khớp `einvoice-sample`** — tên module, mã ID, route, nội dung quy tắc
- **Không ký cổng nào ở buổi này** — tất cả là nháp, buổi 07 mới ký
- **Không dạy đọc code** — ràng buộc chung cả khoá; prototype là *bấm được và nhìn thấy*
- **Không** dùng hỏi trước–đáp sau — đây là buổi thực hành
- **Phần 4 và 5 không được co ngắn** — đó là phần lớp thực sự làm được việc; thiếu giờ thì cắt phần 2 hoặc 6
- Hai bước **confirm** phải giữ nguyên là **việc của người** — không được nói AI chốt thay khách
