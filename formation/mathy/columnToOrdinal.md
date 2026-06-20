---
tags:
  - problem
pattern: "[[Math]]"
difficulty: medium
status: solved
source: "columnToOrdinal.js"
---

# Column To Ordinal

> [!info] Solution code
> [[columnToOrdinal.js]]

## Problem
Convert spreadsheet column headers to their 1-based ordinal and back (A=1, Z=26, AA=27, ...), where the alphabet acts as a base-26 numbering system that has no zero digit.

## Intuition
It's base-26 conversion, but bijective: there is no zero symbol, so on the way back you decrement (ord--) before taking ord % 26 to map the remainder into A..Z.

## Trigger
Letters behaving like digits with no zero (A..Z then AA) — a bijective base-26 numeral system; the missing zero is the signal to do the -1/+1 offset.
