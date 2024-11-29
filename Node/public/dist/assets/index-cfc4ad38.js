import{_ as R,l as I,r as x,m as T,a as n,o as q,i as $,e as t,d as s,u as V,V as O,W as P,z as g,b as i,y as f,f as S,c as U,n as A,p as H,h as E}from"./index-f999da55.js";import{f as C}from"./index-823fbab8.js";const B=c=>C({url:"/user/login",method:"post",data:c}),M=c=>C({url:"/user/register",method:"post",data:c});const z={class:"registerTip"},J={__name:"loginForm",emits:["toRegister"],setup(c,{emit:_}){const e=I({loading:!1,userid:"",password:"",remember:!0}),u=x(null),b=I({userid:[{required:!0,message:"account",trigger:"blur"}],password:[{required:!0,message:"password",trigger:"blur"}],checkpass:[{required:!0,message:"password",trigger:"blur"},{validator:(r,o,l)=>{o!==e.password?l(new Error("Password incorrect！")):l()},trigger:"blur"}]}),F=async r=>{r&&await r.validate((o,l)=>{if(o)return w();for(const a in l)if(Object.hasOwnProperty.call(l,a)){f.error(l[a][0].message);return}})},w=async()=>{e.loading=!0;try{let r=await B({userid:e.userid,password:e.password});if(e.loading=!1,r.code!==200)return f.error(r.msg);f.success(r.msg);let o=JSON.parse(JSON.stringify(r.data)),{token:l}=o;if(delete o.token,sessionStorage.setItem("token",l),sessionStorage.setItem("user",JSON.stringify(o)),e.remember,S.currentRoute.value.query.fileid){let{fileid:a,filename:d,username:y}=S.currentRoute.value.query;const k=`/invited/${a}`,h={filename:d,username:y};return S.push({path:k,query:h})}S.push("/home")}catch{e.loading=!1,f.error("服务器异常，请检查！")}},v=r=>(_("toRegister"),r.resetFields());return T(()=>{sessionStorage.clear()}),(r,o)=>{const l=n("el-icon"),a=n("el-input"),d=n("el-form-item"),y=n("el-button"),k=n("el-checkbox"),h=n("el-link"),p=n("el-form");return q(),$(p,{ref_key:"loginFormRef",ref:u,rules:b,model:e,"label-width":"0px"},{default:t(()=>[s(d,{prop:"userid"},{default:t(()=>[s(a,{placeholder:"account",modelValue:e.userid,"onUpdate:modelValue":o[0]||(o[0]=m=>e.userid=m),disabled:e.loading},{prefix:t(()=>[s(l,null,{default:t(()=>[s(V(O))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),s(d,{prop:"password"},{default:t(()=>[s(a,{placeholder:"password",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=m=>e.password=m),disabled:e.loading},{prefix:t(()=>[s(l,null,{default:t(()=>[s(V(P))]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),s(d,null,{default:t(()=>[s(y,{type:"primary",style:{width:"100%"},onClick:o[2]||(o[2]=m=>F(u.value)),loading:e.loading},{default:t(()=>[g(" Log in ")]),_:1},8,["loading"])]),_:1}),s(d,null,{default:t(()=>[i("div",z,[i("span",null,[s(k,{modelValue:e.remember,"onUpdate:modelValue":o[3]||(o[3]=m=>e.remember=m),size:"small"},null,8,["modelValue"]),g("remember ")]),i("span",null,[g(" No account? "),s(h,{type:"warning",onClick:o[4]||(o[4]=m=>v(u.value))},{default:t(()=>[g(" register ")]),_:1})])])]),_:1})]),_:1},8,["rules","model"])}}},j=R(J,[["__scopeId","data-v-40b28e22"]]);const W={class:"registerTip"},X={__name:"registerForm",emits:["toLogin"],setup(c,{emit:_}){const e=I({userid:"",password:"",checkpass:""}),u=x(null),b=I({userid:[{required:!0,message:"account",trigger:"blur"}],password:[{required:!0,message:"password",trigger:"blur"}],checkpass:[{required:!0,message:"password",trigger:"blur"},{validator:(r,o,l)=>{o!==e.password?l(new Error("密码不一致！")):l()},trigger:"blur"}]}),F=async r=>{r&&await r.validate((o,l)=>{if(o)return w();for(const a in l)if(Object.hasOwnProperty.call(l,a)){f.error(l[a][0].message);return}})},w=async()=>{const r=await M({userid:e.userid,password:e.password});if(r.code!==200)return f.error(r.msg);f.success("注册成功"),_("toLogin"),e.userid="",e.password="",e.checkpass=""},v=r=>(_("toLogin"),r.resetFields());return(r,o)=>{const l=n("el-icon"),a=n("el-input"),d=n("el-form-item"),y=n("el-button"),k=n("el-link"),h=n("el-form");return q(),$(h,{ref_key:"registerFormRef",ref:u,rules:b,model:e,"label-width":"0px"},{default:t(()=>[s(d,{prop:"userid"},{default:t(()=>[s(a,{placeholder:"account",modelValue:e.userid,"onUpdate:modelValue":o[0]||(o[0]=p=>e.userid=p)},{prefix:t(()=>[s(l,null,{default:t(()=>[s(V(O))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{prop:"password"},{default:t(()=>[s(a,{placeholder:"password",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=p=>e.password=p)},{prefix:t(()=>[s(l,null,{default:t(()=>[s(V(P))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{prop:"checkpass"},{default:t(()=>[s(a,{placeholder:"password",type:"password","show-password":"",modelValue:e.checkpass,"onUpdate:modelValue":o[2]||(o[2]=p=>e.checkpass=p)},{prefix:t(()=>[s(l,null,{default:t(()=>[s(V(P))]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,null,{default:t(()=>[s(y,{type:"primary",style:{width:"100%"},onClick:o[3]||(o[3]=p=>F(u.value))},{default:t(()=>[g(" 注册 ")]),_:1})]),_:1}),s(d,null,{default:t(()=>[i("div",W,[g(" 已有账号？请 "),s(k,{type:"warning",onClick:o[4]||(o[4]=p=>v(u.value))},{default:t(()=>[g(" 前往登录 ")]),_:1})])]),_:1})]),_:1},8,["rules","model"])}}},D=R(X,[["__scopeId","data-v-cdb40631"]]);const N=c=>(H("data-v-28e41fa2"),c=c(),E(),c),G={class:"login"},K=N(()=>i("div",{class:"login-mask"},null,-1)),Q={class:"login-box"},Y=N(()=>i("div",{class:"login-box-left"},[i("div",{class:"login-box-left-logo"},[i("i",{class:"iconfont icon-circulation"})]),i("div",{class:"login-box-left-tip"},[i("ul",null,[i("li",null,"Multi Person Online Editor"),i("li",null,"Support Word、TXT、Markdown")])])],-1)),Z={class:"login-box-form"},ee={__name:"index",setup(c){const _=x("login"),e=x("LoginAnimation"),u=x("log in"),L=()=>(e.value="RegisterAnimation",u.value="注册"),b=()=>(e.value="LoginAnimation",u.value="登录");return T(()=>sessionStorage.clear()),(F,w)=>{const v=n("el-tab-pane"),r=n("el-tabs");return q(),U("div",G,[K,i("div",Q,[Y,i("div",Z,[s(r,{modelValue:_.value,"onUpdate:modelValue":w[0]||(w[0]=o=>_.value=o),class:"demo-tabs"},{default:t(()=>[s(v,{label:u.value,name:"login",class:A(e.value)},{default:t(()=>[s(j,{onToRegister:L}),s(D,{onToLogin:b})]),_:1},8,["label","class"])]),_:1},8,["modelValue"])])])])}}},te=R(ee,[["__scopeId","data-v-28e41fa2"]]);export{te as default};
