---
tags:
  - problem
pattern: "[[Prefix Sum]]"
difficulty: medium
status: solved
source: "weightedDie.js"
---

# Weighted Die

> [!info] Solution code
> [[weightedDie.js]]

## Problem
Build a WeightedDie whose roll() returns a face index with probability proportional to per-face weights given at construction.

## Intuition
Turn the weights into a cumulative (prefix-sum) array so each face owns a sub-range of [1..total]; pick a uniform random number in that range and binary-search the prefix array for the bucket it falls into.

## Trigger
"return an index with probability proportional to weights" maps to a prefix-sum of weights plus a binary search on a uniform random draw.
