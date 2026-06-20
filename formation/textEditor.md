---
tags:
  - problem
pattern: "[[Design]]"
difficulty: medium
status: solving
source: "textEditor.js"
---

# Text Editor

> [!info] Solution code
> [[textEditor.js]]

## Problem
Design a text editor class supporting typing, backspace/delete, and cursor movement, with every core edit operation running in O(1).

## Intuition
A doubly linked list of characters with a cursor pointer makes insert/delete at the cursor O(1), since you only need to relink the two neighbors instead of shifting an array.

## Trigger
"all main operations should be O(1)" plus a moving cursor with insert/delete at an arbitrary position points to a doubly linked list, not an array.
