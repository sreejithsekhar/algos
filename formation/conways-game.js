/*
'''
Conway's Game Of Life

Conway's Game of Life (see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a famous example of a cellular automaton devised as a thought experiment for modeling local populations and other networks.

The game takes an initial state which is a matrix of booleans. True represents a live cell. False is dead. On every turn, each cell computes it's next state based on its own state and that of its neighbors along horizontals, verticals, or diagonals. The rules are:

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

Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns! 
 

FUNCTION SIGNATURE
function conway(board, rounds) {
def conway(board, rounds):
'''

Explore:
assumption: board is valid
rounds >= 0

Brainstorm:
Start with copy mech, alt: new symbol

iterate through rounds:
  Copy the board
  Iterate the board:
    check live cells:
      find neighbors: (count)
        check:
          - Any live cell with fewer than two live neighbors dies, as if by underpopulation.
          - Any live cell with two or three live neighbors lives on to the next generation.
          - Any live cell with more than three live neighbors dies, as if by overpopulation.
        
          < 2 || > 3-- dead (update the copy)
          else continue state (live)
    check dead cell:
      find neighbors: (count)
        check:
            - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
            === 3 change to live (update the copy)

board = deepcopy(copy)


time = O(row * col * rounds)
space = O(row * col)


*/

function conway(board, rounds) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1],
  ];

  const inBound = (r, c) => r >= 0 && c >= 0 && r < board.length && c < board[0].length;

  // Iterating through rounds
  for (let i = 0; i < rounds; i++) {
    const boardCopy = structuredClone(board);

    // Visit every cell
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        //Count neighbors
        let neighborCount = 0;
        for (const [r, c] of directions) {
          const nr = row + r;
          const nc = col + c;
          if (inBound(nr, nc) && boardCopy[nr][nc] === 'X') {
            neighborCount++;
          }
        }
        // Update board
        if (boardCopy[row][col] === 'X') {
          if (neighborCount < 2 || neighborCount > 3) {
            board[row][col] = ' ';
          }
        } else {a
          if (neighborCount === 3) {
            board[row][col] = 'X';
          }
        }
      }
    }
  }

  return board;
}

function printBoard(board) {
  console.log(`Printing board:`)
  for (let row of board) {
    console.log(`\t${JSON.stringify(row)}`);
  }
}

const blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
];
printBoard(blinker);
printBoard(conway(blinker, 3));
