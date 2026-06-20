---
tags:
  - problem
pattern: "[[Prefix Sum]]"
difficulty: hard
status: solved
source: "maxBalancedSplits.js"
---

# Max Balanced Splits

> [!info] Solution code
> [[maxBalancedSplits.js]]

## Problem
Count split points k (1 <= k < n) where the prefix and suffix budget sums are equal, after optionally changing exactly one element to targetBudget; return the max balanced splits achievable in the single resulting array.

## Intuition
A split is balanced when 2*prefix[k] == total. Changing element j shifts the total by a fixed offset, so bucket each split position by 2*prefix[k] in left/right frequency maps and, for each candidate change j, count positions matching total±offset.

## Trigger
"split the array so both halves have equal sum" plus "optionally change one element" — equal-sum partitions reduce to prefix-sum equality, and the one-edit twist becomes a constant offset over those prefix sums.
