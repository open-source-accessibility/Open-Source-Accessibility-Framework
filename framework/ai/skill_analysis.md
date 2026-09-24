# Skill Analysis

A deeper review of the [Workflow Skills Catalog](skills.md), cross-referencing each skill against its corresponding action in the [Workflow Phase](../phases/workflow-phase.md). The goal is to identify confusion points, gaps, and areas where an AI agent following the skill literally might produce inconsistent or incorrect output.

---

## Skill 1 vs. Action 1 — Surface Accessibility Expectations

**Gap:** The action's Recommended Steps reference a specific supporting file (`../supporting/workflow-phase/contributor-accessibility.md`) and an external `ACCESSIBILITY.md` example. The skill doesn't tell the AI to consult these references. An agent following the skill literally would draft from scratch rather than following the project's established examples.

**Confusion:** The skill says "If it is missing, draft one" for both the Priorities and Contributor Expectations sections. But it doesn't say what to do if they *already exist* — should the AI review them? Suggest improvements? The skill's `description` says "Reviews and drafts," but the instructions only cover the drafting case.

---

## Skill 2 vs. Action 2 — Accessible Bug Reporting Path

**Gap:** The action's Definition of Done #2 says "Submitted accessibility reports follow a documented triage and response process." The skill doesn't address this — it only covers creating the template and labels, not documenting the triage/response process. That's left to Skill 3, but the boundary between Skills 2 and 3 isn't explicit. An agent might not know where Skill 2 ends and Skill 3 begins.

**Confusion:** "Verify the template uses accessible form controls and clear labels" — this is ambiguous for a YAML-based GitHub issue template (which is what the action references). GitHub issue templates are YAML config files, not HTML forms. The AI might try to add HTML labels or ARIA attributes to a YAML file, which would be incorrect.

---

## Skill 3 vs. Action 3 — Accessibility Triage Approach

**Gap:** The action's Recommended Step #4 says "Apply the documented severity and response approach when triaging accessibility reports." The skill only drafts the approach — it doesn't apply it to existing reports. This is understandable (applying triage is an ongoing process, not a one-time setup), but the skill should clarify this scope limitation.

**Confusion:** Skill 3 and Skill 2 overlap on documenting the reporting process. Action 2 DoD #2 says "follow a documented triage and response process" and Action 3 DoD #1 says "explains how to report an accessibility barrier." The skills don't clarify which one owns the "how to report" documentation.

---

## Skill 4 vs. Action 4 — Tag Beginner-Friendly Issues

**Confusion:** "Search open issues for small, well-scoped accessibility tasks suitable for new contributors" — the AI has no criteria for what "beginner-friendly" means. How does it judge difficulty? The skill should tell the AI to look for issues that don't require deep codebase knowledge, framework expertise, or accessibility specialization. Without guidance, the AI might flag complex accessibility issues as beginner-friendly because they seem small.

**Gap:** The action's DoD #2 says "Each selected issue has a clear scope and contribution context." The skill says "verify it has clear scope, acceptance criteria, and enough context" — but if these are missing, the skill says "draft a comment adding the needed details." It doesn't clarify: should the AI add context to the issue body, or post a comment? These are different actions with different implications.

---

## Skill 5 vs. Action 5 — Tag Expert-Help Issues

**Confusion:** Same as Skill 4 — "require specialized knowledge or experience" is subjective. The skill gives examples (screen reader testing, ARIA patterns, keyboard interaction design), which helps, but doesn't tell the AI how to distinguish between an issue that needs an expert vs. one an experienced contributor could handle.

**Gap:** The action's DoD #2 says "Each selected issue has a clear scope and contribution context." The skill says "verify it has clear scope and acceptance criteria" but doesn't mention "contribution context" specifically, and doesn't say what to do if context is missing (unlike Skill 4 which says to draft a comment).

---

## Skill 6 vs. Action 6 — PR Template Accessibility Section

**Gap:** The action's Recommended Step #1 references a specific PR template example URL. The skill doesn't mention consulting this reference. An agent would draft a checklist from scratch rather than following the established example.

**Minor confusion:** "Prompt contributors to complete each applicable item" — this is vague as an instruction to an AI. Does this mean add a note in the template saying "Please complete applicable items"? The skill should be more concrete: "Add a note in the template instructing contributors to complete each applicable checklist item."

---

## Skill 7 vs. Action 7 — Assign Accessibility Ownership

**Gap:** The action's Recommended Step #2 references a specific supporting file (`../supporting/workflow-phase/ownership-accessibility.md`). The skill doesn't mention consulting it. The AI would draft responsibilities from scratch.

**Confusion:** "Draft a section that names a maintainer responsible for triaging accessibility work" — the AI cannot know who the maintainers are. It should be told to identify maintainers from the repository (e.g., CODEOWNERS file, GitHub org members, or git log) and propose one, rather than inventing a name.

