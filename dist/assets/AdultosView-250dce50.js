import{_ as u,r as n,a as _,o as p,c as h,b as s,d as o,u as d,B as m,w as v,F as f,e as A,p as g,f as B,h as j}from"./index-bfd91ec8.js";import{B as k}from"./BotonPrecio-005c51d1.js";import{B as w}from"./BotonVip-7902d395.js";const a=t=>(g("data-v-8f0c3871"),t=t(),B(),t),b={class:"A1"},x=a(()=>s("h3",{class:"AH31"},"Clases de Natacion",-1)),y=a(()=>s("h3",{class:"AH32"},"para Adultos ",-1)),V=a(()=>s("p",null,"Nuestras clases están cuidadosamente diseñadas para satisfacer tus necesidades y objetivos individuales. Ya sea que busques adquirir nuevas habilidades, expandir tus conocimientos o simplemente disfrutar de un pasatiempo enriquecedor, tenemos una variedad de opciones para ti. Nuestros instructores altamente calificados y apasionados te guiarán en cada paso del camino. Desde clases de arte y música hasta talleres de cocina y cursos de desarrollo personal, nuestro objetivo es inspirarte y empoderarte. ",-1)),I=a(()=>s("div",{class:"A14"},[s("img",{src:j})],-1)),N=a(()=>s("p",null,"Por lo general, las clases de natación para adultos suelen estar diseñadas para edades comprendidas de los 12 años en adelante.",-1)),H={class:"grid-container"},q={class:"container1"},P="https://raw.githubusercontent.com/dulcek96/API/main/naatare.json",C="https://raw.githubusercontent.com/dulcek96/API/main/natareH.json",S={__name:"AdultosView",setup(t){let i=n([]),c=n([]),r=n([]);return fetch(P).then(e=>e.json()).then(e=>{i.value=e.adults,c.value=e.adults_vip}),fetch(C).then(e=>e.json()).then(e=>{r.value=e.adultosh}),(e,F)=>{const l=_("router-link");return p(),h(f,null,[s("div",b,[x,y,V,I,N,s("div",H,[o(k,{adults:d(i)},null,8,["adults"]),o(w,{adults_vip:d(c)},null,8,["adults_vip"]),o(m,{adultosh:d(r)},null,8,["adultosh"])])]),s("div",q,[o(l,{to:"/image1"},{default:v(()=>[A("Horarios de atencion")]),_:1})])],64)}}},T=u(S,[["__scopeId","data-v-8f0c3871"]]);export{T as default};