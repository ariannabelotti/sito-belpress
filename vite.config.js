import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/sito-belpress/',
  build: {
    sourcemap: true
  }   
});
// questa pagina è la configurazione di vite, il build tool che stiamo usando, in questo file importiamo i plugin che ci servono, 
// in questo caso il plugin per Vue e quello per Tailwind CSS, poi esportiamo la configurazione di vite, 
// in cui specifichiamo i plugin da usare, la base url del progetto e la generazione dei sourcemap per facilitare il debug.