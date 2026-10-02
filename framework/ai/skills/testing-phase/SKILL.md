---
name: testing-phase
description: "Implements all Testing Phase actions or selected actions by number, title, or ID, with bundled offline requirements."
metadata:
  framework-phase-id: testing
  framework-bundle-digest: "5eafcc2464e3"
  framework-source-ref: main
  framework-source: "https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/main/framework/phases/testing-phase.md"
---

1. Determine the requested scope from the bundled action requirements below:
   - If the user requests all actions, select every action in phase order.
   - If the user provides action numbers, titles, or IDs, select only those actions.
   - If the user does not specify a scope, ask whether to implement all actions or selected actions before changing files.
   - If a requested action does not exist, report the mismatch and list the valid bundled actions.
2. Work offline from the bundled requirements when network access or local references are unavailable. Do not stop solely because an online source cannot be reached.
3. If this skill was installed with its `references/` directory, load only `references/manifest.md` and the files for the selected actions. Do not load every action reference for a selected-action request.
4. Treat each selected action's bundled "Definition of done" as the minimum authoritative requirements. Use a local action reference, when available, for its rationale and recommended steps.
5. Only check `metadata.framework-source` when the user requests the latest guidance or the agent can do so without displacing needed repository context. If online requirements differ from the bundle, report the difference and ask before switching; an online check failure must not block the bundled workflow.
6. Inspect the repository before editing. Identify requirements already satisfied, requirements needing changes, and requirements needing maintainer input, external configuration, or manual work.
7. Implement selected actions in phase order, preserve repository conventions, and avoid replacing valid accessibility practices unnecessarily.
8. Do not claim that a manual, keyboard, screen reader, visual, or assistive-technology test was performed without runtime evidence.
9. Record the tested environment and distinguish completed tests from procedures that still need a person to run them.
10. Verify every selected action against its definition of done. Separate completed requirements, unmet requirements, recurring work for ongoing actions, and external or manual follow-up.
11. Present changes, evidence, and verification results for maintainer review before committing or publishing.

## Bundled action requirements

### Action 1: Add at least one automated accessibility check

- **ID:** `add-at-least-one-automated-accessibility-check`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. At least one automated accessibility check is configured or documented.
    2. The check runs against relevant project code or flows.
    3. Accessibility issues are fixed or tracked.

### Action 2: Perform a keyboard-only smoke test for core flows

- **ID:** `perform-a-keyboard-only-smoke-test-for-core-flows`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Key tasks have documented keyboard-only checks.
    2. The checks confirm keyboard access, focus visibility, and logical focus order.
    3. Accessibility issues are fixed or tracked.

### Action 3: Perform a screen reader spot check for core flows

- **ID:** `perform-a-screen-reader-spot-check-for-core-flows`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Key tasks have documented screen reader checks.
    2. The test environment is recorded.
    3. Accessibility issues are fixed or tracked.

### Action 4: Perform manual accessibility checks

- **ID:** `perform-manual-accessibility-checks`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Relevant interfaces have documented zoom, resize, reflow, and contrast checks.
    2. Information and functionality remain available at the tested settings.
    3. Accessibility issues are fixed or tracked.

### Action 5: Perform accessibility checks for documentation

- **ID:** `perform-accessibility-checks-for-documentation`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Documentation checks cover structure, alternatives, links, captions, tables, and code blocks.
    2. Representative documentation has been reviewed.
    3. Accessibility issues are fixed or tracked.

### Action 6: Document supported environments and known limitations

- **ID:** `document-supported-environments-and-known-limitations`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The `ACCESSIBILITY.md` identifies supported or tested platforms, devices, browsers, input methods, and assistive technologies.
    2. Known accessibility limitations are described in terms of their effect on users, with workarounds, equivalent access, and links to tracked issues where available.
