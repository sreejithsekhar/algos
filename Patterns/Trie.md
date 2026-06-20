---
tags:
  - pattern
---

# Trie

## Invariant
Share common prefixes on a character tree so a prefix query costs O(length of query), independent of how many words are stored.

## Trigger phrases
- "words that start with…" / autocomplete / search suggestions
- repeated prefix lookups over a fixed dictionary
- "all strings matching a prefix"
- need to enumerate completions in sorted order

## Problems
```dataview
list
from #problem
where pattern = this.file.link
sort difficulty asc
```
