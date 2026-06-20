---
tags:
  - problem
pattern: "[[Graph Traversal]]"
difficulty: medium
status: todo
source: "canReachBoth.js"
---

# Can Reach Both

> [!info] Solution code
> [[canReachBoth.js]]

## Problem
On a 2D elevation grid where water flows to equal-or-lower neighbors, return all cells from which water can drain to both the Pacific (top/left edges) and Atlantic (bottom/right edges).

## Intuition
Reverse the flow: from each ocean's border cells, search inward to cells of greater-or-equal height; the intersection of the two reachable sets are the answer cells.

## Trigger
"Reaches both edges/oceans" on a grid run a search from each boundary inward and intersect (Pacific-Atlantic water flow).
