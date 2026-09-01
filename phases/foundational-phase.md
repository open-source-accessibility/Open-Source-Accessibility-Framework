# Foundational Phase

The foundational phase establishes the basic practices a project needs to make accessibility visible, actionable, and easier to maintain over time. It gives users and contributors clear information about the project's accessibility commitments, a consistent way to report barriers, and a public place to follow progress.

This phase is intentionally practical. Projects do not need to solve every accessibility issue before getting started. Instead, they create the documentation, communication channels, and tracking practices that support continuous improvement and public accountability. Completing these actions provides a shared baseline for the more detailed accessibility work that follows.

## Phase overview

This phase has **5 total actions** with **10 total tasks** to complete.

| Action                                                                                                                                            | Number of tasks | Typical initial effort |
| :------------------------------------------------------------------------------------------------------------------------------------------------ | --------------: | :--------------------- |
| [Action 1](#1-register-your-project-in-the-open-source-accessibility-framework): Register your project in the Open Source Accessibility Framework |               3 | Quick                  |
| [Action 2](#2-document-the-projects-accessibility-commitment): Document the project’s accessibility commitment                                    |               2 | Moderate               |
| [Action 3](#3-add-a-link-to-accessibilitymd-in-your-readmemd): Add a link to `ACCESSIBILITY.md` in your `README.md`                               |               1 | Quick                  |
| [Action 4](#4-use-an-accessibility-label-to-track-relevant-work): Use an accessibility label to track relevant work                               |               2 | Quick                  |
| [Action 5](#5-add-an-issue-template-for-reporting-accessibility-bugs): Add an issue template for reporting accessibility bugs                     |               2 | Moderate               |

Effort varies by project size and maturity. Complete these actions incrementally and adapt them to your project's needs. Typical initial effort is categorized as **Quick** (less than 1 hour), **Moderate** (1-3 hours), or **Extended** (more than 3 hours); ongoing practices should be repeated as part of normal project work.

## Foundational actions

### 1. Register your project in the [Open Source Accessibility Framework](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework)

#### Why it matters

This action creates lightweight public accountability and gives the community a place to follow progress.

#### Definition of done

1. The registration issue is submitted for your project.
2. The project appears in the [Open Source Accessibility Framework Registered Projects Board](https://github.com/orgs/open-source-accessibility/projects/1).
3. The project’s `README.md` links to the public tracking issue.

#### Recommended Steps

1. Open the [project signup issue form](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/issues/new?template=project-signup.yml).
2. Provide the project name, repository URL, project URL, maintainer point of contact, and accessibility goals.
3. Confirm that the project agrees to public tracking.
4. Submit the issue.
5. Include a link to the public tracking issue in your project by adding the [framework participation message](/framework/supporting/framework-participation-message.md) and/or the accessibility framework pill badge to your `README.md`.

### 2. Document the project’s accessibility commitment

#### Why it matters

This action gives users and contributors a clear place to find accessibility information and report barriers.

#### Definition of done

1. `ACCESSIBILITY.md` exists in the repository.
2. The file includes a commitment statement, goals, contributor requirements, and supported environments.

#### Recommended Steps

1. Review the [example `ACCESSIBILITY.md`](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md).
2. Create an `ACCESSIBILITY.md` file in the repository.
3. Document the project’s accessibility commitment statement, goals, contributor requirements, and supported environments.
4. Commit the file and make it available in the default branch.

### 3. Add a link to `ACCESSIBILITY.md` in your `README.md`

#### Why it matters

This action makes accessibility information about a project easy to find.

#### Definition of done

1. A user can reach `ACCESSIBILITY.md` from the project’s `README.md` without searching the repository.

#### Recommended Steps

1. Choose a visible location in your `README.md` and add a link to `ACCESSIBILITY.md`.
2. Verify that the link works from the rendered `README.md`.

### 4. Use an accessibility label to track relevant work

#### Why it matters

This action makes accessibility work visible, searchable, and trackable.

#### Definition of done

1. An accessibility label exists with a clear name.
2. The label is applied to the project’s relevant open tracking issues.

#### Recommended Steps

1. Create a label named `accessibility` (or another clearly understood equivalent) if there isn't one already.
2. Add the label to the project’s relevant accessibility issues and pull requests.
3. Use the label consistently for future accessibility work.

### 5. Add an issue template for reporting accessibility bugs

#### Why it matters

This action improves report quality and supports consistent triage.

#### Definition of done

1. The template is available when a contributor opens a new issue.
2. The template includes all required accessibility bug-report fields and the `accessibility` label.

#### Recommended Steps

1. Review the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).
2. Create an accessibility bug-report template in `.github/ISSUE_TEMPLATE/`.
3. Include fields for expected behavior, actual behavior, steps to reproduce, environment, assistive technology, and severity.
4. Configure the template to apply the `accessibility` label.
5. Preview or test the template by opening a new issue.
