# Phase skill packages

The phase skills are generated from the canonical documents in `framework/phases/`.

Each package contains:

- `SKILL.md`: a self-contained skill with compact definitions of done for offline use;
- `references/manifest.md`: the action index and bundled content digest; and
- `references/action-*.md`: detailed guidance loaded only for selected actions.

The `*-skills.md` files in this directory are generated website landing pages. Their copyable code blocks contain the corresponding self-contained `SKILL.md`.

## Update the skills

Edit the canonical phase document, then run:

```sh
node scripts/generate-phase-skills.mjs
node scripts/generate-phase-skills.mjs --check
```

Do not edit generated skill packages or landing pages directly. CI fails when generated content differs from the phase documents.

## Portability and online updates

Copied `SKILL.md` files work without network access. Complete package directories provide detailed offline action references while allowing an agent to load only selected actions.

Online phase documents are optional update sources. A failed online check must not stop the bundled workflow, and changed online requirements must not silently replace the bundled requirements.
