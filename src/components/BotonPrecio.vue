<script>
export default {
  data() {
    return {
      buttonText: "Conoce Más",
      clicked: false
    };
  },
  
};
</script>
<template>
    <button
      class="custom-btn"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>
  </template>
  
  <style scoped>
  .custom-btn {
    background-color: #EBE741; /* Color púrpura personalizado */
    color: #000; /* Color de texto negro */
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out; /* Transición suave del color de fondo */
  }
  
  .custom-btn:hover {
    background-color: #9D1C9E; /* Cambiar a rosa al pasar el mouse sobre el botón */
  }
  
  .custom-btn:focus {
    outline: none; /* Eliminar el contorno al hacer clic en el botón */
  }
  </style>