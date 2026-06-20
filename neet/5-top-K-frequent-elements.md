---
tags:
  - problem
pattern: "[[Heap]]"
difficulty: medium
status: solved
source: "5-top-K-frequent-elements.js"
---

# 5 Top K Frequent Elements

> [!info] Solution code
> [[5-top-K-frequent-elements.js]]

## Problem
Given an integer array nums and integer k, return the k most frequent elements.

## Intuition
Count frequencies in a map, then bucket-sort values by frequency (index = count) and walk buckets from highest count downward — O(n) without a heap or sort.

## Trigger
"k most frequent / top k" — count with a hash map, then either a heap or frequency buckets to pull the highest-count items.
