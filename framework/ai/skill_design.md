# Phase Skill Design

Each framework phase has one portable AI skill:

- [Foundational Phase Skill](skills/foundational-skills.md)
- [Workflow Phase Skill](skills/workflow-skills.md)
- [Testing Phase Skill](skills/testing-skills.md)
- [Community Phase Skill](skills/community-skills.md)

## Scope selection

A user can ask a phase skill to implement:

- every action in the phase;
- one action by number, title, or heading anchor; or
- multiple selected actions.

When the user does not specify a scope, the skill directs the agent to ask whether it should implement all actions or selected actions. The agent must not assume that the user wants an entire phase implemented.

## Current requirements

Each skill retrieves its canonical phase document from the Open Source Accessibility Framework repository. It reads the complete sections for the selected actions and treats their definitions of done as authoritative.

The default source follows the `main` branch. Projects that require reproducible behavior can replace `main` with a framework release tag or commit SHA.

## Implementation safeguards

The skills require an agent to:

- inspect the adopting repository before changing it;
- recognize requirements that are already satisfied;
- implement selected actions in phase order;
- distinguish repository changes from external or manual follow-up;
- avoid claiming tests, support, accessibility, compliance, or certification without evidence;
- protect contributor privacy and obtain authorization before external actions; and
- report unmet requirements for maintainer review.

If a phase document or requested action cannot be retrieved, the agent must stop rather than rely on remembered or cached requirements.