---

## Skill 8 vs. Action 8 — Accessible Documentation

**Gap:** The action's Recommended Step #1 references external best practices documentation. The skill doesn't mention consulting it. However, the skill's checklist is comprehensive enough that this is a minor gap.

**Confusion:** "Read the documentation files in the repository (README, docs, contributing guides, and any markdown files)" — "any markdown files" could include framework documentation, license files, changelog, etc. The skill should clarify it means user-facing documentation, not all `.md` files in the repo.

**Gap:** The action's DoD #3 says "Tables and code blocks are presented accessibly." The skill checks these, but doesn't mention checking color contrast in documentation (e.g., if docs use colored text or badges). Minor, but could be a gap depending on the project's documentation style.

---

## Skill 9 vs. Action 9 — Accessible Interface Design

**Confusion:** "Visible focus is always present with sufficient contrast" — the AI cannot verify contrast from source code alone. It can check that `:focus` or `:focus-visible` styles exist, but cannot measure contrast ratios without rendering. The skill should explicitly say "check that focus styles are defined" rather than "verify sufficient contrast," which sets an expectation the AI can't meet from source.

**Gap:** The action's Recommended Step #2 says to ensure "contributor expectations include checks for keyboard and screen reader support." The skill doesn't check whether the contributor expectations document includes these checks — it only reviews the interface code. The skill should cross-reference `ACCESSIBILITY.md` contributor expectations, not just read it for "documented interface requirements."

**Gap:** The action's DoD #3 says "Keyboard access, focus states, and labels are addressed or tracked." The "or tracked" part is important — issues that can't be fixed immediately should be tracked. The skill doesn't mention creating tracking issues for identified but unaddressed problems.

---

## Skill 10 vs. Action 10 — Leverage AI for Accessibility

**Confusion:** "Review existing AI prompts or agents for accessibility coverage" — the AI doesn't know what "accessibility coverage" means in this context. Does it check whether existing prompts mention accessibility? Whether they enforce WCAG? Whether they require human review? The skill should specify what to look for.

**Gap:** The action's Recommended Step #3 says "create specialized AI agents or prompts for appropriate accessibility tasks" and references the Skills Catalog. The skill says "Refer to the AI Usage Guidance for detailed recommendations" but doesn't mention the Skills Catalog itself — which is the file it's in. This is a circular reference that could confuse an agent.

---

## Skill 11 vs. Action 11 — Evaluate Dependencies and Blockers

**Confusion:** "Search for accessibility-related upstream issues" — the AI may not have web access or may hallucinate issues. The skill should clarify: "Search the dependency's GitHub issues for accessibility-related labels or keywords. If web search is unavailable, flag this as a task for the maintainer to complete manually."

**Gap:** The action's Recommended Step #5 says "Revisit the list as dependencies change." The skill doesn't mention this as an ongoing process. It presents the evaluation as a one-time activity.

**Gap:** The action's DoD #4 says "Workarounds or mitigation plans are recorded where applicable." The skill says "Document workarounds, risks, and project actions" but doesn't say *where* to document them. Should they go in `ACCESSIBILITY.md`? A separate dependencies document? Issue tracker? This ambiguity could lead to inconsistent documentation practices.

---

## Cross-Cutting Confusion Points

1. **No scope boundaries between Skills 2 and 3.** Both touch "documenting the reporting process." An agent doing Skill 2 might duplicate work that Skill 3 should handle, or vice versa.

2. **"Present for maintainer review" is inconsistent.** Some skills say "before committing" (Skills 1, 2, 3, 6, 7, 10), some say "before applying" (Skills 4, 5), and some just say "for maintainer review" (Skills 8, 9, 11). This inconsistency could confuse an agent about whether it should make changes and present a diff, or just present recommendations.

3. **No file discovery instructions.** Skills 1, 2, 3, 6, 7, 8 all reference specific files (`ACCESSIBILITY.md`, `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`). None tell the AI what to do if the file doesn't exist yet (beyond "create one if it does not exist" in Skill 6). Should the AI create `ACCESSIBILITY.md` from scratch? Use a template? The skills should handle the "file doesn't exist" case consistently.

4. **No mention of supporting examples.** Actions 1, 2, 3, 6, 7 all reference supporting files or external examples in their Recommended Steps. None of the corresponding skills tell the AI to consult these references. This means AI output may diverge from the project's established patterns.

5. **YAML format ambiguity.** The intro says skills use `name`, `description`, and `instructions` fields, but the `instructions` field is placed *outside* the YAML frontmatter (after the closing `---`). An agent parsing this as pure YAML would not find `instructions` in the frontmatter. The format should either include `instructions` inside the frontmatter or clarify that the body after `---` is the instructions section.
