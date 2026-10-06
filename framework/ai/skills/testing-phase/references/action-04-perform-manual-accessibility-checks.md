# Action 4: Perform manual accessibility checks

- **Action ID:** `perform-manual-accessibility-checks`
- **Cadence:** Ongoing
- **Canonical source:** [Testing Phase, Action 4](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/phases/testing-phase.md#4-perform-manual-accessibility-checks)

## Why it matters

This action addresses common visual access barriers.

## Definition of done

1. Relevant interfaces have documented zoom, resize, reflow, and contrast checks.
2. Information and functionality remain available at the tested settings.
3. Accessibility issues are fixed or tracked.

## Recommended Steps

1. Identify interfaces and content where zoom, resizing, reflow, or contrast are relevant.
2. Validate the UI at larger zoom levels and resized viewport dimensions.
3. Check that content reflows without loss of information or functionality (test at 200% and with narrow widths).
4. Check applicable text, component, and focus contrast.
5. Fix accessibility issues or track them.
   - Refer to the [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml) for guidance.
