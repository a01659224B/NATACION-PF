<template>
    <div class="image-text-container">
        <div class="rounded float-start z-2 position-absolute p-5 rounded-5">
        <img src="@/assets/imagenes/niño3.jpg" alt="Imagen 2" class="styled-image">
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
        max-width: 250px; 
        margin: 0 auto;
    
    }
    
    .styled-image {
        max-width: 50%;
        display: block;
        margin: 0 auto;
    }
    
    .text-container {
        background: #1A2980;  
        background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  
        background: linear-gradient(to right, #26D0CE, #1A2980); 
        color: #fff; 
        padding: 50px; 
        font-family:  'Montserrat', sans-serif;
        max-width: 400px; 
        margin-bottom: 15%;
    }
    
    </style>