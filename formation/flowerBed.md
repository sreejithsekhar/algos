---
tags:
  - problem
pattern: "[[Greedy]]"
difficulty: easy
status: solving
source: "flowerBed.js"
---

# Flower Bed

> [!info] Solution code
> [[flowerBed.js]]

## Problem
Given a 0/1 flowerbed where no two flowers may be adjacent, decide whether `newFlowers` additional flowers can be planted.

## Intuition
Single pass: at each empty plot whose left and right are also empty (or out of bounds), plant greedily and count — earliest valid plot is always safe to take.

## Trigger
"Place items with a no-two-adjacent constraint and check feasibility" — greedily plant in the first available gap and count.
