// You're given a rectangular elevation map of an island represented as a 2D grid heights, where heights[r][c] is the elevation at row r and column c. The island is bordered by two oceans:
// The Pacific lies along the top edge (row 0) and the left edge (column 0).
// The Atlantic lies along the bottom edge (last row) and the right edge (last column).
// Rain falling on any cell flows to a directly adjacent cell (up, down, left, or right) only if that neighbor's elevation is less than or equal to the current cell's elevation. Water that runs off the top or left edge ends up in the Pacific; water that runs off the bottom or right edge ends up in the Atlantic.
// Return a list of all coordinates [r, c] from which water is able to drain into both oceans. The order of coordinates in your output does not matter.
// Example(s)
// Input: heights = [
//   [3, 1, 2],
//   [4, 5, 1],
//   [2, 6, 3]
// ]
// Output: [[0, 2], [1, 0], [1, 1], [2, 0], [2, 1]]
// Explanation: These cells can drain to both the Pacific edges (top/left) and Atlantic edges (bottom/right). For example, (1,1)=5 can flow up to the top edge and right to the right edge; (2,1)=6 can flow left toward the left edge and is already on the bottom edge.
// Input: heights = [[9]]
// Output: [[0, 0]]
// Explanation: A single cell touches every border, so it drains into both oceans trivially.
// Input: heights = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]
// Output: [[0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
// Explanation: The peak at (1,1)=9 can reach every border by descending in either direction; each border cell trivially reaches its own ocean and many can also reach the other by walking around the rim.

/*

Plan:
Find places reach from pacific
Find places reach from atlantic

Merge results

const ROW = heights.length;
const COL = heights[0].length;

find pacificNodes = [], atlanticNodes = [];
    for (let i = 0; i < COL) {
        pacificNodes.push([0, i])
    }

    for (let i = 0; i < ROW) {
        pacificNodes.push([i, 0])
    }

    for (let i = 0; i < COL; i++) {
        atlanticNodes.push([ROW - 1, i])
    }

    for (let i = 0; i < ROW; i++) {
        atlanticNodes.push([i, COL - 1])
    }

    bfs(pacificNodes)
    bfs(atlantic)

    merge()

*/


function canReachBoth(heights) {
    const ROW = heights.length;    
    const COL = heights[0].length;

    const pacificNodes = [];
    const atlanticNodes = [];

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    const inBound = (r, c) => r >= 0 && c >= 0 && r < ROW && c < COL;

    for (let i = 0; i < COL; i++) {
        pacificNodes.push([0, i])
    }

    for (let i = 0; i < ROW; i++) {
        pacificNodes.push([i, 0])
    }

    for (let i = 0; i < COL; i++) {
        atlanticNodes.push([ROW - 1, i])
    }

    for (let i = 0; i < ROW; i++) {
        atlanticNodes.push([i, COL - 1])
    }

    const bfs = (q) => {
        const visited = new Set();
        let counter = 0;
        while(q.length !== counter) {
            const [row, col] = q[counter];
            const key = `${row}-${col}`;
            if (!visited.has(key)) {
                visited.add(key);
                for (const [r, c] of directions) {
                    const nr = row + r;
                    const nc = col + c;

                    if (
                        inBound(nr, nc) &&
                        !visited.has(`${nr}-${nc}`) &&
                        heights[nr][nc] >= heights[row][col] 
                    ) {
                        q.push([nr, nc]);
                    }
                }
            }
            counter++;
        }

        return visited;
    }

    const pVisited = bfs(pacificNodes);

    const aVisited = bfs(atlanticNodes);

    const reachable = [];
    for (const key of pVisited) {
        if (aVisited.has(key)) {
            const [r,c] = key.split('-');
            reachable.push([Number(r), Number(c)]);
        }
    }

    return reachable;
}


let heights = [
  [3, 1, 2],
  [4, 5, 1],
  [2, 6, 3]
];

console.log(canReachBoth(heights));

heights = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

console.log(canReachBoth(heights));

heights = [
  [9],
];

console.log(canReachBoth(heights));

