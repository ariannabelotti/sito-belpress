import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';

createApp(App).use(router).mount('#app');

// questa è la pagina principale dell'applicazione,
// in cui importiamo la funzione createApp di Vue,
// il file di stile, il componente principale App.vue e il router,
//SERVE PER BUILDARE L'APPLICAZIONE, CREANDO UN'ISTANZA DI VUE E MONTANDOLA SULL'ELEMENTO CON ID "app" NEL FILE HTML.