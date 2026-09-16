import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

import MarkdownPage from '../MarkdownPage.vue'

describe('MarkdownPage', () => {
  it('renders markdown into semantic HTML', async () => {
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: '# Framework\n\nVisit [docs](https://example.com).\n\n- First item',
        sourcePath: 'README.md',
      },
    })

    await flushPromises()

    const heading = wrapper.find('.markdown-page__content h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Framework')

    const link = wrapper.find('.markdown-page__content a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://example.com')
    expect(link.text()).toBe('docs')

    const listItem = wrapper.find('.markdown-page__content li')
    expect(listItem.exists()).toBe(true)
    expect(listItem.text()).toBe('First item')
  })

  it('re-renders when markdown prop changes', async () => {
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: 'Initial paragraph',
        sourcePath: 'README.md',
      },
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

  it('rewrites phase file links to website routes', async () => {
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: [
          '[Relative](framework/phases/foundational-phase.md)',
          '[Root relative](/framework/phases/testing-phase.md#manual-checks)',
          '[GitHub](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/phases/community-phase.md)',
          '[Unrelated](https://example.com/framework/phases/community-phase.md)',
        ].join('\n\n'),
        sourcePath: 'README.md',
      },
    })

    await flushPromises()

    const links = wrapper.findAll('.markdown-page__content a')
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/foundational',
      '/testing#manual-checks',
      '/community',
      'https://example.com/framework/phases/community-phase.md',
    ])
  })

  it('keeps non-website links pointing to repository files', async () => {
    const exactBranchUrl =
      'https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/simplify-phases/framework/supporting/foundational-phase/initial-accessibility.md'
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: [
          '[Relative supporting file](../supporting/foundational-phase/initial-accessibility.md)',
          `[Existing GitHub file](${exactBranchUrl})`,
        ].join('\n\n'),
        sourcePath: 'framework/phases/foundational-phase.md',
      },
    })

    await flushPromises()

    const links = wrapper.findAll('.markdown-page__content a')
    expect(links.map((link) => link.attributes('href'))).toEqual([
      'https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/supporting/foundational-phase/initial-accessibility.md',
      exactBranchUrl,
    ])
  })

  it('adds matching, unique ids to action headings', async () => {
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: [
          '[Action 1](#1-create-an-accessibilitymd)',
          '',
          '### 1. Create an ACCESSIBILITY.md',
          '',
          '### 1. Create an ACCESSIBILITY.md',
        ].join('\n'),
        sourcePath: 'framework/phases/foundational-phase.md',
      },
    })

    await flushPromises()

    expect(wrapper.find('.markdown-page__content a').attributes('href')).toBe(
      '#1-create-an-accessibilitymd',
    )
    expect(
      wrapper.findAll('.markdown-page__content h3').map((heading) => heading.attributes('id')),
    ).toEqual(['1-create-an-accessibilitymd', '1-create-an-accessibilitymd-1'])
  })
})
