---
tags:
  - problem
pattern: "[[Hash Map]]"
difficulty: easy
status: solved
source: "romanToInteger.js"
---

# Roman To Integer

> [!info] Solution code
> [[romanToInteger.js]]

## Problem
Convert a Roman numeral string to its integer value, handling the six subtractive pairs (IV, IX, XL, XC, CD, CM).

## Intuition
Map each symbol to its value and scan left to right; when a smaller symbol precedes a larger one in a known subtractive pair, add the difference and skip ahead, otherwise add the value.

## Trigger
Fixed symbol-to-value lookup with a "smaller-before-larger means subtract" rule — hash map plus look-ahead at the next character.
