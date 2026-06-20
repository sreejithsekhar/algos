---
tags:
  - problem
pattern: "[[Graph Traversal]]"
difficulty: medium
status: solved
source: "countNetwork.js"
---

# Count Network

> [!info] Solution code
> [[countNetwork.js]]

## Problem
Given a grid of nodes where some already have an update (1) that spreads to 4-directional neighbors each second, return how many seconds it takes for the whole grid to be updated.

## Intuition
Multi-source BFS: seed the queue with all initially-updated cells, then count the number of expansion layers (levels) until no further cells flip.

## Trigger
"Spread from multiple starting cells each second, find time to fill" multi-source BFS level counting (rotting oranges).
