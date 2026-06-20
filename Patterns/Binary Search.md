---
tags:
  - pattern
---

# Binary Search

## Invariant
Keep a `[lo, hi]` range that always contains the answer; each step evaluates a monotonic predicate and discards half the range — O(log n).

## Trigger phrases
- input is sorted, or the answer space is monotonic
- "find the first / last element that satisfies…"
- "minimize the maximum" / "maximize the minimum" (binary search on the answer)
- a peak / threshold / version where behaviour flips once

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
