# Community Phase

The community phase strengthens how a project listens to, collaborates with, and shares ownership with the people who use and contribute to it. Can people can report barriers, participate in discussions, influence decisions, contribute their expertise, and use the project's community spaces without encountering unnecessary barriers? Accessibility extends beyond a project’s code and documentation; the ways people collaborate must also be accessible.

In this phase, projects build trust by responding constructively to accessibility reports, publishing progress, inviting participation, partnering with people with disabilities, and recognizing accessibility contributions. Involving users, testers, practitioners, assistive technology users, and contributors throughout the project lifecycle replaces assumptions with evidence grounded in lived experience.

Use the [Community Accessibility Resources](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/resources/community/community.md) guide to find learning materials, community-engagement guidance, participation opportunities, and examples for this phase.

## Phase overview

This phase has **6 total actions** with **19 total tasks** to complete.

| Action                                                                                                                                                    | Number of tasks | Typical initial effort |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------: | :--------------------- |
| [Action 1](#1-invite-community-help-on-accessibility-work): Invite community help on accessibility work                                                   |               4 | Extended               |
| [Action 2](#2-respond-constructively-to-accessibility-reports): Respond constructively to accessibility reports                                           |               3 | Moderate               |
| [Action 3](#3-provide-accessible-and-respectful-ways-to-contribute-and-collaborate): Provide accessible and respectful ways to contribute and collaborate |               4 | Extended               |
| [Action 4](#4-recognize-accessibility-contributions-publicly): Recognize accessibility contributions publicly                                             |               2 | Quick                  |
| [Action 5](#5-publish-accessibility-progress-updates): Publish accessibility progress updates                                                             |               3 | Moderate               |
| [Action 6](#6-share-accessibility-resources): Share accessibility resources                                                                               |               3 | Moderate               |

Effort varies by project size and maturity. Complete these actions incrementally and adapt them to your project's needs. Typical initial effort is categorized as **Quick** (less than 1 hour), **Moderate** (1-3 hours), or **Extended** (more than 3 hours); ongoing practices should be repeated as part of normal project work.

**Note:** You can use the [Community Phase Skill](../ai/skills/community-skills.md) to implement this phase. Refer to the [Framework Skills instructions](../ai/guide.md#framework-skills) for setup and usage guidance.

## Community actions

### 1. Invite community help on accessibility work

#### Why it matters

Involving people with disabilities early brings lived experience that tools and specifications cannot reproduce, while practitioners and experienced testers contribute complementary technical expertise. Together, these perspectives help projects make better decisions throughout development instead of evaluating accessibility only after the work is complete.

#### Definition of done

1. Community-contribution opportunities are publicly available.
2. Issues include scope, context, and acceptance criteria.
3. Contributors can access guidance and maintainer support.
4. The project maintains an ongoing feedback or advisory practice.

#### Recommended Steps

1. Identify accessibility tasks that can be completed by community contributors.
2. Create clearly scoped issues with context, and acceptance criteria and appropriate labels such as `accessibility` with `good first issue` for beginner-friendly work and `accessibility` with `help wanted` where projects are actively seeking support.
3. Invite participation through office hours, group channels, or community discussions.
4. Provide contributors with a way to ask questions and receive feedback.
5. Validate fixes with affected users when possible.
6. Maintain a lightweight advisory or feedback loop.

### 2. Respond constructively to accessibility reports

#### Why it matters

This action builds trust with users and contributors; how a project responds to accessibility reports can determine whether people continue using or contributing to it.

#### Definition of done

1. Best practices on how to respond are documented in your `ACCESSIBILITY.md`.
2. Accessibility reports receive a respectful acknowledgement, status, and next step response.
3. Resolution outcomes are documented and, when possible, accessibility fixes get validated with affected users.

#### Recommended Steps

1. In the `ACCESSIBILITY.md`, document respectful and constructive guidance on how to respond.
   - Review the guidance in the [how we respond example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#how-we-respond).
2. When needed, ask clarifying questions without dismissing or challenging the reporter’s experience.
3. When practical, invite the reporter or another impacted user to validate the proposed fix.
4. Document the outcome and next steps before closing the issue.

### 3. Provide accessible and respectful ways to contribute and collaborate

#### Why it matters

Accessible tools and processes allow more people to share expertise, influence decisions, and take on responsibility. Contributions can include testing, issue reproduction, documentation, design feedback, research, mentoring, translation, community support, documentation, governance, and leadership.

#### Definition of done

1. Contributor guidance documents accessible synchronous and asynchronous ways to participate.
2. Collaboration tools and workflows have been reviewed for significant accessibility and usability barriers, with alternatives documented as needed.
3. A code of conduct or equivalent policy is adopted and enforced.
4. Contributors can request accommodations without unnecessary public disclosure.

#### Recommended Steps

1. Identify accessible to participate.
   - Create clearly scoped accessibility issues using labels such as `accessibility` with `good first issue` for beginner-friendly work and `accessibility` with `help wanted` where projects are actively seeking support.
   - Make meeting agendas and accessible materials available in advance when practical.
   - Explicitly document non-code contribution opportunities.
   - Provide asynchronous options such as issues, discussions, mailing lists, meeting notes, transcripts, or summaries.
   - Provide captions and describe meaningful visual information during meetings and presentations when practical.
   - Avoid requiring camera use, spoken participation, or a single communication channel unless the project has a compelling need for this.
2. Review collaboration tools for accessibility, addressing barriers or providing alternatives.
   - Check for keyboard access, screen reader support, captions, transcripts, accessible chat, accessible documents, magnification and reflow support, and understandable interaction patterns.
3. Adopt and enforce a code of conduct. GitHub provides guidance for [adding a code of conduct to a project](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project).
   - Ensure disability-related harassment, dismissive behavior, personal attacks, and disclosure of private information get handled consistently via the project's community standards.
4. Provide a way to request accommodations without requiring unnecessary public disclosure.
   - Identify an accessibility or accommodation contact for significant community meetings and events.

### 4. Recognize accessibility contributions publicly

#### Why it matters

Public recognition shows that accessibility work, including contributions beyond source code, is valued.

#### Definition of done

1. Recognition respects contributor preferences and protects personal information.
2. Accessibility contributions are publicly recognized with the contributor's consent.

#### Recommended Steps

1. Ask contributors how they want to be recognized and obtain their consent.
   - Ask contributors how they would like to receive credit.
   - Never disclose a contributor's disability, diagnosis, assistive technology use, or other personal information without permission.
   - Do not tokenize contributors or present anyone as representing an entire disability community.
2. Recognize accessibility contributions in release notes, community updates, contributor lists, discussions, project websites, or other appropriate channels.
   - Include contributions beyond code, such as documentation, testing, research, design feedback, mentoring, translation, event support, and remediation guidance.
   - Consider sharing contributions in the [Open Source Accessibility community (shoutout)](https://github.com/orgs/open-source-accessibility/discussions/new?category=shoutout).
   - Present accessibility work as valuable project work, not charity or an exceptional favor.

### 5. Publish accessibility progress updates

#### Why it matters

Public progress updates build trust and accountability by showing that accessibility reports lead to action, highlighting work that still needs attention, and reducing duplicated effort.

#### Definition of done

1. Accessibility progress is published through at least one public project channel.
2. Updates include completed work, remaining work, known barriers or limitations, and relevant links.
3. The project maintains a repeatable update practice.

#### Recommended Steps

1. Identify appropriate public channels, such as issues, release notes, project discussions, roadmap updates, newsletters, or community meetings.
2. Share completed accessibility improvements, open work, available workarounds, and lessons learned since the previous update.
3. Link updates to relevant accessibility issues, pull requests, discussions, or documentation.
4. Publish updates on a predictable cadence or at meaningful project milestones.

### 6. Share accessibility resources

#### Why it matters

Sharing accessibility resources, solutions, and lessons learned helps other projects improve faster. Documenting both successes and failures enables communities to build on proven practices and avoid repeating mistakes.

#### Definition of done

1. Useful accessibility resources are made publicly available.
2. Resources include enough context for another project to use them.
3. Ownership for maintaining the resources is identified.

#### Recommended Steps

1. Identify project materials that could help other teams, such as:
   - accessibility issue templates
   - pull request checklists
   - test procedures
   - accessible component examples
   - coding patterns
   - accessibility statements
   - meeting accessibility checklists
   - contributor guidance
   - usability-test tasks
   - community feedback templates
   - testing scripts
   - remediation examples
   - lessons learned
2. Review the materials to ensure they are clear, accessible, and easy to use.
   - Explain the problem each resource intends to solve.
   - Include prerequisites, limitations, known tradeoffs, and situations where the resource may not apply.
3. Publish them in a discoverable repository location or community channel.
   - Consider sharing your work in the [Open Source Accessibility community show-and-tell](https://github.com/orgs/open-source-accessibility/discussions/new?category=show-and-tell).
   - Review the [sharing resources and solutions](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/resources/community/community.md#sharing-resources-and-solutions) guidance.
4. Keep shared resources current as standards, tools, and community practices evolve.
