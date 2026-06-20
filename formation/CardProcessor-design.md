---
tags:
  - problem
pattern: "[[Design]]"
difficulty: medium
status: solved
source: "CardProcessor-design.js"
---

# Card Processor Design

> [!info] Solution code
> [[CardProcessor-design.js]]

## Problem
Build a `CreditCard` (charge/payment within a credit limit) and a `CardProcessor` that issues cards, charges, debits, and reports balances, returning status codes for limit-exceeded / card-not-found.

## Intuition
Model each card as an object holding name/balance/limit, and store cards in a name->card Map so the processor's operations are O(1) lookups that delegate to card methods.

## Trigger
"Implement these classes / methods" OOP modeling with state per entity and a registry/lookup by key.
