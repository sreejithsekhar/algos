# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A scratchpad of standalone algorithm-challenge files (mostly Formation / NeetCode style). It is **not** a project — no build system, package.json, test runner, or shared modules. Each file is an independent problem with its prompt in a top-of-file comment, often followed by the user's scratch notes ("Explore / Brainstorm / Plan") and a partial solution.

Subfolders may have their own `CLAUDE.md` with more specific guidance (e.g. [formation/CLAUDE.md](formation/CLAUDE.md)) — defer to those when working in that folder.

## Note-indexing convention
- Every solution file has a sidecar `<name>.md` beside it (Obsidian note).
- Sidecar frontmatter: tags: [problem], pattern: "[[<Technique>]]", difficulty, status, source: "<code file>".
- `pattern` links the problem to a technique note in `Patterns/`.
- Reusable invariants + trigger phrases live in `Patterns/<technique>.md`; create one the first time a pattern is used.
- `_Algo Index.md` holds Dataview tables — don't hand-maintain lists.
- When I add a new solution, generate its sidecar from this template and fill in `pattern` + trigger.

### Sidecar template

```markdown
---
tags: [problem]
pattern: "[[<Technique>]]"
difficulty: <easy | medium | hard>
status: <todo | solving | solved>
source: "<code file>"
---

## Trigger
<the phrase / signal in the problem that points at this pattern>

## Notes
```

## Running a file

There's no test harness. If the user asks to run something:
- JS: `node <file>.js`
- Java: `javac <file>.java && java <ClassName>`
