<template>
<div class="container">
    <div class="item"> 
        <a class="nav-link t-azul" href="#"><i class="fab fa-whatsapp"></i></a> 
        <a class="nav-link t-azul bc-amarillo" href="#"><i class="fab fa-facebook"></i> </a>  
        <a class="nav-link t-azul bc-amarillo" href="#"><i class="fab fa-telegram"></i></a> 
        <a class="nav-link t-azul bc-amarillo" href="#">Contáctanos</a> 
    </div>
</div>

  <div class="container2">
      <div class="left">
          <div class="left-inner">
              <div>
                  <img src="https://images.pexels.com/photos/5324313/pexels-photo-5324313.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load">
              </div>
              <div class="texto1">
                Nada... 
              </div>
              <div class="texto2">
                Nada...Por salud, deporte o
              </div>
              <div class="texto1">
                para salvar tu vida. 
              </div>
        </div>
    </div>
  <div class="right">
    <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800">
 </div>
</div>

<nav class="navbar navbar-expand-lg bc-azul">
  <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
      <li class="nav-item mx-3">
        <a class="nav-link t-amarillo" href="#">Nosotros</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link t-amarillo" href="#">Cursos</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link t-amarillo" href="#">Horarios</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link t-amarillo" href="#">Requisitos</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
body{
    background-color: #3C469E;}

  .item {
    color: #3C469E;
    padding: 1%;
    display: flex;
    justify-content: flex-end;
}
.item a {
    text-decoration: none; 
    margin-right: 10px; 
    background-color: #EBE741;
    color:#3C469E;
    padding: 1%;
    font-size: 15 px;
    border-radius: 10%;
}
.container {
  background-color: #3771C8;
  color:#3C469E;
  justify-content: flex-end;
  width:100%;
  margin: 0;
  padding: 0; 
}
        
.container2 {
  display: flex;
}

.left {
  margin-left: 4%;
  flex: 1;
  background-color:#3C469E;
  padding: 20px;
}

.left img {
max-width: 100%;
display: block; 
}

.texto1{
color:#EBE741;
font-size: 24px;
}

.texto2{
color:white;
font-size: 24px;
}

.right {
flex: 1;
background-color:#3C469E;
padding: 20px;
margin-right: 4%;}

.right img {
max-width: 100%; 
display: block; 
margin: 0 auto; 
}

.left-inner {
padding: 10px;
}
.left-inner > div {
padding: 10px;
}

.navbar-nav {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.nav-item:first-child {
  margin-left: 20px; 
}

.nav-item:last-child {
  margin-right: 20px; 
}

.bc-azul {
  background-color: #3771C8; 
}

.bc-amarillo {
  background-color: #EBE741; 
}

.t-azul {
  color: #3771C8 !important; 
}

.t-amarillo {
  color: #EBE741 !important; 
}
.ml-3{
  margin-right: 3px;
}
.br{
border-radius: 10px 20px 15px 5px;
}
.fs-24{
  font-size: 24px;
}
.fs-30{
  font-size: 30px;
}
</style>

<script>
export default{
  name:'Encabezado'
}
</script>

