/*
'''
Conway's Game Of Life

Conway's Game of Life (see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) 
is a famous example of a cellular automaton devised as a thought experiment for modeling local populations and other networks.

The game takes an initial state which is a matrix of booleans. True represents a live cell. False is dead. 
On every turn, each cell computes it's next state based on its own state and that of its neighbors along horizontals, verticals, or diagonals. The rules are:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

For ease of viewing the states, we'll use strings instead of booleans. An "X" will represent a live cell, a space will represent a dead cell.
 

EXAMPLE(S)
blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]

conway(blinker, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]
conway(blinker, 2) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]



conway =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', '', ' ', 'X' ],
  [ ' ', ' ', 'X', ' ', 'X' ],
  [ ' ', ' ', '', ' ', 'X' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', ' ', ' ', ' ' ],
  [ 'X', ' ', 'X', ' ', ' ' ]
]

Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns! 


Explore:
no size defined

Brainstrom:
variable for count of live cells
make copy of board
iterate till we find live cell
for that cell, check previous and next col for live cells
check previous and next row for live cells
check previous col and row, and next col and row
record any adjacent dead cells into dead cell array for checking
based on count, dictate cell behavior
update board copy
when we have reached end of matrix

start from a corner
stack.push(cornerCell)

    while stack is not empty
    marked[c] = true
    c = stack.pop()
  : check (h, v, d) and isNotMarked
      stack.push(neigh) //  collect those cells to an stack
   
    board = nextstatus(c)

[[3,3][]]
FUNCTION SIGNATURE
function conway(board, rounds) {
def conway(board, rounds):
'''
*/


function conway(board, rounds) {
  const bLength = board.length;
  const bWidth = board[0].length;

  const copyBoard = structuredClone(board)
 
  let marked;


  const dir = [
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, -1],
    [1, 1]
  ]

  const checkBounds = (r, c) => {
    return (r >= 0 && c >= 0 && r < bLength && c < bWidth)
  }

  const findStatus = (r, c) => {
    let liveCells = 0;

    for (const [offsetRow, offsetCol] of dir) {
      const newRow = r + offsetRow;
      const newCol = c + offsetCol;
      // - Any live cell with fewer than two live neighbors dies, as if by underpopulation.
      // - Any live cell with two or three live neighbors lives on to the next generation.
      // - Any live cell with more than three live neighbors dies, as if by overpopulation.
      // - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

      if (checkBounds(newRow, newCol)) {
        if (board[newRow][newCol] === 'X') {
          liveCells++;
        } 
      }
    }

    if (board[r][c] === 'X') {
      if (liveCells > 3) {
        return ' ';
      }
      if (liveCells >= 2) {
        return 'X';
      }
      return ' ';
    } else {
      if (liveCells === 3) {
        return 'X';
      }
      return ' ';
    }

  }

  const bfs = (r, c) => {
    const stack = [[r, c]];

    while (stack.length) {
      const [row, col] = stack.pop();
      marked[row][col] = true;
      for (const [offsetRow, offsetCol] of dir) {
        const newRow = row + offsetRow;
        const newCol = col + offsetCol;

        if (checkBounds(newRow, newCol) && !marked[newRow][newCol]) {
          stack.push([newRow, newCol]);
        }

        copyBoard[row][col] = findStatus([row, col])

      }
    }
    console.log(copyBoard)
  }

  while (rounds !== 0) {
    marked = Array.from({ length: bLength }, () => Array.from({ length: bWidth }, () => false));
    bfs(0, 0);
    rounds--;
  }
}

conway([
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
], 1)