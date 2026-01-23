<template>
  <Navbar />

  <section id="video-hero" class="relative w-full min-h-screen bg-cover bg-center">
    <video
      src="../assets/video-hero.mp4"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 object-cover w-full h-full -z-10"
    ></video>

    <div
      class="flex flex-col items-start justify-end pb-24 md:pb-32 lg:pb-40 min-h-screen
             px-6 md:px-14 lg:px-30
             bg-gradient-to-b from-transparent to-black"
    >
      <div class="flex flex-col justify-end items-start">
        <h1 class="text-3xl md:text-4xl font-bold">
          Belpress s.r.l <br />Oltre 30 anni nell'eccellenza metallurgica.
        </h1>

        <h2 class="text-base md:text-lg max-w-full md:max-w-2/3 mt-2 md:mt-1">
          La nostra mission è fondere eccellenza e passione per i metalli non ferrosi, offrendo prodotti di qualità
          superiore che riflettano il nostro impegno artigianale e i valori di una realtà familiare. Dedichiamo cura ai
          nostri clienti, promuovendo relazioni durature.
        </h2>
      </div>

      <div class="mt-6 md:mt-8">
        <a href="mailto:belpress@libero.it">
          <button
            class="bg-orange-500 text-white py-3 px-6 rounded-2xl hover:bg-white transition-colors hover:text-black font-bold"
          >
            Scrivici ora
          </button>
        </a>
      </div>
    </div>
  </section>

  <section
    id="about-us"
    class="w-full flex justify-center items-center flex-col
           px-6 md:px-14 lg:px-30
           py-14 md:py-18 lg:py-20"
  >
    <div class="w-full md:w-5/6 lg:w-3/4 flex items-center justify-center">
      <h3 class="font-light italic text-2xl md:text-3xl text-center py-14 md:py-20 mb-10 md:mb-16 lg:mb-20">
        "Trasformiamo l’alluminio dal lingotto in forme uniche e su misura, guidati dalla passione per l’antica arte
        della fonderia, dove il fuoco e la tecnica plasmano la materia fino a consegnarle identità e valore."
      </h3>
    </div>

    <div class="border-3 border-orange-500 p-6 rounded-3xl w-full md:w-3/5 lg:w-2/5 text-justify">
      <div class="cursor-pointer flex justify-between items-center" @click="apriTendina">
        <!-- il click è una direttiva (attributo speciale del template)  che serve per agganciare un listener in questo caso apritendina a un evento in questo caso  la tendina aperta-->
        <h3 class="text-xl md:text-2xl font-bold text-white">{{ aboutInfo.title }}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <p class="text-base md:text-lg p-6" v-if="tendinaAperta">{{ aboutInfo.content }}</p>
    </div>
    <!-- v-if permette di mostrare o nascondere il contenuto in base allo stato della variabile tendinaAperta che è collegata alla funzione apriTendina -->
  </section>

  <section
    id="services"
    class="w-full px-6 md:px-14 lg:px-30 py-20 md:py-28 lg:py-40
           flex flex-col items-center bg-gradient-to-b from-black to-stone-900 mt-14 md:mt-20"
  >
    <h3 class="text-3xl md:text-4xl font-extrabold text-white mb-12 md:mb-16 lg:mb-20">I nostri servizi</h3>

    <div id="cardWrapper" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 justify-items-center">
      <!-- /* card1 */ -->
      <article class="bg-stone-800 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2">Progettazione</h4>
          <p>Progettiamo e ideiamo il tuo stampo da zero.</p>
        </div>
      </article>

      <!-- /* card2 */ -->
      <article class="bg-stone-400 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2 text-stone-800">Stampaggio</h4>
          <p>Stampiamo il tuo prodotto con precisione e qualità attraverso processi interamente automatizzati.</p>
        </div>
      </article>

      <!-- /* card3 */ -->
      <article class="bg-stone-800 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2">Controllo</h4>
          <p>Controlliamo la qualità del tuo stampo attraverso sistemi di radioscopia.</p>
        </div>
      </article>

      <!-- /* card4 */ -->
      <article class="bg-stone-400 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2 text-stone-800">Lavorazioni</h4>
          <p>Offriamo piccole lavorazioni meccaniche come sabbiatura e tranciatura.</p>
        </div>
      </article>

      <!-- /* card5 */ -->
      <article class="bg-stone-600 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2">Imballaggio</h4>
          <p>Prepariamo il tuo prodotto per la spedizione con imballaggi sicuri e adeguati.</p>
        </div>
      </article>

      <!-- /* card6 */ -->
      <article class="bg-stone-400 p-6 rounded-3xl text-white w-full sm:w-80 flex flex-col items-start">
        <div class="bg-orange-500 w-[60px]flex items-center justify-center p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        </div>
        <div>
          <h4 class="text-2xl font-bold pt-2 text-stone-800">Consegna</h4>
          <p>Garantiamo una consegna puntuale e sicura del tuo prodotto finito.</p>
        </div>
      </article>
    </div>
  </section>

  <footer class="">
    <div class="w-full px-6 md:px-14 lg:px-30 py-8 flex justify-center bg-stone-900 text-white">
      <p>©️ 2026 Belpress S.r.l. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { aboutUs } from '../database/aboutUs.js';
const aboutInfo = aboutUs;
import { ref } from 'vue'; /* ref è uno stato reattivo della composizione API di Vue, la composizione api permette di creare contenitori reattivi che mostrano qualcosa in un altro posto*/

const tendinaAperta = ref(false); /* qui abbiamo creato una variabile booleana vero o falso con ref, per gestire la tendina */

function apriTendina() {
  tendinaAperta.value = !tendinaAperta.value;
}
/* abbiamo preso il valore di tendina aperta e gli abbiamo detto, se sei false da !tendina aperta, allora diventi true tendina aperta E VICEVERSA */
</script>

<style scoped></style>