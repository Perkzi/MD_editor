import{f as t}from"./index-b12eb038.js";const r=e=>t({url:"/file/findFiles",method:"post",data:e}),i=e=>t({url:"/file/findFileByFileId",method:"post",data:e}),s=e=>t({url:"/file/createFile",method:"post",data:e}),a=e=>t({url:"/file/uploadFile",method:"post",data:e,"Content-Type":"multipart/form-data"}),n=e=>t({url:"/file/shareFile",method:"post",data:{userid:e}}),u=(e,l)=>t({url:"/file/joinFile",method:"post",data:{userid:e,fileid:l}}),p=e=>t({url:"/file/updateFileState",method:"post",data:e}),d=e=>t({url:"/file/updateFile",method:"post",data:e}),F=e=>t({url:"/version/updateVersion",method:"post",data:e}),c=e=>t({url:"/file/getFileContent",method:"post",data:e}),f=e=>t({url:"/file/putFileToRecycle",method:"post",data:e}),m=e=>t({url:"/excel/uploadFile",method:"post","Content-Type":"multipart/form-data",data:e});export{n as a,i as b,s as c,c as d,a as e,p as f,r as g,m as h,u as j,f as p,F as s,d as u};
