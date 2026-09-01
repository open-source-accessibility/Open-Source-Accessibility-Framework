<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="masthead">
    <div class="wrap masthead__inner">
      <RouterLink to="/" class="masthead__mark">Open Source Accessibility Framework</RouterLink>
      <nav class="phase-nav" aria-label="Framework phases">
        <ol class="phase-nav__list" role="list">
          <li><RouterLink to="/foundational" class="phase-nav__link">Foundational</RouterLink></li>
          <li><RouterLink to="/workflow" class="phase-nav__link">Workflow</RouterLink></li>
          <li><RouterLink to="/testing" class="phase-nav__link">Testing</RouterLink></li>
          <li><RouterLink to="/community" class="phase-nav__link">Community</RouterLink></li>
        </ol>
      </nav>
    </div>
  </header>
</template>
