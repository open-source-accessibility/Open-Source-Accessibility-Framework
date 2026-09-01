<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  <Header />
  <main id="main" class="app-main" tabindex="-1">
    <RouterView />
  </main>
</template>
