# Contributing

Thank you for helping improve the Open Source Accessibility Framework. Contributions are welcome to the framework guidance, examples, website, and project workflows.

## Before you start

- Check the [open issues](https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework/issues) to see whether the work is already being discussed.
- For a substantial change to an action, phase, or project workflow, open an issue first so maintainers and contributors can discuss the approach.
- Keep each pull request focused. Link the related issue when one exists.

## Work on the website

The website lives in `website/`. To run it locally:

```sh
cd website
npm ci
npm run dev
```

Before submitting website changes, run the available checks:

```sh
npm run test:unit -- --run
npm run type-check
npm run build
```

For documentation-only changes, review the rendered Markdown and check that links point to the intended files or pages.

## Submit a pull request

1. Fork this repository using GitHub's **Fork** button.
2. Clone your fork and add the upstream repository:

   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/Open-Source-Accessibility-Framework.git
   cd Open-Source-Accessibility-Framework
   git remote add upstream https://github.com/open-source-accessibility/Open-Source-Accessibility-Framework.git
   ```

3. Create a branch for your change:

   ```sh
   git switch -c docs/short-description
   ```

4. Make the change and run the relevant checks.
5. Push the branch to your fork and open a pull request against `main` in the upstream repository.

In the pull request description, explain what changed, why it helps, and which checks you ran. Include screenshots for visual website changes when useful.

## Community expectations

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md). Contributions to this project are released under the [MIT License](LICENSE).
