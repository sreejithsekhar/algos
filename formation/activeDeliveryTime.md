---
tags:
  - problem
pattern: "[[Simulation]]"
difficulty: medium
status: solved
source: "activeDeliveryTime.js"
---

# Active Delivery Time

> [!info] Solution code
> [[activeDeliveryTime.js]]

## Problem
Given a stream of pickup(0)/dropoff(1) events with timestamps, compute total time at least one delivery is active, returning -1 for invalid sequences (double pickup, dropoff before pickup, non-increasing time).

## Intuition
Track a running count of active pickups; record start_time when count goes 0->1 and add the elapsed span when it returns to 0, using a Map to validate each order's lifecycle.

## Trigger
"Active interval" counting overlapping start/end events with a running counter that opens on first and closes on last.
