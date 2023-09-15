<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<div class="cursos">
    <h3>Cursos</h3>
    <div class="container text-center">
        <div class="row justify-content-md-center">

    <div class="col">
        <div class="card">
            <img src="src/components/imagenes/22221495_1494986850591554_5286114235300830434_n.jpg" class="card-img-top" alt="...">
        <div class="card-body bc-azul text-center">
        <h5 class="card-title">Natacion Niños</h5>
        <button
        class="custom-btn"
        @click="handleClick"
        > <RouterLink :to="{ name: 'Ninos' }">Conoce más</RouterLink>
        </button>
        </div>
        </div>       
        </div>

    <div class="col">
        <div class="card">
    <img src="src/components/imagenes/21728814_1473610312729208_566200209273822402_o.jpg" class="card-img-top" alt="...">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Adultos</h5>
    <button
        class="custom-btn"
        @click="handleClick"
        > <RouterLink :to="{ name: 'Adultos' }">Conoce más</RouterLink>

        </button>
    </div>
</div>
    </div>
    <div class="col">
        <div class="card col">
    <img src="src/components/imagenes/273209402_4785210898235783_6528893329297105951_n.jpg" class="card-img-top" alt="...">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Bebes</h5>
    <button
        class="custom-btn"
        @click="handleClick"
        > <RouterLink :to="{ name: 'Bebe' }">Conoce más</RouterLink>
        </button>
    </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<style>
.btn{
    background-color:#EBE741;
}
.btn-amarillo {
    background-color: #EBE741;
    color: #3771C8;
    border: none; 
}

.bc-azul{
      background-color: #3771C8;
}
 
.card col{
    padding:0px;
    margin:0;
    text-align: center;
    align-items: center;
}
.card{
    width: 18rem;
    padding:0px;
    margin:0;
}

.card-title{
    font-family: 'Averia Serif Libre', cursive;;
}

.cursos h3{
    margin-top: 2%;
    margin-bottom: 1%;
    color:#3C469E;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: space-evenly;
}

.btn{
    background-color:#EBE741;
}

.cursos a{
    text-decoration: none;
    font-family:  'Montserrat', sans-serif;
    color:#3C469E;
}

</style>