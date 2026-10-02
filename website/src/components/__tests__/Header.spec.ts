import { mount } from "@vue/test-utils";
import { createMemoryHistory, createRouter } from "vue-router";
import { describe, expect, it } from "vitest";

import Header from "../Header.vue";

async function mountHeader() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", component: { template: "<div />" } },
      { path: "/foundational", component: { template: "<div />" } },
      { path: "/workflow", component: { template: "<div />" } },
      { path: "/testing", component: { template: "<div />" } },
      { path: "/community", component: { template: "<div />" } },
      { path: "/ai", component: { template: "<div />" } },
    ],
  });

  await router.push("/");
  await router.isReady();

  return mount(Header, {
    attachTo: document.body,
    global: {
      plugins: [router],
    },
  });
}

describe("Header mobile menu", () => {
  it("toggles the primary navigation from an accessible menu button", async () => {
    const wrapper = await mountHeader();
    const button = wrapper.get("button");
    const navigation = wrapper.get("#primary-navigation");

    expect(button.attributes("aria-expanded")).toBe("false");
    expect(button.attributes("aria-controls")).toBe("primary-navigation");
    expect(button.text()).toBe("Menu");
    expect(navigation.classes()).not.toContain("phase-nav--open");

    await button.trigger("click");

    expect(button.attributes("aria-expanded")).toBe("true");
    expect(navigation.classes()).toContain("phase-nav--open");

    wrapper.unmount();
  });

  it("closes the menu after a navigation option is selected", async () => {
    const wrapper = await mountHeader();
    const button = wrapper.get("button");

    await button.trigger("click");
    await wrapper.get('a[href="/foundational"]').trigger("click");

    expect(button.attributes("aria-expanded")).toBe("false");
    expect(wrapper.get("#primary-navigation").classes()).not.toContain(
      "phase-nav--open",
    );

    wrapper.unmount();
  });
});
