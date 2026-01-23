//router è uno strumento che permette di navigare tra le pagine di un'applicazione Vue.js
// In questo file definiamo le rotte dell'applicazione
//vue è un front end framework per costruire interfacce utente
// vue-router è una libreria che permette di gestire la navigazione tra le pagine

import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import "leaflet/dist/leaflet.css";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
,
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, scrollBehavior() {
      return { top: 0 }
    }
})

export default router