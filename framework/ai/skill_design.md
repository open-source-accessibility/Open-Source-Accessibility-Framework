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

Each skill bundles compact definitions of done generated from its canonical phase document in `framework/phases/`. The bundled requirements are authoritative for an installed skill and work offline. If the complete package is installed, its action references provide rationale and recommended steps for the selected actions.

The `metadata.framework-source` URL points to `main` by default as an optional source for checking newer guidance. An agent must not silently replace the bundled requirements when the online document differs. Projects that want to check a fixed version can replace `main` with a framework release tag or commit SHA.

## Implementation safeguards

The skills require an agent to:

- inspect the adopting repository before changing it;
- recognize requirements that are already satisfied;
- implement selected actions in phase order;
- distinguish repository changes from external or manual follow-up;
- avoid claiming tests, support, accessibility, compliance, or certification without evidence;
- protect contributor privacy and obtain authorization before external actions; and
- report unmet requirements for maintainer review.

If online guidance cannot be retrieved, the skill continues from its bundled requirements. If a requested action is absent from the bundle, the agent reports the mismatch and asks the user to select a valid action rather than inventing requirements.
