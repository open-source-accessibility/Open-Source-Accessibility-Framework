import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'

import MarkdownPage from '../MarkdownPage.vue'

async function mountMarkdownPage(
  props: { markdown: string; sourcePath: string },
  location = '/',
  attachTo?: Element,
) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })

  await router.push(location)
  await router.isReady()

  return {
    router,
    wrapper: mount(MarkdownPage, {
      props,
      global: {
        plugins: [router],
      },
      attachTo,
    }),
  }
}

describe('MarkdownPage', () => {
  it('renders markdown into semantic HTML', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: '# Framework\n\nVisit [docs](https://example.com).\n\n- First item',
      sourcePath: 'README.md',
    })

    await flushPromises()

    const heading = wrapper.find('.markdown-page__content h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Framework')

    const link = wrapper.find('.markdown-page__content a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://example.com')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
    expect(link.text()).toBe('docs')
    expect(link.find('img').attributes('alt')).toBe('opens external page')

    const listItem = wrapper.find('.markdown-page__content li')
    expect(listItem.exists()).toBe(true)
    expect(listItem.text()).toBe('First item')
  })

  it('re-renders when markdown prop changes', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: 'Initial paragraph',
      sourcePath: 'README.md',
    })

    await flushPromises()
    expect(wrapper.find('.markdown-page__content').text()).toContain('Initial paragraph')

    await wrapper.setProps({
      markdown: '## Updated heading',
    })
    await flushPromises()

    const updatedHeading = wrapper.find('.markdown-page__content h2')
    expect(updatedHeading.exists()).toBe(true)
    expect(updatedHeading.text()).toBe('Updated heading')
  })

  it('rewrites phase and skill file links to website routes', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: [
        '[Relative](framework/phases/foundational-phase.md)',
        '[Root relative](/framework/phases/testing-phase.md#manual-checks)',
        '[GitHub](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/phases/community-phase.md)',
        '[Foundational skill](framework/ai/skills/foundational-skills.md)',
        '[Workflow skill](framework/ai/skills/workflow-skills.md)',
        '[Testing skill](framework/ai/skills/testing-skills.md)',
        '[Community skill](framework/ai/skills/community-skills.md)',
        '[Unrelated](https://example.com/framework/phases/community-phase.md)',
      ].join('\n\n'),
      sourcePath: 'README.md',
    })

    await flushPromises()

    const links = wrapper.findAll('.markdown-page__content a')
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/foundational',
      '/testing#manual-checks',
      '/community',
      '/skills/foundational',
      '/skills/workflow',
      '/skills/testing',
      '/skills/community',
      'https://example.com/framework/phases/community-phase.md',
    ])
    expect(links.slice(0, 7).every((link) => link.attributes('target') === undefined)).toBe(true)
    expect(links[7]?.attributes('target')).toBe('_blank')
  })

  it('rewrites phase overview skill and instruction links', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: [
        '[Testing Phase Skill](../ai/skills/testing-skills.md)',
        '[Framework Skills instructions](../ai/guide.md#framework-skills)',
      ].join('\n\n'),
      sourcePath: 'framework/phases/testing-phase.md',
    })

    await flushPromises()

    expect(
      wrapper.findAll('.markdown-page__content a').map((link) => link.attributes('href')),
    ).toEqual(['/skills/testing', '/ai#framework-skills'])
  })

  it('keeps non-website links pointing to repository files', async () => {
    const exactBranchUrl =
      'https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/simplify-phases/framework/supporting/foundational-phase/initial-accessibility.md'
    const { wrapper } = await mountMarkdownPage({
      markdown: [
        '[Relative supporting file](../supporting/foundational-phase/initial-accessibility.md)',
        `[Existing GitHub file](${exactBranchUrl})`,
      ].join('\n\n'),
      sourcePath: 'framework/phases/foundational-phase.md',
    })

    await flushPromises()

    const links = wrapper.findAll('.markdown-page__content a')
    expect(links.map((link) => link.attributes('href'))).toEqual([
      'https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/supporting/foundational-phase/initial-accessibility.md',
      exactBranchUrl,
    ])
  })

  it('adds matching, unique ids to action headings', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: [
        '[Action 1](#1-create-an-accessibilitymd)',
        '',
        '### 1. Create an ACCESSIBILITY.md',
        '',
        '### 1. Create an ACCESSIBILITY.md',
      ].join('\n'),
      sourcePath: 'framework/phases/foundational-phase.md',
    })

    await flushPromises()

    expect(wrapper.find('.markdown-page__content a').attributes('href')).toBe(
      '#1-create-an-accessibilitymd',
    )
    expect(
      wrapper.findAll('.markdown-page__content h3').map((heading) => heading.attributes('id')),
    ).toEqual(['1-create-an-accessibilitymd', '1-create-an-accessibilitymd-1'])
    expect(wrapper.find('.markdown-page__content h3').attributes('tabindex')).toBe('-1')
  })

  it('adds a focusable id to section headings', async () => {
    const { wrapper } = await mountMarkdownPage({
      markdown: '## Framework Skills',
      sourcePath: 'framework/ai/guide.md',
    })

    await flushPromises()

    const heading = wrapper.find('.markdown-page__content h2')
    expect(heading.attributes('id')).toBe('framework-skills')
    expect(heading.attributes('tabindex')).toBe('-1')
  })

  it('scrolls to and focuses the heading when the route hash changes', async () => {
    const scrollIntoView = vi.fn()
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })
    const { router, wrapper } = await mountMarkdownPage(
      {
        markdown: '### 1. Create an ACCESSIBILITY.md',
        sourcePath: 'framework/phases/foundational-phase.md',
      },
      '/foundational',
      document.body,
    )

    await flushPromises()
    await router.push('/foundational#1-create-an-accessibilitymd')
    await flushPromises()

    const heading = wrapper.find('[id="1-create-an-accessibilitymd"]')
    expect(document.activeElement).toBe(heading.element)
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start' })

    wrapper.unmount()
    Reflect.deleteProperty(HTMLElement.prototype, 'scrollIntoView')
  })
})
