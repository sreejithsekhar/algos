---
tags:
  - problem
pattern: "[[Simulation]]"
difficulty: medium
status: solved
source: "findAvailableSlots.js"
---

# Find Available Slots

> [!info] Solution code
> [[findAvailableSlots.js]]

## Problem
Given per-person busy intervals within a fixed 8–17 workday, return every integer start time at which a meeting of the given duration fits with nobody busy.

## Intuition
Discretize the day into hour buckets, mark every busy hour from all schedules, then scan for runs of free hours long enough to hold the duration.

## Trigger
Small fixed time range with whole-hour intervals across many people — flatten everything onto a timeline array and look for free gaps.
