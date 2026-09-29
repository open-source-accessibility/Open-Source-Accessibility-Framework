<script setup lang="ts">
import MarkdownPage from "../components/MarkdownPage.vue";
import skillsMarkdown from "../../../framework/ai/skills/foundational-skills.md?raw";
</script>

<template>
  <MarkdownPage
    :markdown="skillsMarkdown"
    source-path="framework/ai/skills/foundational-skills.md"
  />
</template>
