<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import communityPhaseMarkdown from '../../../framework/phases/community-phase.md?raw'
</script>

<template>
  <MarkdownPage
    :markdown="communityPhaseMarkdown"
    source-path="framework/phases/community-phase.md"
  />
</template>
