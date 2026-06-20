---
tags:
  - problem
pattern: "[[Two Pointers]]"
difficulty: easy
status: todo
source: "zipNunmber.js"
---

# Zip Nunmber

> [!info] Solution code
> [[zipNunmber.js]]

## Problem
Given two integer arrays of equal length, interleave them into a new array alternating elements starting with the first array (with scratch notes considering unequal lengths plus a leftover tail).

## Intuition
Walk both arrays with a shared index, pushing one element from each per step; if lengths differ, append the remaining tail of the longer array afterward.

## Trigger
"interleave / alternate elements from two arrays" is a single index walking both sequences in lockstep.
