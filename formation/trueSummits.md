---
tags:
  - problem
pattern: "[[Greedy]]"
difficulty: medium
status: solved
source: "trueSummits.py"
---

# True Summits

> [!info] Solution code
> [[trueSummits.py]]

## Problem
Given elevations along a line of sight from a viewer at height 0, decide whether the tallest point (true summit) is actually visible and not blocked by a lower false summit in front of it.

## Intuition
A point is visible only if its slope (height / distance) is at least the max slope seen so far; track the running max slope and max height in one pass to know if the highest peak was reachable above everything before it.

## Trigger
"line of sight / can you see the peak" where something blocks the view based on angle points to comparing running max slope (rise over run), not raw height.
