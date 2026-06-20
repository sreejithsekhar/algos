---
tags:
  - problem
pattern: "[[Binary Search]]"
difficulty: easy
status: solved
source: "badCommit.js"
---

# Bad Commit

> [!info] Solution code
> [[badCommit.js]]

## Problem
Commits 1..n flip from good to bad at some point; given an `isBadVersion(v)` oracle, find the first bad commit with as few calls as possible.

## Intuition
The good/bad boundary is monotonic, so binary-search the first true: when mid is bad keep it as the upper bound, otherwise search right.

## Trigger
"Monotonic predicate" (false...false true...true) and "minimize number of checks/API calls" to find the boundary.
