function isPalindrome(word) {
    // Breakdown of processing:
    // 1. If equality, test the rest of the word
    // 2. If difference, stop

    // Remove non-alphanumeric characters and convert to lowercase for case-insensitive comparison
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Recursive function to check if a cleaned word is a palindrome
    function checkPalindrome(start, end) {
        // Stop condition: if start is greater than or equal to end, it's a palindrome
        if (start >= end) {
            return true;
        }

        // Compare the characters located at the ends of the word
        if (cleanedWord[start] === cleanedWord[end]) {
            // Recursively test the rest of the word
            return checkPalindrome(start + 1, end - 1);
        } else {
            // If the characters are different, it's not a palindrome
            return false;
        }
    }

    // Start the palindrome check from the beginning and end of the cleaned word
    return checkPalindrome(0, cleanedWord.length - 1);
}

// Example usage:
console.log(isPalindrome("gag"));    // Output: true
console.log(isPalindrome("kayak"));  // Output: true
console.log(isPalindrome("php"));    // Output: false
console.log(isPalindrome("radar"));  // Output: true
