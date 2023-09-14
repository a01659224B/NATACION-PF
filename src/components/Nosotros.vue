<script setup>
</script>

<template>
<div class="container3">
    <h3>Nosotros</h3>
    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
    <div class="container4">
      <img src="src/components/imagenes/21728814_1473610312729208_566200209273822402_o.jpg">
      <img src="src/components/imagenes/22221495_1494986850591554_5286114235300830434_n.jpg">
      <img src="src/components/imagenes/273209402_4785210898235783_6528893329297105951_n.jpg">
    </div>
  </div>
</template>

<style>
.container3 h3{
    color:#EBE741;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}

.container3 p{  
    font-family: 'Montserrat', sans-serif;
    color:white;
    padding-left: 3%;
    padding-right: 3%;
    text-align: justify;}

.container3{
    background-color:#3C469E;
    padding: 2%;
    justify-content: space-evenly;
}

.container4 {
    display:flex;
    justify-content: space-evenly;
    align-items: center;

}
.container4 img{
    width: 15%;
    margin-right: 10px; 
}

</style>