<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
import workflowPhaseMarkdown from '../../framework/phases/workflow-phase.md?raw'
</script>

<template>
  <MarkdownPage :markdown="workflowPhaseMarkdown" />
</template>
