<template>
  <nav
    class="flex items-center justify-between pt-3 pb-3 pl-6 pr-4 bg-white/70 backdrop-blur-2xl text-orange-500 rounded-3xl
           fixed top-6 left-4 right-4 md:left-10 md:right-10 lg:left-30 lg:right-30 w-auto z-50"
  >
    <div class="h-10 w-auto">
      <img src="../assets/LOGO_BP.svg" alt="Logo" class="h-full w-auto" />
    </div>

    <!-- Menu desktop -->
    <ul class="hidden md:flex gap-6 text-stone-800 font-medium absolute left-1/2 -translate-x-1/2">
      <li class="hover:text-orange-500"><router-link to="/">Homepage</router-link></li>
      <li class="hover:text-orange-500"><router-link to="/about">Chi siamo</router-link></li>
      <li class="hover:text-orange-500"><router-link to="/services">Servizi</router-link></li>
    </ul>

    <!-- CTA desktop (nascosta su mobile) -->
    <router-link
      to="/contact"
      class="hidden md:inline-flex bg-orange-500 text-white py-2 px-4 rounded-2xl hover:bg-stone-800 transition-colors font-bold"
    >
      <button>Contatti</button>
    </router-link>

    <!-- Hamburger mobile -->
    <button
      type="button"
      class="md:hidden inline-flex items-center justify-center rounded-2xl p-2 hover:bg-stone-800 transition-colors"
      aria-label="Apri menu"
      :aria-expanded="isMenuOpen ? 'true' : 'false'"
      aria-controls="mobile-menu"
      @click="toggleMenu"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Menù che scende -->
    <div
      id="mobile-menu"
      class="md:hidden absolute left-4 right-4 top-[72px] bg-white/70 backdrop-blur-2xl rounded-3xl p-6
             transition-all duration-300 ease-out"
      :class="isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'"
    >
      <ul class="flex flex-col gap-4 text-stone-800 font-medium">
        <li class="hover:text-orange-500">
          <router-link to="/" @click="closeMenu">Homepage</router-link>
        </li>
        <li class="hover:text-orange-500">
          <router-link to="/about" @click="closeMenu">Chi siamo</router-link>
        </li>
        <li class="hover:text-orange-500">
          <router-link to="/services" @click="closeMenu">Servizi</router-link>
        </li>
      </ul>

      <router-link
        to="/contact"
        class="mt-6 inline-flex w-full justify-center bg-orange-500 text-white py-2 px-4 rounded-2xl hover:bg-stone-800 transition-colors font-bold"
        @click="closeMenu"
      >
        <button>Contatti</button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped></style>