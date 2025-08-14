// #### Explanation of the String Reversal Functions

// The provided code includes three different functions to reverse a string in JavaScript. Let's break down each function to understand how they work.

// ### 1. `reverse(str)`

// ```javascript
// function reverse(str) {
//     if (!str || typeof str != 'string' || str.length < 2) return str;
    
//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     return backwards.join('');
// }
// ```

// - **Input Validation**: The function first checks if the input `str` is valid. It returns the original string if:
//   - `str` is falsy (e.g., `null`, `undefined`, or an empty string).
//   - `str` is not of type `string`.
//   - The length of `str` is less than 2 (since a single character or empty string doesn't need reversing).
  
// - **Reversing Logic**: 
//   - It initializes an empty array `backwards` to hold the characters in reverse order.
//   - It calculates the last index of the string with `totalItems`.
//   - A `for` loop iterates from the last character to the first, pushing each character into the `backwards` array.
  
// - **Return Value**: Finally, it joins the `backwards` array into a string and returns it.

// ### 2. `reverse2(str)`

// ```javascript
// function reverse2(str) {
//     return str.split('').reverse().join('');
// }
// ```

// - **Simplified Approach**: This function uses built-in JavaScript methods to reverse the string:
//   - `str.split('')` converts the string into an array of characters.
//   - `.reverse()` reverses the order of the elements in the array.
//   - `.join('')` combines the reversed array back into a string.
  
// - **Efficiency**: This method is concise and leverages JavaScript's built-in capabilities for string manipulation.

// ### 3. `reverse3`

// ```javascript
// const reverse3 = str => [...str].reverse().join('');
// ```

// - **Arrow Function**: This is an arrow function that performs the same operation as `reverse2`, but uses the spread operator (`...`) to convert the string into an array.
  
// - **Functionality**: 
//   - `[...]` spreads the characters of the string into an array.
//   - The rest of the operations (`reverse()` and `join('')`) are the same as in `reverse2`.

// ### Usage Examples

// All three functions can be called with the same input:

// ```javascript
// reverse('Timbits Hi');  // Returns 'iH stibiT'
// reverse2('Timbits Hi'); // Returns 'iH stibiT'
// reverse3('Timbits Hi'); // Returns 'iH stibiT'
// ```

// ### Summary

// - **Functionality**: All three functions effectively reverse a string, but they differ in implementation style.
// - **Performance**: The first function provides more control and validation, while the second and third functions are more concise and utilize JavaScript's built-in methods for simplicity.

function reverse(str){   
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }//    O(n)+O(n)=O(n)
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }//    O(n)+O(n)+O(n)=O(n)
  
  const reverse3 = str => [...str].reverse().join('');//   O(n)+O(n)+O(n)=O(n)
  
  console.log(reverse('Timbits Hi'))
  console.log(reverse2('Timbits Hi'))
  console.log(reverse3('Timbits Hi'))