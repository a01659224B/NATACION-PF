<template>
<footer class="footer">
    <div class="footer-border-top"></div> <!-- Línea blanca superior -->
    <div class="footer-logo">
        <!-- Agrega aquí tu logo -->
        <img src="tu-logo.png" alt="Logo" />
    </div>
    <div class="footer-social">
        <!-- Enlaces a las redes sociales -->
        <p>REDES SOCIALES</p>
        <a href="https://t.me/tucanal" target="_blank"><i class="fab fa-telegram"></i></a>
        <a href="https://wa.me/tunumero" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/tupagina" target="_blank"><i class="fab fa-facebook"></i></a>
    </div>
    <div class="footer-links">
        <p>UBICACION</p>
        <router-link to="/ubicacion">Av. Tonaltecas 2650, Arboledas de San Gaspar, 45410 Tonalá, Jal.</router-link>
    </div>
    <div class="footer-border-bottom"></div> <!-- Línea blanca inferior -->
    <p>Naatare - © 2023 Todos los derechos reservados</p>
</footer>
</template>

<style scoped>
.footer {
    background-color: #3771C8; /* Color azul */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: relative; /* Permite posicionar las líneas */
}

.footer-logo img {
    max-height: 40px;
}

.footer-social a {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
    font-size: 20px;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}

p{
    color:#EBE741
    
}
.footer-border-top,
.footer-border-bottom {
    height: 2px;
    background-color: #fff; /* Color blanco */
    position: absolute;
    left: 0;
    right: 0;
}

.footer-border-top {
    top: 0;
}

.footer-border-bottom {
    bottom: 0;
}
</style>