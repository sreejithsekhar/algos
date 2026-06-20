---
tags:
  - problem
pattern: "[[Prefix Sum]]"
difficulty: medium
status: solved
source: "7-products-of-Array-Except-Self.js"
---

# 7 Products Of Array Except Self

> [!info] Solution code
> [[7-products-of-Array-Except-Self.js]]

## Problem
Return an array where output[i] is the product of every element except nums[i], in O(n) and without division.

## Intuition
output[i] is the product of everything to its left times everything to its right, so precompute prefix-product and suffix-product arrays and multiply them per index.

## Trigger
"product/sum of all elements except self" with "no division" — split each position's answer into a prefix and a suffix accumulation.
