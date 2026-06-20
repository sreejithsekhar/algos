---
tags:
  - problem
pattern: "[[Design]]"
difficulty: hard
status: solving
source: "recentAccessList.js"
---

# Recent Access List

> [!info] Solution code
> [[recentAccessList.js]]

## Problem
Design `MRQueue(data)` with a `fetch(ordinal)` that returns the 1-based item, moves it to the end (most-recently-accessed), and keeps the rest of the order intact.

## Intuition
Bucket the list into ~sqrt(n) groups so locating the ordinal costs O(#groups) and the remove-then-append costs O(group size), beating the O(n) of a flat array shift; split a group when it grows too large.

## Trigger
"Move accessed element to the end, keep size fixed" with index queries — sqrt-decomposition of a list into balanced buckets.
