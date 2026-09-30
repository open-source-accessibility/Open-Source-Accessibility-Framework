---
name: foundational-phase
description: "Implements all Foundational Phase actions or selected actions by number, title, or ID, with bundled offline requirements."
metadata:
  framework-phase-id: foundational
  framework-bundle-digest: "96ebaeccd787"
  framework-source-ref: main
  framework-source: "https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/main/framework/phases/foundational-phase.md"
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
8. Do not claim that completing the phase makes the project fully accessible, compliant, or certified.
9. Verify every selected action against its definition of done. Separate completed requirements, unmet requirements, recurring work for ongoing actions, and external or manual follow-up.
10. Present changes, evidence, and verification results for maintainer review before committing or publishing.

## Bundled action requirements

### Action 1: Create an ACCESSIBILITY.md

- **ID:** `create-an-accessibilitymd`
- **Cadence:** One-time setup
- **Definition of done:**
    1. An `ACCESSIBILITY.md` exists in the repository.
    2. The file includes a brief statement describing why accessibility matters to your project.

### Action 2: Use an accessibility label to track relevant work

- **ID:** `use-an-accessibility-label-to-track-relevant-work`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. An `accessibility` label, or an equivalent label with a clear name, exists.
    2. The label is applied to the project’s relevant open tracking issues.
