// Coding Drills: Binary Search
// ----------------------------

// 1. Straight Binary Search

// Return the index of a target value in a sorted array. If there are multiple occurrences 
// of the value, any matching index is acceptable. Return -1 if the value is not found.

// Examples

// [1, 2, 2, 3, 3, 3, 4, 4], target 3 -> 3, 4, or 5

// Signature

// binarySearch(nums, target)

// 2. First Occurrence

// Return the index of the first occurrence of a target value in a sorted array. Return -1 
// if the value is not found.

// Examples

// [1, 2, 2, 3, 3, 3, 4, 4], target 4 -> 6

// Signature

// firstOccurrence(nums, target)

// 3. Last Occurrence

// Return the index of the last occurrence of a target value in a sorted array. Return -1 
// if the value is not found.

// Examples

// [1, 2, 2, 3, 3, 3, 4, 4], target 4 -> 7

// Signature

// lastOccurrence(nums, target)

// 4. Closest Value

// Return the value in the sorted array that is closest to the target. If two elements 
// are equally close to the target, either value may be returned.

// Examples

// [1, 4, 7, 8, 9], target 5 -> 4

// Signature

// closestValue(nums, target)

// 5. Insertion Position

// Return the index where the target should be inserted in the sorted array to maintain 
// sorted order. If the target already exists, return the index where it could be inserted.

// Examples

// [1, 3, 5, 6], target 5 -> 2
// [1, 3, 5, 6], target 2 -> 1
// [1, 3, 5, 6], target 7 -> 4

// Signature

// searchInsert(nums, target)

// 6. Lower Bound

// Return the index of the first element in the sorted array that is greater than or 
// equal to the target. Return len(nums) if no such element exists.

// Examples

// [1, 2, 4, 4, 6], target 4 -> 2
// [1, 2, 4, 4, 6], target 5 -> 4
// [1, 2, 4, 4, 6], target 7 -> 5

// Signature

// lowerBound(nums, target)


function lastOccurrence(nums, target) {
  let l = 0;
  let r = nums.length - 1;


  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target || nums[m] === nums[m + 1]) { // for last occurence
      l = m + 1;
    } else if ((nums[m] > target) /* || nums[m] === nums[m - 1] */) { // for first occurence
      r = m - 1;
    } else {
      return m;
    }
  }

  return -1
}

console.log(lastOccurrence([1, 2, 2, 3, 3, 3, 4, 4], 4)) // 7

function firstOccurrence(nums, target) {
  let l = 0;
  let r = nums.length - 1;


  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if ((nums[m] > target) || nums[m] === nums[m - 1]) { // for first occurence
      r = m - 1;
    } else {
      return m;
    }
  }

  return -1
}

console.log(firstOccurrence([1, 2, 2, 3, 3, 3, 4, 4], 4)) // 6

function closestValue(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }

  const lt = Math.abs(nums[l] - target);
  const rt = Math.abs(nums[r] - target);

  if (lt <= rt) {
    return nums[l];
  }

  return nums[r];
}


console.log(closestValue([1, 4, 7, 8, 9], 5)) // 4
console.log(closestValue([1, 4, 7, 8, 9], 2)) // 1
console.log(closestValue([1, 4, 7, 9, 12], 11)) // 12

function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }

  const lt = Math.abs(nums[l] - target);
  const rt = Math.abs(nums[r] - target);

  return l;
}

console.log(searchInsert([1, 3, 5, 6], 5)) // -> 2
console.log(searchInsert([1, 3, 5, 6], 2)) // -> 1
console.log(searchInsert([1, 3, 5, 6], 7)) // -> 4