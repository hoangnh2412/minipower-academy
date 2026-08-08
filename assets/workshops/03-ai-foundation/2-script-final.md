# Giai đoạn 2 — Kịch bản biên tập (Script Final)

> **Buổi 3 — AI Foundation: LLM, Prompt & Context Engineering** · 120 phút · Đối tượng: **Dev**
> Giọng kể chuyện, gần gũi, tương tác. Bám case chung **CRM công ty ABC** (đặt ở buổi 01) xuyên suốt.

---

## Tổng quan thời lượng

| # | Nhịp | Thời gian |
|---|------|-----------|
| 1 | Nhìn lại cửa ngõ — câu hỏi gợi mở | 10' |
| 2 | Hallucination trực diện + **Token · Context window · Hallucination** (kèm 3 "đừng nhầm") | 32' |
| 3 | Prompt có ngữ cảnh (5 thành phần) + **Prompt = System + User** | 30' |
| 4 | **Context → Memory · Session → Long Context · Compression** + Context Engineering & Minipower | 33' |
| 5 | Thực hành: biên bản họp → yêu cầu chốt | 30' |
| 6 | Chốt buổi + teaser buổi 4 | 5' |

> **Cách lồng ghép từ vựng (cơ bản → nâng cao):** không dạy thành một khối "từ vựng" riêng — mỗi thuật ngữ
> được giới thiệu **đúng lúc nó xuất hiện trong mạch**, và **"nhầm lẫn" đặt ngay cạnh khái niệm gốc**:
> Nhịp 2 → *Token* (≠ Word) · *Context window* (≠ Prompt Length) · *Hallucination* (≠ Sai);
> Nhịp 3 → *Prompt = System + User Prompt*; Nhịp 4 → *Context · Memory · Session* (Memory ≠ Context) ·
> *Long Context · Context Compression*.
>
> **Thời lượng:** cả buổi ~135'. Nếu phải giữ đúng 120': ở mỗi thuật ngữ chỉ dừng ~1', lướt nhanh phần
> "đừng nhầm" bằng một câu; **Nhịp 5 (thực hành) không được cắt**.

---

## Nhịp 1 — Nhìn lại cửa ngõ (10')

**Mục đích:** neo buổi 3 vào 2 buổi đã chạy, đặt câu hỏi xuyên suốt.

> **Slide:** (1) Cover · (2) **Sơ đồ lộ trình 9 buổi** — buổi 01–02 sáng (đã xong), buổi 03 nổi bật
> "bạn đang ở đây", buổi 04–09 mờ (chưa mở) · (3) Câu hỏi mở màn (không nhãn "Nhịp"). Deck **không hiển
> thị chữ "Nhịp"** cho học viên — cách chia Nhịp chỉ để giảng viên cầm.

**Lời dẫn (giảng viên kể):**

> "Hai buổi trước, chúng ta thấy 12 nỗi đau — và gốc rễ không phải là AI chưa đủ giỏi, mà là
> **tri thức dự án** vốn nằm rải rác: biên bản trong email, quyết định trong đầu PM, requirement
> trong chat. Buổi 2, ta thấy AI có mặt ở cả 17 chặng — nhưng có một câu chúng ta chưa trả lời:
> **tại sao có lúc AI trả lời cực hay, có lúc nó bịa chuyện rất thuyết phục?**"
>
> "Hôm nay ta trả lời câu đó. Và câu trả lời sẽ đổi cách anh/chị dùng AI từ hôm nay — không phải
> bằng một mẹo prompt, mà bằng hiểu bản chất."

**Tương tác nhanh:** hỏi lớp — *"ai đã từng bị AI 'chém' một thứ nghe rất đúng nhưng hoá ra sai?"*
Thu 2–3 ví dụ, để dành quay lại cuối buổi.

**Điểm chốt:** AI không "suy nghĩ" như người — nó **dự đoán từ tiếp theo**. Chữ "bịa" ở đây là
có cơ chế, không phải lỗi ngẫu nhiên.

---

## Nhịp 2 — Hallucination & "vì sao AI bịa?" (32')

