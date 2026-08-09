// Nhóm 3 — Phân tích & Thiết kế
window.__GDATA = window.__GDATA || {};
window.__GDATA[3] =
{title:"Phân tích & Thiết kế",color:"var(--g3)",diag:"timeline",
   lanes:[{ic:"🕵️",t:"BA · Nghiệp vụ",col:"var(--g3)"},{ic:"👷",t:"SA · Kỹ thuật",col:"var(--g3)"}],
   cap:"Hiểu yêu cầu trước, rồi thiết kế hai tầng: nghiệp vụ (khách đọc được) trước, kỹ thuật (dev đọc) sau.",
   steps:[
     {side:"left",node:"🔎",sc:"var(--g3)",sn:"Phân tích yêu cầu",badge:"Chặng 6",name:"Requirement Analysis",actors:["BA"],act:"Đào sâu yêu cầu, business rule, use case",doc:"BRD · Use Case · Business Rule"},
     {side:"left",node:"🧩",sc:"var(--g3)",sn:"Thiết kế giải pháp",badge:"Chặng 7",name:"Solution Design",actors:["BA","SA"],act:"Thiết kế giải pháp nghiệp vụ: luồng, màn hình, đặc tả chức năng",doc:"Prototype · SRS · AC"},
     {side:"right",node:"🏛️",sc:"var(--g3)",sn:"Thiết kế kỹ thuật",badge:"Chặng 8",name:"Technical Design",actors:["SA"],act:"Thiết kế kỹ thuật: kiến trúc, data model, API",doc:"SAD · ADR · Data Model · API"}
   ],
   cmp:{rows:[
     {feat:"Ghi chép cuộc họp",before:"BA ghi tay không kịp, sót requirement / BR / decision, tối về tua lại recording",after:'Ghi trọn nội dung, tự phân loại: <i>"đơn &gt; 10 triệu phải trưởng phòng duyệt"</i> → <b>Business Rule</b>; <i>"quý sau thêm cấp vùng"</i> → <b>Scope Change</b>'},
     {feat:"Câu hỏi làm rõ",before:"Hỏi nhỏ giọt nhiều vòng, họp đi họp lại, MoM ra muộn",after:'Bộ câu hỏi khảo sát <b>gửi một lượt</b>'},
     {feat:"Ai duyệt tài liệu",before:"Không rõ ai duyệt FRD / UAT / CR → đùn đẩy, việc treo",after:'Gắn <b>người duyệt (RACI cấp tài liệu)</b> vào từng FRD / UAT / CR'},
     {feat:"Làm rõ yêu cầu mơ hồ",before:'<i>"Giảm giá VIP 10%"</i> mỗi người hiểu một kiểu, phát hiện sai tận lúc UAT',after:"AI phản biện: VIP là ai? Cố định hay thay đổi? Sản phẩm nào? Có hạn dùng không?"},
     {feat:"Quản lý bộ tài liệu",before:"Copy nội dung giữa BRD / FRD / Test → sửa một chỗ, quên chỗ khác → outdate",after:'Nối bằng <b>mã số</b>, sửa một chỗ cả dây biết (không copy)'},
     {feat:"Lưu lý do quyết định",before:'6 tháng sau khách hỏi "sao làm thế này", cả team im lặng',after:'<b>ADR</b> ghi bối cảnh + phương án + vì sao loại phương án khác'}
   ],prompts:[
     {tag:"Phase: requirements",text:'"Từ bản ghi cuộc họp này, trích và phân loại thành Requirement, Business Rule, Decision, Scope Change."'},
     {tag:"Phase: requirements",text:'"Yêu cầu \'giảm giá VIP 10%\' mơ hồ chỗ nào? Liệt kê câu hỏi cần làm rõ, gộp thành một phiếu gửi khách một lượt."'},
     {tag:"Phase: architecture",text:'"Requirement CRM-FR-012 nối tới business rule, use case và test case nào? Viết ADR (DOC-09) cho quyết định thiết kế liên quan."'}
   ]}};
