To write a JUnit test case for a requirement that tests a sentence containing only invalid characters, we'll first need to define what "invalid characters" are. For the sake of this example, let's assume that valid characters are alphanumeric characters (A-Z, a-z, 0-9) and spaces, while any other character is considered invalid.

We'll also need a method in a class (let's say `Validator`) that checks whether a sentence is valid or not. Here's an example implementation of such a method:

```java
public class Validator {
    public boolean isValidSentence(String sentence) {
        // Check if the sentence contains only valid characters (alphanumeric and spaces)
        return sentence != null && sentence.matches("[a-zA-Z0-9\\s]*");
    }
}
```

Now, we can write a JUnit test case to test a sentence containing only invalid characters. 

Here is the JUnit test code:

```java
import static org.junit.jupiter.api.Assertions.assertFalse;
import org.junit.jupiter.api.Test;

public class ValidatorTest {

    @Test
    public void testSentenceWithOnlyInvalidCharacters() {
        Validator validator = new Validator();
        
        // Test input with only invalid characters
        String invalidSentence = "!@#$%^&*()_+[]{}|;':\",.<>?";
        
        // Assert that the sentence is invalid
        assertFalse(validator.isValidSentence(invalidSentence), "The sentence should be invalid due to invalid characters.");
    }
}
```

### Explanation:
1. **Validator Class**: We define a `Validator` class with a method `isValidSentence` that checks if the given sentence consists only of valid characters.
2. **JUnit Test Class**: We create a test class `ValidatorTest` with a test method `testSentenceWithOnlyInvalidCharacters`.
3. **Test Method**: In the test method:
   - We instantiate the `Validator` class.
   - We define