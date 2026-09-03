<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="site-footer">
    <div class="wrap site-footer__inner">
      <p>Open Source Accessibility Framework. Licensed MIT.</p>
      <ul class="site-footer__list" role="list">
        <li>
          <a
            href="https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework"
            >Repository</a
          >
        </li>
        <li>
          <a
            href="https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/CODE_OF_CONDUCT.md"
            >Code of conduct</a
          >
        </li>
        <li>
          <a href="https://github.com/open-source-accessibility"
            >Organization</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
.site-footer {
  border-top: var(--line-hairline) solid var(--color-line);
  padding-block: var(--space-l);
  background-color: var(--color-paper-sunken);
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  font-size: var(--size-small);
  color: var(--color-ink-muted);
}

.site-footer__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-s);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 48rem) {
  .site-footer__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
