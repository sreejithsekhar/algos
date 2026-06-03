// Top K Frequent Elements
// Medium
// Topics
// Company Tags
// Hints
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

function  topKFrequent(nums, k) {
    let m = 0;
    const cMap = new Map();

    for (const n of nums) {
        cMap.set(n, (cMap.get(n) ?? 0) + 1);
        m = Math.max(cMap.get(n), m);
    }

    const freqList = Array.from({length: m}, () => [])

    for (const [k, v] of cMap) {
        freqList[v - 1].push(k);
    }

    let kList = [];

    while (freqList.length && kList.length < k) {
        const items = freqList.pop();
        if (items.length) {
            kList = [...kList, ...items];
        }
    }

    // console.log(kList)
    return kList;
}

topKFrequent([1,2], 2)
topKFrequent([1,2,2,3,3,3], 2)