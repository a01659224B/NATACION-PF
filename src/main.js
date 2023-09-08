// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure the path is correct

createApp(App).use(router).mount('#app');