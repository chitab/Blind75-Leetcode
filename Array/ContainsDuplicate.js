// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }else{
            map.set(nums[i], 1)
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))