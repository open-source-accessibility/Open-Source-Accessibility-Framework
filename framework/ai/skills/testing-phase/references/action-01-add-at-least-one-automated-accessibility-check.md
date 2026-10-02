# Action 1: Add at least one automated accessibility check

- **Action ID:** `add-at-least-one-automated-accessibility-check`
- **Cadence:** Initial setup + ongoing
- **Canonical source:** [Testing Phase, Action 1](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/phases/testing-phase.md#1-add-at-least-one-automated-accessibility-check)

## Why it matters

This action helps catch common regressions.

## Definition of done

1. At least one automated accessibility check is configured or documented.
2. The check runs against relevant project code or flows.
3. Accessibility issues are fixed or tracked.

## Recommended Steps

1. Review the guidance on [testing continuously](https://opensource.guide/accessibility-best-practices-for-your-project/#test-accessibility-continuously).
2. Select an appropriate tool such as [Accessibility Insights](https://accessibilityinsights.io/downloads/). Other options include [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [WAVE](https://wave.webaim.org/), [axe](https://github.com/dequelabs/axe-core), and [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner).
3. Configure the test or document the decision in your project documentation.
4. Run the check against relevant project code or user flows.
5. Ensure accessibility issues from CI/CD checks are tracked.
6. Fix accessibility issues or track them.
   - Refer to the [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml) for guidance.
