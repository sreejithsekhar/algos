// Given two integer arrays tops and bottoms of the same length n (1 <= n <= 20000) representing n dominoes, 
// where tops[i] and bottoms[i] are the values showing on the top and bottom of the i-th domino respectively and 1 <= value <= 6.
// In one rotation you may swap the top and bottom values of a single domino.
// Return the minimum number of rotations needed so that every value in the top row is identical 
// OR every value in the bottom row is identical. If it is impossible, return -1.
// Return only the minimum rotation count.
// Example(s)
// Example 1:
// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Example 2:
// Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
// Output: -1
// Signature/Prototype

/*

explore:
value 1 to 6
t = [2, 1, 2, 4, 2, 2]
b = [5, 2, 6, 2, 3, 2] o: 2

1, 2, 2, 2, 2, 4
2              2   
[3, 5, 1, 2, 3]
[3, 6, 3, 3, 4] o: -1

1, 2, 3, 3, 5

brainstorm:
probably solve it after first couple of iteration

iterate both array
    if 2, 5 then next one should have either 2 or 5
    after every iteratyion we collect the common ones
     2 - 1
     5 - 1

*/

function minDominoRotations(tops, bottoms) {

}