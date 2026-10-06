import { createHash } from "node:crypto";
import { readFile, readdir, unlink, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import process from "node:process";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = path.join(repositoryRoot, "framework/ai/skills");
const checkOnly = process.argv.includes("--check");

const phaseConfigs = [
  {
    id: "foundational",
    title: "Foundational",
    actionsHeading: "Foundational actions",
    source: "framework/phases/foundational-phase.md",
    landingPage: "foundational-skills.md",
    examples: [
      "Use the Foundational Phase skill to implement all actions.",
      "Use the Foundational Phase skill to implement Action 1.",
      "Use the Foundational Phase skill to create an accessibility label.",
    ],
    safeguards: [
      "Do not claim that completing the phase makes the project fully accessible, compliant, or certified.",
    ],
  },
  {
    id: "workflow",
    title: "Workflow",
    actionsHeading: "Workflow actions",
    source: "framework/phases/workflow-phase.md",
    landingPage: "workflow-skills.md",
    examples: [
      "Use the Workflow Phase skill to implement all actions.",
      "Use the Workflow Phase skill to implement Actions 2 and 3.",
      "Use the Workflow Phase skill to add accessibility checks to our pull request template.",
    ],
    safeguards: [
      "Do not apply labels, assign people, publish comments, or make other external changes without the user's authorization and the required tool access.",
      "Never invent maintainer names or test results.",
    ],
  },
  {
    id: "testing",
    title: "Testing",
    actionsHeading: "Testing actions",
    source: "framework/phases/testing-phase.md",
    landingPage: "testing-skills.md",
    examples: [
      "Use the Testing Phase skill to implement all actions.",
      "Use the Testing Phase skill to implement Actions 1 and 5.",
      "Use the Testing Phase skill to document a keyboard-only smoke test.",
    ],
    safeguards: [
      "Do not claim that a manual, keyboard, screen reader, visual, or assistive-technology test was performed without runtime evidence.",
      "Record the tested environment and distinguish completed tests from procedures that still need a person to run them.",
    ],
  },
  {
    id: "community",
    title: "Community",
    actionsHeading: "Community actions",
    source: "framework/phases/community-phase.md",
    landingPage: "community-skills.md",
    examples: [
      "Use the Community Phase skill to implement all actions.",
      "Use the Community Phase skill to implement Actions 2 and 4.",
      "Use the Community Phase skill to draft an accessibility progress update.",
    ],
    safeguards: [
      "Protect contributor privacy and choice.",
      "Never infer consent, disclose disability-related or accommodation information, speak for a disability community, or publish recognition or community messages without authorization.",
    ],
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\w\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function sourceUrl(source, ref = "main") {
  return `https://raw.githubusercontent.com/open-source-accessibility/Open-Source-Accessibility-Framework/${ref}/${source}`;
}

function sourcePageUrl(source, anchor = "") {
  return `https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/${source}${anchor}`;
}

function rewriteRelativeLinks(markdown, source) {
  return markdown.replace(/\]\(([^)]+)\)/g, (match, href) => {
    if (
      href.startsWith("#") ||
      href.startsWith("/") ||
      /^[a-z][a-z\d+.-]*:/i.test(href)
    ) {
      return match;
    }

    const [hrefPath, suffix = ""] = href.split(/(?=[?#])/);
    const resolved = path.posix.normalize(
      path.posix.join(path.posix.dirname(source), hrefPath),
    );
    return `](${sourcePageUrl(resolved)}${suffix})`;
  });
}

function parseOverview(markdown) {
  const overview = new Map();
  for (const line of markdown.split("\n")) {
    if (!line.startsWith("| [Action ")) {
      continue;
    }

    const actionMatch = line.match(/^\| \[Action (\d+)\]/);
    const cells = line.split("|").map((cell) => cell.trim());
    const taskCount = Number(cells[2]);
    const cadence = cells.at(-2);
    if (actionMatch && Number.isInteger(taskCount) && cadence) {
      overview.set(Number(actionMatch[1]), { taskCount, cadence });
    }
  }
  return overview;
}

function extractSection(section, heading, nextHeading) {
  const startMarker = `#### ${heading}\n\n`;
  const start = section.indexOf(startMarker);
  if (start < 0) {
    return undefined;
  }

  const contentStart = start + startMarker.length;
  if (!nextHeading) {
    return section.slice(contentStart).trim();
  }

  const end = section.indexOf(`\n\n#### ${nextHeading}`, contentStart);
  return section.slice(contentStart, end < 0 ? undefined : end).trim();
}

// Expected shape of a phase document, which the asserts below enforce:
//   - an overview table whose rows start with "| [Action N](...) |", where
//     the second cell is the task count and the last cell is the cadence;
//   - a "## <Phase> actions" heading, followed by one "### N. Title" per action;
//   - inside each action, a "#### Definition of done" numbered list and a
//     "#### Recommended Steps" section, in that order.
function parseActions(markdown, config) {
  const actionStart = markdown.indexOf(`## ${config.actionsHeading}`);
  assert(actionStart >= 0, `${config.source}: missing "${config.actionsHeading}"`);

  const actionMarkdown = markdown.slice(actionStart);
  const headingPattern = /^### (\d+)\. (.+)$/gm;
  const headings = [...actionMarkdown.matchAll(headingPattern)];
  const overview = parseOverview(markdown);
  assert(headings.length > 0, `${config.source}: no numbered actions found`);

  return headings.map((heading, index) => {
    const number = Number(heading[1]);
    const title = heading[2].trim();
    const start = heading.index;
    const end = headings[index + 1]?.index ?? actionMarkdown.length;
    const section = actionMarkdown.slice(start, end).trim();
    const definition = extractSection(
      section,
      "Definition of done",
      "Recommended Steps",
    );
    const recommendedSteps = extractSection(section, "Recommended Steps");
    assert(definition, `${config.source}: Action ${number} has no definition of done`);
    assert(
      recommendedSteps,
      `${config.source}: Action ${number} has no recommended steps`,
    );
    const overviewEntry = overview.get(number);
    assert(overviewEntry, `${config.source}: Action ${number} is missing from the overview`);
    const definitionItemCount = definition
      .split("\n")
      .filter((line) => /^\d+\.\s/.test(line)).length;
    assert(
      definitionItemCount === overviewEntry.taskCount,
      `${config.source}: Action ${number} has ${definitionItemCount} definition-of-done items but the overview reports ${overviewEntry.taskCount}`,
    );

    return {
      number,
      title,
      id: slugify(title),
      anchor: `${number}-${slugify(title)}`,
      cadence: overviewEntry.cadence,
      definition: rewriteRelativeLinks(definition, config.source),
      recommendedSteps: rewriteRelativeLinks(recommendedSteps, config.source),
      section: rewriteRelativeLinks(section, config.source),
    };
  });
}

function renderActionReference(config, action) {
  const body = action.section
    .replace(/^### \d+\. .+\n+/, "")
    .replace(/^#### /gm, "## ");

  return `# Action ${action.number}: ${action.title}

- **Action ID:** \`${action.id}\`
- **Cadence:** ${action.cadence}
- **Canonical source:** [${config.title} Phase, Action ${action.number}](${sourcePageUrl(config.source, `#${action.anchor}`)})

${body}
`;
}

function renderManifest(config, actions, digest) {
  const rows = actions.map(
    (action) =>
      `| ${action.number} | \`${action.id}\` | ${action.title} | ${action.cadence} | [Details](./action-${String(action.number).padStart(2, "0")}-${action.id}.md) |`,
  );

  return `# ${config.title} Phase skill references

- **Bundled content digest:** \`${digest}\`
- **Canonical phase:** [${config.source}](${sourcePageUrl(config.source)})

Load only the references needed for the user's selected actions.

| Action | ID | Title | Cadence | Reference |
| ---: | :--- | :--- | :--- | :--- |
${rows.join("\n")}
`;
}

function renderBundledRequirements(actions) {
  return actions
    .map(
      (action) => `### Action ${action.number}: ${action.title}

- **ID:** \`${action.id}\`
- **Cadence:** ${action.cadence}
- **Definition of done:**
${action.definition
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}`,
    )
    .join("\n\n");
}

function renderSkill(config, actions, digest) {
  const safeguards = config.safeguards
    .map((safeguard, index) => `${index + 8}. ${safeguard}`)
    .join("\n");
  const verificationStep = 8 + config.safeguards.length;

  return `---
name: ${config.id}-phase
description: "Implements all ${config.title} Phase actions or selected actions by number, title, or ID, with bundled offline requirements."
metadata:
  framework-phase-id: ${config.id}
  framework-bundle-digest: "${digest}"
  framework-source-ref: main
  framework-source: "${sourceUrl(config.source)}"
---

1. Determine the requested scope from the bundled action requirements below:
   - If the user requests all actions, select every action in phase order.
   - If the user provides action numbers, titles, or IDs, select only those actions.
   - If the user does not specify a scope, ask whether to implement all actions or selected actions before changing files.
   - If a requested action does not exist, report the mismatch and list the valid bundled actions.
2. Work offline from the bundled requirements when network access or local references are unavailable. Do not stop solely because an online source cannot be reached.
3. If this skill was installed with its \`references/\` directory, load only \`references/manifest.md\` and the files for the selected actions. Do not load every action reference for a selected-action request.
4. Treat each selected action's bundled "Definition of done" as the minimum authoritative requirements. Use a local action reference, when available, for its rationale and recommended steps.
5. Only check \`metadata.framework-source\` when the user requests the latest guidance or the agent can do so without displacing needed repository context. If online requirements differ from the bundle, report the difference and ask before switching; an online check failure must not block the bundled workflow.
6. Inspect the repository before editing. Identify requirements already satisfied, requirements needing changes, and requirements needing maintainer input, external configuration, or manual work.
7. Implement selected actions in phase order, preserve repository conventions, and avoid replacing valid accessibility practices unnecessarily.
${safeguards}
${verificationStep}. Verify every selected action against its definition of done. Separate completed requirements, unmet requirements, recurring work for ongoing actions, and external or manual follow-up.
${verificationStep + 1}. Present changes, evidence, and verification results for maintainer review before committing or publishing.

## Bundled action requirements

${renderBundledRequirements(actions)}
`;
}

function renderLandingPage(config, skill, actions) {
  const referenceLinks = actions.map(
    (action) =>
      `- [Action ${action.number}: ${action.title}](./${config.id}-phase/references/action-${String(action.number).padStart(2, "0")}-${action.id}.md)`,
  );

  return `# ${config.title} Phase Skill

This skill can implement every action in the [${config.title} Phase](../../phases/${config.id}-phase.md) or only the actions a user selects.

Example requests:

${config.examples.map((example) => `- "${example}"`).join("\n")}

## Install the skill

Choose one installation method.

### Option 1: Copy the skill directly

Copy the following code block into a \`SKILL.md\` file in your agent's skill directory. The copied skill is self-contained, includes compact definitions of done, and works without network access.

\`\`\`markdown
${skill.trim()}
\`\`\`

### Option 2: Copy the complete package

Copy the [\`${config.id}-phase\`](./${config.id}-phase/) directory, including its \`references/\` folder, into the skill directory supported by your AI agent. The package adds the following detailed action references:

${referenceLinks.join("\n")}

They supplement the compact requirements in \`SKILL.md\` with each action's rationale and recommended steps. The agent loads only the references for the selected actions instead of every action's full guidance.
`;
}

async function updateFile(filePath, content) {
  if (checkOnly) {
    const actual = await readFile(filePath, "utf8");
    assert(
      actual === content,
      `${path.relative(repositoryRoot, filePath)} is out of date. Run node scripts/generate-phase-skills.mjs.`,
    );
    return;
  }

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
  console.log(`Generated ${path.relative(repositoryRoot, filePath)}`);
}

async function removeStaleReferences(referencesDirectory, expectedNames) {
  let existingNames = [];
  try {
    existingNames = (await readdir(referencesDirectory)).filter((name) =>
      name.endsWith(".md"),
    );
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  const staleNames = existingNames.filter((name) => !expectedNames.has(name));
  if (checkOnly) {
    assert(
      staleNames.length === 0,
      `${path.relative(repositoryRoot, referencesDirectory)} contains stale files: ${staleNames.join(", ")}`,
    );
    return;
  }

  for (const staleName of staleNames) {
    await unlink(path.join(referencesDirectory, staleName));
  }
}

for (const config of phaseConfigs) {
  const sourcePath = path.join(repositoryRoot, config.source);
  const phaseMarkdown = await readFile(sourcePath, "utf8");
  const actions = parseActions(phaseMarkdown, config);
  const digest = createHash("sha256")
    .update(phaseMarkdown)
    .digest("hex")
    .slice(0, 12);
  const packageDirectory = path.join(skillsRoot, `${config.id}-phase`);
  const referencesDirectory = path.join(packageDirectory, "references");
  const skill = renderSkill(config, actions, digest);
  const expectedReferenceNames = new Set(["manifest.md"]);

  await updateFile(path.join(packageDirectory, "SKILL.md"), skill);
  await updateFile(
    path.join(referencesDirectory, "manifest.md"),
    renderManifest(config, actions, digest),
  );

  for (const action of actions) {
    const filename = `action-${String(action.number).padStart(2, "0")}-${action.id}.md`;
    expectedReferenceNames.add(filename);
    await updateFile(
      path.join(referencesDirectory, filename),
      renderActionReference(config, action),
    );
  }

  await removeStaleReferences(referencesDirectory, expectedReferenceNames);
  await updateFile(
    path.join(skillsRoot, config.landingPage),
    renderLandingPage(config, skill, actions),
  );
}

if (checkOnly) {
  console.log("Portable phase skill packages are up to date.");
}
