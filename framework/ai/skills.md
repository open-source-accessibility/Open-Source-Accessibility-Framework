# Workflow Skills Catalog

The following skills are portable, self-contained instructions that an AI agent can load on demand. Each skill corresponds to an action in the [Workflow Phase](../phases/workflow-phase.md). Copy a skill's code block into your agent's skill directory (such as `skills/SKILL.md`) to use it.

Skills use a standard YAML frontmatter format with `name`, `description`, and `instructions` fields so they work across agent platforms.

---

## Skill 1: Surface Accessibility Expectations

**Action:** [Surface accessibility expectations for contributors](../phases/workflow-phase.md#1-surface-accessibility-expectations-for-contributors)

```yaml
---
name: surface-accessibility-expectations
description: >-
  Reviews and drafts accessibility expectations documentation for contributors,
  including priorities sections in ACCESSIBILITY.md and references in
  CONTRIBUTING.md.
---

instructions:
  - Read the project's ACCESSIBILITY.md, CONTRIBUTING.md, and README.md.
  - Identify whether an accessibility priorities section exists.
    If it is missing, draft one that states the conformance target,
    applicable standards, and focus areas (keyboard, screen reader,
    content, language support).
  - Identify whether a contributor expectations section exists.
    If it is missing, draft one that defines testing, documentation,
    and CI requirements for contributions.
  - In CONTRIBUTING.md, add a reference directing contributors to the
    accessibility expectations in ACCESSIBILITY.md.
  - Verify that all cross-references between files are correct.
  - Present the changes for maintainer review before committing.
```

---

## Skill 2: Accessible Bug Reporting Path

**Action:** [Create an accessible path for reporting accessibility bugs](../phases/workflow-phase.md#2-create-an-accessible-path-for-reporting-accessibility-bugs)

```yaml
---
name: accessible-bug-reporting
description: >-
  Creates or reviews an accessibility bug reporting path, including issue
  templates, labels, and alternative reporting methods.
---

instructions:
  - Check for an existing accessibility issue template in
    .github/ISSUE_TEMPLATE/.
  - If no template exists, draft one that requests: expected and actual
    behavior, steps to reproduce, environment, assistive technology used,
    and severity.
  - Verify the template uses accessible form controls and clear labels.
  - Ensure an accessibility label (or equivalent) is applied to submitted
    reports.
  - If the primary reporting method creates a barrier, propose an
    alternative path such as an accessible email address or community
    contact.
  - Present the changes for maintainer review before committing.
```

---

## Skill 3: Accessibility Triage Approach

**Action:** [Establish a simple accessibility triage approach](../phases/workflow-phase.md#3-establish-a-simple-accessibility-triage-approach)

```yaml
---
name: accessibility-triage
description: >-
  Drafts or reviews a triage approach for accessibility reports, including
  severity categories and response expectations in ACCESSIBILITY.md.
---

instructions:
  - Read the project's ACCESSIBILITY.md and existing issue templates.
  - Identify whether a reporting process is documented.
    If missing, draft one that explains how to report a barrier and what
    information is helpful to include.
  - Define severity categories (critical, serious, moderate, minor) based
    on how strongly a barrier affects a person's ability to complete a
    task. Keep categories consistent with issue templates and labels.
  - Document what reporters can expect: acknowledgement, status updates,
    workarounds, timelines, and opportunities to verify a fix.
  - Verify that the triage approach aligns with the existing issue
    template and labels.
  - Present the changes for maintainer review before committing.
```

---

## Skill 4: Tag Beginner-Friendly Issues

**Action:** [Tag beginner-friendly accessibility issues](../phases/workflow-phase.md#4-tag-beginner-friendly-accessibility-issues)

```yaml
---
name: tag-beginner-friendly-issues
description: >-
  Identifies and labels accessibility issues suitable for new contributors
  with clear scope and contribution context.
---

instructions:
  - Search open issues for small, well-scoped accessibility tasks
    suitable for new contributors.
  - For each candidate, verify it has clear scope, acceptance criteria,
    and enough context for a beginner to start.
  - If context is missing, draft a comment adding the needed details.
  - Apply both the good-first-issue and accessibility labels (or
    equivalents) to each selected issue.
  - Present the list of proposed labels and any added context for
    maintainer review before applying.
```

---

## Skill 5: Tag Expert-Help Issues

**Action:** [Tag accessibility issues where you need expert help](../phases/workflow-phase.md#5-tag-accessibility-issues-where-you-need-expert-help)

```yaml
---
name: tag-expert-help-issues
description: >-
  Identifies and labels accessibility issues that require specialized
  knowledge, with clear scope and required expertise.
---

instructions:
  - Search open issues for accessibility tasks that require specialized
    knowledge or experience (such as screen reader testing, ARIA
    patterns, or keyboard interaction design).
  - For each candidate, verify it has clear scope and acceptance criteria.
  - If the required expertise is not documented, add a note describing
    what skills are needed.
  - Apply both the help-wanted and accessibility labels (or equivalents)
    to each selected issue.
  - Present the list of proposed labels and expertise notes for
    maintainer review before applying.
```

---

## Skill 6: PR Template Accessibility Section

**Action:** [Add an accessibility section to the pull request template](../phases/workflow-phase.md#6-add-an-accessibility-section-to-the-pull-request-template)

```yaml
---
name: pr-template-accessibility
description: >-
  Creates or reviews an accessibility checklist section in the pull
  request template, covering content and UI changes.
---

instructions:
  - Read the existing pull request template at
    .github/PULL_REQUEST_TEMPLATE.md (create one if it does not exist).
  - If no accessibility section exists, draft a checklist with items
    for content changes (heading structure, link text, alt text,
    plain language) and UI changes (keyboard access, focus states,
    labels, ARIA).
  - Prompt contributors to complete each applicable item.
  - Customize the checklist to match the project's specific
    accessibility requirements from ACCESSIBILITY.md.
  - Verify that checklist items are clear and actionable.
  - Present the changes for maintainer review before committing.
```

---

## Skill 7: Assign Accessibility Ownership

**Action:** [Assign accessibility ownership](../phases/workflow-phase.md#7-assign-accessibility-ownership)

```yaml
---
name: assign-accessibility-ownership
description: >-
  Drafts or reviews the accessibility owner section in ACCESSIBILITY.md,
  including responsibilities for triaging accessibility work.
---

instructions:
  - Read the project's ACCESSIBILITY.md.
  - Identify whether an accessibility owner is documented.
  - If missing, draft a section that names a maintainer responsible for
    triaging accessibility work.
  - Document the owner's responsibilities, including triage, label
    management, severity assignment, and coordination with contributors.
  - Verify the owner section aligns with the triage approach and
    contributor expectations already documented.
  - Present the changes for maintainer review before committing.
```

---

## Skill 8: Accessible Documentation

**Action:** [Make docs accessible by default](../phases/workflow-phase.md#8-make-docs-accessible-by-default)

```yaml
---
name: accessible-documentation
description: >-
  Reviews documentation for accessibility, including heading structure,
  images, diagrams, videos, tables, and code blocks.
---

instructions:
  - Read the documentation files in the repository (README, docs,
    contributing guides, and any markdown files).
  - Check heading structure: logical hierarchy with no skipped levels,
    a single H1 per page.
  - Check images and diagrams: meaningful alternative text, text
    alternatives for complex images placed nearby.
  - Check videos: captions and transcripts are available.
  - Check tables: proper header cells and scope attributes where needed.
  - Check code blocks: language specified for syntax highlighting,
    readable formatting.
  - Check link text: descriptive rather than "click here" or "read more".
  - Report each issue found with a suggested fix and the file location.
  - Present the report for maintainer review.
```

---

## Skill 9: Accessible Interface Design

**Action:** [Design accessible interfaces](../phases/workflow-phase.md#9-design-accessible-interfaces)

```yaml
---
name: accessible-interface-design
description: >-
  Reviews interface code for accessibility, including keyboard access,
  focus states, labels, and project-relevant interface requirements.
---

instructions:
  - Read the project's ACCESSIBILITY.md for documented interface
    requirements.
  - Review the component or interface code for the following:
    - Keyboard access: all interactive elements are reachable and
      operable with a keyboard, with a visible focus indicator and
      logical tab order.
    - Focus states: visible focus is always present with sufficient
      contrast. No outline removal without a replacement indicator.
    - Labels: all controls have clear, accessible names (programmatic
      labels that match the action or field purpose).
    - Semantics: semantic HTML is used where available. Custom controls
      expose proper roles, states, and properties.
  - Report each issue with the relevant WCAG success criterion or
    ARIA pattern and a suggested fix.
  - Present the report for maintainer review.
```

---

## Skill 10: Leverage AI for Accessibility

**Action:** [Leverage AI for Accessibility](../phases/workflow-phase.md#10-leverage-ai-for-accessibility)

```yaml
---
name: leverage-ai-accessibility
description: >-
  Configures AI tools for accessibility tasks, including custom
  instructions, agents, and prompts that align with project
  accessibility requirements.
---

instructions:
  - Read the project's ACCESSIBILITY.md and contributor expectations.
  - Check for an AGENTS.md file at the repository root.
    If missing, draft one that states the conformance target and
    requires AI-generated changes to be reviewed by a maintainer.
  - Check for a .github/copilot-instructions.md file.
    If missing, draft one with accessibility guidelines for inline
    suggestions (semantic HTML, accessible labels, alt text prompts).
  - Review existing AI prompts or agents for accessibility coverage.
  - Ensure all AI-generated changes are reviewed by a maintainer or
    subject-matter expert before merging.
  - Refer to the AI Usage Guidance for detailed recommendations.
  - Present the changes for maintainer review before committing.
```

---

## Skill 11: Evaluate Dependencies and Blockers

**Action:** [Evaluate key dependencies and upstream blockers](../phases/workflow-phase.md#11-evaluate-key-dependencies-and-upstream-blockers)

```yaml
---
name: evaluate-dependencies-blockers
description: >-
  Identifies and documents accessibility-relevant dependencies, reviews
  new dependencies before adoption, and tracks upstream blockers.
---

instructions:
  - Read package manifests (package.json, requirements.txt, Cargo.toml,
    or equivalent) to identify major third-party components, frameworks,
    and tools.
  - For each dependency, assess its accessibility impact: does it render
    UI, handle keyboard input, manage focus, or expose ARIA?
  - For new dependencies, review known accessibility barriers and
    upstream issues before recommending adoption.
  - For existing dependencies, search for accessibility-related upstream
    issues and link them in the documentation.
  - Document workarounds, risks, and project actions for issues outside
    the project's direct control.
  - Present the dependency evaluation for maintainer review.
```
