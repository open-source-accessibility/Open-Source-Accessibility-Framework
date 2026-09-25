# Workflow Phase Skill

This portable skill can implement every action in the [Workflow Phase](../../phases/workflow-phase.md) or only the actions a user selects.

Example requests:

- "Use the Workflow Phase skill to implement all actions."
- "Use the Workflow Phase skill to implement Actions 2 and 3."
- "Use the Workflow Phase skill to add accessibility checks to our pull request template."

Copy the code block into the skill directory supported by your AI agent. The source follows the `main` branch. For reproducible behavior, replace `main` in `metadata.framework-source` with a release tag or commit SHA.

```markdown
---
name: workflow-phase
description: "Implements all Workflow Phase actions or selected actions by number or title."
metadata:
  framework-phase-id: workflow
  framework-source-ref: main
  framework-source: "https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/main/framework/phases/workflow-phase.md"
---

1. Retrieve the phase document from `metadata.framework-source`.
2. Identify the numbered level-three action headings under "Workflow actions."
3. Determine the requested scope:
   - If the user requests all actions, select every action in phase order.
   - If the user provides action numbers, titles, or heading anchors, select only those actions.
   - If the user does not specify a scope, ask whether to implement all actions or selected actions before changing files.
   - If a requested action does not exist, report the mismatch and ask the user to select a valid action.
4. For every selected action, read its complete section through the next level-three action heading, including "Why it matters," "Definition of done," "Recommended Steps," notes, and linked examples.
5. Treat each selected action's "Definition of done" as the authoritative requirements. Use "Recommended Steps" as implementation guidance that may be adapted to the repository.
6. Inspect the repository before editing. Identify requirements already satisfied, requirements needing changes, and requirements that require access to external issue trackers, repository settings, or community tools.
7. Implement the selected actions in phase order. Keep documentation, templates, labels, ownership guidance, and contribution workflows consistent with one another.
8. Do not apply labels, assign people, publish comments, or make other external changes without the user's authorization and the required tool access. Never invent maintainer names or test results.
9. Verify each selected action against every definition-of-done item. Clearly distinguish completed requirements from unmet requirements and external follow-up.
10. Present the changes and verification results for maintainer review before committing.
11. If the phase source cannot be retrieved or parsed, report the error and stop instead of using remembered requirements.
```
