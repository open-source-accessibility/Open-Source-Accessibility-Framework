# AI Usage Guidance

## Framework Skills

Want to use AI to help you implement the Accessibility Framework?

Use a phase skill to implement every action in a phase or only the actions your project needs.

### Getting Started

Choose the skill for the phase you are working on:

- [Foundational Phase Skill](./skills/foundational-skills.md): create the project's initial accessibility documentation and tracking practices.
- [Workflow Phase Skill](./skills/workflow-skills.md): integrate accessibility into contribution, triage, review, ownership, documentation, interface, and dependency workflows.
- [Testing Phase Skill](./skills/testing-skills.md): establish automated, keyboard, screen reader, manual, and documentation checks and document tested environments and limitations.
- [Community Phase Skill](./skills/community-skills.md): improve accessible participation, responses, recognition, progress updates, and resource sharing.

To add a skill to your project:

1. Open the appropriate phase skill.
2. Copy its `markdown` code block into a `SKILL.md` file in the skill directory supported by your AI agent.
3. Allow the agent to read your repository and retrieve the phase document listed in `metadata.framework-source`.
4. Ask the agent to use the phase skill and specify the scope you want.
5. Review the proposed changes and verification results before committing or publishing them.

### Implement every action in a phase

Ask the agent to implement all actions when your project is ready to work through the complete phase. For example:

> Use the Testing Phase skill to implement all actions.

The skill retrieves the current phase guidance, processes the actions in phase order, recognizes requirements the project already satisfies, and reports any requirements that still need manual testing, external configuration, or maintainer input.

### Implement selected actions

Specify one or more actions by number, title, or heading anchor when you only want part of a phase implemented. For example:

> Use the Workflow Phase skill to implement Action 6.

> Use the Community Phase skill to implement Actions 2 and 5.

> Use the Foundational Phase skill to create an ACCESSIBILITY.md.

The agent should implement only the requested actions. If you do not specify whether to implement all or selected actions, the skill directs the agent to ask you to choose before it changes files.

Each skill follows the framework's `main` branch by default. To use a fixed version of the guidance, replace `main` in `metadata.framework-source` with a framework release tag or commit SHA.

## Advice for using AI on accessibility work

- **Provide project context.** Include accessibility requirements, supported standards, development conventions, and testing expectations in prompts or repository instructions such as `.github/copilot-instructions.md` or `AGENTS.md`. See [Optimizing GitHub Copilot for Accessibility with Custom Instructions](https://accessibility.github.com/documentation/guide/copilot-instructions/).
- **Use focused agents.** Create agents for well-defined tasks, such as running accessibility audits or tracking improvements. See [Getting Started with GitHub Copilot Custom Agents for Accessibility](https://accessibility.github.com/documentation/guide/getting-started-with-agents/).
- **Verify every result.** Treat AI output as a suggestion. Review changes with accessibility expertise, appropriate testing, and feedback from people with disabilities when possible.
