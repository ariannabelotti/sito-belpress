<template>
  <section class="bg-gradient-to-b from-black to-stone-900">
    <section id="sfondo" class="relative w-full h-70 overflow-hidden">
      <img src="../assets/Sfondo2.jpg" alt="Sfondo About Us" class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-black">
      </div>

      <!-- PARTE TESTO -->
      <div class="relative z-10 h-60 flex items-center justify-center">
        <h3 class="text-5xl font-bold text-white">
          Lavora con noi.
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


    <!-- Contenitore  -->
    <div class="mx-auto max-w-[900px]">


      <!-- Mappa + Dati -->
      <div class="flex justify-start gap-0 mb-30">

        <!-- Mappa -->
        <div class="w-1/2 h-[600px] bg-gray-200 border-4 border-stone-800 rounded-l-xl overflow-hidden">
          <div ref="mapEl" class="w-full h-full"></div>
        </div>

        <!-- Box informazioni -->
        <div class="w-1/2 h-[600px] bg-stone-800 p-6 rounded-r-xl flex flex-col justify-between">
          <div>
            <p class="font-bold">Indirizzo:</p>
            <p class="text-white italic">Via A. De Gasperi, 21, 25030 Zocco BS</p>
          </div>
          <div>
            <p class="font-bold">Telefono:</p>
            <p class="text-white italic">+39 030 1234567</p>
          </div>
          <div>
            <p class="font-bold">Email:</p>
            <p class="text-white italic">belpress@libero.it</p>
          </div>
          <div>
            <p class="font-bold">P.IVA:</p>
            <p class="text-white italic">02126750989 </p>
          </div>
          <div>
            <p class="font-bold">PEC:</p>
            <p class="text-white italic">belpress@legalmail.it </p>
          </div>

          <div class="mt-8">
            <a href="mailto:belpress@libero.it">
              <button class="bg-orange-500 text-white py-3 px-9 rounded-2xl hover:bg-white hover:text-stone-900 transition font-bold">
                Scrivici ora
              </button>
            </a>
           
          </div>
        </div>

      </div>

      <!-- Orari e bottone -->
      <div class="flex justify-start mb-6">
        <div class="text-white text-lg font-medium">
          <p class="font-bold text-2xl py-2">Orari di apertura:</p>
          <p class="font-bold">Dal Lunedì al Venerdì</p>
          <p>Orario continuato.</p>
          <p class="font-bold">Sabato:</p>
          <p>10:00-12:00</p>
          <p class="font-bold">Domenica:</p>
          <p>Chiuso.</p>
        </div>
        <div class="flex flex-col justify-end ml-65 mb-10">
          
        <img src="../assets/LOGO_BP_BIANCO.svg" alt="Logo BP" class="h-auto mx-auto w-90 mt-4 mb-4" />
        </div>
      </div>
 

    </div>
    <footer class="p-5 mt-30">
      <div class="w-full flex justify-center text-white font-medium">
        <p>©️ 2026 Belpress S.r.l. Tutti i diritti riservati.</p>

      </div>
    </footer>

  </section>
</template>




<script setup>
import { ref, onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const mapEl = ref(null);

onMounted(async () => {
  await nextTick();

  // Coordinate Belpress
  const center = [45.6062894, 9.931394];

  const map = L.map(mapEl.value, {
    center,
    zoom: 16,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  L.marker(center).addTo(map);

  // Se il container era “stretto”/non calcolato al mount, forza ricalcolo
  setTimeout(() => map.invalidateSize(), 0);
});
</script>
