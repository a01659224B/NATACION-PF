import{_ as b,o as l,c as s,b as e,t as a,F as o,j as c,k as h,p as i,f as p}from"./index-fff15c5a.js";const y={data(){return{buttonText:"Precios",showTable:!1}},methods:{showTableData(){this.showTable=!0}},props:{children:Array,adults:Array,baby:Array}},k=r=>(i("data-v-57183191"),r=r(),p(),r),T={key:0},f=k(()=>e("thead",null,[e("tr",null,[e("th",null,"Clases"),e("th",null,"Precio")])],-1));function w(r,u,n,B,d,_){return l(),s("div",null,[e("button",{class:"custom-btn BtnPrecio",onClick:u[0]||(u[0]=(...t)=>_.showTableData&&_.showTableData(...t))},a(d.buttonText),1),d.showTable?(l(),s("table",T,[f,e("tbody",null,[(l(!0),s(o,null,c(n.adults,t=>(l(),s("tr",{key:t.class},[e("td",null,a(t.class),1),e("td",null,a(t.price),1)]))),128)),(l(!0),s(o,null,c(n.children,t=>(l(),s("tr",{key:t.class},[e("td",null,a(t.class),1),e("td",null,a(t.price),1)]))),128)),(l(!0),s(o,null,c(n.baby,t=>(l(),s("tr",{key:t.class},[e("td",null,a(t.class),1),e("td",null,a(t.price),1)]))),128))])])):h("",!0)])}const v=b(y,[["render",w],["__scopeId","data-v-57183191"]]);export{v as B};
