---
tags:
  - problem
pattern: "[[Hash Map]]"
difficulty: easy
status: todo
source: "queryStrings.js"
---

# Query Strings

> [!info] Solution code
> [[queryStrings.js]]

## Problem
Parse a URL query string into an object (valueless keys become `true`, repeated keys collapse into an array of values), and build the inverse function that serializes an object back into a query string.

## Intuition
Split on `&` then `=` and accumulate into a map, promoting a key to an array the second time it appears; decode/encode each piece with the built-in URI component helpers.

## Trigger
"Parse a query string" / key-value pairs joined by `&` with repeated keys — string split into a hash map.