**Mục đích:** cho học viên *tự chứng kiến* AI bịa → **gọi tên ngay** hiện tượng (Hallucination) → rồi
dùng câu hỏi **"vì sao AI lại bịa?"** làm sợi dẫn giới thiệu các thuật ngữ nền (token · context window ·
cơ chế đoán token). Thứ tự: đặt tên hiện tượng trước, giải thích nguyên nhân sau.

### Demo 1 — Đưa cho AI một yêu cầu mơ hồ (10')

> **Slide gộp (hỏi trước → đáp sau):** một slide duy nhất — hiện câu hỏi mơ hồ trước, bấm tiếp mới lộ
> phần "AI bịa". Đừng đọc trước đáp án.

Giảng viên đưa cho AI một **yêu cầu mơ hồ, không ngữ cảnh**:

> "Dự án CRM công ty ABC đang cần những yêu cầu gì?"

Hỏi lớp *"AI sẽ trả lời gì?"* rồi **bấm tiếp để lộ đáp**.

**Kết quả dự kiến (phần reveal):** AI tự bịa một danh sách requirement — quản lý khách hàng, phân loại,
báo giá, report, role phân quyền… nghe rất hợp lý, có mục lục đẹp.

**Khoáy:** *"Nghe ổn đúng không? Nhưng công ty ABC của chúng ta chưa bao giờ nói những điều này —
chưa bao giờ họp, chưa có biên bản nào. AI vừa dựng lên một thứ giống thật 100%."*

### Gọi tên hiện tượng ngay: Hallucination (4')

*"Cái AI vừa làm có tên."* — giới thiệu **Hallucination**: AI **bịa** ra một thứ nghe rất hợp lý, tự
tin, nhưng **không dựa trên nguồn nào**. Nó không cố lừa — chỉ đang "điền vào chỗ trống".

- ⚠ **Hallucination ≠ Sai.** *Sai* = trả lời không đúng (2+2=5). *Hallucination* = bịa **không có căn
  cứ**, đôi khi còn tình cờ đúng. Vấn đề là **có căn cứ hay không**, không phải đúng/sai.
  *(Slide: bong bóng "nghe hợp lý, không nguồn" ≠ "2+2=5".)*

### Câu hỏi dẫn dắt: "Vì sao AI lại bịa?" (1')

Đây là **trục của cả Nhịp 2**. *"Trả lời được câu này thì mới biết cách chặn."* Bẻ thành **3 mảnh ghép**,
và mỗi mảnh là một thuật ngữ nền: **(1) AI đọc gì · (2) nhớ được bao nhiêu · (3) nó 'trả lời' bằng cách nào.**

### (1) AI đọc gì — Token (4') · *hỏi trước, đáp sau*

**Hỏi lớp trước (slide chỉ hiện câu hỏi):** *"AI 'đọc' câu của bạn **như thế nào** — nhìn nguyên chữ hay
chẻ nhỏ ra?"* Cho lớp đoán vài giây rồi **bấm tiếp để lộ đáp** (dùng cơ chế reveal của deck).

- **Token** — AI không đọc chữ, nó đọc "mảnh chữ", và **đoán token kế tiếp** theo xác suất (**không tra
  cứu sự thật**). Một câu tiếng Việt bị chẻ thành vài chục token — cũng là lý do tiếng Việt "ngốn" token hơn.
  - ⚠ **Token ≠ Word (Từ).** `chatbot` → `chat`+`bot` = 2 token; từ tiếng Việt có dấu thường **>1 token**.
    Tính tiền theo token, không theo từ. *(Slide: "khuyến mãi" chẻ thành 3 token.)*

### (2) Nhớ được bao nhiêu — Context window (4')

- **Context** = *mọi thứ model nhìn thấy* khi trả lời; **Context window** = *giới hạn kích thước* của nó.
  Như anh BA ghi chép họp 2 tiếng — phần ngoài tầm là **mất**; thiếu phần đó → AI phải tự đoán.
  (Context gồm chính xác những gì → liệt kê đủ ở Nhịp 4, sau khi đã biết System/User Prompt.)
  - ⚠ **Context Window ≠ Prompt Length.** Cửa sổ chứa **tất cả** (system + lịch sử + tài liệu + chừa chỗ
    trả lời); prompt bạn gõ chỉ là **một lát**. "Prompt ngắn mà báo tràn?" — vì lịch sử + tài liệu đã ăn
    gần hết. *(Slide: container chia phần.)*

