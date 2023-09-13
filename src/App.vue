<script setup>
import Encabezado from './components/Encabezado.vue'
import Nosotros from './components/Nosotros.vue'
import CardHor from './components/CardHor.vue'
import CardsCu from './components/CardsCu.vue'
import Footer from './components/Footer.vue'
import BotonPrecio from './components/BotonPrecio.vue'
import Boton from './components/Boton.vue'
//import LoadingSpinner from './components/icons/LoadingSpinner.vue'
//let loading = ref(true)
</script> 

<template> 
<Encabezado></Encabezado>
<Nosotros></Nosotros>
<CardsCu></CardsCu>
<CardHor></CardHor>
<Footer></Footer>
<BotonPrecio></BotonPrecio>
<Boton></Boton>

<!-- <LoadingSpinner v-if="loading"/>  -->
<router-link to="/Adultos.vue">Adultos</router-link>
<router-link to="/Bebe.vue">Bebe</router-link>
<router-link to="/Ninos.vue">Ninos</router-link> 
</template>


