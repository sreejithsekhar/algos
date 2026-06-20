---
tags:
  - pattern
---

# Greedy

## Invariant
A locally-optimal choice at each step provably yields a global optimum; sort or scan and commit without ever backtracking. The hard part is the exchange argument that justifies it.

## Trigger phrases
- "minimum number of …" / "maximum you can …"
- "can you place / partition / schedule so that…"
- a natural ordering makes each decision obvious
- interval scheduling, coin-like selection, fewest moves

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
