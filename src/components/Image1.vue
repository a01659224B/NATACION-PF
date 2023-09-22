<template>
<div class="image-text-container">
    <div class="rounded float-start z-2 position-absolute p-5 rounded-5">
    <img src="@/assets/imagenes/imagen1.jpg" alt="Imagen 1" class="styled-image">
    </div>
    <div class="text-container z-2 rounded-5">
    <p class="text-center">Lun a Vier. 09:00 a 21:00 hrs</p>
    <p class="text-center">Sab y Dom. 09:00 a 14:00 hrs</p>
        </div>    
    </div>
</template>

<style>
.image-text-container {
    display: flex;
    max-width: 250px; /* Ajusta el ancho total según tus necesidades */
    margin: 0 auto;

}

.styled-image {
    max-width: 50%;
    display: block;
    margin: 0 auto;
}

.text-container {
    background: #1A2980;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff; /* Color de texto blanco para que se destaque en el fondo azul */
    padding: 50px; /* Espaciado interno para el contenedor del párrafo */
    font-family:  'Montserrat', sans-serif;
    max-width: 400px; 
    margin-bottom: 15%;
}

</style>

