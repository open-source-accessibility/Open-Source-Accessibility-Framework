<script setup lang="ts">
import externalLinkIcon from "../assets/external-link.svg";
</script>

<template>
  <footer class="site-footer">
    <div class="wrap site-footer__inner">
      <p>Open Source Accessibility Framework. Licensed MIT.</p>
      <ul class="site-footer__list" role="list">
        <li>
          <a
            href="https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework"
            target="_blank"
            rel="noopener noreferrer"
            >Repository
            <img
              class="external-link-icon"
              :src="externalLinkIcon"
              alt="opens external page"
            /></a
          >
        </li>
        <li>
          <a
            href="https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            >Code of conduct
            <img
              class="external-link-icon"
              :src="externalLinkIcon"
              alt="opens external page"
            /></a
          >
        </li>
        <li>
          <a
            href="https://github.com/open-source-accessibility"
            target="_blank"
            rel="noopener noreferrer"
            >Organization
            <img
              class="external-link-icon"
              :src="externalLinkIcon"
              alt="opens external page"
            /></a
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
