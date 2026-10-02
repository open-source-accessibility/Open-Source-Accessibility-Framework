# Community Phase Skill

This skill can implement every action in the [Community Phase](../../phases/community-phase.md) or only the actions a user selects.

Example requests:

- "Use the Community Phase skill to implement all actions."
- "Use the Community Phase skill to implement Actions 2 and 4."
- "Use the Community Phase skill to draft an accessibility progress update."

## Install the skill

Choose one installation method.

### Option 1: Install the complete package with npm

Use npm to install the skill and its detailed offline action references:

```sh
npx @open-source-accessibility/framework-skills add community-phase --target <skill-directory>
```

Replace `<skill-directory>` with the skill directory supported by your AI agent.

#### Detailed action references included with npm

The npm package installs the following references:

- [Action 1: Invite community help on accessibility work](./community-phase/references/action-01-invite-community-help-on-accessibility-work.md)
- [Action 2: Respond constructively to accessibility reports](./community-phase/references/action-02-respond-constructively-to-accessibility-reports.md)
- [Action 3: Provide accessible and respectful ways to contribute and collaborate](./community-phase/references/action-03-provide-accessible-and-respectful-ways-to-contribute-and-collaborate.md)
- [Action 4: Recognize accessibility contributions publicly](./community-phase/references/action-04-recognize-accessibility-contributions-publicly.md)
- [Action 5: Publish accessibility progress updates](./community-phase/references/action-05-publish-accessibility-progress-updates.md)
- [Action 6: Share accessibility resources](./community-phase/references/action-06-share-accessibility-resources.md)

They supplement the compact requirements in `SKILL.md` with each action's rationale and recommended steps. This can be more useful for projects that want detailed offline guidance because the agent can load only the references for the selected actions instead of loading every action's full guidance.

### Option 2: Copy the skill directly

If you do not want to use npm, copy the following code block into a `SKILL.md` file in your agent's skill directory. The copied skill is self-contained, includes compact definitions of done, and works without network access.

```markdown
---
name: community-phase
description: "Implements all Community Phase actions or selected actions by number, title, or ID, with bundled offline requirements."
metadata:
  framework-phase-id: community
  framework-bundle-digest: "48d5b02550d3"
  framework-source-ref: main
  framework-source: "https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/main/framework/phases/community-phase.md"
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
8. Protect contributor privacy and choice.
9. Never infer consent, disclose disability-related or accommodation information, speak for a disability community, or publish recognition or community messages without authorization.
10. Verify every selected action against its definition of done. Separate completed requirements, unmet requirements, recurring work for ongoing actions, and external or manual follow-up.
11. Present changes, evidence, and verification results for maintainer review before committing or publishing.

## Bundled action requirements

### Action 1: Invite community help on accessibility work

- **ID:** `invite-community-help-on-accessibility-work`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Community-contribution opportunities are publicly available.
    2. Issues include scope, context, and acceptance criteria.
    3. Contributors can access guidance and maintainer support.
    4. The project maintains an ongoing feedback or advisory practice.

### Action 2: Respond constructively to accessibility reports

- **ID:** `respond-constructively-to-accessibility-reports`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Best practices on how to respond are documented in your `ACCESSIBILITY.md`.
    2. Accessibility reports receive a respectful acknowledgement, status, and next step response.
    3. Resolution outcomes are documented and, when possible, accessibility fixes get validated with affected users.

### Action 3: Provide accessible and respectful ways to contribute and collaborate

- **ID:** `provide-accessible-and-respectful-ways-to-contribute-and-collaborate`
- **Cadence:** Initial setup + ongoing
- **Definition of done:**
    1. Contributor guidance documents accessible synchronous and asynchronous ways to participate.
    2. Collaboration tools and workflows have been reviewed for significant accessibility and usability barriers, with alternatives documented as needed.
    3. A code of conduct or equivalent policy is adopted and enforced.
    4. Contributors can request accommodations without unnecessary public disclosure.

### Action 4: Recognize accessibility contributions publicly

- **ID:** `recognize-accessibility-contributions-publicly`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Recognition respects contributor preferences and protects personal information.
    2. Accessibility contributions are publicly recognized with the contributor's consent.

### Action 5: Publish accessibility progress updates

- **ID:** `publish-accessibility-progress-updates`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Accessibility progress is published through at least one public project channel.
    2. Updates include completed work, remaining work, known barriers or limitations, and relevant links.
    3. The project maintains a repeatable update practice.

### Action 6: Share accessibility resources

- **ID:** `share-accessibility-resources`
- **Cadence:** Ongoing
- **Definition of done:**
    1. Useful accessibility resources are made publicly available.
    2. Resources include enough context for another project to use them.
    3. Ownership for maintaining the resources is identified.
```
