function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replace(/\s/g, "").toLowerCase();
  return cleanedWord === cleanedWord.split("").reverse().join("");
}

/* 
  Function isPalindrome(word):
  1. Convert the input word to lowercase and remove spaces.
  2. Initialize a variable "cleanedWord" to store the cleaned word.
  3. Iterate over each character in the cleaned word:
     - Remove any spaces.
     - Convert the character to lowercase.
     - Append the cleaned character to "cleanedWord".
  4. Reverse the "cleanedWord" to get the reversed version.
  5. Compare the "cleanedWord" with its reversed version.
  6. If they are the same, return true (it's a palindrome), else return false.

*/

/*
  The 'isPalindrome' function takes an input 'word' and checks if it's a palindrome.
  It does this by cleaning the input word, converting it to lwoercase, and removing sapces.
  Then, it compares the cleaned word with its reverse using string manipulation 
  methods. If they match, the word is a palindrome, and the function returns 'true' otherwise,
  it returns 'false'.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  console.log(isPalindrome("A man a plan a canal Panama")); // true
  console.log(isPalindrome("Was it a car or a cat I saw?")); // true
  console.log(isPalindrome("not a palindrome")); // false
}

module.exports = isPalindrome;
