---
tags:
  - pattern
---

# Sorting

## Invariant
Impose an order first so the real work collapses to a single linear pass; the comparator encodes the rule that matters.

## Trigger phrases
- "sort by …" / custom or multi-key ordering
- lexicographic / version-string / path ordering
- "arrange so that…" before doing anything else
- output must be in a particular order

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
