<script setup lang="ts">
import { marked } from 'marked'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  markdown: string
}>()

const renderedMarkdown = ref('')

watchEffect(async () => {
  renderedMarkdown.value = await marked.parse(props.markdown)
})
</script>

<template>
  <section class="markdown-page">
    <div class="wrap">
      <article class="markdown-page__content" v-html="renderedMarkdown" />
    </div>
  </section>
</template>
