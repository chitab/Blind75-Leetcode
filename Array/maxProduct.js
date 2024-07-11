// 152. Maximum Product Subarray

// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let min = nums[0];
    let max = nums[0];
    let result = max;
   if(nums.length === 0)
   return 0;

   for(let i = 1 ; i < nums.length ; i++){
    let curr = nums[i];
    let temp = Math.max(curr, Math.max(max*curr,min*curr));
    min = Math.min(curr,Math.min(min * curr, max*curr));
    max = temp;
    result = Math.max(result, max)
   }
   return result;
};
console.log(maxProduct([2,3,-2,4]))