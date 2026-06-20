---
tags:
  - problem
pattern: "[[Graph Traversal]]"
difficulty: medium
status: solved
source: "twoOceanRunoff.js"
---

# Two Ocean Runoff

> [!info] Solution code
> [[twoOceanRunoff.js]]

## Problem
On a grid of elevations bordered by two oceans (Pacific top/left, Atlantic bottom/right), return all cells from which water can drain to both oceans, flowing only to equal-or-lower neighbors.

## Intuition
Reverse the flow: instead of asking where each cell drains, BFS inward from each ocean's border cells climbing to equal-or-higher neighbors, then intersect the two reachable sets.

## Trigger
"which grid cells can reach both edges/oceans" — flood from the borders inward and intersect, rather than simulating runoff from every cell.
