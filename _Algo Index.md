---
tags:
  - moc
---

# Algo Index

Pattern-first index over the solution files in this folder. Each problem note
carries a `pattern` property linking it to its technique under `Patterns/`.
The tables below rebuild themselves (Dataview plugin required).

## All problems by pattern
```dataview
table pattern as Pattern, difficulty as Difficulty, status as Status
from #problem
sort pattern asc
```

## Not yet indexed (no pattern set)
```dataview
list
from #problem
where !pattern
```

> [!note] Workflow
> 1. Open a problem note, fill in `pattern:` (e.g. `"[[Two Pointers]]"`), the intuition, and the trigger.
> 2. The first time you use a pattern, create `Patterns/<name>.md` holding its invariant + trigger phrase.
> 3. Don't reorganise files � links and the `pattern` property do the indexing, not folders.
