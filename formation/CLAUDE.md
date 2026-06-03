# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working with the user in this repo

This folder is a scratchpad of standalone algorithm-challenge files (mostly Formation / NeetCode style problems). It is **not** a project — there is no build system, no package.json, no test runner, no shared modules. Each file is an independent problem with its prompt in a top-of-file comment, often followed by the user's in-progress scratch notes ("Explore / Brainstorm / Plan") and a partial solution.

### Default behavior: do not solve problems

The user does these challenges to practice. **Do not write or complete the algorithm/solution unless the user explicitly asks you to.** This includes:
- Do not fill in empty function bodies.
- Do not "fix" bugs in their in-progress solution.
- Do not suggest a better algorithm or refactor their approach.
- Do not auto-complete the next step of their plan.

Most questions in this folder are about **language/API mechanics**, not algorithms — e.g. "how do I iterate a Map in JS?", "what's the Java syntax for a 2D array literal?", "how do I sort with a comparator in Python?". Answer those directly and minimally. Stick to the API question asked; don't pivot into solving the surrounding problem.

If the user's intent is ambiguous (it could be read as either a syntax question or a "help me solve this" question), ask before writing solution code.

### When the user does ask for help on the algorithm

Prefer the smallest useful nudge over a full solution: a hint, a question about their approach, or pointing at the specific line that's broken. Only write out the full solution when they explicitly ask for one.

## Layout

- Files in the root are individual problems, named after the problem (e.g. [textEditor.js](textEditor.js), [reversi.java](reversi.java), [trueSummits.js](trueSummits.js)).
- [neet/](neet/) holds NeetCode-style problems, prefixed with their list index (e.g. [neet/4-anagrams.js](neet/4-anagrams.js)).
- Languages in use: JavaScript (most files), Java ([reversi.java](reversi.java)), occasional Python embedded in JS files as comments ([recentAccessList.js](recentAccessList.js)).
- Files commonly contain syntax errors or half-finished code — that's the user's working state, not something to clean up.

## Running a file

There's no test harness. If the user asks to run something:
- JS: `node <file>.js`
- Java: `javac <file>.java && java <ClassName>`
