---
tags:
  - pattern
---

# Heap

## Invariant
A priority queue keeps the k best elements at the frontier with O(log k) push/pop, so you never pay for a full sort when you only need the extremes.

## Trigger phrases
- "top K" / "k most frequent" / "k largest / closest"
- a running min/max over a stream
- "merge k sorted …"
- need the next-best element repeatedly

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
