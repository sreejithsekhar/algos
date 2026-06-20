---
tags:
  - problem
pattern: "[[Design]]"
difficulty: medium
status: solved
source: "notificationDeduplicator_map.js"
---

# Notification Deduplicator Map

> [!info] Solution code
> [[notificationDeduplicator_map.js]]

## Problem
Design a NotificationDeduplicator that suppresses a (user, type) notification if an identical one was sent within the last `windowMinutes`, allowing it again once the window elapses.

## Intuition
Keep a map keyed by `userId-notificationType` to the last-sent timestamp; allow (and update) only when `now - last >= window`.

## Trigger
"Throttle / dedupe events per key within a sliding time window" stateful class — a class plus a last-seen timestamp map.
