# Workflow Phase

The workflow phase integrates accessibility into the everyday practices that shape how a project plans, builds, reviews, and maintains its work. Rather than treating accessibility as a separate activity or a final check, this phase places accessibility expectations where contributors and maintainers already make decisions: in documentation, issue triage, pull requests, acceptance criteria, and release workflows.

The goal is to make accessible practice repeatable across the project, even as contributors, dependencies, and priorities change. Projects establish clear expectations, assign ownership, identify risks, and create lightweight review and triage processes that help prevent new barriers while making existing barriers easier to prioritize and resolve. These practices create the operational foundation for sustained accessibility improvement.

## Phase overview

This phase has **9 total actions** with **25 total tasks** to complete.

| Action                                                                                                                              | Number of tasks | Typical initial effort |
| :---------------------------------------------------------------------------------------------------------------------------------- | --------------: | :--------------------- |
| [Action 1](#1-make-docs-accessible-by-default): Make docs accessible by default                                                     |               3 | Extended               |
| [Action 2](#2-design-accessible-interfaces): Design accessible interfaces                                                           |               3 | Extended               |
| [Action 3](#3-surface-accessibility-expectations-for-contributors): Surface accessibility expectations for contributors             |               2 | Quick                  |
| [Action 4](#4-establish-a-simple-accessibility-triage-approach): Establish a simple accessibility triage approach                   |               3 | Moderate               |
| [Action 5](#5-tag-beginner-friendly-accessibility-issues): Tag beginner-friendly accessibility issues                               |               2 | Moderate               |
| [Action 6](#6-add-an-accessibility-section-to-the-pull-request-template): Add an accessibility section to the pull request template |               3 | Quick                  |
| [Action 7](#7-leverage-ai-for-accessibility): Leverage AI for Accessibility                                                         |               2 | Moderate               |
| [Action 8](#8-assign-accessibility-ownership): Assign accessibility ownership                                                       |               3 | Moderate               |
| [Action 9](#9-evaluate-key-dependencies-and-upstream-blockers): Evaluate key dependencies and upstream blockers                     |               4 | Extended               |

Effort varies by project size and maturity. Complete these actions incrementally and adapt them to your project's needs. Typical initial effort is categorized as **Quick** (less than 1 hour), **Moderate** (1-3 hours), or **Extended** (more than 3 hours); ongoing practices should be repeated as part of normal project work.

## Workflow actions

### 1. Make docs accessible by default

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

### 2. Design accessible interfaces

#### Why it matters

This action helps prevent common accessibility issues from being introduced in the first place, reducing rework and improving usability for everyone.

#### Definition of done

1. Project-relevant interface requirements are documented.
2. New and updated interfaces are reviewed against those requirements.
3. Keyboard access, focus states, and labels are addressed or tracked.

#### Recommended Steps

1. Review the [accessible interface design practices](https://opensource.guide/accessibility-best-practices-for-your-project/#design-accessible-interfaces).
2. Ensure the [contributor requirements](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements) include checks for keyboard and screen reader support, such as visible focus states, clear labels, and other project-relevant requirements.
3. Apply the checks when creating or updating interfaces.

### 3. Surface accessibility expectations for contributors

#### Why it matters

This action sets norms early so they are not missed.

#### Definition of done

1. Contributor documentation includes accessibility expectations.
2. Contributors are directed to the relevant accessibility checks and resources.

#### Recommended Steps

1. Review the [contributor guidance example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/CONTRIBUTING.md).
2. In your `CONTRIBUTING.md`, add a reference to your accessibility checks.

### 4. Establish a simple accessibility triage approach

#### Why it matters

This action helps maintainers prioritize work.

#### Definition of done

1. A process for reporting accessibility issues is defined.
2. Severity categories are documented.
3. Resolution expectations are defined.

#### Recommended Steps

1. Review the [reporting accessibility issues example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#reporting-accessibility-issues).
2. In your `ACCESSIBILITY.md`, add a section on how to report accessibility issues.
3. Define severity categories such as critical, serious, moderate, and minor.
4. Document resolution expectations.
5. Set expectations for how you will respond to accessibility reports.
6. Apply the approach during triage.

### 5. Tag beginner-friendly accessibility issues

#### Why it matters

This action makes contribution easier to start.

#### Definition of done

1. Beginner-friendly accessibility issues are clearly labeled.
2. Each selected issue has a clear scope and contribution context.

#### Recommended Steps

1. Identify small, well-scoped accessibility issues suitable for new contributors.
2. Apply both the `accessibility` and `good first issue` labels.
3. Add enough context and acceptance criteria for contributors to begin.

### 6. Add an accessibility section to the pull request template

#### Why it matters

This action makes accessibility a consistent part of the review process.

#### Definition of done

1. The pull request template includes an accessibility section.
2. The checklist covers the project’s relevant accessibility requirements.
3. Contributors are prompted to complete or explain each applicable item.

#### Recommended Steps

1. Review the [pull request template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md).
2. Add checklist items for content changes and UI (user interface) changes.
3. Customize the checklist for the project’s needs.

### 7. Leverage AI for Accessibility

#### Why it matters

This action helps teams identify and address accessibility issues more efficiently while ensuring AI-generated recommendations align with project requirements and real user needs.

#### Definition of done

1. Agents or prompts include the project’s accessibility requirements.
2. AI-generated changes are reviewed by a maintainer or subject-matter expert.

#### Recommended Steps

1. Review the [guidance on leveraging GitHub Copilot for accessibility](https://opensource.guide/accessibility-best-practices-for-your-project/#leverage-github-copilot).
2. If applicable, add accessibility custom instructions.
3. If applicable, create specialized AI agents or prompts for appropriate accessibility tasks.

### 8. Assign accessibility ownership

#### Why it matters

This action prevents drift.

#### Definition of done

1. An accessibility owner or ownership group is identified.
2. Responsibilities are documented in a project-maintained location.
3. A handoff process is defined.

#### Recommended Steps

1. Identify a maintainer, working group, or rotating role responsible for triaging accessibility work.
2. Document the responsibility in `ACCESSIBILITY.md`, `README.md`, `CONTRIBUTING.md`, a tracking issue, or `CODEOWNERS`.
3. Define how ownership is handed off when responsibilities change.

### 9. Evaluate key dependencies and upstream blockers

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
