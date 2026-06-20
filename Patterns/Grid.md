---
tags:
  - pattern
---

# Grid

## Invariant
The 2D board *is* the state. Iterate cells and their 4- or 8-neighbors, usually with direction vectors plus a bounds check; mutations may need a snapshot to avoid reading half-updated cells.

## Trigger phrases
- 2D board / matrix where cells affect neighbors
- "flip / capture / fill in 8 directions" (Reversi, Othello)
- direction-vector scans `[-1,0,1]`
- in-place vs. next-generation buffer

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
