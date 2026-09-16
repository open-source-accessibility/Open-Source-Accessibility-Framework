<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import foundationalPhaseMarkdown from '../../../framework/phases/foundational-phase.md?raw'
</script>

<template>
  <MarkdownPage
    :markdown="foundationalPhaseMarkdown"
    source-path="framework/phases/foundational-phase.md"
  />
</template>
