<script setup lang="ts">
import MarkdownPage from "../components/MarkdownPage.vue";
import skillsMarkdown from "../../../framework/ai/skills/workflow-skills.md?raw";
</script>

<template>
  <MarkdownPage
    :markdown="skillsMarkdown"
    source-path="framework/ai/skills/workflow-skills.md"
  />
</template>
