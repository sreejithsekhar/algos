---
tags:
  - problem
pattern: "[[Binary Search]]"
difficulty: medium
status: solved
source: "findPeak.js"
---

# Find Peak

> [!info] Solution code
> [[findPeak.js]]

## Problem
Return the index of any peak element (strictly greater than both neighbors, with out-of-bounds treated as -inf) in faster than O(n).

## Intuition
Adjacent elements always differ, so binary search by walking toward the higher neighbor — climbing a slope must eventually hit a peak.

## Trigger
"Find any peak / faster than O(n) on an unsorted array with no equal adjacent values" — move the binary-search bounds toward the rising side.
