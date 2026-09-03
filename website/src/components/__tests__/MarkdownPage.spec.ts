import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

import MarkdownPage from '../MarkdownPage.vue'

describe('MarkdownPage', () => {
  it('renders markdown into semantic HTML', async () => {
    const wrapper = mount(MarkdownPage, {
      props: {
        markdown: '# Framework\n\nVisit [docs](https://example.com).\n\n- First item',
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
})
