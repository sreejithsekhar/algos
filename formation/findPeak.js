// Given an integer array nums, return the index of any peak element. A peak element is one that is strictly greater than its immediate neighbours. For index i, the neighbours are i-1 and i+1; positions outside the array are treated as negative infinity so the first or last element can also be a peak. It is guaranteed that nums[i] != nums[i+1] for all valid i and that nums has at least one element.
// Return any valid peak index.
// Try to design an algorithm that runs faster than O(n).
// Example(s)
// Input: nums = [1,2,3,1] -> Output: 2
// Input: nums = [1,2,1,3,5,6,4] -> Output: 5 (any peak index such as 1 or 5 is acceptable)

/*

Explore:
How to handle end nodes:
    if one of them is large then it is valid
    same with just one node -- valid

all equal -- na

Brainstorm:
Linear is easy
logn binary not applicable

but since it is only looking for alt numbers, probabl;y we can create alt arrays and check
more loops but each loop is less than n

calculate alt1 array starting from index 0
calculate alt2 array starting from 1

go through alt1 and check if alt2[i - 1] < alt1[i] > alt2[i + 1] // if at least one then reurn i
go through alt2 and check if alt1[i - 1] < alt2[i] > alt1[i + 1] // if at least one then reurn i

special cases to check in bound -- if i - 1 < 0 or i + 1 >= alt*.length return sfaemin integer

*/

function findPeak(nums) {
    if (nums.length === 1) return 0;
    if (nums.length === 2) {
        return nums[0] > nums [1] ? 0 : 1;
    }

    const alt1 = [];
    const alt2 = [];

    for (let i = 0; i < nums.length; i+=2) {
        alt1.push(nums[i]);
    }

    for (let i = 1; i < nums.length; i+=2) {
        alt2.push(nums[i]);
    }


    for (let i = 1; i < alt1.length; i++) {
        const f = alt2[i - 1];
        const s = alt1[i];
        const t = i >= alt2.length ? Number.MIN_SAFE_INTEGER : alt2[i];
        
        if (f < s && s > t) return i;
    }

    for (let i = 0; i < alt2.length; i++) {
        const f = alt1[i];
        const s = alt2[i];
        const t = i + 1 >= alt1.length ? Number.MIN_SAFE_INTEGER : alt1[i+1];
        if (f < s && s > t) return i + 1;
    }
}

console.log(findPeak([1,2,1,3,5,6,4]), '1 or 5')
console.log(findPeak([1,2]), '1')
console.log(findPeak([1]), '0')
console.log(findPeak([2,1]), '0')

