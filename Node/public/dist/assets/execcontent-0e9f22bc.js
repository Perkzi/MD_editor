import{y as r}from"./index-7f8de9bc.js";const t=(o,e,n)=>!e||!n?r.error(`分享文件参数缺失: fileid=${e}, filename=${n}`):`${window.location.origin}/#/invited/${e}?username=${o}&filename=${n}`,s=o=>{if(navigator.clipboard)navigator.clipboard.writeText(o);else{var e=document.createElement("textarea");document.body.appendChild(e),e.style.position="fixed",e.style.clip="rect(0 0 0 0)",e.style.top="10px",e.value=o,e.select(),document.execCommand("copy",!0),document.body.removeChild(e)}};export{t as c,s as e};
