<template>
    
    <div id="app">
        
        <button @click="cambiarColor" :style="{ backgroundColor: botonColor }">Precio</button>
    </div>
</template>
    <script>
        new Vue({
            el: '#app',
            data: {
                botonColor: 'yellow'
            },
            methods: {
                cambiarColor: function() {
                    
                    const colores = ['#ff5733', '#ffde33', '#33ff57', '#337aff', '#ff33c7'];
                    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
                    this.botonColor = colorAleatorio;
                }
            }
        });