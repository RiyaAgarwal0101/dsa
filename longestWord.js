// Purpose of `regularExpression` in the Code
// A regular expression, often abbreviated as regex
// The `regularExpression` in the `LongestWord` function serves a crucial role in validating the words extracted from the input sentence. Here’s a detailed explanation of its purpose:

// 1. **Pattern Matching**:
//    - The regular expression `^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$` is designed to match strings that consist solely of specific characters. This includes:
//      - Uppercase and lowercase English letters (`a-z`, `A-Z`).
//      - Digits (`0-9`).
//      - Spanish characters with accents (like `ñ`, `á`, `é`, etc.).
//      - Certain punctuation marks (space, comma, period, apostrophe, and hyphen).

// 2. **Input Validation**:
//    - By using `regularExpression.test(stringSen)`, the function checks if each word in the sentence adheres to the defined pattern. This ensures that only valid words are considered when determining the longest word. Words that contain invalid characters (like symbols or numbers not specified in the regex) will be ignored.

// 3. **Enhancing Robustness**:
//    - The use of this regular expression enhances the robustness of the function by preventing it from counting words that may not be meaningful or relevant due to the presence of unwanted characters. This is particularly important in natural language processing tasks where the integrity of the data is crucial.

// 4. **Unicode Support**:
//    - The `u` flag at the end of the regular expression allows for Unicode matching, which is essential for correctly handling characters from languages other than English, ensuring that the function can work with a wider range of inputs.

// In summary, the `regularExpression` is a key component that ensures only valid words are processed in the `LongestWord` function, thereby improving the accuracy and reliability of the output.

// Splitting the Sentence:
// const arrWords = sen.split(" ");:
// This line splits the input sentence into an array of words using a space as the delimiter. 
// Each word in the sentence becomes an element in the arrWords array.

function LongestWord(sen) {
    const arrWords = sen.split(" ");
    const regularExpression = /^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$/u;

    let strLonger = "";

    for (let stringSen of arrWords) {
        if (regularExpression.test(stringSen) && stringSen.length > strLonger.length) {
            strLonger = stringSen;
        }
    }

    // code goes here  
    return strLonger;
} //O(n)

// keep this function call here 
// console.log(LongestWord(readline())); -->ReferenceError: readline is not defined
console.log(LongestWord("This is new test lines"));