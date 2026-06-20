---
tags:
  - problem
pattern: "[[Greedy]]"
difficulty: medium
status: todo
source: "minDominoRotations.js"
---

# Min Domino Rotations

> [!info] Solution code
> [[minDominoRotations.js]]

## Problem
Given two parallel arrays (tops/bottoms) of domino faces, return the minimum rotations to make one whole row identical, or -1 if impossible.

## Intuition
Only the first domino's two values are candidates; for each candidate, count how many rotations make the top (or bottom) all that value, and any value not present in every domino is immediately impossible.

## Trigger
"Make every value in a row identical with minimum swaps" — only a tiny fixed set of target values can possibly work.