### (3) Nó "trả lời" bằng cách nào — ghép lại + chốt (3')

Ghép 3 mảnh: AI **đoán token kế tiếp**, nhưng **cửa sổ ngữ cảnh có hạn** — khi thiếu ngữ cảnh, nó **tự
điền chỗ trống bằng token xác suất cao nhất**. Giống autocomplete IDE: gõ `str =` thì nó đoán, không phải
biết, và **không biết mình đang đoán**.

**Điểm chốt:** vì vậy **hallucination là mặc định**, không phải trục trặc. Cách duy nhất giảm nó là **cho
đủ ngữ cảnh**. *(Slide: cơ chế autocomplete + callout chốt.)*

### Chuyển tiếp (5')

> "Vậy câu hỏi kế: ngữ cảnh để đưa vào là gì, và viết sao cho AI hiểu? Đó chính là Prompt Engineering."

---

## Nhịp 3 — Prompt có ngữ cảnh (30')

**Mục đích:** học viên nắm 5 thành phần của prompt và thấy trước/sau trên cùng một yêu cầu.

### Cấu trúc 5 thành phần (10')

Viết lên bảng công thức:

```text
1. Vai trò        — "Anh là BA dự án CRM công ty ABC, 15 năm kinh nghiệm."
2. Bối cảnh       — bản thân dự án đang ở đâu, vì sao có việc này.
3. Nhiệm vụ       — làm gì, cho ai.
4. Ràng buộc      — không được bịa; thiếu gì thì hỏi; chỉ dùng biên bản đính kèm.
5. Định dạng      — bảng, cột nào, dài bao nhiêu.
```

Chú ý với dev: **đây giống viết function signature** — `role` như type của tham số, `context` như
dữ liệu truyền vào, `constraint` như kiểm tra đầu vào. AI dự đoán tốt khi *biết "kiểu" của câu trả lời*.

### Thuật ngữ cài vào đây — Prompt = System + User Prompt (3')

Ngay sau khi lớp vừa viết xong 5 thành phần, chỉ ra: *"Cái anh chị vừa gõ có tên gọi — đó là **User
Prompt**. Nhưng nó không đi một mình."*

- **Prompt** — toàn bộ đầu vào model nhận một lượt.
- **User Prompt** — câu bạn thực sự gõ (chính là 5 thành phần vừa xong).
- **System Prompt** — lớp "luật nền" **ẩn, cố định** (vai trò · giọng · giới hạn), thường do công cụ
  cài sẵn. Bạn không thấy nhưng nó luôn có mặt.

*(Slide: hình hai lớp xếp chồng — User Prompt trên, System Prompt nền → "= Prompt".)* Neo cho dev:
system prompt như config mặc định của hàm; user prompt là tham số bạn truyền mỗi lần gọi.

### Demo 2 — AI có ngữ cảnh (10')

Giảng viên gắn **biên bản họp kickoff CRM ABC** (đã có ở buổi 01) vào prompt:

> "Anh là BA dự án CRM công ty ABC. Đây là biên bản cuộc họp kickoff [đính kèm].
> Hãy: (1) rút ra danh sách yêu cầu, (2) mỗi yêu cầu ghi nguồn câu nào trong biên bản,
> (3) chỉ ra 3 điểm mơ hồ cần làm rõ, (4) **không bịa thêm bất kỳ yêu cầu nào không có trong biên bản**."

**Kết quả dự kiến:** AI trả bảng yêu cầu **có trace** về biên bản, kèm "điểm mơ hồ" — thứ lần trước nó
bịa ra thì lần này nó tự nhận *không có trong biên bản*.

**Chốt 2 sự khác biệt (cho học viên ghi):**

| | Không ngữ cảnh | Có ngữ cảnh |
|---|---|---|
| Nguồn yêu cầu | Bịa từ kiến thức chung | Bám biên bản thật |
| Trace | Không có | Có (ghi câu nguồn) |
| Điểm mơ hồ | Không tự nhận | Tự chỉ ra |
| Dùng được | Không | Có người chốt thì dùng được |

### Kỹ thuật phản biện (5')

> "AI không phải luôn đúng, kể cả có ngữ cảnh. Một kỹ thuật mạnh: bắt AI phản biện chính nó."

