// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let firstIndex=0;
    let lastIndex=nums.length-1
    while(firstIndex<=lastIndex){
        let middleIndex=Math.floor((firstIndex+lastIndex)/2)
        if(target==nums[middleIndex]){
            return middleIndex
        }
        if(target<nums[middleIndex]){
            lastIndex=middleIndex-1
        }else{
            firstIndex=middleIndex+1
        }
    }
    return -1
};
