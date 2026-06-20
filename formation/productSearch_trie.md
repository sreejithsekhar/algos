---
tags:
  - problem
pattern: "[[Trie]]"
difficulty: hard
status: solved
source: "productSearch_trie.js"
---

# Product Search Trie

> [!info] Solution code
> [[productSearch_trie.js]]

## Problem
Build a `ProductSearch` autocomplete engine: index queries with frequencies/categories, return up to 3 prefix matches per keystroke ranked by a context-boosted effective frequency, and record completed queries on `#`.

## Intuition
Store queries in a trie for prefix lookup, then collect every word under the typed-prefix node and sort by effective frequency (doubled when the query's category matches the current context), breaking ties alphabetically.

## Trigger
Per-keystroke autocomplete / "suggestions that start with the prefix" — incremental prefix search points at a trie.
