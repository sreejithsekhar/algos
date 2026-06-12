/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that they must replicate to the remaining nodes. 
Each second, Nodes broadcast updates to their immediate neighbors, north, west, south, and east.

Given an initial state of the nodes with the updated information, 
determine how many seconds it will take to propagate the update to the entire network.

EXAMPLE(S)
If the state of the network at the 0th second is:
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
][
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
Then it takes 2 seconds to propagate the information. After the 1st second:
[
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
]
After the 2nd second:
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

FUNCTION SIGNATURE
function broadcastTime(network) {
def broadcastTime(network: list[list[int]]) -> int:
'''

explore:
value: 0 or 1
can have more than one node
grid can be larger

grid can be already updated
grid might not have a starting node

grid remains rectangular

brainstorm:

 [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]

  pass one - we find all the ones
  pass two - we go through north, west, south, and east. 
    wherever we add one we collect it for next pass
  exit condition: grid should be full 1s

  return pass count

plan:
  initialize count = 0
  initialize set = []
  initialize direction;
  

  loop through grid
    save row and col of 1's found in set(?)

  while set is not empty loop through entries of set 
    initialize childSet = []
    for each of the 4 directions
        check if it is already 1
          not:
            set the value at that direction to 1
            save each of those locations in our childSet
    for each entry remove that one from the set
    if (set is empty && childSet.length) {
      set = childSet
      count++
    }
  return count


*/

function propagate(grid) {
  let set = []
  let count = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  const inBound = (x, y) => {
    // console.log({ x, y })
    // console.log('grid.length', grid.length)
    // console.log('grid[0].length', grid[0].length)
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
  }
  
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++){
      if (grid[i][j] === 1) {
        set.push([i, j])
      }
    }
  }
  // [[1, 2][2, 4], [3, 6]].pop()

  // m * n

  let childSet = []

  while (set.length) {
    let [row, col] = set.pop()
    for (let d = 0; d < directions.length; d++){
      let [r, c] = directions[d]
      if (inBound(row + r, col + c) && grid[row + r][col + c] !== 1) {
        grid[row + r][col + c] = 1
        childSet.push([row + r, col + c])
      }
    }

    if (!set.length && childSet.length) {
      set = childSet
      childSet = [];
      count++
    }

  }

  return count
  
}

const test1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

console.log(propagate(test1))

const test2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

console.log(propagate(test2))

const test3 = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
]

console.log(propagate(test3))

const test4 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
]

console.log(propagate(test4))

const test5 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

console.log(propagate(test5))


/*
Another solution
*/
function broadcastTime(network) {
  // find the nodes with the updated information
  let updatedNodeCell = []
  for (let r = 0; r < network.length; r++)
    for (let c = 0; c < network[0].length; c++)
      if (network[r][c] == 1)
        updatedNodeCell.push([r, c])

  let layer = updatedNodeCell
  let elapsedTime = 0

  // perform BFS to update all the nodes in the network and count the levels
  while (layer.length > 0) {
    let nextLayer = []
    let updateHappened = false

    for (let k = 0; k < layer.length; k++) {
      let [r, c] = layer[k]
      let neighborCells = getNeighborCells(r, c, network)

      for (const [nr, nc] of neighborCells) {
        if (network[nr][nc] == 0) {
          network[nr][nc] = 1
          updateHappened = true
          nextLayer.push([nr, nc])
        }
      }
    }

    layer = nextLayer
    if (updateHappened)
      elapsedTime += 1
  }

  return elapsedTime
}

function getNeighborCells(i, j, network) {
  let neighborCells = []
  let rowLen = network.length
  let colLen = network[0].length
  // check for valid matrix indexes
  if (i > 0)
    neighborCells.push([i - 1, j])
  if (i < rowLen - 1)
    neighborCells.push([i + 1, j])
  if (j > 0)
    neighborCells.push([i, j - 1])
  if (j < colLen - 1)
    neighborCells.push([i, j + 1])

  return neighborCells
}

// eo solution

// alternative solution:

// use a third value for level count
// and when reaching a child node set the val incremented from parent
// EXAMPLE(S)
// If the state of the network at the 0th second is:
// [
// q - [{1,1,1}]
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ]
// Then it takes 2 seconds to propagate the information. After the 1st second:
// [ [{0,1,2}, {1,0,2}, {1,2,2}, {2,1,2}]
//   [0, 1, 0],
//   [1, 1, 1],
//   [0, 1, 0]
// ]
// After the 2nd second:
// [ [{1,0,2}, {1,2,2}, {2,1,2}, {0,1,3},{0,2,3} ]
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ]