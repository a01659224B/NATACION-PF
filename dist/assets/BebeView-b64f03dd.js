import{_ as l,r,a as _,o as u,c as p,b as e,d as t,u as i,B as b,w as h,F as m,e as v,p as f,f as g,g as y}from"./index-bfd91ec8.js";import{B}from"./BotonPrecio-005c51d1.js";const a=o=>(f("data-v-374006dc"),o=o(),g(),o),j={class:"A1"},k=a(()=>e("h3",{class:"AH31"},"Clases de Natacion",-1)),w=a(()=>e("h3",{class:"AH32"},"para bebés ",-1)),x=a(()=>e("p",null,"Nuestras clases están diseñadas específicamente para bebés, desde recién nacidos hasta sus primeros pasos. Cada sesión está llena de actividades divertidas y estimulantes que ayudan en el desarrollo temprano de su hijo. Desde canciones y juegos interactivos hasta actividades sensoriales, nuestro objetivo es fomentar el desarrollo cognitivo, emocional y motor de su bebé de una manera segura y enriquecedora.",-1)),A=a(()=>e("div",{class:"A14"},[e("img",{src:y})],-1)),I=a(()=>e("p",null,"Por lo general, las clases de natación para bebés suelen estar diseñadas para edades comprendidas entre los 6 meses a los 3 años.",-1)),V={class:"grid-container"},H={class:"container2"},N="https://raw.githubusercontent.com/dulcek96/API/main/naatare.json",C="https://raw.githubusercontent.com/dulcek96/API/main/natareH.json",P={__name:"BebeView",setup(o){let n=r([]),c=r([]);return fetch(N).then(s=>s.json()).then(s=>{n.value=s.baby}),fetch(C).then(s=>s.json()).then(s=>{c.value=s.bebesh}),(s,S)=>{const d=_("router-link");return u(),p(m,null,[e("div",j,[k,w,x,A,I,e("div",V,[t(B,{baby:i(n)},null,8,["baby"]),t(b,{bebesh:i(c)},null,8,["bebesh"])])]),e("div",H,[t(d,{to:"/image2"},{default:h(()=>[v("Horarios de atencion")]),_:1})])],64)}}},L=l(P,[["__scopeId","data-v-374006dc"]]);export{L as default};