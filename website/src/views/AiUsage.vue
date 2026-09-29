<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import aiUsageMarkdown from '../../../framework/ai/guide.md?raw'
</script>

<template>
  <MarkdownPage :markdown="aiUsageMarkdown" source-path="framework/ai/guide.md" />
</template>
