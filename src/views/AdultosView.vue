<script setup>
import BotonPrecio from '../components/BotonPrecio.vue'
import BotonHorario from '../components/BotonHorario.vue';
</script> 

<template> 
<div class="A1">
    <h3 class="AH31">Clases de Natacion</h3>
    <h3 class="AH32">para Adultos </h3>
    <p>Nuestras clases están cuidadosamente diseñadas para satisfacer tus necesidades y objetivos individuales. Ya sea que busques adquirir nuevas habilidades, expandir tus conocimientos o simplemente disfrutar de un pasatiempo enriquecedor, tenemos una variedad de opciones para ti.
      Nuestros instructores altamente calificados y apasionados te guiarán en cada paso del camino. Desde clases de arte y música hasta talleres de cocina y cursos de desarrollo personal, nuestro objetivo es inspirarte y empoderarte.
    </p>
    <div class="A14">
      <img src="src/assets/imagenes/AdultoMayor.jpg">
    </div>
    <p>Por lo general, las clases de natación para adultos suelen estar diseñadas para edades comprendidas de los 12 años en adelante.</p>
    <div class="grid-container">
    <BotonPrecio></BotonPrecio>
    <BotonHorario></BotonHorario>
  </div>
</div>
</template> 

<style scoped>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Dos columnas de igual tamaño */
      grid-gap: 10px; /* Espacio entre las celdas */
    }
.AH31{
    color:#EBE741;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}
.AH32{
    color:white;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}

.A1 p{  
    font-family: 'Montserrat', sans-serif;
    color:white;
    padding-left: 3%;
    padding-right: 3%;
    text-align: justify;}

.A1{
    background-color:#3C469E;
    padding: 2%;
    justify-content: space-evenly;
}

.A14 img{
  max-width: 300px; 
    display: block; 
    margin: 0 auto; 
}
.container {
  text-align: center; 
  margin-top: 20px; 
}

.table {
  width: 50%; 
  border-width: 200px; 
}
</style>