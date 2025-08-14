// splice vs slice

const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');
console.log(strings)
//pop
strings.pop();
console.log(strings)
strings.pop();
console.log(strings)

//unshift
strings.unshift('x')
console.log(strings)

//splice
strings.splice(2, 0, 'alien');//index,delete ,place

console.log(strings)

console.log(numbers)
numbers.push(6)
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
numbers.shift()
console.log(numbers)

// splice vs slice
numbers.splice(3,0,9)
console.log(numbers)
numbers.splice(3,2,8)
console.log(numbers)
console.log(numbers.slice(-2))
console.log(numbers.slice(0,3))
 
// Operation	             Time Complexity
// push	                         O(1)
// pop	                         O(1)
// unshift	                     O(n)
// splice (insert)	             O(n)
// splice (remove + insert)	     O(n)
// slice (-2)	                 O(k)
// slice (0, 3)	                 O(k)


