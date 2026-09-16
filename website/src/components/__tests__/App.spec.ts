import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it, vi } from 'vitest'

import App from '../../App.vue'

async function mountApp(location: string) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/foundational', component: { template: '<h1>Foundational</h1>' } },
      { path: '/workflow', component: { template: '<h1>Workflow</h1>' } },
    ],
  })

  await router.push(location)
  await router.isReady()

  return {
    router,
    wrapper: mount(App, {
      attachTo: document.body,
      global: {
        plugins: [router],
      },
    }),
  }
}

describe('App route focus', () => {
  it('scrolls to and focuses the main content when moving to another tab', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)
    const { router, wrapper } = await mountApp('/foundational')

    await router.push('/workflow')
    await flushPromises()

    expect(document.activeElement).toBe(wrapper.find('main').element)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 })

    wrapper.unmount()
    scrollTo.mockRestore()
  })

  it('leaves hashed tab navigation for the heading focus handler', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)
    const { router, wrapper } = await mountApp('/foundational')
    const currentFocus = document.createElement('button')
    document.body.append(currentFocus)
    currentFocus.focus()

    await router.push('/workflow#workflow-action')
    await flushPromises()

    expect(document.activeElement).toBe(currentFocus)
    expect(scrollTo).not.toHaveBeenCalled()

    currentFocus.remove()
    wrapper.unmount()
    scrollTo.mockRestore()
  })
})
