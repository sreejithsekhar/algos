---
tags:
  - problem
pattern: "[[Hash Map]]"
difficulty: easy
status: solved
source: "4-anagrams.js"
---

# 4 Anagrams

> [!info] Solution code
> [[4-anagrams.js]]

## Problem
Given an array of strings, group all anagrams together into sublists (any order).

## Intuition
Two strings are anagrams iff their sorted characters match, so the sorted string is a canonical key — bucket each word under that key in a hash map.

## Trigger
"group anagrams" / "same characters in any order" — normalize each item to a canonical signature (sorted letters or char counts) and group by it in a map.
