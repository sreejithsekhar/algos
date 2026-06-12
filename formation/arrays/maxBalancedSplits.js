// Problem Prompt
// A company allocates budgets to a sequence of n projects and wants to divide them between two departments using a split point k, where 1 <= k < n. Department A receives the first k projects, and Department B receives the remaining projects.
// A split is balanced when both departments receive the same total budget.
// Before choosing the split point, the CFO may optionally pick one project and change its budget to targetBudget. Return the maximum number of balanced split points that can exist in the resulting array.
// Important clarification: you are maximizing the number of valid split positions in one final array after making at most one change. You are not counting how many different projects could be changed.
// The budgets array may contain positive or negative integers, and targetBudget may be any integer.
// Example(s)
// Example 1:
// Input: budgets = [2, -1, 2], targetBudget = 3
// Output: 1
// Explanation: If we change the first 2 to 3, we get [3, -1, 2].
// The only balanced split is after the second project: [3, -1] | [2], with both sides summing to 2.

// If we instead change the last 2 to 3, we get [2, -1, 3].
// The only balanced split is after the first project: [2] | [-1, 3], with both sides summing to 2.

// So the answer is 1, not 2, because we count balanced split points in a single final array after choosing at most one change.
// Example 2:
// Input: budgets = [0, 0, 0], targetBudget = 0
// Output: 2
// Explanation: Without any change, there are two balanced splits:
// - [0] | [0, 0]
// - [0, 0] | [0]
// Example 3:
// Input: budgets = [1, 2], targetBudget = 4
// Output: 0
// Explanation: The only possible split is [1] | [2].
// No optional change produces equal sums on both sides.

function maxBalancedSplits(budgets, targetBudget) {
    const n = budgets.length;
    if (n < 2) return 0; // no split position exists

    // prefix[k] = sum of budgets[0..k]; valid split positions are k in [0, n-2]
    const prefix = [];
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += budgets[i];
        prefix.push(total);
    }

    // Compare 2*prefix[k] against total to avoid any /2 / parity issues.
    // Baseline: no change at all.
    let best = 0;
    for (let k = 0; k <= n - 2; k++) {
        if (2 * prefix[k] === total) best++;
    }

    console.log({prefix, best, total})

    // Two frequency maps of 2*prefix[k] over valid split positions:
    //   left  = positions k < j   (offset hasn't reached them)
    //   right = positions k >= j  (offset is baked into their prefix)
    const left = new Map();
    const right = new Map();
    const bump = (m, key, d) => m.set(key, (m.get(key) || 0) + d);
    for (let k = 0; k <= n - 2; k++) bump(right, 2 * prefix[k], 1);

    console.log({right, left})

    for (let j = 0; j < n; j++) {
        console.log('---------', targetBudget, budgets[j])
        const offset = targetBudget - budgets[j];
        // k < j  balanced when 2*prefix[k] === total + offset
        // k >= j balanced when 2*prefix[k] === total - offset
        const before = left.get(total + offset) || 0;
        const after = right.get(total - offset) || 0;
        best = Math.max(best, before + after);

        console.log({offset, before, after, best})

        // Move position j from the right group into the left group.
        if (j <= n - 2) {
            bump(right, 2 * prefix[j], -1);
            bump(left, 2 * prefix[j], 1);
        }
        console.log({right, left})
    }

    return best;
}

//  console.assert(maxBalancedSplits([5, 5, 10, 10], 15) === 1, 'Test 7 failed');
 console.assert(maxBalancedSplits([2, 0, 5], 2) === 2, 'Test 7 failed');

// function testMaxBalancedSplits() {
//     console.assert(maxBalancedSplits([2, -1, 2], 3) === 1, 'Test 1 failed');
//     console.assert(maxBalancedSplits([0, 0, 0], 0) === 2, 'Test 2 failed');
//     console.assert(maxBalancedSplits([1, 2], 4) === 0, 'Test 3 failed');
//     console.assert(maxBalancedSplits([5], 10) === 0, 'Test 4 failed');
//     console.assert(maxBalancedSplits([3, 3], 3) === 1, 'Test 5 failed');
//     console.assert(maxBalancedSplits([0, 0, 0], 1) === 2, 'Test 6 failed');
//     console.assert(maxBalancedSplits([5, 5, 10, 10], 15) === 1, 'Test 7 failed');
//     console.assert(maxBalancedSplits([1, -2, 3, -1, 1], 0) === 2, 'Test 8 failed');
//     console.assert(maxBalancedSplits([2, 4, -2, 2, 4], 4) === 1, 'Test 9 failed');
//     console.assert(maxBalancedSplits([1, 1, 1], 2) === 1, 'Test 10 failed');
//     console.log('All tests passed!');
// }

// testMaxBalancedSplits();
