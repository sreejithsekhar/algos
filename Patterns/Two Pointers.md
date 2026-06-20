---
tags:
  - pattern
---

# Two Pointers

## Invariant
Two indices move monotonically (inward from both ends, or in tandem) so the search space shrinks every step — collapsing an O(n²) pair/triplet scan into O(n) when the data is sorted or otherwise ordered.

## Trigger phrases
- "sorted array" + "find a pair / triplet that sums to a target"
- "in place" / "without extra space"
- merge or compare two sequences from their ends
- remove duplicates / partition around a value

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
