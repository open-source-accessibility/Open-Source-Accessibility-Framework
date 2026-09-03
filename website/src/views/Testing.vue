<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import testingPhaseMarkdown from '../../../framework/phases/testing-phase.md?raw'
</script>

<template>
  <MarkdownPage :markdown="testingPhaseMarkdown" />
</template>
