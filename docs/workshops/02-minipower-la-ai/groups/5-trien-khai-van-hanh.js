// Nhóm 5 — Triển khai & Vận hành
window.__GDATA = window.__GDATA || {};
window.__GDATA[5] =
{title:"Triển khai & Vận hành",color:"var(--g5)",diag:"collab",
   cmp:{rows:[
     {feat:"Quyết định go-live",before:'"Code xong là lên", không có đường quay lui, vỡ trận lúc 2h sáng',after:'<b>Checklist go-live</b> + <b>dry-run rollback</b> bắt buộc trước khi lên'},
     {feat:"Xử lý sự cố (Hyper Care)",before:'Lục email / chat tìm "ai yêu cầu, vì sao" giữa đêm',after:'AI truy nguồn nhanh từ <b>bộ nhớ dự án</b>'},
     {feat:"Thay đổi khi bảo trì",before:'Khách "tiện thể thêm" → không CR → scope creep + tài liệu chết dần',after:'Mọi thay đổi qua <b>Change Request</b> + <b>phân tích tác động</b>'}
   ],prompts:[
     {tag:"Phase: delivery",text:'"Lập checklist go-live cho dự án CRM kèm kịch bản dry-run rollback (DOC-17). Trước go-live bắt buộc doc-review."'},
     {tag:"/minipower",text:'"Sự cố ở chức năng [X] lúc golive: truy nguồn yêu cầu gốc, ai đã quyết định, bản vá liên quan (đọc 📄 memory, 📄 trace-matrix)."'},
     {tag:"Phase: change-control",text:'"Khách xin thêm [Y] khi bảo trì — tạo Change Request và phân tích tác động tới các module liên quan (DOC-18)."'}
   ]}};
