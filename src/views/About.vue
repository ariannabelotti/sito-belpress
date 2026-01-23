<template>
  <section class="bg-gradient-to-b from-black to-stone-900">
    <section id="sfondo" class="relative w-full h-90 overflow-hidden">
      <img src="../assets/Sfondo.jpg" alt="Sfondo About Us" class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-gradient-to-b from-stone-900/60 to-black">
      </div>

      <!-- PARTE TESTO -->
      <div class="relative z-10 h-60 flex items-center justify-center">
        <h3 class="text-5xl font-bold text-white">
          La nostra azienda.
        </h3>

        <!-- Pulsante Home -->
        <div class="absolute top-8 left-8">
          <button @click="$router.push('/')"
            class="bg-orange-500 text-white p-3 rounded-full hover:bg-stone-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10" />
            </svg>
          </button>
        </div>
      </div>
    </section>


    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          <!-- Valori lato -->
          <aside class="lg:col-span-2 text-sm text-orange-500 space-y-2">
            <p>Passione.</p>
            <p>Qualità.</p>
            <p>Precisione.</p>
          </aside>


          <div class="lg:col-span-8 space-y-6 text-white text-justify items-center">
            <p>
              Belpress Srl è un’impresa con radici solide e una storia di sviluppo
              progressivo, nata dalla passione per l’arte della fonderia e dai valori
              fondanti della dimensione familiare. Fondata nei primi anni ’90 nel cuore
              della Franciacorta, l’azienda ha costruito nel tempo una struttura
              produttiva affidabile e orientata alla qualità.
            </p>

            <p>
              Con oltre trent’anni di esperienza nel settore metallurgico, Belpress è
              oggi una realtà di riferimento nella pressofusione di alluminio e leghe
              non ferrose, tra cui zama e ottone. L’azienda opera attraverso processi
              tecnologicamente avanzati, mantenendo un approccio artigianale attento al
              dettaglio.
            </p>

            <p>
              Dalla progettazione degli stampi alla produzione del pezzo finito,
              Belpress affianca i propri clienti in ogni fase del processo, garantendo
              precisione, affidabilità e continuità produttiva.
            </p>
          </div>
        </div>

        <!-- STATISTICHE -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-24">
          <article class="bg-stone-600 text-white rounded-3xl p-6">
            <h4 class="text-3xl font-bold">800mq</h4>
            <p class="mt-2 text-sm">Area produttiva</p>
          </article>

          <article class="bg-stone-800 text-white rounded-3xl border-3 border-orange-500 p-6">
            <h4 class="text-3xl font-bold">2 isole</h4>
            <p class="mt-2 text-sm">Linee di produzione</p>
          </article>

          <article class="bg-stone-600 text-white rounded-3xl p-6">
            <h4 class="text-3xl font-bold">30+ anni</h4>
            <p class="mt-2 text-sm">Sul mercato</p>
          </article>
        </div>
        <!---->

        <div class="w-full h-60 rounded-2xl mb-24">
          <img :src="About1" alt="Immagine About Us"
            class="w-full h-full object-cover rounded-2xl opacity-80" />
        </div>

        <!-- CITAZIONE -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">


          <div class="lg:col-span-5">
            <p class="text-2xl italic font-serif text-stone-600 mb-4">
              “La qualità non è un risultato casuale, ma il frutto di metodo,
              esperienza e attenzione costante.”
            </p>
            <p class="text-sm text-white">
              La famiglia Belpress.
            </p>
          </div>


          <div class="lg:col-span-5 lg:col-start-8">
            <div>
              <img :src="About2" alt="Immagine About Us 2"
                class="w-full h-full object-cover rounded-2xl border-5 border-orange-500 opacity-90" />
            </div>
          </div>

        </div>

      </div>
      <!-- Il nostro Team -->
      <h3 class="text-4xl font-bold text-center mb-8">Il nostro Team</h3>

      <section class="flex flex-col w-full">
        <article class="flex flex-wrap justify-center gap-20">
          <div v-for="person in aboutUsTeam" :key="person.id" class="group text-center text-white mb-4 w-1/5 rounded-2xl bg-stone-600 overflow-hidden
             duration-300">
            <!-- FOTO + OVERLAY -->
            <div class="relative h-60 overflow-hidden">
              <img :src="person.image" :alt="person.name"
                class="object-cover h-full w-full transition-transform duration-500 ease-out group-hover:scale-105" />

              <!-- Overlay arancio opaco che appare in hover -->
              <div class="absolute inset-0 flex items-center justify-center
                 bg-orange-500/80 opacity-0
                 transition-opacity duration-300 ease-out
                 group-hover:opacity-100">
                <p class="text-2xl font-semibold tracking-wide">
                  {{ person.role }}
                </p>
              </div>
            </div>

            <!-- TESTI -->
            <div class="p-4">
              <p class="font-bold text-xl">{{ person.name }}</p>
              <div class="bg-orange-500 h-0.5 w-40 mx-auto my-2 rounded-full">

              </div>
              <p class="italic text-sm text-white/80">{{ person.bio }}</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  </section>
</template>


<script setup>
  import About1 from '../assets/About1.jpg';
  import About2 from '../assets/About2.jpg';
import sergioImg from '../assets/sergio.jpeg';
import andreaImg from '../assets/andrea.JPG';
import lucianaImg from '../assets/luciana.png';

const aboutUsTeam = [
  {
    id: 1,
    name: "Sergio Belotti",
    role: "CEO",
    bio: "Sergio ha preso le redini dell'azienda familiare con dedizione e visione.",
    image: sergioImg
  },
  {
    id: 2,
    name: "Andrea Belotti",
    role: "Direttore produzione",
    bio: "Andrea, il figlio, segue con passione la produzione, assicurando qualità e efficienza.",
    image: andreaImg
  },
  {
    id: 3,
    name: "Luciana Belotti",
    role: " Responsabile finanze",
    bio: "Luciana gestisce con precisione e attenzione le finanze dell'azienda.",
    image: lucianaImg
  }
];
</script>
<style scoped></style>
