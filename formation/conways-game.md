---
tags:
  - problem
pattern: "[[Simulation]]"
difficulty: medium
status: solving
source: "conways-game.js"
---

# Conways Game

> [!info] Solution code
> [[conways-game.js]]

## Problem
Simulate `rounds` generations of Conway's Game of Life on a grid of "X"/" " cells, applying the birth/survival/death rules based on each cell's 8 neighbors.

## Intuition
Snapshot the board each round so neighbor counts read from the frozen previous state while mutations write to the live board, avoiding mid-round contamination.

## Trigger
Cellular automaton / "next state depends on 8 neighbors of the previous state" needing a buffered/cloned board per generation.
