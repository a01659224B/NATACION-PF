 <script setup>
import encabezado from '../components/encabezado.vue'
import pie from '../components/pie.vue';
</script> 

<template> 
<encabezado></encabezado>
<div class="A1">
    <h3 class="AH31">Clases de Natacion</h3>
    <h3 class="AH32">para niños  </h3>
    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
    <div class="A14">
      <img src="src/components/imagenes/22221495_1494986850591554_5286114235300830434_n.jpg">
    </div>
    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
  </div>
  <botonprecio></botonprecio>
<pie></pie>
</template> 

<style scoped>
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