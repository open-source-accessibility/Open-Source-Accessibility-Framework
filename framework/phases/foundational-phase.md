## Foundational Phase

The Foundational implementation phase establishes the basic practices a project needs to make accessibility visible, actionable, and easier to maintain over time. It gives users and contributors clear information about the project's accessibility commitments, a consistent way to report barriers, and a public place to follow progress.

This phase is intentionally practical. Projects do not need to solve every accessibility issue before getting started. Instead, they create the documentation, communication channels, and tracking practices that support continuous improvement and public accountability. Completing these actions provides a shared baseline for the more detailed accessibility work that follows.

## Foundational actions

### 1. Register your project in the [Open Source Accessibility Framework](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework)

#### Why it matters

Creates lightweight public accountability and gives the community a place to follow progress.

#### Steps

1. Open the [project signup issue form](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/issues/new?template=project-signup.yml).
2. Provide the project name, repository URL, project URL, maintainer point of contact, and accessibility goals.
3. Confirm that the project agrees to public tracking.
4. Submit the issue.
5. Add the [framework participation message](framework/framework-participation-message.md) to your project's `README.md` and include a link to the public tracking issue.


#### Definition of done

- The registration issue is submitted for your project.
- The project appears in the [Open Source Accessibility Framework Registered Projects Board](https://github.com/orgs/open-source-accessibility/projects/1).
- The project’s `README.md` links to the public tracking issue.

### 2. Document the project’s accessibility commitment

#### Why it matters

Gives users and contributors a clear place to find accessibility information and report barriers.

#### Steps

1. Review the [example `ACCESSIBILITY.md`](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md).
2. Create an `ACCESSIBILITY.md` file in the repository.
3. Document the project’s accessibility commitment statement, goals, contributor requirements, and supported environments.
4. Commit the file and make it available in the default branch.


#### Definition of done

- `ACCESSIBILITY.md` exists in the repository.
- The file includes a commitment statement, goals, contributor requirements, and supported environments.

### 3. Add a link to `ACCESSIBILITY.md` in your `README.md`

#### Why it matters

Makes accessibility information easy to find.


#### Steps

1. Choose a visible location in your `README.md` and add a link to `ACCESSIBILITY.md`.
2. Verify that the link works from the rendered `README.md`.

#### Definition of done

- A user can reach `ACCESSIBILITY.md` from the project’s `README.md` without searching the repository.

### 4. Use an accessibility label to track relevant work

#### Why it matters

Makes accessibility work visible, searchable, and trackable.


#### Steps

1. Create a label named `accessibility` (or another clearly understood equivalent) if there isn't one already.
2. Add the label to the project’s relevant accessibility issues and pull requests.
3. Use the label consistently for future accessibility work.

#### Definition of done

- An accessibility label exists with a clear name.
- The label is applied to the project’s relevant open tracking issues.

### 5. Add an issue template for reporting accessibility bugs

#### Why it matters

Improves report quality and supports consistent triage.


#### Steps

1. Review the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).
2. Create an accessibility bug-report template in `.github/ISSUE_TEMPLATE/`.
3. Include fields for expected behavior, actual behavior, steps to reproduce, environment, assistive technology, and severity.
4. Configure the template to apply the `accessibility` label.
5. Preview or test the template by opening a new issue.

#### Definition of done

- The template is available when a contributor opens a new issue.
- The template includes all required accessibility bug-report fields and the `accessibility` label.

## Foundational actions table

| Action | Steps | Definition of done |
| :--- | :--- | :--- |
| Register your project in the [Open Source Accessibility Framework](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework) | 1. Open the [project signup issue form](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/issues/new?template=project-signup.yml).<br>2. Provide the project name, repository URL, project URL, maintainer point of contact, and accessibility goals.<br>3. Confirm that the project agrees to public tracking.<br>4. Submit the issue.<br>5. Add the [framework participation message](framework/framework-participation-message.md) to your project's `README.md` and a link to the public tracking issue. | - The registration issue is submitted for your project.<br>- The project appears in the [Open Source Accessibility Framework Registered Projects Board](https://github.com/orgs/open-source-accessibility/projects/1).<br>- The project’s `README.md` links to the public tracking issue. |
| Document the project’s accessibility commitment | 1. Review the [example `ACCESSIBILITY.md`](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md).<br>2. Create an `ACCESSIBILITY.md` file in the repository.<br>3. Document the project’s accessibility commitment statement, goals, contributor requirements, and supported environments.<br>4. Commit the file and make it available in the default branch. | - `ACCESSIBILITY.md` exists in the repository.<br>- The file includes a commitment statement, goals, contributor requirements, and supported environments. |
| Add a link to `ACCESSIBILITY.md` in your `README.md` | 1. Choose a visible location in your `README.md` and add a link to `ACCESSIBILITY.md`.<br>2. Verify that the link works from the rendered `README.md`. | - A user can reach `ACCESSIBILITY.md` from the project’s `README.md` without searching the repository. |
| Use an accessibility label to track relevant work | 1. Create a label named `accessibility` (or another clearly understood equivalent) if there isn't one already.<br>2. Add the label to the project’s relevant accessibility issues and pull requests.<br>3. Use the label consistently for future accessibility work. | - An accessibility label exists with a clear name.<br>- The label is applied to the project’s relevant open tracking issues. |
| Add an issue template for reporting accessibility bugs | 1. Review the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).<br>2. Create an accessibility bug-report template in `.github/ISSUE_TEMPLATE/`.<br>3. Include fields for expected behavior, actual behavior, steps to reproduce, environment, assistive technology, and severity.<br>4. Configure the template to apply the `accessibility` label.<br>5. Preview or test the template by opening a new issue. | - The template is available when a contributor opens a new issue.<br>- The template includes all required accessibility bug-report fields and `accessibility` label. |
