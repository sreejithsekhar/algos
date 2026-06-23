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
Djikstra algorith

Plan:
adjList
0 -> 1, 2 
1 -> 2
2 -> 1

push to the heap the starting nodwe with prob 1

bfs() {

while(heap.empty) {
    const [prob, node] = heap.pop();
    if (node === end) {
        return prob;
    }
    for (cp,cn] in adjList[node]) {
    if (not visited)  {
        heap.push([prob * cp, cn]);
    }
      
    }

    node.visited = 1;
}
    return  0;
}



*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(pair) {           // pair = [prob, node]
        this.heap.push(pair);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }

    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.heap[parent][0] >= this.heap[i][0]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    _bubbleDown(i) {
        const n = this.heap.length;
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && this.heap[left][0] > this.heap[largest][0]) largest = left;
            if (right < n && this.heap[right][0] > this.heap[largest][0]) largest = right;
            if (largest === i) break;
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
            i = largest;
        }
    }
}


function maxPathProbability(n, edges, succProb, start, end) {
    const adjMap = new Map();

    for (let i = 0; i < edges.length; i++) {
        const a = edges[i][0];
        const b = edges[i][1];

        if (adjMap.has(a)) {
            adjMap.get(a).push([succProb[i], b]);
        } else {
            adjMap.set(a, [[succProb[i], b]]);
        }

        if (adjMap.has(b)) {
            adjMap.get(b).push([succProb[i], a]);
        } else {
            adjMap.set(b, [[succProb[i], a]]);
        }
    }

    const h = new MaxHeap();
    h.push([1.0, start]);

    const visited = new Set();

    while (h.size()) {
        const [prob, node] = h.pop();
        if (visited.has(node)) continue;

        if (node === end) {
            return prob;
        }

        visited.add(node);

        if (adjMap.has(node)) {
            for (const [childProb, childNode] of adjMap.get(node)) {
                if (!visited.has(childNode)) {
                    h.push([prob * childProb, childNode]);
                }
            }
        }
    }

    return 0;
}

let n = 3, edges = [[0, 1], [1, 2], [0, 2]], succProb = [0.5, 0.5, 0.2], start = 0, end = 2;
console.log(maxPathProbability(n, edges, succProb, start, end));

n = 4, edges = [[0, 1], [1, 2], [2, 3], [0, 3]], succProb = [0.9, 0.9, 0.9, 0.5], start = 0, end = 3;
console.log(maxPathProbability(n, edges, succProb, start, end));

n = 3, edges = [[0, 1]], succProb = [0.9], start = 0, end = 2;
console.log(maxPathProbability(n, edges, succProb, start, end));