Prompt mẫu phản biện:

> "Đây là danh sách yêu cầu anh vừa tạo. Hãy đóng vai QA khó tính: tìm 3 lỗi của danh sách này
> (yêu cầu mơ hồ, thiếu nguồn, giả định không rõ). Với mỗi lỗi, đề xuất câu hỏi cần hỏi khách."

**Điểm chốt:** prompt tốt không phải "lệnh hay" — là **truyền đủ ngữ cảnh + ràng buộc không bịa +
được phản biện**. Như test case tốt: nó chỉ rõ *điều kiện trước, hành vi, mong đợi*.

---

## Nhịp 4 — Context, Memory & Context Engineering (33')

**Mục đích:** đặt tên chính xác cho "context", nối với bộ nhớ dự án (Minipower), rồi mở rộng tới các
thuật ngữ nâng cao. Từ vựng đi tiếp mạch **cơ bản → nâng cao**: Context → Memory · Session → Long
Context · Compression.

### Context — nhắc lại & liệt kê đủ (3')

Ở Nhịp 2 ta đã gọi tên **Context** = *mọi thứ model nhìn thấy khi trả lời* (và context window = giới
hạn kích thước của nó). Giờ lớp đã biết System/User Prompt, nên **liệt kê đủ thành phần**:

> **Context** = System Prompt + User Prompt + lịch sử chat + tài liệu đính kèm.

*(Slide: cửa sổ chứa 4 chip.)* Neo cho dev: **context = RAM** — chỉ tồn tại cho lần chạy này. Đây là
bản lề để hiểu vì sao "cho đủ ngữ cảnh" quan trọng đến vậy.

### Vấn đề: ngữ cảnh từ đâu ra hằng ngày? (8')

> "Demo vừa rồi đẹp — nhưng đặt câu hỏi thực tế: biên bản họp của anh/chị **nằm ở đâu**?
> Trong email? Trong đầu PM? Trong file 'final_final_v3.docx'?"
>
> "Context Engineering = chủ động **thiết kế nơi chứa và cách lấy** ngữ cảnh, thay vì hỏi AI câu
> trống không rồi nhận đáp án bịa. Nếu dự án không có bộ nhớ, thì 'cho AI đủ ngữ cảnh' là điều
> không thể làm được."

Kể lại nỗi đau #6 (không biết ai quyết định) và #12 (tìm tri thức cực khó) — giờ có tên kỹ thuật giải quyết:
**Context Engineering**.

### Thuật ngữ cài vào đây — Memory & Session (6')

Muốn "thiết kế nơi chứa ngữ cảnh" thì phải phân biệt hai chỗ chứa:

- **Memory** — tri thức **còn qua nhiều session**, nhưng **phải chủ động lưu**. Đây chính là vai trò của
  Minipower. *(Slide: ổ cứng → nạp vào context.)*
- **Session** — một **cuộc hội thoại** có mở/đóng. Đóng session → **context mất**, **memory còn** (nếu đã
  lưu). *(Slide: thanh mở/đóng.)* Neo: session = một lần chạy chương trình.
- ⚠ **Memory ≠ Context.** *Context* = RAM (chỉ lần trả lời này); *Memory* = ổ cứng (qua nhiều phiên).
  "AI quên điều tôi nói hôm qua" **không phải lỗi** — bạn chưa đưa nó vào memory. *(Slide: ổ cứng ≠ RAM.)*

### Minipower là nguồn context (memory) đáng tin (6')

- Minipower đã gom **MOM · yêu cầu · quyết định · bug** thành bộ nhớ dự án (nối từ buổi 02, 17 chặng).
- Cách dùng trong thực tế: *hỏi Minipower trước, lấy ngữ cảnh; đưa ngữ cảnh đó vào prompt; chốt bằng người.*
- Minh hoạ một chuỗi làm việc 3 bước:

```text
1. "Minipower, cho anh các quyết định tuần này về CRM ABC."        ← lấy ngữ cảnh
2. "Anh là BA… Đây là biên bản [từ Minipower]. Hãy… [prompt có cấu trúc]"  ← dùng ngữ cảnh
3. "Người chốt: Đồng ý 5 yêu cầu, ghi 'đã chốt' vào Minipower."    ← con người chốt
```

