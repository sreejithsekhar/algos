---
tags:
  - pattern
---

# Hash Map

## Invariant
Trade space for O(1) lookups: store seen keys / counts / indices so each element is touched once instead of rescanning.

## Trigger phrases
- "have we seen X before" / complement lookup
- "count the frequency of" / "group by"
- deduplicate, or map one set onto another
- need O(1) membership while streaming through input

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
