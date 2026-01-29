// Problem: Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let nonZeroIndex = 0; // Index to keep track of non-zero elements
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the element at nonZeroIndex
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
}

// Test cases to verify your solution
let test1 = [0,1,0,3,12];
console.log("Before:", test1);
moveZeroes(test1);
console.log("After: ", test1); 
console.log("Expected: [1, 3, 12, 0, 0]\n");

let test2 = [0];
console.log("Before:", test2);
moveZeroes(test2);
console.log("After: ", test2);
console.log("Expected: [0]\n");

let test3 = [4,2,4,0,0,3,0,5,1,0];
console.log("Before:", test3);
moveZeroes(test3);
console.log("After: ", test3);
console.log("Expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]\n");
