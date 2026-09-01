<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import readmeMarkdown from '../../README.md?raw'
</script>

<template>
  <MarkdownPage :markdown="readmeMarkdown" />
</template>
