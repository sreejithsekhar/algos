---
tags:
  - pattern
---

# Graph Traversal

## Invariant
Visit each node at most once, marking it visited, and expand its neighbors via a queue (BFS) or recursion/stack (DFS). Reachability, connectivity, and component counts fall straight out.

## Trigger phrases
- "connected" / "reachable from" / "number of islands / networks / clusters"
- a grid where you flood from a cell to its neighbors
- adjacency list or implicit neighbor relation
- shortest path in an **unweighted** graph (BFS)

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
