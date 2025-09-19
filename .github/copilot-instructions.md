## Repo snapshot

This is a minimal training repository. It currently contains a single JavaScript file: `fizz-buzz.js`.

- `fizz-buzz.js` defines a function `fizzBuzz()` which iterates 1..100 and logs either a number, "Fizz", "Buzz", or "FizzBuzz". The function is defined but not invoked and the file does not export anything.

## What an AI coding agent should know (concise)

- Big picture: tiny, single-file Node script. No build system, no package.json, and no external dependencies. Changes should be small and explicit.
- Run / debug: the file does not call `fizzBuzz()` by default. To run locally either:
  - add a one-line runner at the bottom of `fizz-buzz.js`: `fizzBuzz();`, then run `node fizz-buzz.js`.
  - or export the function (`module.exports = { fizzBuzz }`) and invoke it from a small runner file or with `node -e "const { fizzBuzz } = require('./fizz-buzz.js'); fizzBuzz()"`.

## Editing conventions for agents

- Preserve the existing function name `fizzBuzz` unless the user asks for a rename. This repo is likely used for teaching/validation, and callers (or tests you may add) will expect that exact name.
- Minimize behavioral changes: if asked to refactor, keep behavior identical for numbers 1..100 (same console output). Example behaviors to preserve: ordering of checks (3&5 first), use of `console.log` for output, and the inclusive loop `for (let i = 1; i <= 100; i++)`.
- If adding tests or runners, prefer adding new files rather than editing `fizz-buzz.js` in-place. Suggested file names: `runner.js`, `fizz-buzz.test.js`.

## Patterns and examples from this repo

- Output uses `console.log`. Example line to keep: `console.log("FizzBuzz")`.
- Control flow uses `if/else if/else` in the order: divisible by 3 and 5, then 3 only, then 5 only, then number.

## Integration and dependencies

- There are currently no external integrations. If you add tooling (test runner, linter), also add a `package.json` to record commands and deps.

## Typical agent tasks and exact expectations

- Small bugfix: change only the minimal lines and run a quick manual check (add `fizzBuzz()` and run `node fizz-buzz.js`) before committing.
- Add a test: create `package.json` with a `test` script (common choice: Jest or Node's built-in assert). Example minimal `package.json` is acceptable, but prefer asking the user before introducing new deps.

## When to ask clarifying questions

- If asked to add tests or CI, ask which test framework to prefer (user may not want external deps).
- If asked to run code, clarify whether you may modify files (for example adding a runner call) or if you should create a separate runner file.

If something in this file is unclear or you want different conventions (for example: prefer ESM exports, add tests, or add a CI workflow), ask the repo owner before making those changes.
