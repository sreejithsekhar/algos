/*
'''
Imagine a linear history of commits numbered from 1 to n.
 Somewhere along this timeline, a bug was introduced such that every commit after and including 
 the first bad one fails the build, while every commit before it is good. You are given an API isBadVersion(int version) that returns whether a given commit is bad. Your task is to implement a function that finds the commit number of the very first bad version using as few calls to isBadVersion as possible.
 

EXAMPLE(S)
Example timeline (n = 8):
8 – bad
7 – bad
6 – bad  ← first bad commit (answer)
5 – good
4 – good
3 – good
2 – good
1 – good

// middle -> 4... min -> 5
// middle (5 + 8) / 2 -> 6...max -> 6
// middle -> 5... min -> 6

FUNCTION SIGNATURE
function firstBadVersion(n)

def firstBadVersion(n: int) -> int
'''
*/

// First bad version function
function firstBadVersion(n) {
  let min = 1;
  let max = n;

  while (min < max) {
    let middle = Math.floor((max + min) / 2);
    // If middle is bad, then set 
    if (isBadVersion(middle)) {
      max = middle;
    } else {
      min = middle + 1;
    }
  }

  return isBadVersion(min) ? min : -1;
}



// Testing

// Declare firstBadVersion
let FIRST_BAD = 6;
function isBadVersion(n) {
  return n >= FIRST_BAD;
}

FIRST_BAD = 6;
console.log(`First bad: ${firstBadVersion(6)}`);
console.log(`First bad: ${firstBadVersion(7)}`);
console.log(`First bad: ${firstBadVersion(8)}`);


FIRST_BAD = 3;
console.log(`First bad: ${firstBadVersion(6)}`);
console.log(`First bad: ${firstBadVersion(7)}`);
console.log(`First bad: ${firstBadVersion(100)}`);


FIRST_BAD = 100;
console.log(`First bad: ${firstBadVersion(6)}`);
console.log(`First bad: ${firstBadVersion(80)}`);
console.log(`First bad: ${firstBadVersion(120)}`);



