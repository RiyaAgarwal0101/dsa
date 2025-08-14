/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// find if sum of 2 element in array== target and return index of element 
var twoSum = function(nums, target) {
    const finalArray = [];
    const objIndices = {};

    for (let i = 0; i < nums.length; i++) {
        if (objIndices.hasOwnProperty(target - nums[i])) {
            finalArray.push(objIndices[target - nums[i]]);
            finalArray.push(i);
        } else {
            objIndices[nums[i]] = i;
        }
    }

    return finalArray;
};//O(n)

console.log(twoSum([3, 2, 4], 6));