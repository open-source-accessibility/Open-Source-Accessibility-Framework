<script setup lang="ts">
import { marked } from "marked";
import { nextTick, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import externalLinkIcon from "../assets/external-link.svg";

const props = defineProps<{
  markdown: string;
  sourcePath: string;
}>();

const renderedMarkdown = ref("");
const markdownContent = ref<HTMLElement>();
const route = useRoute();

const contentRoutes: Record<string, string> = {
  "community-phase.md": "community",
  "foundational-phase.md": "foundational",
  "testing-phase.md": "testing",
  "workflow-phase.md": "workflow",
  "guide.md": "ai",
  "community-skills.md": "skills/community",
  "foundational-skills.md": "skills/foundational",
  "testing-skills.md": "skills/testing",
  "workflow-skills.md": "skills/workflow",
};

const githubContentLinkPattern =
  /^(?:\/?framework\/(?:phases|ai(?:\/skills)?)\/|https:\/\/github\.com\/open-source-accessibility\/Open-Source-Accessibility-Framework\/blob\/.+?\/framework\/(?:phases|ai(?:\/skills)?)\/)([^/?#]+\.md)([?#].*)?$/;

const repositoryBlobUrl =
  "https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main";

function websiteContentLink(filename: string, suffix = ""): string | undefined {
  const route = contentRoutes[filename];
  if (!route) {
    return undefined;
  }

  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return `${baseUrl}${route}${suffix}`;
}

function resolveRepositoryPath(
  sourcePath: string,
  hrefPath: string,
): string | undefined {
  const segments = hrefPath.startsWith("/")
    ? []
    : sourcePath.split("/").slice(0, -1);

  for (const segment of hrefPath.split("/")) {
    if (!segment || segment === ".") {
      continue;
    }

    if (segment === "..") {
      if (!segments.pop()) {
        return undefined;
      }
      continue;
    }

    segments.push(segment);
  }

  return segments.join("/");
}

function rewriteMarkdownLink(href: string, sourcePath: string): string {
  const githubContentMatch = href.match(githubContentLinkPattern);
  const githubContentFilename = githubContentMatch?.[1];
  if (githubContentFilename) {
    return (
      websiteContentLink(githubContentFilename, githubContentMatch[2]) ?? href
    );
  }

  if (
    href.startsWith("#") ||
    href.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(href)
  ) {
    return href;
  }

  const match = href.match(/^([^?#]+)([?#].*)?$/);
  const hrefPath = match?.[1];
  if (!hrefPath) {
    return href;
  }

  const repositoryPath = resolveRepositoryPath(sourcePath, hrefPath);
  if (!repositoryPath) {
    return href;
  }

  const contentMatch = repositoryPath.match(
    /^framework\/(?:phases|ai(?:\/skills)?)\/([^/]+\.md)$/,
  );
  const contentFilename = contentMatch?.[1];
  if (contentFilename) {
    return websiteContentLink(contentFilename, match[2]) ?? href;
  }

  return `${repositoryBlobUrl}/${repositoryPath}${match[2] ?? ""}`;
}

function isExternalLink(href: string): boolean {
  if (!/^https?:\/\//i.test(href)) {
    return false;
  }

  const url = new URL(href);
  return (
    url.origin !== window.location.origin &&
    url.origin !== "https://open-source-accessibility.github.io"
  );
}

function createHeadingRenderer() {
  const renderer = new marked.Renderer();
  const headingCounts = new Map<string, number>();
  const renderLink = renderer.link;

  renderer.heading = function ({ tokens, depth }) {
    const content = this.parser.parseInline(tokens);

    if (depth !== 2 && depth !== 3) {
      return `<h${depth}>${content}</h${depth}>\n`;
    }

    const text = this.parser.parseInline(tokens, new marked.TextRenderer());
    const baseId = text
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\w\s-]/gu, "")
      .replace(/\s+/g, "-");
    const duplicateCount = headingCounts.get(baseId) ?? 0;
    headingCounts.set(baseId, duplicateCount + 1);
    const id = duplicateCount === 0 ? baseId : `${baseId}-${duplicateCount}`;

    return `<h3 id="${id}" tabindex="-1">${content}</h3>\n`;
  };

  renderer.link = function (token) {
    const link = renderLink.call(this, token);
    if (!isExternalLink(token.href)) {
      return link;
    }

    return link
      .replace("<a ", '<a target="_blank" rel="noopener noreferrer" ')
      .replace(
        "</a>",
        ` <img class="external-link-icon" src="${externalLinkIcon}" alt="opens external page"></a>`,
      );
  };

  return renderer;
}

async function focusHashTarget(hash: string): Promise<void> {
  if (!hash) {
    return;
  }

  await nextTick();

  if (route.hash !== hash) {
    return;
  }

  const target = document.getElementById(hash.slice(1));
  if (!target || !markdownContent.value?.contains(target)) {
    return;
  }

  target.scrollIntoView({ block: "start" });
  target.focus({ preventScroll: true });
}

watchEffect(async () => {
  renderedMarkdown.value = await marked.parse(props.markdown, {
    renderer: createHeadingRenderer(),
    walkTokens(token) {
      if (token.type === "link") {
        token.href = rewriteMarkdownLink(token.href, props.sourcePath);
      }
    },
  });
});

watch(
  [() => route.hash, renderedMarkdown],
  ([hash]) => {
    void focusHashTarget(hash);
  },
  { flush: "post", immediate: true },
);
</script>

<template>
  <section class="markdown-page">
    <div class="wrap">
      <article
        ref="markdownContent"
        class="markdown-page__content"
        v-html="renderedMarkdown"
      />
    </div>
  </section>
</template>
