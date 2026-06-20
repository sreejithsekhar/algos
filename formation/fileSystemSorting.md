---
tags:
  - problem
pattern: "[[Sorting]]"
difficulty: easy
status: solved
source: "fileSystemSorting.js"
---

# File System Sorting

> [!info] Solution code
> [[fileSystemSorting.js]]

## Problem
Sort an array of file objects by their `MM-DD-YYYY HH:MM:SS` date string (most recent first), breaking ties by filename.

## Intuition
Parse each date into a comparable value and write a comparator; the primary key is time, the secondary key is filename, just chain them inside `sort`.

## Trigger
"Sort these records by date, then by another field on ties" — a multi-key comparator over parsed dates.
