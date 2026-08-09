// Nhóm 4 — Xây dựng & Kiểm thử
window.__GDATA = window.__GDATA || {};
window.__GDATA[4] =
{title:"Xây dựng & Kiểm thử",color:"var(--g4)",diag:"timeline",
   lanes:[{ic:"🧑‍💻",t:"Dev · Xây dựng",col:"var(--g4)"},{ic:"🧑‍🔬",t:"QA · Khách · Kiểm thử",col:"var(--g4)"}],
   cap:"Code xong không lên thẳng khách: SIT (đội mình tự ghép & soi lỗi) trước, UAT (khách nghiệm thu) sau. Lỗi thì quay lại Development.",
   steps:[
     {side:"left",node:"💻",sc:"var(--g4)",sn:"Lập trình",badge:"Chặng 9",name:"Development",actors:["Dev"],act:"Hiện thực module, viết unit test",doc:"Code · Unit test"},
     {side:"right",node:"🧪",sc:"var(--g4)",sn:"SIT",badge:"Chặng 10",name:"SIT",actors:["QA","Dev"],act:"Ghép module + hệ ngoài, test tích hợp nội bộ",doc:"Kết quả SIT · Defect log · Build ổn định"},
     {side:"right",node:"✅",sc:"var(--g4)",sn:"UAT",badge:"Chặng 11",name:"UAT",actors:["Customer","BA"],act:"Khách test theo kịch bản, nghiệm thu",doc:"Biên bản UAT · Sign-off"}
   ],
   cmp:{rows:[
     {feat:"Bắt đầu code",before:"Bỏ qua FRD / SRS, từ BRD nhảy thẳng sang SAD và code; đặc tả chưa xong → yêu cầu đổi → viết lại từ đầu, bay cả tuần",after:'AI <b>dừng và liệt kê trọn gói</b> tiền đề còn thiếu (SRS, AC, thiết kế, API) trước khi code'},
     {feat:"Thiết kế test case",before:"QA tự nghĩ, dễ thiếu negative / boundary, chỉ có happy path",after:'Đề xuất đủ <b>positive · negative · boundary · exception</b>'},
     {feat:"Độ phủ test",before:"Mở 500 test case không biết cái nào kiểm yêu cầu nào",after:'Mỗi test <b>trace về AC</b> → thấy ngay yêu cầu nào chưa test (cả SIT lẫn UAT)'}
   ],prompts:[
     {tag:"Phase: delivery",text:'"Sinh bộ test case cho CRM-AC-045 gồm đủ positive, negative, boundary, exception (DOC-16)."'},
     {tag:"Phase: delivery",text:'"Những AC nào của module [X] chưa có test case (cả SIT lẫn UAT)? Đối chiếu 📄 trace-matrix."'}
   ]}};
