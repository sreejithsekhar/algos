// Problem Prompt
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
// and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example(s)
// [1, 2, 3] returns []
// [1, 2, -3] returns [1, ,2, -3]

/*
Explore:
i != j != k
can have multiple solutions
no duplication
no solution empty array
output can be any order

assumption valid input 
    input should always be numerical

Brainstorm
sort the array
iterate throug array
    dont process a val we already processed, skip duplication
    once we get a valid value
        calculate offset
        calculate sum =  l + r
            if sum l + r high than offset then r--
            if sum less than offset l++
            if sum === offset push the triplets

Plan:
    
    const sorted = array.sort()

    for (i to sorted) {
        if (sorted[i] !== sorted[i-1]) {
        offset = 0 - sorted[i];
         l = i + 1;
            r = length - 1
        while (l<r) {
           
            sum = s[r] + s[l];
            if (sum === o) {
            push triplets
            l++
            r--
            } else if (sum > o) {
             r--;
             } else {
                l++;
            }
}
        }
    }


*/

function threeSum(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] !== sorted[i - 1]) {
            const offset = 0 - sorted[i];
            let l = i + 1;
            let r = sorted.length - 1;

            while (l < r) {
                const sum = sorted[l] + sorted[r];

                if (sum > offset) {
                    r--;
                } else if (sum < offset) {
                    l++;
                } else {
                    triplets.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    r--;
                }
            }
        }
    }

    return triplets;

}

console.log(threeSum([1, 2, 3]))
console.log(threeSum([1, 2, -3]))
console.log(threeSum([6, -3, 0 ]))
console.log(threeSum([6, -3, -3 ]))

// Test case 1
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);

// Test case 2
console.log(threeSum([]), []);

// Test case 3
console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);

// Test case 4
console.log(threeSum([-2, -1, 0, 1, 2, 3]), '---------------->', [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]);

// Test case 5
console.log(threeSum([1, 2, 3]), '---------------->', []);

// Test case 6
console.log(threeSum([0]), '---------------->', [[]]);

// Test case 7
console.log(threeSum([0, 0]), '---------------->', [[]]);