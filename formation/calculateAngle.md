---
tags:
  - problem
pattern: "[[Math]]"
difficulty: easy
status: solved
source: "calculateAngle.js"
---

# Calculate Angle

> [!info] Solution code
> [[calculateAngle.js]]

## Problem
Given a "hh:mm" 12-hour time, return the smaller angle (0-180) between the hour and minute hands, accounting for the hour hand drifting continuously as minutes pass.

## Intuition
Convert each hand to absolute degrees (minute = 6*mm, hour = 30*h + 0.5*mm), take the absolute difference, then min(diff, 360-diff) for the smaller arc.

## Trigger
Clock-hand geometry / converting units to a shared circular scale and picking the smaller of two arc directions.
