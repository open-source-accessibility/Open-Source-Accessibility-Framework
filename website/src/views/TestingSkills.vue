<script setup lang="ts">
import MarkdownPage from "../components/MarkdownPage.vue";
import skillsMarkdown from "../../../framework/ai/skills/testing-skills.md?raw";
</script>

<template>
  <MarkdownPage
    :markdown="skillsMarkdown"
    source-path="framework/ai/skills/testing-skills.md"
  />
</template>
