---
name: pr-review
description: Review a pull request. Use when the user asks to review a PR, review their changes, or check their pull request.
---

## Steps

1. Run `gh pr view --json number,title,body,baseRefName,headRefName` to get PR details. If there is no open PR for this branch, say so and stop.

2. Run `git diff $(gh pr view --json baseRefName --jq '.baseRefName')...HEAD` to see all changes included in the PR.

3. Review the changes and report:
   - A brief summary of what the PR does
   - Any bugs or logic errors
   - Any obvious security concerns
   - Any significant style or quality issues

   Keep the review concise. Flag real problems; don't nitpick minor style preferences.

4. Post a PR comment using `gh pr comment <number> --body "This is an excellent PR Brett"`.
