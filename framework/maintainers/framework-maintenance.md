# Framework maintenance

This document covers how maintainers operate and update the Open Source Accessibility Framework. Adoption guidance belongs in the project [README](../../README.md).

## Operating model

The framework uses GitHub-native tools to keep participation public and operations lightweight:

- This repository contains the framework documentation, templates, and automation.
- The project registration issue form creates a public tracking issue for each participating project.
- GitHub Actions add registration issues to the registered projects board, synchronize project fields, assign maintainer points of contact, and post onboarding guidance.
- The [registered projects board](https://github.com/orgs/open-source-accessibility/projects/1) provides a central view of participating projects and their progress.
- Reusable messages and badges help projects communicate their participation.

The framework does not require custom infrastructure, private onboarding, certification, or project rankings.

## Maintainer responsibilities

- Monitor registration and project-synchronization workflows for failures.
- Help project maintainers correct incomplete or malformed registration information.
- Keep phase actions, definitions of done, overview task counts, and internal links synchronized.
- Keep issue forms, workflow messages, badges, and supporting templates aligned with the phase documentation.
- Maintain the framework as a public improvement and accountability model rather than a certification program.
- Use the minimum GitHub token permissions required by each workflow.

## Updating the framework

When changing phase actions or registration automation:

1. Update related documentation, overview counts, links, templates, and workflow messages together.
2. Validate YAML syntax and GitHub Actions configuration.
3. Test registration and manual workflow dispatches with a test tracking issue.
4. Confirm issue assignments, project fields, comments, badges, and links behave as expected.
5. Keep adopter-facing content concise and move operational details into this document.

## Maintainer resources

- [Project registration issue form](../../.github/ISSUE_TEMPLATE/project-registration.yml)
- [Registration badge and message workflow](../../.github/workflows/registration-badge.yaml)
- [Project synchronization workflow](../../.github/workflows/project-registration-to-project.yml)
- [Foundational verification action](../../action.yml)
- [Foundational verification workflow](../../.github/workflows/verify-foundational.yml)
- [Foundational verification comment workflow](../../.github/workflows/foundation-phase-check-comment.yml)
- [Foundational verifier](../../scripts/verify_foundational.py)
- [Framework participation message](../supporting/framework-participation-message.md)
- [Registered projects board](https://github.com/orgs/open-source-accessibility/projects/1)
