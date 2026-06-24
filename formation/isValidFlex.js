
// You're given a string s made up of three kinds of characters: opening parentheses '(', closing parentheses ')', and asterisks '*'. Each asterisk is a wildcard that can be interpreted independently as a single '(', a single ')', or simply skipped (treated as the empty string).
// Decide whether there is at least one way to interpret every asterisk such that the resulting string is a properly balanced parenthesis sequence — that is, every opening paren has a matching closing paren that comes after it, and at no point while scanning left to right do the closes outnumber the opens.
// Return a boolean: true/True if some interpretation balances, false/False otherwise.
// Example(s)
// is_valid_flex("(*))")  ➞ True
// // Treat the '*' as '(' to obtain "(())", which is balanced.

// is_valid_flex("((*)")  ➞ True
// // Treat the '*' as ')' to obtain "(())", which is balanced.

// is_valid_flex("((((***")  ➞ False
// // Four '(' but only three wildcards available to close them. No matter
// // how we interpret the stars, at least one '(' remains unmatched.

// is_valid_flex("*")  ➞ True
// // Treat '*' as the empty string.
// Signature/Prototype
// Python
// def is_valid_flex(s: str) -> bool:
//     ...
// JavaScript
// /**
//  * @param {string} s
//  * @returns {boolean}



//  */

/*

Brainstorm:
normal one is a stack solution

two stack solution

*/


function isValidFlex(s) {
    const openStack = [];
    const starStack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '(') {
            openStack.push(i);
        } else if (c === '*') {
            starStack.push(i);
        } else {
            if (!openStack.length && !starStack.length) {
                return false;
            } else if (openStack.length) {
                openStack.pop()
            } else {
                starStack.pop();
            }
        }
    }

    while (openStack.length) {
        const openPostion = openStack.pop();
        if (!starStack.length) {
            return false;
        }

        const starPosition = starStack.pop();

        if (starPosition < openPostion) {
            return false;
        }
    }

    return true;
}

console.assert(isValidFlex("(*))"))  // true

console.assert(isValidFlex("((*)")) // True

console.assert(isValidFlex("((((***") === false)  // False

console.assert(isValidFlex("*"))  // True

console.assert(isValidFlex("(*)"))  // True

console.assert(isValidFlex("((((****"))  // True

console.assert(isValidFlex("**)"))  // True

console.assert(isValidFlex("**)(") === false)  // false
