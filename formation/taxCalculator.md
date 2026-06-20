---
tags:
  - problem
pattern: "[[Simulation]]"
difficulty: easy
status: solved
source: "taxCalculator.js"
---

# Tax Calculator

> [!info] Solution code
> [[taxCalculator.js]]

## Problem
Given progressive tax brackets (lower, upper, rate) and a taxable income, compute total tax by applying each bracket's marginal rate only to the portion of income that falls within it.

## Intuition
Walk the brackets in order, taxing `min(bracketWidth, remainingIncome)` at the bracket rate and draining the remaining income until it runs out or income falls below a bracket's lower bound.

## Trigger
"Marginal rate per bracket / piecewise tiered charge" — iterate the ranges and apply each tier to its slice of the amount.
