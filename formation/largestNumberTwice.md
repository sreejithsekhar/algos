---
tags:
  - problem
pattern: "[[Math]]"
difficulty: easy
status: todo
source: "largestNumberTwice.js"
---

# Largest Number Twice

> [!info] Solution code
> [[largestNumberTwice.js]]

## Problem
Find the largest element in an array and verify it is at least twice as large as every other element, returning its index (or -1 if it isn't dominant). Source file is empty — prompt inferred from the title.

## Intuition
One pass to track the max (and its index) plus the second-largest; the max dominates iff max >= 2 * second.

## Trigger
"Largest element is at least twice every other element" / "dominant value" comparison over a single scan.
