---
tags:
  - pattern
---

# Simulation

## Invariant
Model the process exactly as described and advance state step by step; correctness comes from faithfully following the rules, not from a clever shortcut. Pick data structures that make each step cheap.

## Trigger phrases
- "follow these rules" / "apply the operation repeatedly"
- "what is the final state after N steps"
- board / game / queue evolves over time
- the prompt reads like a spec, not a puzzle

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
