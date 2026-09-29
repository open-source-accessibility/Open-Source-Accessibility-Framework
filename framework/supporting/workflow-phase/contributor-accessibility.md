## Priorities

<!-- Describe the outcomes the project prioritizes and how it works toward them. Include the accessibility standard and conformance level you aim to meet (if applicable) and the areas you prioritize (such as keyboard, screen reader, content, or language support). -->

- **Conformance target:** We aim to meet [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22) where feasible.
- **Keyboard support** — every interactive element must be reachable and operable with a keyboard alone, with a visible focus indicator and a logical tab order.
- **Screen reader support** — content uses semantic HTML and a logical heading hierarchy so it can be navigated with VoiceOver, NVDA, JAWS, and similar tools.
- **Readable content** — we use plain language when possible, descriptive link text, sufficient color contrast, semantic lists, and meaningful alternative text.
- **Translations** — languages declare which language they are in code so assistive tech can pronounce them correctly.

## Contributor expectations

<!-- Describe the accessibility guardrails that apply to contributions, including relevant testing, documentation, and continuous integration checks. Name specific tools only when the project uses them, and explain what evidence contributors should include with user-facing changes. -->

If you are contributing content or code, please follow these guardrails so we don't regress accessibility:

- **Testing**
  - For UI changes, test with an automated accessibility tool (such as [axe DevTools](https://www.deque.com/axe/devtools/) or the [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner)).
  - Do at least one keyboard-only pass on any changes involving interactive UI elements.
    - Tab order is logical (no jumps, no traps, reaches all interactive controls).
    - Visible focus indicator is always present and has sufficient contrast.
    - All actions work by keyboard (Tab/Shift+Tab, Enter, Space, arrow keys where expected).
    - No keyboard trap (can move into and out of modals, menus, popovers, editors).
  - Spot-check screen reader behavior for new components or significant content changes.
    - Controls have clear, accessible labels (programmatic name that matches the action/field purpose).
    - Custom controls expose proper semantics/state (role, name, value; toggles/expanded/selected announced).
    - Dynamic updates are announced appropriately (errors, async status, validation, toasts via ARIA live regions as needed).
- **Documentation and content**
  - Use a logical heading hierarchy (do not skip levels).
  - Use unique, descriptive link text (avoid "click here" / "read more").
  - Provide meaningful alternative text for images; refer to the [W3C alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).
  - For complex images or diagrams, include a text alternative nearby.
  - For videos, provide captions and a transcript.
  - Don't use color as the only way to convey meaning.
- **CI/CD**
  - PRs may be blocked if they introduce accessibility violations detected by our linting or scanning workflows.
  - Resolve flagged issues, or document why a violation cannot be addressed in the PR description.
