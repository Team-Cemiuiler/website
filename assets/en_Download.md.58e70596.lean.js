import{_ as t}from"./chunks/bilibili.79fd7741.js";import{_ as o,o as a,c as n,Q as i}from"./chunks/framework.419948d5.js";const l={mounted(){fetch("https://api.github.com/repos/saraSakuHj/Hyperceiler/releases/latest").then(e=>e.json()).then(e=>{if(document.getElementById("info")){const r=e.body.replace(/\r\n/g,"<br/>");document.getElementById("info").innerHTML=r}document.getElementById("version").innerHTML=e.name,document.getElementById("date").innerHTML=e.published_at,document.getElementById("hidden").innerHTML=""})}},_=JSON.parse('{"title":"Download","description":"","frontmatter":{},"headers":[],"relativePath":"en/Download.md","filePath":"en/Download.md"}'),s=i("",23),p=[s];function d(e,r,c,m,u,h){return a(),n("div",null,p)}const b=o(l,[["render",d]]);export{_ as __pageData,b as default};