# Action 6: Document supported environments and known limitations

- **Action ID:** `document-supported-environments-and-known-limitations`
- **Cadence:** Initial setup + ongoing
- **Canonical source:** [Testing Phase, Action 6](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/phases/testing-phase.md#6-document-supported-environments-and-known-limitations)

## Why it matters

This action sets transparent expectations about where the project has been evaluated and helps people understand known accessibility barriers and available alternatives.

## Definition of done

1. The `ACCESSIBILITY.md` identifies supported or tested platforms, devices, browsers, input methods, and assistive technologies.
2. Known accessibility limitations are described in terms of their effect on users, with workarounds, equivalent access, and links to tracked issues where available.

## Recommended Steps

1. In the `ACCESSIBILITY.md`, add a "Supported environments" section.
   - Refer to the [supported environments and known limitations example](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/blob/main/framework/supporting/workflow-phase/limitations-accessibility.md) for guidance.
   - List only environments the project supports or has evaluated, include versions where useful, and note partial support.
2. Add a "Known limitations" section.
   - Describe each barrier in terms of the affected user experience rather than standards codes.
   - Include available workarounds or equivalent access and link to tracked issues.
   - If no limitations are currently documented, describe what has been tested rather than claiming that no barriers exist.
3. Invite people to report accessibility barriers that are not already documented.
