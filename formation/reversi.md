---
tags:
  - problem
pattern: "[[Grid]]"
difficulty: medium
status: solving
source: "reversi.java"
---

# Reversi

> [!info] Solution code
> [[reversi.java]]

## Problem
Given a Reversi/Othello board and an empty cell, decide whether placing a black disc there is legal: in some direction it must immediately border white discs that terminate in a black disc.

## Intuition
From the candidate cell, ray-cast in all 8 directions; a direction is legal if it starts on the opponent's color, walks over a run of opponent discs, and ends on your own color before hitting empty or the edge.

## Trigger
"Surrounded on both ends" / flip a line of pieces on a board — scan the 8 grid directions from a cell.
