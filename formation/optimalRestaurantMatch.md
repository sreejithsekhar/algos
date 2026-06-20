---
tags:
  - problem
pattern: "[[Hash Map]]"
difficulty: easy
status: solving
source: "optimalRestaurantMatch.js"
---

# Optimal Restaurant Match

> [!info] Solution code
> [[optimalRestaurantMatch.js]]

## Problem
Given two preference-ordered lists, return the common restaurant(s) with the minimum combined index sum (least index sum = best mutual preference), returning all ties.

## Intuition
Map one list's items to their indices, then scan the other list computing index sums; track the running minimum and collect all entries that match it.

## Trigger
"Find common items minimizing the sum of their positions in both lists" — index map plus min-tracking second pass.
