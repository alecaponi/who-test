import{d,r as u,c as h,a as o,t as m,b as n,F as f,o as _,_ as g}from"./index-9cd1b927.js";import{_ as p}from"./ValidationCharts.vue_vue_type_script_setup_true_lang-cb84fe6c.js";const x={class:"text-center text-3xl font-bold"},w={class:"mx-auto flex max-w-md flex-row items-center justify-center gap-2 p-4"},b={class:"mx-auto max-w-screen-lg"},k=d({__name:"DashboardView",setup(v){const t=u([]);function s(){t.value=[],localStorage.documentsLanguage&&fetch(window.location.host+"../.auth/me").then(e=>e).then(e=>e.json()).then(e=>{fetch("https://who-admin-backend.azurewebsites.net/api/list?language="+localStorage.documentsLanguage,{headers:{Authorization:"Bearer "+e.id_token}}).then(a=>a.json()).then(a=>{a.forEach(c=>{c.children.forEach(r=>{r.split.forEach(i=>{i.converted.forEach(l=>{t.value.push(l)})})})})})})}return(e,a)=>(_(),h(f,null,[o("h1",x,m(e.$t("dashboard")),1),o("div",w,[n(g,{onChangeDocumentsLanguage:s})]),o("div",b,[n(p,{documentValidations:t.value},null,8,["documentValidations"])])],64))}});export{k as default};
