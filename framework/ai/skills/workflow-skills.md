# Workflow Phase Skill

This skill can implement every action in the [Workflow Phase](../../phases/workflow-phase.md) or only the actions a user selects.

Example requests:

- "Use the Workflow Phase skill to implement all actions."
- "Use the Workflow Phase skill to implement Actions 2 and 3."
- "Use the Workflow Phase skill to add accessibility checks to our pull request template."

## Install the skill

Choose one installation method.

### Option 1: Install the complete package with npm

Use npm to install the skill and its detailed offline action references:

```sh
npx @open-source-accessibility/framework-skills add workflow-phase --target <skill-directory>
```

Replace `<skill-directory>` with the skill directory supported by your AI agent.

#### Detailed action references included with npm

The npm package installs the following references:

- [Action 1: Surface accessibility expectations for contributors](./workflow-phase/references/action-01-surface-accessibility-expectations-for-contributors.md)
- [Action 2: Create an accessible path for reporting accessibility bugs](./workflow-phase/references/action-02-create-an-accessible-path-for-reporting-accessibility-bugs.md)
- [Action 3: Establish a simple accessibility triage approach](./workflow-phase/references/action-03-establish-a-simple-accessibility-triage-approach.md)
- [Action 4: Add an accessibility section to the pull request template](./workflow-phase/references/action-04-add-an-accessibility-section-to-the-pull-request-template.md)
- [Action 5: Tag beginner-friendly accessibility issues](./workflow-phase/references/action-05-tag-beginner-friendly-accessibility-issues.md)
- [Action 6: Tag accessibility issues where you need expert help](./workflow-phase/references/action-06-tag-accessibility-issues-where-you-need-expert-help.md)
- [Action 7: Assign accessibility ownership](./workflow-phase/references/action-07-assign-accessibility-ownership.md)
- [Action 8: Make docs accessible by default](./workflow-phase/references/action-08-make-docs-accessible-by-default.md)
- [Action 9: Design accessible interfaces](./workflow-phase/references/action-09-design-accessible-interfaces.md)
- [Action 10: Evaluate key dependencies and upstream blockers](./workflow-phase/references/action-10-evaluate-key-dependencies-and-upstream-blockers.md)

They supplement the compact requirements in `SKILL.md` with each action's rationale and recommended steps. This can be more useful for projects that want detailed offline guidance because the agent can load only the references for the selected actions instead of loading every action's full guidance.

### Option 2: Copy the skill directly

If you do not want to use npm, copy the following code block into a `SKILL.md` file in your agent's skill directory. The copied skill is self-contained, includes compact definitions of done, and works without network access.

```markdown
---
name: workflow-phase
description: "Implements all Workflow Phase actions or selected actions by number, title, or ID, with bundled offline requirements."
metadata:
  framework-phase-id: workflow
  framework-bundle-digest: "e96a0f4de275"
  framework-source-ref: main
  framework-source: "https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/main/framework/phases/workflow-phase.md"
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
8. Do not apply labels, assign people, publish comments, or make other external changes without the user's authorization and the required tool access.
9. Never invent maintainer names or test results.
10. Verify every selected action against its definition of done. Separate completed requirements, unmet requirements, recurring work for ongoing actions, and external or manual follow-up.
11. Present changes, evidence, and verification results for maintainer review before committing or publishing.

## Bundled action requirements

### Action 1: Surface accessibility expectations for contributors

- **ID:** `surface-accessibility-expectations-for-contributors`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The project’s `ACCESSIBILITY.md` includes a "Priorities" section describing its accessibility goals and areas of focus.
    2. The project’s `ACCESSIBILITY.md` includes a "Contributor expectations" section describing the accessibility requirements for contributions.
    3. The project’s `CONTRIBUTING.md` directs contributors to these expectations and any relevant accessibility checks and resources.

### Action 2: Create an accessible path for reporting accessibility bugs

- **ID:** `create-an-accessible-path-for-reporting-accessibility-bugs`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The project documents an accessible way to report accessibility bugs.
    2. Submitted accessibility reports follow a documented triage and response process.

### Action 3: Establish a simple accessibility triage approach

- **ID:** `establish-a-simple-accessibility-triage-approach`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The `ACCESSIBILITY.md` explains how to report an accessibility barrier and what information is helpful to include.
    2. Severity categories describe how strongly a barrier affects a person’s ability to complete a task.
    3. Response expectations explain how reports are acknowledged, tracked, updated, and resolved.

### Action 4: Add an accessibility section to the pull request template

- **ID:** `add-an-accessibility-section-to-the-pull-request-template`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The pull request template includes an accessibility section.
    2. The checklist covers the project’s relevant accessibility requirements.
    3. Contributors are prompted to complete each applicable item.

### Action 5: Tag beginner-friendly accessibility issues

- **ID:** `tag-beginner-friendly-accessibility-issues`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Beginner-friendly accessibility issues are clearly labeled using both `good first issue` and `accessibility`, or another clearly understood equivalent, labels.
    2. Each selected issue has a clear scope and contribution context.

### Action 6: Tag accessibility issues where you need expert help

- **ID:** `tag-accessibility-issues-where-you-need-expert-help`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Accessibility issues where expert help is needed are clearly labeled with `help wanted` and `accessibility`, or another clearly understood equivalent, labels.
    2. Each selected issue has a clear scope and contribution context.

### Action 7: Assign accessibility ownership

- **ID:** `assign-accessibility-ownership`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. The `ACCESSIBILITY.md` identifies an accessibility owner.
    2. Responsibilities are documented.

### Action 8: Make docs accessible by default

- **ID:** `make-docs-accessible-by-default`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Documentation uses meaningful structure and semantics.
    2. Images, diagrams, and videos have appropriate alternatives or supporting text.
    3. Tables and code blocks are presented accessibly.

### Action 9: Design accessible interfaces

- **ID:** `design-accessible-interfaces`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Project-relevant interface requirements are documented.
    2. New and updated interfaces are reviewed against those requirements.
    3. Keyboard access, focus states, and labels are addressed or tracked.

### Action 10: Evaluate key dependencies and upstream blockers

- **ID:** `evaluate-key-dependencies-and-upstream-blockers`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Accessibility-relevant dependencies are documented.
    2. The accessibility of new dependencies is reviewed before they are adopted.
    3. Known upstream blockers are linked and tracked.
    4. Workarounds or mitigation plans are recorded where applicable.
```
