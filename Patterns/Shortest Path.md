---
tags:
  - pattern
---

# Shortest Path

## Invariant
Relax edges in best-first order (Dijkstra): the first time a node is popped, its cost is final — valid because all edge weights push the cost monotonically. Maximizing a product of probabilities is the same algorithm with `max`/multiply.

## Trigger phrases
- weighted graph + "min cost" / "max probability" route
- "best path" where edges carry a weight
- non-negative weights (Dijkstra) vs. unweighted (plain BFS)
- need the optimal single-source distance, not just reachability

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
