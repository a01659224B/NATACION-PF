<script setup>
</script>

<template>
<div class="cursos">
    <h3>Cursos</h3>
    <div class="container text-center">
        <div class="row align-items-center">

    <div class="col">
        <div class="card">
            <img src="src/components/imagenes/22221495_1494986850591554_5286114235300830434_n.jpg" class="card-img-top" alt="...">
        <div class="card-body bc-azul text-center">
        <h5 class="card-title">Natacion Niños</h5>
        <a href="#" class="btn btn-warning">Conoce más</a>
        </div>
        </div>       
        </div>

    <div class="col">
        <div class="card">
    <img src="src/components/imagenes/21728814_1473610312729208_566200209273822402_o.jpg" class="card-img-top" alt="...">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Adultos</h5>
    <a href="#" class="btn btn-warning">Conoce más</a>
    </div>
</div>
    </div>
    <div class="col">
        <div class="card col">
    <img src="src/components/imagenes/273209402_4785210898235783_6528893329297105951_n.jpg" class="card-img-top" alt="...">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Bebes</h5>
   <a href="#" class="btn btn-warning">Conoce más</a>
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
    
.card{
    width: 18rem;
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
    justify-content: center;
}

.btn{
    background-color:#EBE741;
}

.cursos a{
    font-family:  'Montserrat', sans-serif;
    color:#3C469E;
}

</style>