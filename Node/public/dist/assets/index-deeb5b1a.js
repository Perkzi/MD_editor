import{a as S,f as N}from"./index-4d2111ab.js";import{_ as $,l as z,m as I,y as h,a as c,o as B,c as O,b as n,d as a,e as s,u as A,z as d,n as _,B as m,t as E,f}from"./index-33253f62.js";import{c as F,e as M}from"./execcontent-600107c0.js";import"./index-48891a0f.js";const D={class:"file-menu"},J={class:"fileName"},V={class:"fileName-title"},P=["onClick"],T={class:"opt"},j=["onClick"],q=["onClick"],U=["onClick"],W={__name:"index",setup(G){let u=z([]);const g={txt:"icon-wenben",excel:"icon-excel",word:"icon-Word",markdown:"icon-file-markdown1",pdf:"icon-pdf1"},b={word:"#0f90e3",excel:"#01a408",pdf:"#ea5454",txt:"rgba(0, 0, 0, 0.6)",markdown:"#5A96DB",folder:"#ffd153"},w=()=>{},x=e=>{const{filesuffix:t}=e;switch(console.log(t),t){case"md":f.push({path:`/edit/${e.fileid}`,query:e});break;case"xlsx":f.push(`/excel/${e.fileid}`);break;case"docx":f.push(`/word/${e.fileid}`);break}},v=e=>{let{username:t}=JSON.parse(sessionStorage.getItem("user")),l=F(t,e.fileid,e.filename+"."+e.filesuffix);M(l),h.success("分享链接已复制到粘贴板")},p=async(e,t)=>{let{userid:l}=JSON.parse(sessionStorage.getItem("user"));t==="top"&&(e.top=!e.top),t==="favor"&&(e.favor=!e.favor),await N({userid:l,fileid:e.fileid})};return I(async()=>{let{userid:e}=JSON.parse(sessionStorage.getItem("user")),t=await S(e);if(t.code!==200)return h.error(t.msg);t.data.forEach(l=>u.push(l))}),(e,t)=>{const l=c("el-button"),k=c("el-button-group"),i=c("el-table-column"),y=c("el-table"),C=c("el-pagination");return B(),O("div",null,[n("div",D,[a(k,null,{default:s(()=>[a(l,{size:"small",disabled:!0},{default:s(()=>[d(" delete ")]),_:1}),a(l,{size:"small",disabled:!0},{default:s(()=>[d(" share ")]),_:1}),a(l,{size:"small",disabled:!0},{default:s(()=>[d(" add to ")]),_:1})]),_:1})]),a(y,{data:A(u).sort((o,r)=>r.top-o.top),onSelectionChange:w},{default:s(()=>[a(i,{type:"selection",width:"55"}),a(i,{label:"fileName"},{default:s(o=>[n("div",J,[n("div",V,[n("i",{class:_(["iconfont",g[o.row.filetype]]),style:m({color:b[o.row.filetype]})},null,6),n("span",{onClick:r=>x(o.row)},E(o.row.filename+"."+o.row.filesuffix),9,P)])])]),_:1}),a(i,{prop:"owner",label:"owner"}),a(i,{prop:"createtime",label:"Date"}),a(i,{fixed:"right",label:"Operation",align:"right"},{default:s(o=>[n("div",T,[n("i",{class:"iconfont icon-lianjie",title:"分享",onClick:r=>v(o.row)},null,8,j),n("i",{title:"收藏",class:_(["iconfont",o.row.favor?"icon-shoucang1":"icon-shoucang"]),onClick:r=>p(o.row,"favor")},null,10,q),n("i",{title:"置顶",style:m({display:o.row.top?"block":""}),class:_(["iconfont",o.row.top?"icon-tuding":"icon-tuding1"]),onClick:r=>p(o.row,"top")},null,14,U)])]),_:1})]),_:1},8,["data"]),a(C,{background:"",layout:"prev, pager, next",total:30})])}}},R=$(W,[["__scopeId","data-v-cdda3aeb"]]);export{R as default};
