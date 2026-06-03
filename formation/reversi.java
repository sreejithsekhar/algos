/*
Algo Workout: Reversi Move Validator

Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has 
two sides, black and white, and after being placed, further moves cause other discs to flip colors. 
Specifically, a line of discs of one color gets flipped when surrounded on both ends by discs of 
the opposite color.

In this problem, you're given a 2-dimensional array representing the board. Each position will 
contain a value of “B” for black, “W” for white, or “*” to represent an empty spot. Additionally, 
we get a position that is currently empty.

Our task: If it's black's turn to play, our task is to determine if this is a legal move.

A move must meet all of the following criteria:
1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
2. At the far end of a straight line series of opposite color pieces, there must be another 
matching color piece. 

A simple, 1-dimensional example consider:

* W W W B * * * 

In this case, only the first position is a valid move for black to play because it would surround 
three white tiles with a black piece at the other end. The remaining positions are invalid moves 
because they would not surround any white tiles.

Similarly, the sixth position would be a valid move for white because it would surround a single black piece.

This is the starting state of the game with black's possible opening moves labeled with an L:

  0 1 2 3 4 5 6 7
0 * * * * * * * *
1 * * * * * * * *
2 * * * * L * * *
3 * * * B W L * *
4 * * L W B * * *
5 * * * L * * * *
6 * * * * * * * *
7 * * * * * * * *

The board will always be no more than an 8x8 matrix of these three symbols.

* * * * W W W B W L * * * * 
 
EXAMPLE(S)
isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
Output:  false
 
FUNCTION SIGNATURE
function isLegalMove(board, r, c)

EXPLORE

1. 2 blacks can not be adjacent
2. A black can only be placed adjacent to white
3. A valid move contains "black" in either the row / column / diagnol
4. 

BRAINSTORM / PLAN

Follow these rules in all 8 directions:

1. Is an adjacent piece white? set flag
2. Follow that direction as we continue encountering white pieces
3. Once we encounter a black piece, it is a valid move
4. If we encounter an empty space (or board boundary), it is not a valid move
*/

import java.util.*;

public class Solution {
    private static final char BLACK = 'B';
    private static final char WHITE = 'W';
    private static final char EMPTY = '*';

    private static final int[][] DIRECTIONS = {
        {-1, -1}, {-1, 0}, {-1, 1},
        { 0, -1},          { 0, 1},
        { 1, -1}, { 1, 0}, { 1, 1}
    };
    
    public static boolean isLegalMove(char[][] board, int r, int c) {
        // TODO: Implement
        for (int[] direction: DIRECTIONS) {
            int nr = r + direction[0];
            int nc = c + direction[1];
            if (board[nr][nc] == WHITE){
                if(isLegalInDirection(board, nr, nc, direction[0], direction[1])){
                    return true;
                }
            }
                
        }
        
        return false;
    }

    private static boolean isInBounds(char[][] board, int r, int c) {
        // TODO: Implement
        if (r < 0 || r >= board.length) && (c < 0 || c > board[0].length) 
            return false;
        return true;
    }

    /*
       Valid: * L W W B *   
       Invliad: * L B B *
    */
    private static boolean isLegalInDirection(char[][] board, int r, int c, int dr, int dc) {
        // TODO: Implement
        if (!isInBounds(board, r, c)) {
            return false;
        }

        if (board[r][c] == BLACK) {
            return true
        }
        
        if (board[r][c] == WHITE) {
            return isLegalInDirection(board, r+dr, c+dc, dr, dc)
        }
        return false;
    }
    
    public static void main(String[] args) {
        // Write tests here
    }
}