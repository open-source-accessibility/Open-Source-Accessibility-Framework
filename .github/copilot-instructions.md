# Copilot instructions

## Project purpose

This repository contains the Open Source Accessibility Framework and its companion website. The framework helps open source projects make incremental, public, and trackable accessibility improvements.

- Present the framework as an improvement and accountability model, not a certification, score, ranking, or guarantee of conformance.
- Keep guidance practical, concise, inclusive, and adaptable to projects of different sizes and maturity levels.
- Treat automated checks and AI-generated recommendations as supplements to human accessibility expertise and feedback from people with disabilities.

## Repository structure

- `README.md` is the adopter-facing introduction and entry point.
- `framework/actions/` contains machine-readable action sources used to generate phase and skill content.
- `framework/phases/` contains the canonical phase guidance.
- `framework/supporting/` contains examples, templates, and detailed supporting guidance.
- `framework/maintainers/` contains operational guidance for framework maintainers.
- `framework/ai/` contains guidance for responsible AI-assisted accessibility work.
- `website/` is a Vue 3, TypeScript, Vite, and Vitest application that renders Markdown from `README.md` and `framework/`.
- `.github/ISSUE_TEMPLATE/` and `.github/workflows/` implement project registration and related automation.

## Documentation changes

- Edit canonical content instead of copying framework content into Vue components.
- For the Workflow Phase, edit `framework/actions/workflow/*.json`, then run `node scripts/generate-framework-content.mjs`. Do not edit `framework/phases/workflow-phase.md` or `framework/supporting/skills/workflow-skills.md` directly.
- For phases that have not migrated to generated content, edit their canonical Markdown directly.
- Preserve the established structure of phase actions unless the requested change intentionally modifies it:
  - phase overview and totals
  - action table
  - `###` numbered action heading
  - `#### Why it matters`
  - `#### Definition of done`
  - `#### Recommended Steps`
- When adding, removing, renaming, or reordering an action or task, update all related overview counts, table entries, heading links, supporting documents, templates, and workflow messages.
- Keep definitions of done measurable. Keep recommended steps actionable without making one implementation mandatory when reasonable alternatives exist.
- Use plain language, descriptive link text, meaningful headings, and consistent terminology.
- Do not claim that a practice makes a project fully accessible or compliant. Describe what was evaluated and any remaining limitations.
- Use repository-relative Markdown links. Check both the source file location and how `website/src/components/MarkdownPage.vue` rewrites the link.
- Avoid unnecessary raw HTML in Markdown.

## Website changes

- Use Vue 3 Composition API with `<script setup lang="ts">` and preserve type safety.
- Prefer native semantic HTML over ARIA. Add ARIA only when native semantics cannot express the required behavior.
- Preserve keyboard access, visible focus, logical focus movement, heading hierarchy, skip navigation, reduced-motion support, forced-colors support, zoom/reflow, and sufficient contrast.
- Do not make non-interactive elements behave like buttons or links. Use native controls with accessible names.
- Provide useful text alternatives for meaningful images and empty alternative text for decorative images.
- Do not convey information through color, position, shape, or motion alone.
- Test changes that affect navigation, focus, Markdown rendering, link rewriting, or other user-visible behavior.
- Views that render repository Markdown must import it with `?raw` and pass the correct repository-relative `source-path` to `MarkdownPage`.
- When adding a rendered Markdown page, update every relevant surface together: the view, router, navigation, and the route mapping in `MarkdownPage`.
- Keep external-link handling and heading focus behavior centralized in `MarkdownPage` rather than reimplementing it in individual views.
- Follow the existing CSS custom properties and responsive patterns in `website/src/assets/base.css`.

## Registration and workflow automation

- Preserve least-privilege GitHub Actions permissions.
- Treat issue-form field IDs, labels, option text, issue labels, and title prefixes as interfaces consumed by workflows.
- Before changing any of those values, search `.github/workflows/` for parsers, conditions, field mappings, and exact string matches, then update and test all coupled behavior.
- Do not add or change labels on the project registration issue form unless the registration workflow is intentionally updated with it.
- Validate workflow inputs before using them and report failures explicitly.

## Validation

Run commands from the repository root unless noted otherwise.

- Unit tests: `cd website && npm run test:unit -- --run`
- Type-check and production build: `cd website && npm run build`
- Lint: `cd website && npm run lint`
- Generated content: `node scripts/generate-framework-content.mjs --check`

Use the smallest relevant validation first. For documentation-only changes, verify headings, action and task totals, relative links, and rendered navigation; run the website tests or build when changes affect content routing or rendering assumptions. Review lint autofixes before keeping them because the lint command writes changes.

## Change discipline

- Keep changes focused and do not rewrite unrelated content.
- Preserve existing behavior unless the request explicitly changes it.
- Add or update tests for behavior changes and regressions.
- Update directly related documentation in the same change.
- Do not edit generated output such as `website/dist/`, root `dist/`, dependencies under `node_modules/`, or TypeScript build-info files.
