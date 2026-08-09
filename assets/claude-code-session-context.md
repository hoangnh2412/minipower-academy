# Claude Code — Quản lý Session & Context

> Tài liệu tổng hợp các slash commands để kiểm soát context và session trong Claude Code terminal.
> Dựa trên kiến thức đến tháng 8/2025 — kiểm tra tại [docs.anthropic.com/claude-code](https://docs.anthropic.com/en/docs/claude-code/overview) để có thông tin mới nhất.

---

## Ba tầng "nhớ" trong Claude Code

```
┌─────────────────────────────────────────┐
│  PERSISTENT (qua mọi session)           │
│  CLAUDE.md — project memory             │
│  Xem & sửa bằng /memory                │
├─────────────────────────────────────────┤
│  SESSION (trong lần chạy này)           │
│  Conversation history                   │
│  /compact → nén  |  /clear → xoá       │
├─────────────────────────────────────────┤
│  CROSS-SESSION (bridge giữa 2 session)  │
│  Saved session state                    │
│  /resume để khôi phục                  │
└─────────────────────────────────────────┘
```

---

## Các command chính

### `/clear` — Xoá toàn bộ context hiện tại

```
> /clear
```

Xoá sạch lịch sử hội thoại trong session hiện tại. Claude "quên" toàn bộ những gì đã thảo luận. Model, config, và các file trong project vẫn giữ nguyên — chỉ conversation history bị reset.

**Dùng khi:**

- Chuyển sang task hoàn toàn khác trong cùng session
- Context đang bị "nhiễm" bởi các thảo luận cũ không liên quan
- Muốn Claude tiếp cận vấn đề fresh, không bị bias bởi lịch sử

---

### `/compact` — Nén context để tiết kiệm token

```
> /compact
> /compact tóm tắt những quyết định thiết kế đã chốt
```

Thay vì xoá hẳn, `/compact` yêu cầu Claude **tóm tắt** toàn bộ conversation history thành một bản digest ngắn gọn, rồi dùng digest đó thay cho raw history. Context window giảm đáng kể, nhưng các quyết định và thông tin quan trọng vẫn được giữ lại.

Có thể truyền thêm hint về **những gì cần ưu tiên** trong summary (như ví dụ dòng 2).

**Dùng khi:**

- Đang làm việc kéo dài, conversation history phình to
- Sắp đến giới hạn context window
- Muốn tiếp tục session mà không mất các quyết định đã thống nhất

> **Khác với `/clear`:** `/clear` = xoá sạch; `/compact` = tóm lược rồi giữ lại bản digest.

---

### `/resume` — Tiếp tục session trước

```
> /resume
```

Mở lại một session cũ đã bị ngắt. Claude Code lưu trạng thái session, và `/resume` cho phép pick up từ điểm bỏ dở — bao gồm context của cuộc hội thoại, các file đang xem, và trạng thái task.

**Dùng khi:**

- Thoát terminal giữa chừng rồi muốn quay lại
- Máy tính ngủ / khởi động lại
- Muốn chuyển sang terminal khác và tiếp tục cùng task

---

### `/memory` — Xem & chỉnh sửa project memory

```
> /memory
```

Mở file `CLAUDE.md` của project — nơi lưu trữ thông tin **persistent** qua mọi session: conventions của codebase, các quyết định kiến trúc đã chốt, context quan trọng mà Claude cần nhớ lâu dài.

**Dùng khi:**

- Muốn xem Claude đang "nhớ" gì về project
- Cần thêm / sửa convention hoặc quyết định thiết kế
- Onboard context mới vào project memory

---

### `/cost` — Xem mức tiêu thụ token

```
> /cost
```

Hiển thị số token đã dùng trong session hiện tại, giúp ước lượng khi nào nên chạy `/compact`.

---

## Bảng tóm tắt

| Command | Tác dụng | Mất context? |
|---|---|---|
| `/clear` | Xoá toàn bộ conversation history | ✅ Có |
| `/compact [hint]` | Nén history thành digest, giữ thông tin quan trọng | ⚠️ Một phần |
| `/resume` | Khôi phục session đã ngắt | ❌ Không |
| `/memory` | Xem / sửa `CLAUDE.md` (persistent memory) | ❌ Không |
| `/cost` | Xem số token đã tiêu trong session | ❌ Không |

---

## Workflow thực tế

**Session dài (coding marathon)**
Dùng `/compact` định kỳ khi thấy context nặng, kèm hint cụ thể:

```
> /compact giữ lại: API contracts, bug đã tìm ra, quyết định về schema
```

**Chuyển sang task mới**
Dùng `/clear` để bắt đầu fresh, tránh Claude bị confused bởi context của task cũ.

**Tiếp tục hôm sau**
Kết thúc session, hôm sau gõ `/resume` để không phải giải thích lại từ đầu.

**Ghi nhớ dài hạn**
Dùng `/memory` để ghi vào `CLAUDE.md` những gì cần Claude nhớ xuyên suốt project — không chỉ trong session hiện tại.
