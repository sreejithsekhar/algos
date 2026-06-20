---
tags:
  - problem
pattern: "[[Two Pointers]]"
difficulty: medium
status: todo
source: "findLongestWord.js"
---

# Find Longest Word

> [!info] Solution code
> [[findLongestWord.js]]

## Problem
From a dictionary, return the longest word that is a subsequence of string `s` (formed by deleting characters without reordering), preferring the lexicographically smallest on ties.

## Intuition
Each candidate is a subsequence check: walk two pointers over `s` and the candidate, advancing the candidate pointer only on matches; keep the best word by (length, lexicographic order).

## Trigger
"Obtainable by deleting characters without reordering" — that's a subsequence test, done with a two-pointer scan of `s`.
