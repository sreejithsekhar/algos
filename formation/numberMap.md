---
tags:
  - problem
pattern: "[[Math]]"
difficulty: medium
status: solving
source: "numberMap.js"
---

# Number Map

> [!info] Solution code
> [[numberMap.js]]

## Problem
Convert a non-negative integer into its English words representation (e.g. 1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven").

## Intuition
Lookup-table the irregular words (0-19, tens, scales), then recurse by grouping digits into hundreds/thousands/millions chunks.

## Trigger
"Spell out an integer in words" / number-to-text — digit grouping plus a fixed vocabulary map.
