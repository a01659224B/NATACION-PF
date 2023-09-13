<script setup>
</script>

<template>
<div class="horarios">
  <h3>Horarios</h3>
<div class="row">
  <div class="col-sm-4 mb-3">
    <div class="card  text-center">
      <div class="card-body bc-azuloscuro">
        <h5 class="card-title">NIÑOS</h5>
        <a href="#" class="btn btn-warning">Lunes a Viernes</a>
        <br>
        <br>
        <a href="#" class="btn btn-warning">Sábado a Domingo</a>
      </div>
    </div>
  </div> 
  <div class="col-sm-4">
    <div class="card text-center">
      <div class="card-body bc-azuloscuro">
        <h5 class="card-title">ADULTOS</h5>
        <a href="#" class="btn btn-warning">Lunes a Viernes</a>
        <br>
        <br>
        <a href="#" class="btn btn-warning">Sábado a Domingo</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card text-center">
      <div class="card-body bc-azuloscuro">
        <h5 class="card-title">BEBES</h5>
        <a href="#" class="btn btn-warning">Lunes a Viernes</a>
        <br>
        <br>
        <a href="#" class="btn btn-warning">Sábado a Domingo</a>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<style>
.btn-amarillo {
    padding: .375rem .75rem;
    border-radius: .25rem;
    background-color: #EBE741;
    color: #3771C8;
    transition: background-color .15s ease-in-out;
    border: none; 
}

.bc-azuloscuro{
      background-color: #3C469E;}
    
.card{
    width: 18rem;
}

.card-title{
    font-family: 'Averia Serif Libre', cursive;;
}

.horarios h3{
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

.horarios a{
    font-family:  'Montserrat', sans-serif;
    color:#3C469E;
}

</style>