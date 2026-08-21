## Testing phase

The Testing phase establishes repeatable automated and manual practices for evaluating accessibility across a project’s code, interfaces, documentation, and core user flows. It combines automated tools, keyboard-only checks, screen reader spot checks, visual checks, and documentation reviews because no single testing method can identify every accessibility barrier.

The goal is not to test every possible interaction at once. Projects begin with representative, high-impact journeys and expand their coverage over time. Test results should be recorded, incorporated into CI/CD where practical, and connected to the project’s issue-tracking process so that barriers are addressed, prioritized, and revisited as the project changes.

## Testing actions

### 1. Add at least one automated accessibility check

#### Why it matters

Helps catch common regressions.

#### Definition of done

- At least one automated accessibility check is configured or documented.
- The check runs against relevant project code or flows.
- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Review the guidance on [testing continuously](https://opensource.guide/accessibility-best-practices-for-your-project/#test-accessibility-continuously).
2. Select an appropriate tool, such as [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [axe](https://github.com/dequelabs/axe-core), or [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner).
3. Configure the test or document the decision in your project documentation.
4. Run the check against relevant project code or user flows.
5. Ensure accessibility issues from CI/CD checks are tracked.
6. Fix accessibility issues or track them using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 2. Perform a keyboard-only smoke test for core flows

#### Why it matters

Covers a high-impact baseline.

#### Definition of done

- Key tasks have documented keyboard-only checks.
- The checks confirm keyboard access, focus visibility, and logical focus order where applicable.
- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify key tasks and user journeys.
2. Document a short set of keyboard-only checks for those tasks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).
3. Run the checks without using a mouse or other pointing device.
4. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 3. Perform a screen reader spot check for core flows

#### Why it matters

Validates real usability beyond automation.

#### Definition of done

- Key tasks have documented screen reader checks.
- The test environment is recorded.
- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify key tasks and user journeys.
2. Select a supported screen reader and browser combination.
3. Test the flows using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).
4. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 4. Perform manual accessibility checks

#### Why it matters

Addresses common visual access barriers.

#### Definition of done

- Relevant interfaces have documented zoom, resize, reflow, and contrast checks.
- Information and functionality remain available at the tested settings.
- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Identify interfaces and content where zoom, resizing, reflow, or contrast are relevant.
2. Validate the UI at larger zoom levels and resized viewport dimensions.
3. Check that content reflows without loss of information or functionality.
4. Check applicable text, component, and focus contrast.
5. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

### 5. Perform accessibility checks for documentation

#### Why it matters

Improves the first experience many users have.

#### Definition of done

- Documentation checks cover structure, alternatives, links, captions, tables, and code blocks.
- Representative documentation has been reviewed.
- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

#### Recommended Steps

1. Review and identify key project documentation.
2. Perform documentation checks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).
3. Record and track accessibility issues found using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template).

## Testing actions table

| Action | Steps | Definition of done |
| :--- | :--- | :--- |
| Add at least one automated accessibility check | 1. Review the guidance on [testing continuously](https://opensource.guide/accessibility-best-practices-for-your-project/#test-accessibility-continuously).<br>2. Select an appropriate tool, such as [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [axe](https://github.com/dequelabs/axe-core), or [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner).<br>3. Configure the test or document the decision in your project documentation.<br>4. Run the check against relevant project code or user flows.<br>5. Ensure accessibility issues from CI/CD checks are tracked.<br>6. Fix or track accessibility issues using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). | - At least one automated accessibility check is configured or documented.<br>- The check runs against relevant project code or flows.<br>- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). |
| Perform a keyboard-only smoke test for core flows | 1. Identify key tasks and user journeys.<br>2. Document a short set of keyboard-only checks for those tasks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).<br>3. Run the checks without using a mouse or other pointing device.<br>4. Record and track accessibility issues found. | - Key tasks have documented keyboard-only checks.<br>- The checks confirm keyboard access, focus visibility, and logical focus order where applicable.<br>- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). |
| Perform a screen reader spot check for core flows | 1. Identify key tasks and user journeys.<br>2. Select a supported screen reader and browser combination.<br>3. Test the flows using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).<br>4. Record and track accessibility issues found. | - Key tasks have documented screen reader checks.<br>- The test environment is recorded.<br>- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). |
| Perform manual accessibility checks | 1. Identify interfaces and content where zoom, resizing, reflow, or contrast are relevant.<br>2. Validate the UI at larger zoom levels and resized viewport dimensions.<br>3. Check that content reflows without loss of information or functionality.<br>4. Check applicable text, component, and focus contrast.<br>5. Record and track accessibility issues found. | - Relevant interfaces have documented zoom, resize, reflow, and contrast checks.<br>- Information and functionality remain available at the tested settings.<br>- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). |
| Perform accessibility checks for documentation | 1. Review and identify key project documentation.<br>2. Perform documentation checks using the [testing examples](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md#contributor-requirements).<br>3. Record and track accessibility issues found. | - Documentation checks cover structure, alternatives, links, captions, tables, and code blocks.<br>- Representative documentation has been reviewed.<br>- Accessibility issues are fixed or tracked using the [accessibility issue-template guidance](https://opensource.guide/accessibility-best-practices-for-your-project/#add-issue-labels-and-template). |