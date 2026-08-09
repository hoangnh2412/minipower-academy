// Nhóm 1 — Bán hàng
window.__GDATA = window.__GDATA || {};
window.__GDATA[1] =
{title:"Bán hàng",color:"var(--g1)",diag:"timeline",
   lanes:[{cls:"comp",ic:"🏢",t:"Công ty"},{cls:"cust",ic:"🏛️",t:"Khách hàng"}],
   cap:"Từ một ý tưởng đến chữ ký hợp đồng — Sale và khách hàng đi lại nhiều vòng, mỗi vòng để lại một tài liệu.",
   steps:[
     {side:"right",node:"💡",sc:"var(--g3)",sn:"Khách hàng có nhu cầu",actors:["Customer"],act:"Có nhu cầu / dự án, tìm đơn vị thực hiện",doc:"Nhu cầu ban đầu"},
     {side:"right",node:"→",sc:"var(--g1)",sn:"Sale demo",actors:["Sale"],act:"Sang khách hàng demo, trao đổi nhu cầu",doc:"Demo"},
     {side:"left",node:"←",sc:"var(--g2)",sn:"Mang ý tưởng về",actors:["Sale"],act:"Mang ý tưởng thô về công ty",doc:"Ý tưởng thô"},
     {side:"left",node:"↻",sc:"var(--g4)",sn:"Chuẩn bị khảo sát",actors:["Sale","PM"],act:"Họp chuẩn bị câu hỏi khảo sát",doc:"Câu hỏi khảo sát"},
     {side:"right",node:"→",sc:"var(--g1)",sn:"Khảo sát",actors:["PM","BA"],act:"Sang khách hàng khảo sát",doc:"Câu hỏi khảo sát"},
     {side:"left",node:"←",sc:"var(--g2)",sn:"Yêu cầu nghiệp vụ",actors:["PM","BA"],act:"Mang yêu cầu nghiệp vụ về công ty",doc:"Yêu cầu nghiệp vụ"},
     {side:"left",node:"↻",sc:"var(--g4)",sn:"Đóng gói proposal",actors:["BA","SA","PM"],act:"Phân tích & đóng gói proposal",doc:"Đề xuất · Báo giá · Kế hoạch"},
     {side:"right",node:"→",sc:"var(--g1)",sn:"Đàm phán proposal",actors:["PM","Sale"],act:"Trình proposal, đàm phán & phê duyệt",doc:"Đề xuất · Báo giá · Kế hoạch"},
     {side:"right",node:"✍️",sc:"var(--g5)",sn:"Ký hợp đồng",actors:["Customer"],act:"Khách hàng ký hợp đồng",doc:"Hợp đồng đã ký"},
     {side:"left",node:"←",sc:"var(--g2)",sn:"Mang hợp đồng về",actors:["Sale"],act:"Mang hợp đồng về công ty",doc:"Hợp đồng · SoW"}
   ],
   cmp:{rows:[
     {feat:"Đánh giá cơ hội",note:"(chỉ dự án nội bộ)",before:"Khảo sát, đánh giá thủ công, chậm",after:'Khảo sát <b>nhanh hơn</b> — hỏi đáp trực tiếp với AI ngay trên ý tưởng sơ khai'},
     {feat:"Đề xuất giải pháp",before:'<ul><li>Tốn <b>nhiều ngày</b>, qua nhiều vòng rà soát</li><li>Yêu cầu không định danh, khó truy vết</li><li>Tài liệu rời rạc (Drive, Draw.io…)</li></ul>',after:'<ul><li>Dựng <b>nhanh</b>, AI rà soát cùng</li><li>Truy vết "đáp ứng <b>FR/NFR</b> nào" bằng sơ đồ, định danh yêu cầu</li><li>Tập trung một nơi, liên kết bằng mã số</li></ul>'},
     {feat:"Báo giá",before:'<ul><li>Copy-paste / viết lại từ khảo sát</li><li>Qua nhiều vòng rà soát</li><li>Đổi nhiều phiên bản, <b>không ghi lý do</b> đổi giá</li></ul>',after:'<ul><li>Tự tổng hợp, <b>không chép tay</b></li><li>Chấm <b>độ phức tạp</b> đa góc nhìn</li><li>Lưu <b>lịch sử giá + lý do</b> đổi</li><li>Truy vết "vì sao giá cao"</li></ul>'},
     {feat:"Kế hoạch triển khai",before:'<ul><li>Copy-paste, viết lại từ khảo sát</li><li>Chỉnh sửa nhiều lần trên Excel, <b>không có sự liên kết</b></li></ul>',after:'<ul><li>Tự tổng hợp, <b>không chép tay</b></li><li>Truy vết "phát triển <b>FR/NFR</b> nào" bằng <b>ma trận định danh</b></li></ul>'}
   ],prompts:[
     {tag:"Phase: discovery",text:'"Từ ý tưởng CRM chăm sóc khách hàng, đặt 10 câu hỏi khảo sát làm rõ nhu cầu và tính khả thi." (Idea nội bộ: chạy Phase: deliberation trước)'},
     {tag:"Phase: planning",text:'"Chấm độ phức tạp và phân loại các chức năng đã khảo sát; lập ma trận ước lượng (DOC-14)."'}
   ]}};
