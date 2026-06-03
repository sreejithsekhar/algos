// You have a long flowerbed in which some plots are planted and others are not. However, new flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty, and 1 means not empty, and an integer newFlowers, return true if all newFlowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
// Example(s)
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Input: flowerbed = [0,0,1], n = 1
// Output: true

// Single Pass of Array
// Array of size = 5

// (for loop, i = 0)
//     check to your left
//     check to your right
//     check yourself

//     if array[i] != 0
//         continue

//     prev_empty = 
//         - if i == 0 (you're at start of the loop)
//         OR array[i - 1] == 0

//         prev_empty CHECK

    
//     next_empty =
//         - if array[i + 1] == 0
//         OR if i == length - 1


// check instances where prev_empty && next_empty
// if prev_empty && next_empty:
//     increment Your Counter



// return n < counter;

    