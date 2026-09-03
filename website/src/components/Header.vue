<script setup lang="ts">
import { RouterLink } from "vue-router";
import logo from "../assets/logo.svg";
</script>

<template>
  <header class="masthead">
    <div class="wrap masthead__inner">
      <RouterLink to="/" class="masthead__mark">
        <img
          class="masthead__mark__logo"
          :src="logo"
          alt="Open Source Accessibility Framework logo"
        />
        Open Source Accessibility Framework
      </RouterLink>
      <nav class="phase-nav" aria-label="Framework phases">
        <ul class="phase-nav__list" role="list">
          <li>
            <RouterLink to="/foundational" class="phase-nav__link"
              >Foundational</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/workflow" class="phase-nav__link"
              >Workflow</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/testing" class="phase-nav__link"
              >Testing</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/community" class="phase-nav__link"
              >Community</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
