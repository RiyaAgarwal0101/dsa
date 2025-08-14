/*
 * @param {number[]} nums
 * @return {boolean}
 */

// The hasOwnProperty() method in JavaScript checks if an object has a specific property as its own (not inherited). 
// It returns true if the property exists directly on the object, otherwise false, making it useful for distinguishing own properties from inherited ones.
// Syntax
// object.hasOwnProperty( prop );
// Parameters:
// prop: It holds the name in the form of a String or a Symbol of the property to test.
// Return Value:
// It returns a Boolean value indicating whether the object has the given property as its own property.
var containsDuplicate = function(nums) {
    const objNums = {};     // containsDuplicate([1, 3, 4, 3, 2, 4, 2] then objNums= {1: true, 3: true, 4: true}

    for (let intNum of nums) {
        if (objNums.hasOwnProperty(intNum)) {//O(1)
            return true;
        }

        objNums[intNum] = true;
    }

    return false;
};//O(n)


console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));