**Điểm chốt:** AI giỏi nhất khi đứng trên **bộ nhớ dự án có tổ chức** — đúng những gì Minipower đang làm.

### Khi ngữ cảnh quá dài — hai thuật ngữ nâng cao (4')

Có người sẽ hỏi: *"Vậy cứ nhét cả kho tài liệu vào cho chắc?"* — Không hẳn:

- **Long Context** — cửa sổ **rất lớn**, nhét được hàng trăm trang cùng lúc. Nhưng **càng dài càng tốn
  token** và AI **càng dễ "lạc"** giữa biển thông tin. *(Slide: cửa sổ khổng lồ nhiều trang.)*
- **Context Compression** — **nén** ngữ cảnh dài thành bản **tóm ý chính**, giữ cái cần, bỏ chi tiết thừa.
  Đây đúng là việc Minipower làm khi bó tri thức dự án lại trước khi đưa cho AI. *(Slide: chồng trang →
  tóm tắt.)* Neo cho dev: giống **gzip** cho ngữ cảnh.

Chốt mạch từ vựng: **token → prompt (system/user) → context → memory/session → long context → compression**
— đi từ mảnh nhỏ nhất đến cách quản ngữ cảnh lớn, và mọi thứ đều phục vụ một câu: *cho đủ, đúng ngữ cảnh.*

---

## Nhịp 5 — Thực hành (30')

**Mục đích:** học viên tự làm một vòng đầy đủ, có sản phẩm đem về.

### Việc cần làm (từng người / cặp)

1. Lấy một **biên bản họp hoặc email yêu cầu thật** của chính mình (học viên chuẩn bị trước buổi).
2. Viết prompt có đủ 5 thành phần, gắn tài liệu gốc.
3. AI trả danh sách yêu cầu → **đối chiếu từng dòng với nguồn** → đánh dấu: `Đúng / Bịa / Mơ hồ`.
4. Bắt AI phản biện → thu ít nhất 3 câu hỏi cần làm rõ.
5. **Con người chốt:** chọn yêu cầu nào giữ, nào bỏ, ghi `decision-log` vào Minipower.

### Giảng viên hỗ trợ

- Đi quanh lớp; nhắc quy tắc: *nếu AI ra thứ không có trong nguồn → đó là bịa, không phải "gợi ý".*
- Với ai kẹt: cho 2 prompt mẫu (có/không ngữ cảnh) để so sánh.

### Thu hoạch cuối thực hành (5')

Hỏi 2–3 người: *"AI bịa bao nhiêu cái? Nó tự nhận 'không có trong biên bản' không?"*
Thu một số thực tế → chốt: **người vẫn là người chốt; AI chỉ nhanh hơn, không đúng hơn.**

---

## Nhịp 6 — Chốt buổi + teaser (5')

**Tóm tắt một câu mỗi người nhắc lại:**

> "AI dự đoán từ tiếp theo — cho đủ ngữ cảnh nó mới không bịa — và người luôn là người chốt."

**Hẹn buổi 4 — AI Coding Tools:** "Hôm nay ta học *nói chuyện với AI*. Tuần sau ta mở trình soạn
thảo — Cursor/Claude Code/OpenCode — để AI **viết code, explain code, sửa bug, refactor** trên repo
của chính mình. Cài sẵn một công cụ + một repo nhỏ trước khi lên lớp."

---

## Ghi chú sản xuất (cho nhóm soạn slide)

- **Case xuyên suốt:** CRM công ty ABC — biên bản họp kickoff đã có từ buổi 01. Dùng nguyên tài liệu đó.
- **Slide cần:** bảng 5 thành phần prompt · bảng so sánh có/không ngữ cảnh · sơ đồ 3 bước Minipower
  (lấy → dùng → chốt) · ảnh "AI autocomplete bịa chuyện".
- **Phong cách ảnh:** theo `assets/_shared/base_prompt.md` (nếu chưa có file này trong buổi, nối phong
  cách buổi 02 — điện ảnh, kể chuyện doanh nghiệp, 16:9).
- **Nếu hết giờ:** nhịp 4 rút gọn (chỉ giữ sơ đồ 3 bước), không được bỏ nhịp 5 thực hành.
