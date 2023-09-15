<script setup>
import { RouterLink, RouterView } from 'vue-router';
import encabezado from '../components/encabezado.vue';
import Nosotros from '../components/Nosotros.vue';
import cardshor from '../components/cardshor.vue';
import cardscu from '../components/cardscu.vue';
import pie from '../components/pie.vue';

</script> 

<template> 
<encabezado></encabezado>
<Nosotros></Nosotros>
<cardscu></cardscu>
<cardshor></cardshor>
<pie></pie>
</template>