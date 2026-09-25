# Testing phase

The testing phase establishes repeatable automated and manual practices for evaluating accessibility across a project’s code, interfaces, documentation, and core user flows. It combines automated tools, keyboard-only checks, screen reader spot checks, visual checks, and documentation reviews because no single testing method can identify every accessibility barrier.

The goal is not to test every possible interaction at once. Projects begin with representative, high-impact journeys and expand their coverage over time. Test results should be recorded, incorporated into CI/CD where practical, and connected to the project’s issue-tracking process so that barriers are addressed, prioritized, and revisited as the project changes.

## Phase overview

This phase has **6 total actions** with **17 total tasks** to complete.

| Action                                                                                                                      | Number of tasks | Typical initial effort |
| :-------------------------------------------------------------------------------------------------------------------------- | --------------: | :--------------------- |
| [Action 1](#1-add-at-least-one-automated-accessibility-check): Add at least one automated accessibility check               |               3 | Moderate               |
| [Action 2](#2-perform-a-keyboard-only-smoke-test-for-core-flows): Perform a keyboard-only smoke test for core flows         |               3 | Moderate               |
| [Action 3](#3-perform-a-screen-reader-spot-check-for-core-flows): Perform a screen reader spot check for core flows         |               3 | Moderate               |
| [Action 4](#4-perform-manual-accessibility-checks): Perform manual accessibility checks                                     |               3 | Extended               |
| [Action 5](#5-perform-accessibility-checks-for-documentation): Perform accessibility checks for documentation               |               3 | Moderate               |
| [Action 6](#6-document-supported-environments-and-known-limitations): Document supported environments and known limitations |               2 | Moderate               |

Effort varies by project size and maturity. Complete these actions incrementally and adapt them to your project's needs. Typical initial effort is categorized as **Quick** (less than 1 hour), **Moderate** (1-3 hours), or **Extended** (more than 3 hours); ongoing practices should be repeated as part of normal project work.

**Note:** You can use the [Testing Phase Skill](../ai/skills/testing-skills.md) to implement this phase. Refer to the [Framework Skills instructions](../ai/guide.md#framework-skills) for setup and usage guidance.

## Testing actions

### 1. Add at least one automated accessibility check

#### Why it matters

This action helps catch common regressions.

#### Definition of done

1. At least one automated accessibility check is configured or documented.
2. The check runs against relevant project code or flows.
3. Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Review the guidance on [testing continuously](https://opensource.guide/accessibility-best-practices-for-your-project/#test-accessibility-continuously).
2. Select an appropriate tool such as [Accessibility Insights](https://accessibilityinsights.io/downloads/). Other options include [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [WAVE](https://wave.webaim.org/), [axe](https://github.com/dequelabs/axe-core), and [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner).
3. Configure the test or document the decision in your project documentation.
4. Run the check against relevant project code or user flows.
5. Ensure accessibility issues from CI/CD checks are tracked.
6. Fix accessibility issues or track them using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 2. Perform a keyboard-only smoke test for core flows

#### Why it matters

This action covers a high-impact baseline.

#### Definition of done

1. Key tasks have documented keyboard-only checks.
2. The checks confirm keyboard access, focus visibility, and logical focus order.
3. Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify key tasks and user journeys.
2. Document a short set of keyboard-only checks for those tasks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-expectations).
3. Run the checks without using a mouse or other pointing device.
4. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 3. Perform a screen reader spot check for core flows

#### Why it matters

This action validates real usability beyond automation.

#### Definition of done

1. Key tasks have documented screen reader checks.
2. The test environment is recorded.
3. Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify key tasks and user journeys.
2. Select a supported screen reader and browser combination (such as Windows + [NVDA](https://www.nvaccess.org/download/) and MacOS + VoiceOver).
3. Test the flows using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-expectations).
4. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 4. Perform manual accessibility checks

#### Why it matters

This action addresses common visual access barriers.

#### Definition of done

1. Relevant interfaces have documented zoom, resize, reflow, and contrast checks.
2. Information and functionality remain available at the tested settings.
3. Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify interfaces and content where zoom, resizing, reflow, or contrast are relevant.
2. Validate the UI at larger zoom levels and resized viewport dimensions.
3. Check that content reflows without loss of information or functionality (test at 200% and with narrow widths).
4. Check applicable text, component, and focus contrast.
5. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 5. Perform accessibility checks for documentation

#### Why it matters

This action improves the first experience many users have.

#### Definition of done

1. Documentation checks cover structure, alternatives, links, captions, tables, and code blocks.
2. Representative documentation has been reviewed.
3. Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Review and identify key project documentation, such as Markdown (`.md`) files, the README, contributing and accessibility guides, installation and configuration instructions, API or developer documentation, user guides, release notes, and issue or pull request templates.
2. Perform documentation checks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-expectations).
3. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 6. Document supported environments and known limitations

#### Why it matters

This action sets transparent expectations about where the project has been evaluated and helps people understand known accessibility barriers and available alternatives.

#### Definition of done

1. The `ACCESSIBILITY.md` identifies supported or tested platforms, devices, browsers, input methods, and assistive technologies.
2. Known accessibility limitations are described in terms of their effect on users, with workarounds, equivalent access, and links to tracked issues where available.

#### Recommended Steps

1. In the `ACCESSIBILITY.md`, add a "Supported environments" section.
   - Refer to the [supported environments and known limitations example](../supporting/workflow-phase/limitations-accessibility.md) for guidance.
   - List only environments the project supports or has evaluated, include versions where useful, and note partial support.
2. Add a "Known limitations" section.
   - Describe each barrier in terms of the affected user experience rather than standards codes.
   - Include available workarounds or equivalent access and link to tracked issues.
   - If no limitations are currently documented, describe what has been tested rather than claiming that no barriers exist.
3. Invite people to report accessibility barriers that are not already documented.
