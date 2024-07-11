// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109


// Solutions

var twoSum = function(nums, target) {
    // Approach 1 - Brute force TC- O(n^2)
    for(let i = 0; i < nums.length ; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }

    // Approach 2
    // Using HashMap -->O(n)
    // keep on storing the elements that we reach , also keep on check 
    // if target-element is already present in the hashmap or not , if it is , then we found a pair
    let map = new Map();
    for(let i = 0; i < nums.length ; i++){
        let val = target - nums[i];
        if(!map.has(val))
        map.set(nums[i], i)
        else
        return [map.get(val), i];
    }
};

console.log(twoSum([2,7,11,15], 9))