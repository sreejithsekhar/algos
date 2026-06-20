---
tags:
  - problem
pattern: "[[Shortest Path]]"
difficulty: medium
status: solving
source: "maxPathProbability.js"
---

# Max Path Probability

> [!info] Solution code
> [[maxPathProbability.js]]

## Problem
Given a weighted undirected graph where each edge has a success probability, return the highest-probability path from start to end (product of edge probabilities), or 0 if unreachable.

## Intuition
Maximize a product instead of minimizing a sum: run Dijkstra over a max-heap keyed by the best probability seen, relaxing neighbors by multiplying.

## Trigger
"Highest probability path" / maximizing a product of edge weights across a graph — Dijkstra with a max-priority queue.
