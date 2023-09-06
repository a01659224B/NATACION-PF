<template>
<head>
    <title>Barra de Navegación</title>
    <!-- Incluye los archivos CSS y JavaScript de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
</template>

<script>
export default{
    name:'Boton',
    data(){
        return{
            
        }
    }
}

</script>

<style >       
.custom-navbar {
     background-color: #3771C8; /* Color de fondo de la barra de navegación */
        }
    .custom-navbar .navbar-nav .nav-link {
        color: #EBE741; /* Color del texto en los enlaces */
        }
</style>