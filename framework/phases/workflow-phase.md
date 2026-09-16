# Workflow Phase

The workflow phase integrates accessibility into the everyday practices that shape how a project plans, builds, reviews, and maintains its work. Rather than treating accessibility as a separate activity or a final check, this phase places accessibility expectations where contributors and maintainers already make decisions: in documentation, issue triage, pull requests, acceptance criteria, and release workflows.

The goal is to make accessible practice repeatable across the project, even as contributors, dependencies, and priorities change. Projects establish clear expectations, assign ownership, identify risks, and create lightweight review and triage processes that help prevent new barriers while making existing barriers easier to prioritize and resolve. These practices create the operational foundation for sustained accessibility improvement.

## Phase overview

This phase has **11 total actions** with **29 total tasks** to complete.

| Action                                                                                                                                | Number of tasks | Typical initial effort |
| :------------------------------------------------------------------------------------------------------------------------------------ | --------------: | :--------------------- |
| [Action 1](#1-surface-accessibility-expectations-for-contributors): Surface accessibility expectations for contributors               |               3 | Moderate               |
| [Action 2](#2-create-an-accessible-path-for-reporting-accessibility-bugs): Create an accessible path for reporting accessibility bugs |               2 | Moderate               |
| [Action 3](#3-establish-a-simple-accessibility-triage-approach): Establish a simple accessibility triage approach                     |               3 | Moderate               |
| [Action 4](#4-tag-beginner-friendly-accessibility-issues): Tag beginner-friendly accessibility issues                                 |               2 | Quick                  |
| [Action 5](#5-tag-accessibility-issues-where-you-need-expert-help): Tag accessibility issues where you need expert help               |               2 | Quick                  |
| [Action 6](#6-add-an-accessibility-section-to-the-pull-request-template): Add an accessibility section to the pull request template   |               3 | Quick                  |
| [Action 7](#7-assign-accessibility-ownership): Assign accessibility ownership                                                         |               2 | Quick                  |
| [Action 8](#8-make-docs-accessible-by-default): Make docs accessible by default                                                       |               3 | Extended               |
| [Action 9](#9-design-accessible-interfaces): Design accessible interfaces                                                             |               3 | Extended               |
| [Action 10](#10-leverage-ai-for-accessibility): Leverage AI for Accessibility                                                         |               2 | Moderate               |
| [Action 11](#11-evaluate-key-dependencies-and-upstream-blockers): Evaluate key dependencies and upstream blockers                     |               4 | Extended               |

Effort varies by project size and maturity. Complete these actions incrementally and adapt them to your project's needs. Typical initial effort is categorized as **Quick** (less than 1 hour), **Moderate** (1-3 hours), or **Extended** (more than 3 hours); ongoing practices should be repeated as part of normal project work.

## Workflow actions

### 1. Surface accessibility expectations for contributors

#### Why it matters

This action communicates the project’s accessibility priorities and sets clear expectations for contributors.

#### Definition of done

1. The project’s `ACCESSIBILITY.md` includes a "Priorities" section describing its accessibility goals and areas of focus.
2. The project’s `ACCESSIBILITY.md` includes a "Contributor expectations" section describing the accessibility requirements for contributions.
3. The project’s `CONTRIBUTING.md` directs contributors to these expectations and any relevant accessibility checks and resources.

#### Recommended Steps

1. Add a "Priorities" section to your `ACCESSIBILITY.md` that identifies the project’s accessibility goals, applicable standards, and areas of focus.
   - Refer to the [priorities and contributor expectations example](../supporting/workflow-phase/contributor-accessibility.md) for guidance.
2. Add a "Contributor expectations" section that defines the accessibility testing, documentation, and continuous integration requirements for contributions.
   - Refer to the [priorities and contributor expectations example](../supporting/workflow-phase/contributor-accessibility.md) for guidance.
3. In your `CONTRIBUTING.md`, add a reference to the contributor expectations from your `ACCESSIBILITY.md`.
   - Refer to the [contributor guidance example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/CONTRIBUTING.md) for guidance.

**Note:** Mature projects can refer to this comprehensive [`ACCESSIBILITY.md` example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md) for additional guidance.

### 2. Create an accessible path for reporting accessibility bugs

#### Why it matters

A clear, accessible reporting path improves report quality and supports consistent triage.

#### Definition of done

1. The project documents an accessible way to report accessibility bugs.
2. Submitted accessibility reports follow a documented triage and response process.

#### Recommended Steps

1. Create and document a reporting method, such as an issue template.
   - Refer to the [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml) for guidance.
2. Request useful details, including expected and actual behavior, steps to reproduce, environment, assistive technology, and severity.
3. Apply the `accessibility` label, or a clearly understood equivalent, to submitted reports if applicable.
4. If the primary reporting method creates an accessibility barrier, provide an alternative reporting path, such as an accessible email address or community contact.

### 3. Establish a simple accessibility triage approach

#### Why it matters

This action gives people a clear way to report accessibility barriers and helps maintainers assess, prioritize, and respond to them consistently.

#### Definition of done

1. The `ACCESSIBILITY.md` explains how to report an accessibility barrier and what information is helpful to include.
2. Severity categories describe how strongly a barrier affects a person’s ability to complete a task.
3. Response expectations explain how reports are acknowledged, tracked, updated, and resolved.

#### Recommended Steps

1. In the `ACCESSIBILITY.md`, define your process for reporting accessibility issues
   - Refer to the [reporting accessibility issues example](../supporting/workflow-phase/triage-accessibility.md) for guidance.
2. Define severity categories, such as critical, serious, moderate, and minor, based on how strongly a barrier affects a person’s ability to complete a task.
   - Keep these categories consistent with the project’s issue template, labels, and resolution targets.
3. Document what reporters can expect, including acknowledgement, status updates, workarounds, anticipated timelines, and opportunities to verify a fix.
4. Apply the documented severity and response approach when triaging accessibility reports.

**Note:** Mature projects can refer to this comprehensive [`ACCESSIBILITY.md` example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md) for additional guidance.

### 4. Tag beginner-friendly accessibility issues

#### Why it matters

This action makes contribution easier to start.

#### Definition of done

1. Beginner-friendly accessibility issues are clearly labeled (using both `good first issue` and `accessibility` (or another clearly understood equivalent) labels).
2. Each selected issue has a clear scope and contribution context.

#### Recommended Steps

1. Identify small, well-scoped accessibility issues suitable for new contributors.
2. Apply both the `good first issue` and `accessibility` (or another clearly understood equivalent) labels.
3. Add enough context and acceptance criteria for contributors to begin.

### 5. Tag accessibility issues where you need expert help

#### Why it matters

This action makes contribution easier to start.

#### Definition of done

1. Accessibility issues where expert help is needed are clearly labeled `help wanted` and `accessibility` (or another clearly understood equivalent) labels.
2. Each selected issue has a clear scope and contribution context.

#### Recommended Steps

1. Identify accessibility issues that require specialized knowledge or experience.
2. Apply both the `help wanted` and `accessibility` (or another clearly understood equivalent) labels.
3. Add enough context, acceptance criteria, and required expertise for contributors to begin.

### 6. Add an accessibility section to the pull request template

#### Why it matters

This action makes accessibility a consistent part of the review process.

#### Definition of done

1. The pull request template includes an accessibility section.
2. The checklist covers the project’s relevant accessibility requirements.
3. Contributors are prompted to complete each applicable item.

#### Recommended Steps

1. Include an Accessibility checklist in your pull request template (create one if there isn't one already)
   - Refer to the [pull request template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md) for guidance.
2. Add checklist items for content changes and UI (user interface) changes.
3. Prompted contributors to complete each applicable item.
4. Customize the checklist for the project’s needs.

### 7. Assign accessibility ownership

#### Why it matters

This action prevents drift.

#### Definition of done

1. The `ACCESSIBILITY.md` identifies an accessibility owner.
2. Responsibilities are documented.

#### Recommended Steps

1. In the `ACCESSIBILITY.md`, identify a maintainer for triaging accessibility work.
2. Document the responsibilities of the accessibility owner.
   - Refer to the [ownership and maintenance example](../supporting/workflow-phase/ownership-accessibility.md) for guidance.

### 8. Make docs accessible by default

#### Why it matters

This action makes project information usable for everyone.

#### Definition of done

1. Documentation uses meaningful structure and semantics.
2. Images, diagrams, and videos have appropriate alternatives or supporting text.
3. Tables and code blocks are presented accessibly.

#### Recommended Steps

1. Review the [accessibility best practices for documentation](https://opensource.guide/accessibility-best-practices-for-your-project/#make-docs-accessible-by-default).
2. Check document structure and semantics, images, diagrams, videos, tables, and code blocks.
3. Fix identified barriers.

### 9. Design accessible interfaces

#### Why it matters

This action helps prevent common accessibility issues from being introduced in the first place, reducing rework and improving usability for everyone.

#### Definition of done

1. Project-relevant interface requirements are documented.
2. New and updated interfaces are reviewed against those requirements.
3. Keyboard access, focus states, and labels are addressed or tracked.

#### Recommended Steps

1. Review the [accessible interface design practices](https://opensource.guide/accessibility-best-practices-for-your-project/#design-accessible-interfaces).
2. Ensure the [contributor expectations](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-expectations) include checks for keyboard and screen reader support, such as visible focus states, clear labels, and other project-relevant requirements.
3. Apply the checks when creating or updating interfaces.

### 10. Leverage AI for Accessibility

#### Why it matters

This action helps teams identify and address accessibility issues more efficiently while ensuring AI-generated recommendations align with project requirements and real user needs.

#### Definition of done

1. Agents or prompts include the project’s accessibility requirements.
2. AI-generated changes are reviewed by a maintainer or subject-matter expert.

#### Recommended Steps

1. Review the [guidance on leveraging GitHub Copilot for accessibility](https://opensource.guide/accessibility-best-practices-for-your-project/#leverage-github-copilot).
2. If applicable, add accessibility custom instructions.
3. If applicable, create specialized AI agents or prompts for appropriate accessibility tasks.

### 11. Evaluate key dependencies and upstream blockers

#### Why it matters

This action helps projects manage accessibility risks they do not fully control.

#### Definition of done

1. Accessibility-relevant dependencies are documented.
2. The accessibility of new dependencies is reviewed before they are adopted.
3. Known upstream blockers are linked and tracked.
4. Workarounds or mitigation plans are recorded where applicable.

#### Recommended Steps

1. Identify major third-party components, frameworks, or tools that affect accessibility.
2. Review the accessibility of a dependency, including known barriers and upstream issues, before adopting it.
3. Review and document accessibility-relevant upstream issues for existing dependencies.
4. Document workarounds, risks, and project actions where the issue is outside the project’s direct control.
5. Revisit the list as dependencies change.
