<script>
import Encabezado from './components/Encabezado.vue';
</script>

<template>
  <router-link to="/">Adultos</router-link>
  <router-link to="/">Bebe</router-link>
  <router-link to="/">Ninos</router-link>

<header>


  <nav class="navbar navbar-expand-lg bc-azul">
    <div class="collapse navbar-collapse ml-3 justify-content-end" id="navbarNav">
      <ul class="navbar-nav bc-amarillo">
        <li class="nav-item active bc-amarillo">
          <a class="nav-link" href="#"><i class="fab fa-whatsapp t-azul fs-24"></i> </a>
        </li>
        <li class="nav-item bc-amarillo">
          <a class="nav-link" href="#"><i class="fab fa-facebook t-azul fs-24"></i> </a>
        </li>
        <li class="nav-item bc-amarillo">
          <a class="nav-link" href="#"><i class="fab fa-telegram t-azul fs-24"></i></a>
        </li>
        <li class="nav-item t-azul">
          <a class="nav-link t-azul fs-30" href="#">Contáctanos</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

  <body>
  <nav class="navbar navbar-expand-lg bg-dark">
      <a class="navbar-brand" href="#">Mi Sitio Web</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Nosotros</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Cursos</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Horarios</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Requisitos</a>
              </li>
          </ul>
      </div>
  </nav>
 

  </body>
  <router-view/>
  </template>
  
  
  <style >       
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
  background-color: #EBE741; 
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



