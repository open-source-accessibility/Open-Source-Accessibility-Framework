<script setup lang="ts">
import { marked } from 'marked'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  markdown: string
  sourcePath: string
}>()

const renderedMarkdown = ref('')

const phaseRoutes: Record<string, string> = {
  'community-phase.md': 'community',
  'foundational-phase.md': 'foundational',
  'testing-phase.md': 'testing',
  'workflow-phase.md': 'workflow',
}

const githubPhaseLinkPattern =
  /^(?:\/?framework\/phases\/|https:\/\/github\.com\/open-source-accessibility\/Open-Source-Accessibility-Framework\/blob\/.+?\/framework\/phases\/)([^/?#]+\.md)([?#].*)?$/

const repositoryBlobUrl =
  'https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main'

function websitePhaseLink(filename: string, suffix = ''): string | undefined {
  const route = phaseRoutes[filename]
  if (!route) {
    return undefined
  }

  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  return `${baseUrl}${route}${suffix}`
}

function resolveRepositoryPath(sourcePath: string, hrefPath: string): string | undefined {
  const segments = hrefPath.startsWith('/')
    ? []
    : sourcePath.split('/').slice(0, -1)

  for (const segment of hrefPath.split('/')) {
    if (!segment || segment === '.') {
      continue
    }

    if (segment === '..') {
      if (!segments.pop()) {
        return undefined
      }
      continue
    }

    segments.push(segment)
  }

  return segments.join('/')
}

function rewriteMarkdownLink(href: string, sourcePath: string): string {
  const githubPhaseMatch = href.match(githubPhaseLinkPattern)
  const githubPhaseFilename = githubPhaseMatch?.[1]
  if (githubPhaseFilename) {
    return websitePhaseLink(githubPhaseFilename, githubPhaseMatch[2]) ?? href
  }

  if (href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(href)) {
    return href
  }

  const match = href.match(/^([^?#]+)([?#].*)?$/)
  const hrefPath = match?.[1]
  if (!hrefPath) {
    return href
  }

  const repositoryPath = resolveRepositoryPath(sourcePath, hrefPath)
  if (!repositoryPath) {
    return href
  }

  const phaseMatch = repositoryPath.match(/^framework\/phases\/([^/]+\.md)$/)
  const phaseFilename = phaseMatch?.[1]
  if (phaseFilename) {
    return websitePhaseLink(phaseFilename, match[2]) ?? href
  }

  return `${repositoryBlobUrl}/${repositoryPath}${match[2] ?? ''}`
}

function createHeadingRenderer() {
  const renderer = new marked.Renderer()
  const headingCounts = new Map<string, number>()

  renderer.heading = function ({ tokens, depth }) {
    const content = this.parser.parseInline(tokens)

    if (depth !== 3) {
      return `<h${depth}>${content}</h${depth}>\n`
    }

    const text = this.parser.parseInline(tokens, new marked.TextRenderer())
    const baseId = text
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\w\s-]/gu, '')
      .replace(/\s+/g, '-')
    const duplicateCount = headingCounts.get(baseId) ?? 0
    headingCounts.set(baseId, duplicateCount + 1)
    const id = duplicateCount === 0 ? baseId : `${baseId}-${duplicateCount}`

    return `<h3 id="${id}">${content}</h3>\n`
  }

  return renderer
}

watchEffect(async () => {
  renderedMarkdown.value = await marked.parse(props.markdown, {
    renderer: createHeadingRenderer(),
    walkTokens(token) {
      if (token.type === 'link') {
        token.href = rewriteMarkdownLink(token.href, props.sourcePath)
      }
    },
  })
})
</script>

<template>
  <section class="markdown-page">
    <div class="wrap">
      <article class="markdown-page__content" v-html="renderedMarkdown" />
    </div>
  </section>
</template>
