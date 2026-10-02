<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import logo from "../assets/logo.svg";

const menuOpen = ref(false);
const menuButton = ref<HTMLButtonElement>();

function closeMenu() {
  menuOpen.value = false;
}

function closeMenuAndRestoreFocus() {
  closeMenu();
  menuButton.value?.focus();
}
</script>

<template>
  <header class="masthead" @keydown.esc="closeMenuAndRestoreFocus">
    <div class="wrap masthead__inner">
      <RouterLink
        to="/"
        class="masthead__mark"
        aria-label="Open Source Accessibility Framework"
        @click="closeMenu"
      >
        <img class="masthead__mark__logo" :src="logo" alt="" />
        <span class="masthead__mark__name">
          Open Source Accessibility Framework
        </span>
      </RouterLink>
      <button
        ref="menuButton"
        class="masthead__menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">Menu</span>
        <svg
          class="masthead__menu-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <nav
        id="primary-navigation"
        class="phase-nav"
        :class="{ 'phase-nav--open': menuOpen }"
        aria-label="Primary navigation"
      >
        <ul class="phase-nav__list" role="list">
          <li>
            <RouterLink
              to="/foundational"
              class="phase-nav__link"
              @click="closeMenu"
              >Foundational</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/workflow"
              class="phase-nav__link"
              @click="closeMenu"
              >Workflow</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/testing" class="phase-nav__link" @click="closeMenu"
              >Testing</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/community"
              class="phase-nav__link"
              @click="closeMenu"
              >Community</RouterLink
            >
          </li>
          <li class="phase-nav__guidance">
            <RouterLink to="/ai" class="phase-nav__link" @click="closeMenu"
              >AI Guidance</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
