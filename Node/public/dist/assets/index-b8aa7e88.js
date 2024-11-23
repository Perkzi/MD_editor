import{_ as L,l as R,r as h,m as T,a,o as P,i as $,e as t,d as s,u as V,Y as O,Z as q,z as g,b as n,y as f,f as I,c as A,n as E,p as H,h as N}from"./index-89d3ee84.js";import{f as C}from"./index-36ab67f6.js";const B=c=>C({url:"/user/login",method:"post",data:c}),M=c=>C({url:"/user/register",method:"post",data:c});const z={class:"registerTip"},J={__name:"loginForm",emits:["toRegister"],setup(c,{emit:_}){const e=R({loading:!1,userid:"",password:"",remember:!0}),u=h(null),b=R({userid:[{required:!0,message:"请输入账号！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}],checkpass:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:(l,o,r)=>{o!==e.password?r(new Error("密码不一致！")):r()},trigger:"blur"}]}),F=async l=>{l&&await l.validate((o,r)=>{if(o)return v();for(const i in r)if(Object.hasOwnProperty.call(r,i)){f.error(r[i][0].message);return}})},v=async()=>{e.loading=!0;try{let l=await B({userid:e.userid,password:e.password});if(e.loading=!1,l.code!==200)return f.error(l.msg);f.success(l.msg);let o=JSON.parse(JSON.stringify(l.data)),{token:r}=o;if(delete o.token,sessionStorage.setItem("token",r),sessionStorage.setItem("user",JSON.stringify(o)),e.remember,I.currentRoute.value.query.fileid){let{fileid:i,filename:d,username:y}=I.currentRoute.value.query;const k=`/invited/${i}`,x={filename:d,username:y};return I.push({path:k,query:x})}I.push("/home")}catch{e.loading=!1,f.error("服务器异常，请检查！")}},w=l=>(_("toRegister"),l.resetFields());return T(()=>{sessionStorage.clear()}),(l,o)=>{const r=a("el-icon"),i=a("el-input"),d=a("el-form-item"),y=a("el-button"),k=a("el-checkbox"),x=a("el-link"),p=a("el-form");return P(),$(p,{ref_key:"loginFormRef",ref:u,rules:b,model:e,"label-width":"0px"},{default:t(()=>[s(d,{prop:"userid"},{default:t(()=>[s(i,{placeholder:"请输入账号",modelValue:e.userid,"onUpdate:modelValue":o[0]||(o[0]=m=>e.userid=m),disabled:e.loading},{prefix:t(()=>[s(r,null,{default:t(()=>[s(V(O))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),s(d,{prop:"password"},{default:t(()=>[s(i,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=m=>e.password=m),disabled:e.loading},{prefix:t(()=>[s(r,null,{default:t(()=>[s(V(q))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),s(d,null,{default:t(()=>[s(y,{type:"primary",style:{width:"100%"},onClick:o[2]||(o[2]=m=>F(u.value)),loading:e.loading},{default:t(()=>[g(" 登录 ")]),_:1},8,["loading"])]),_:1}),s(d,null,{default:t(()=>[n("div",z,[n("span",null,[s(k,{modelValue:e.remember,"onUpdate:modelValue":o[3]||(o[3]=m=>e.remember=m),size:"small"},null,8,["modelValue"]),g("记住账号")]),n("span",null,[g(" 还没有账号？请 "),s(x,{type:"warning",onClick:o[4]||(o[4]=m=>w(u.value))},{default:t(()=>[g(" 前往注册 ")]),_:1})])])]),_:1})]),_:1},8,["rules","model"])}}},j=L(J,[["__scopeId","data-v-1f315e0f"]]);const W={class:"registerTip"},X={__name:"registerForm",emits:["toLogin"],setup(c,{emit:_}){const e=R({userid:"",password:"",checkpass:""}),u=h(null),b=R({userid:[{required:!0,message:"请输入账号！",trigger:"blur"}],password:[{required:!0,message:"请确认密码！",trigger:"blur"}],checkpass:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:(l,o,r)=>{o!==e.password?r(new Error("密码不一致！")):r()},trigger:"blur"}]}),F=async l=>{l&&await l.validate((o,r)=>{if(o)return v();for(const i in r)if(Object.hasOwnProperty.call(r,i)){f.error(r[i][0].message);return}})},v=async()=>{const l=await M({userid:e.userid,password:e.password});if(l.code!==200)return f.error(l.msg);f.success("注册成功"),_("toLogin"),e.userid="",e.password="",e.checkpass=""},w=l=>(_("toLogin"),l.resetFields());return(l,o)=>{const r=a("el-icon"),i=a("el-input"),d=a("el-form-item"),y=a("el-button"),k=a("el-link"),x=a("el-form");return P(),$(x,{ref_key:"registerFormRef",ref:u,rules:b,model:e,"label-width":"0px"},{default:t(()=>[s(d,{prop:"userid"},{default:t(()=>[s(i,{placeholder:"请输入账号",modelValue:e.userid,"onUpdate:modelValue":o[0]||(o[0]=p=>e.userid=p)},{prefix:t(()=>[s(r,null,{default:t(()=>[s(V(O))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{prop:"password"},{default:t(()=>[s(i,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=p=>e.password=p)},{prefix:t(()=>[s(r,null,{default:t(()=>[s(V(q))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{prop:"checkpass"},{default:t(()=>[s(i,{placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.checkpass,"onUpdate:modelValue":o[2]||(o[2]=p=>e.checkpass=p)},{prefix:t(()=>[s(r,null,{default:t(()=>[s(V(q))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,null,{default:t(()=>[s(y,{type:"primary",style:{width:"100%"},onClick:o[3]||(o[3]=p=>F(u.value))},{default:t(()=>[g(" 注册 ")]),_:1})]),_:1}),s(d,null,{default:t(()=>[n("div",W,[g(" 已有账号？请 "),s(k,{type:"warning",onClick:o[4]||(o[4]=p=>w(u.value))},{default:t(()=>[g(" 前往登录 ")]),_:1})])]),_:1})]),_:1},8,["rules","model"])}}},Y=L(X,[["__scopeId","data-v-678e65e1"]]);const U=c=>(H("data-v-ca030eb3"),c=c(),N(),c),Z={class:"login"},D=U(()=>n("div",{class:"login-mask"},null,-1)),G={class:"login-box"},K=U(()=>n("div",{class:"login-box-left"},[n("div",{class:"login-box-left-logo"},[n("i",{class:"iconfont icon-circulation"})]),n("div",{class:"login-box-left-tip"},[n("ul",null,[n("li",null,"多人协作在线编辑器-Multi Person Online Editor"),n("li",null,"支持Word、Excel、TXT、Markdown等多文件类型"),n("li",null,"效率高、低成本、时效性、多版本控制")])])],-1)),Q={class:"login-box-form"},ee={__name:"index",setup(c){const _=h("login"),e=h("LoginAnimation"),u=h("登录"),S=()=>(e.value="RegisterAnimation",u.value="注册"),b=()=>(e.value="LoginAnimation",u.value="登录");return T(()=>sessionStorage.clear()),(F,v)=>{const w=a("el-tab-pane"),l=a("el-tabs");return P(),A("div",Z,[D,n("div",G,[K,n("div",Q,[s(l,{modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=o=>_.value=o),class:"demo-tabs"},{default:t(()=>[s(w,{label:u.value,name:"login",class:E(e.value)},{default:t(()=>[s(j,{onToRegister:S}),s(Y,{onToLogin:b})]),_:1},8,["label","class"])]),_:1},8,["modelValue"])])])])}}},te=L(ee,[["__scopeId","data-v-ca030eb3"]]);export{te as default};
