## Workflow Phase
The Workflow Phase integrates accessibility into the everyday practices that shape how a project plans, builds, reviews, and maintains its work. Rather than treating accessibility as a separate activity or a final check, this phase places accessibility expectations where contributors and maintainers already make decisions: in documentation, issue triage, pull requests, acceptance criteria, and release workflows.

The goal is to make accessible practice repeatable across the project, even as contributors, dependencies, and priorities change. Projects establish clear expectations, assign ownership, identify risks, and create lightweight review and triage processes that help prevent new barriers while making existing barriers easier to prioritize and resolve. These practices create the operational foundation for sustained accessibility improvement.

## Workflow actions

### 1. Make docs accessible by default

#### Why it matters

Makes project information usable for everyone.

#### Steps

1. Review the [accessibility best practices for documentation](https://opensource.guide/accessibility-best-practices-for-your-project/#make-docs-accessible-by-default).
2. Check document structure and semantics, images, diagrams, videos, tables, and code blocks.
3. Fix identified barriers.

#### Definition of done

- Documentation uses meaningful structure and semantics.
- Images, diagrams, and videos have appropriate alternatives or supporting text.
- Tables and code blocks are presented accessibly.


### 2. Design accessible interfaces

#### Why it matters

Helps prevent common accessibility issues from being introduced in the first place, reducing rework and improving usability for everyone.

#### Steps

1. Review the [accessible interface design practices](https://opensource.guide/accessibility-best-practices-for-your-project/#design-accessible-interfaces).
2. Ensure the [contributor requirements](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements) include checks for keyboard and screen reader support, such as visible focus states, clear labels, and other project-relevant requirements.
3. Apply the checks when creating or updating interfaces.


#### Definition of done

- Project-relevant interface requirements are documented.
- New and updated interfaces are reviewed against those requirements.
- Keyboard access, focus states, and labels are addressed or tracked.


### 3. Surface accessibility expectations for contributors

#### Why it matters

Sets norms early so they are not missed.

#### Steps

1. Review the [contributor guidance example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/CONTRIBUTING.md).
2. In your `CONTRIBUTING.md`, add a reference to your accessibility checks.

#### Definition of done

- Contributor documentation includes accessibility expectations.
- Contributors are directed to the relevant accessibility checks and resources.


### 4. Establish a simple accessibility triage approach

#### Why it matters

Helps maintainers prioritize work.

#### Steps

1. Review the [reporting accessibility issues example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#reporting-accessibility-issues).
2. In your `ACCESSIBILITY.md`, add a section on how to report accessibility issues.
3. Define severity categories such as critical, serious, moderate, and minor.
4. Document resolution expectations.
5. Set expectations for how you will respond to accessibility reports.
6. Apply the approach during triage.

#### Definition of done

- A process for reporting accessibility issues is defined.
- Severity categories are documented.
- Resolution expectations are defined.


### 5. Tag beginner-friendly accessibility issues

#### Why it matters

Makes contribution easier to start.

#### Steps

1. Identify small, well-scoped accessibility issues suitable for new contributors.
2. Apply both the `accessibility` and `good first issue` labels.
3. Add enough context and acceptance criteria for contributors to begin.

#### Definition of done

- Beginner-friendly accessibility issues are clearly labeled.
- Each selected issue has a clear scope and contribution context.


### 6. Add an accessibility section to the pull request template

#### Why it matters

Integrates accessibility into review.

#### Steps

1. Review the [pull request template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md).
2. Add checklist items for content changes and UI (user interface) changes.
3. Customize the checklist for the project’s needs.

#### Definition of done

- The pull request template includes an accessibility section.
- The checklist covers the project’s relevant accessibility requirements.
- Contributors are prompted to complete or explain each applicable item.


### 7. Leverage AI for Accessibility

#### Why it matters

Helps teams identify and address accessibility issues more efficiently while ensuring AI-generated recommendations align with project requirements and real user needs.

#### Steps

1. Review the [guidance on leveraging GitHub Copilot for accessibility](https://opensource.guide/accessibility-best-practices-for-your-project/#leverage-github-copilot).
2. If applicable, add accessibility custom instructions.
3. If applicable, create specialized AI agents or prompts for appropriate accessibility tasks.


#### Definition of done

- Agents or prompts include the project’s accessibility requirements.
- AI-generated changes are reviewed by a maintainer or subject-matter expert.


### 8. Assign accessibility ownership

#### Why it matters

Prevents drift.

#### Steps

1. Identify a maintainer, working group, or rotating role responsible for triaging accessibility work.
2. Document the responsibility in `ACCESSIBILITY.md`, `README.md`, `CONTRIBUTING.md`, a tracking issue, or `CODEOWNERS`.
3. Define how ownership is handed off when responsibilities change.

#### Definition of done

- An accessibility owner or ownership group is identified.
- Responsibilities are documented in a project-maintained location.
- A handoff process is defined.


### 9. Evaluate key dependencies and upstream blockers

#### Why it matters

Helps projects manage accessibility risks they do not fully control.

#### Steps

1. Identify major third-party components, frameworks, or tools that affect accessibility.
2. Review and document accessibility-relevant upstream issues.
3. Document workarounds, risks, and project actions where the issue is outside the project’s direct control.
4. Revisit the list as dependencies change.

#### Definition of done

- Accessibility-relevant dependencies are documented.
- Known upstream blockers are linked and tracked.
- Workarounds or mitigation plans are recorded where applicable.

## Workflow actions table

| Action | Steps | Definition of done |
| :--- | :--- | :--- |
| Make docs accessible by default | 1. Review the [accessibility best practices for documentation](https://opensource.guide/accessibility-best-practices-for-your-project/#make-docs-accessible-by-default).<br>2. Check document structure and semantics, images, diagrams, videos, tables, and code blocks.<br>3. Fix identified barriers. | - Documentation uses meaningful structure and semantics.<br>- Images, diagrams, and videos have appropriate alternatives or supporting text.<br>- Tables and code blocks are presented accessibly. |
| Design accessible interfaces | 1. Review the [accessible interface design practices](https://opensource.guide/accessibility-best-practices-for-your-project/#design-accessible-interfaces).<br>2. Ensure the [contributor requirements](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements) include checks for keyboard and screen reader support such as visible focus states, clear labels, and other project-relevant requirements.<br>3. Apply the checks when creating or updating interfaces. | - Project-relevant interface requirements are documented.<br>- New and updated interfaces are reviewed against those requirements.<br>- Keyboard access, focus states, and labels are addressed or tracked. |
| Surface accessibility expectations for contributors | 1. Review the [contributor guidance example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/CONTRIBUTING.md).<br>2. In your `CONTRIBUTING.md`, add reference to your accessibility checks. | - Contributor documentation includes accessibility expectations.<br>- Contributors are directed to the relevant accessibility checks and resources. |
| Establish a simple accessibility triage approach | 1. Review the [reporting accessibility issues example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#reporting-accessibility-issues).<br>2. In your `ACCESSIBILITY.md`, add a section on how to report accessibility issues.<br>3. Define severity categories such as critical, serious, moderate, and minor.<br>4. Document resolution expectations.<br>5. Set expectations for how you will respond to accessibility reports.<br>6. Apply the approach during triage. | - A process for reporting accessibility issues is defined.<br>- Severity categories are documented.<br>- Resolution expectations are defined. |
| Tag beginner-friendly accessibility issues | 1. Identify small, well-scoped accessibility issues suitable for new contributors.<br>2. Apply both the `accessibility` and `good first issue` labels.<br>3. Add enough context and acceptance criteria for contributors to begin. | - Beginner-friendly accessibility issues are clearly labeled.<br>- Each selected issue has a clear scope and contribution context. |
| Add an accessibility section to the pull request template | 1. Review the [pull request template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md).<br>2. Add checklist items for content changes and UI (user interface) changes.<br>3. Customize the checklist for the project’s needs. | - The pull request template includes an accessibility section.<br>- The checklist covers the project’s relevant accessibility requirements.<br>- Contributors are prompted to complete or explain each applicable item. |
| Leverage AI for Accessibility | 1. Review the [guidance on leveraging GitHub Copilot for accessibility](https://opensource.guide/accessibility-best-practices-for-your-project/#leverage-github-copilot).<br>2. If applicable, add accessibility custom instructions.<br>3. If applicable, create specialized AI agents or prompts for appropriate accessibility tasks. | - Agents or prompts include the project’s accessibility requirements.<br>- AI-generated changes are reviewed by a maintainer or subject-matter expert. |
| Assign accessibility ownership | 1. Identify a maintainer, working group, or rotating role responsible for triaging accessibility work.<br>2. Document the responsibility in `ACCESSIBILITY.md`, `README.md`, `CONTRIBUTING.md`, a tracking issue, or `CODEOWNERS`.<br>3. Define how ownership is handed off when responsibilities change. | - An accessibility owner or ownership group is identified.<br>- Responsibilities are documented in a project-maintained location.<br>- A handoff process is defined. |
| Evaluate key dependencies and upstream blockers | 1. Identify major third-party components, frameworks, or tools that affect accessibility.<br>2. Review and document accessibility-relevant upstream issues.<br>3. Document workarounds, risks, and project actions where the issue is outside the project’s direct control.<br>4. Revisit as dependencies change. | - Accessibility-relevant dependencies are documented.<br>- Known upstream blockers are linked and tracked.<br>- Workarounds or mitigation plans are recorded where applicable. |