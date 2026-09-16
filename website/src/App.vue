<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const mainContent = ref<HTMLElement>();

watch(
  () => route.path,
  async () => {
    if (route.hash) {
      return;
    }

    await nextTick();
    window.scrollTo({ top: 0, left: 0 });
    mainContent.value?.focus({ preventScroll: true });
  },
);
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  <Header />
  <main id="main" ref="mainContent" class="app-main" tabindex="-1">
    <RouterView />
  </main>
  <Footer />
</template>
