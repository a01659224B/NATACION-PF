<template>
    <footer class="footer">
        <div class="footer-logo">
            
            <img src="src/components/imagenes/na-pn (1).png" alt="Logo" />
        </div>
        <div class="footer-social">
            
            <p>REDES SOCIALES</p>
            <a href="https://t.me/tucanal" target="_blank"><i class="fab fa-telegram"></i></a>
            <a href="https://wa.me/tunumero" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/tupagina" target="_blank"><i class="fab fa-facebook"></i></a>
        </div>
        <div class="footer-links">
            <p>UBICACION</p>
            <router-link to="/ubicacion">Av. Tonaltecas 2650, Arboledas de San Gaspar, 45410 Tonalá, Jal.</router-link>
        </div>
        <p>Naatare - © 2023 Todos los derechos reservados</p>
    </footer>
    </template>
    
    <style scoped>
    .footer {
        background-color: #3771C8; 
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        position: relative; 
        font-family: 'Montserrat', sans-serif;
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
    
    </style>