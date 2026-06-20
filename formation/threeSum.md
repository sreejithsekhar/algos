---
tags:
  - problem
pattern: "[[Two Pointers]]"
difficulty: medium
status: solved
source: "threeSum.js"
---

# Three Sum

> [!info] Solution code
> [[threeSum.js]]

## Problem
Return all unique triplets in an integer array that sum to zero, with no duplicate triplets in the output.

## Intuition
Sort the array, fix one element, then collapse the remaining 2Sum into a left/right two-pointer sweep that moves inward based on whether the running sum is above or below the target.

## Trigger
"find triplets/pairs that sum to a target" with "no duplicates" on a sortable array is the sorted + two-pointer signal.
