---
tags:
  - pattern
---

# Prefix Sum

## Invariant
Precompute running aggregates (sum, product, count) so any range or leave-one-out answer is O(1). The classic trick is one left-to-right pass paired with one right-to-left pass.

## Trigger phrases
- "product / sum of all elements except self"
- "without division" (forces prefix·suffix)
- repeated range-sum queries
- a balance / pivot point where left aggregate == right aggregate
- weighted sampling via cumulative weights

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
