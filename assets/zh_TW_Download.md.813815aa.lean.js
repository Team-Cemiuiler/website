import{_ as t}from"./chunks/bilibili.79fd7741.js";import{_ as a,o,c as l,O as n}from"./chunks/framework.4afe7240.js";const i={mounted(){fetch("https://api.github.com/repos/saraSakuHj/Hyperceiler/releases/latest").then(e=>e.json()).then(e=>{if(document.getElementById("info")){const r=e.body.replace(/\r\n/g,"<br/>");document.getElementById("info").innerHTML=r}document.getElementById("version").innerHTML=e.name,document.getElementById("date").innerHTML=e.published_at,document.getElementById("hidden").innerHTML=""})}},b=JSON.parse('{"title":"下載","description":"","frontmatter":{},"headers":[],"relativePath":"zh_TW/Download.md","filePath":"zh_TW/Download.md"}'),s=n("",24),p=[s];function d(e,r,c,h,u,m){return o(),l("div",null,p)}const f=a(i,[["render",d]]);export{b as __pageData,f as default};