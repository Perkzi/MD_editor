import{f as t}from"./index-79162e8a.js";const a=e=>t({url:"/file/findFiles",method:"post",data:e}),u=e=>t({url:"/file/findFileByFileId",method:"post",data:e}),d=e=>t({url:"/file/createFile",method:"post",data:e}),c=e=>t({url:"/file/uploadFile",method:"post",data:e,"Content-Type":"multipart/form-data"}),p=e=>t({url:"/file/shareFile",method:"post",data:{userid:e}}),F=(e,o)=>t({url:"/file/joinFile",method:"post",data:{userid:e,fileid:o}}),m=e=>t({url:"/file/updateFileState",method:"post",data:e}),h=e=>t({url:"/file/updateFile",method:"post",data:e}),f=e=>t({url:"/version/updateVersion",method:"post",data:e}),I=e=>t({url:"/file/getFileContent",method:"post",data:e}),A=e=>t({url:"/file/putFileToRecycle",method:"post",data:e}),P=e=>t({url:"/excel/uploadFile",method:"post","Content-Type":"multipart/form-data",data:e}),_=e=>t({url:"/file/exportFile",method:"post",data:e,responseType:"json"}).then(o=>(console.log(o),console.log(typeof o),o)).then(({fileName:o,fileContent:l})=>{const n=new Blob([l],{type:"text/plain"}),s=window.URL.createObjectURL(n),r=document.createElement("a");return r.href=s,r.download=o,document.body.appendChild(r),r.click(),r.remove(),{code:200,msg:"文件下载成功"}}).catch(o=>(console.error("Error:",o),{code:500,msg:"文件下载失败"})),g=e=>t({url:"/version/getVersion",method:"post",data:e});export{p as a,u as b,d as c,g as d,_ as e,m as f,a as g,c as h,I as i,P as j,F as k,A as p,f as s,h as u};
