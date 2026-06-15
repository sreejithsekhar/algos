// You are working with an undirected graph that has n nodes labeled 0 through n - 1. The graph is described by two parallel arrays: edges, where edges[i] = [a, b] means there is an undirected edge between nodes a and b, and succProb, where succProb[i] is a floating-point number in the range [0, 1] representing the probability that traversing edge i succeeds.
// Given a starting node start and a target node end, return the highest probability of successfully traveling from start to end along some path in the graph. The probability of a path is the product of the success probabilities of its edges. If no path exists between start and end, return 0.
// Answers within 1e-5 of the true value are considered correct.
// Example(s)
// Input:  n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5, 0.5, 0.2], start = 0, end = 2
// Output: 0.25
// Explanation: The route 0 → 1 → 2 has probability 0.5 * 0.5 = 0.25, which beats the direct edge 0 → 2 (probability 0.2).
// Input:  n = 3, edges = [[0,1]], succProb = [0.9], start = 0, end = 2
// Output: 0.0
// Explanation: Node 2 is unreachable from node 0, so no path exists.
// Input:  n = 4, edges = [[0,1],[1,2],[2,3],[0,3]], succProb = [0.9, 0.9, 0.9, 0.5], start = 0, end = 3
// Output: 0.729
// Explanation: The chain 0 → 1 → 2 → 3 yields 0.9 * 0.9 * 0.9 = 0.729, which is better than the direct edge of probability 0.5.
// Signature/Prototype
// Python
// from typing import List

// def max_path_probability(
//     n: int,
//     edges: List[List[int]],
//     succ_prob: List[float],
//     start: int,
//     end: int,
// ) -> float:
//     ...
// JavaScript
// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number[]} succProb
//  * @param {number} start
//  * @param {number} end
//  * @returns {number}
//  */

/*

Explore:
No loops


Brainstorm:
create adj list:
one iteration, create a map
0 -> 1, 2
1 -> 2

iterate list and create max node map
0 -> 0
1 -> .5
2 -> .25

Plan:

adj list:

adjList = map
for (let i of edges) {
    const a = edges[i][0]];
    const b = edges[i][1]];
    adjList[a].push([b, succProb[i]]);
    adjList[b].push(a, succProb[i]);
}

const pathList = adjList.get(start);

while pathList {

}



*/


function maxPathProbability(n, edges, succProb, start, end) {}