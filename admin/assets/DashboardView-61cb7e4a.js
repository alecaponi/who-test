import{d,r as u,c as h,a as o,t as m,b as n,F as f,o as _,_ as p}from"./index-21beddaf.js";import{_ as g}from"./ValidationCharts.vue_vue_type_script_setup_true_lang-df376a20.js";const x={class:"text-center text-3xl font-bold"},w={class:"mx-auto flex max-w-md flex-row items-center justify-center gap-2 p-4"},b={class:"mx-auto max-w-screen-lg"},k=d({__name:"DashboardView",setup(v){const a=u([]);function s(){a.value=[],localStorage.documentsLanguage&&fetch("https://"+window.location.host+"/.auth/me").then(e=>e).then(e=>e.json()).then(e=>{fetch("https://who-admin-backend.azurewebsites.net/api/list?language="+localStorage.documentsLanguage,{headers:{Authorization:"Bearer "+e.id_token}}).then(t=>t.json()).then(t=>{t.forEach(c=>{c.children.forEach(r=>{r.split.forEach(i=>{i.converted.forEach(l=>{a.value.push(l)})})})})})})}return(e,t)=>(_(),h(f,null,[o("h1",x,m(e.$t("dashboard")),1),o("div",w,[n(p,{onChangeDocumentsLanguage:s})]),o("div",b,[n(g,{documentValidations:a.value},null,8,["documentValidations"])])],64))}});export{k as default};
