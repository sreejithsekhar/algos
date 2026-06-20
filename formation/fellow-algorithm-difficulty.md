---
tags:
  - problem
pattern: "[[Greedy]]"
difficulty: medium
status: solving
source: "fellow-algorithm-difficulty.js"
---

# Fellow Algorithm Difficulty

> [!info] Solution code
> [[fellow-algorithm-difficulty.js]]

## Problem
Given skill levels, assign each Fellow a difficulty (min 1) so that anyone with higher skill than a neighbor gets a strictly higher number and equal-skill neighbors get the same number, using the minimum total.

## Intuition
This is the "candy" problem: start everyone at 1, then sweep left-to-right and right-to-left, bumping each element above whichever satisfied neighbor demands more.

## Trigger
"Strictly more than the neighbor on each side" with a minimize-the-assignment goal — neither direction alone is enough, so do two greedy passes.
