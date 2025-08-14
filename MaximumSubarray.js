/*
 * @param {number[]} nums
 * @return {number}
 */
//max sum of sub array
var maxSubArray = function(nums) {
    let arrSums = [nums[0]];
    let intMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const intSuma = arrSums[i - 1] + nums[i];

        if (intSuma > nums[i]) {
            arrSums.push(intSuma);
            intMax = intMax > intSuma ? intMax : intSuma
        } else {
            arrSums.push(nums[i]);
            intMax = intMax > nums[i] ? intMax : nums[i];
        }
    }

    return intMax;
};//O(n)

console.log(maxSubArray([-2, 1,2,3,-5]))