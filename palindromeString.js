/**
 (Palindrome string) A string is a palindrome if it reads the same forward and backward. The words ”rotator”, “mom,” “dad,” and “noon,” for instance, are all palindromes. The problem is to write a program that prompts the user to enter a string and reports whether the string is a palindrome.(20mins.)
 */
const myString = "rotator";
// The index of the first character in the string
let low = 0;
// The index of the last character in the string
let high = myString.length - 1;

let isPalindrome = true;
while (low < high) {
    if (myString[low] !== myString[high]) {
        isPalindrome = false;
        break;
    }
    low++;
    high--;
}
/*
for (let index = 0; index <= Math.floor(myString.length / 2); index++) {
    if (myString[low] !== myString[high]) {
        isPalindrome = false;
        break;
    }
    low++;
    high--;
}
*/
if (isPalindrome) {
    console.log(`${myString} is a palindrome string.`);
} else {
    console.log(`${myString} is not a palindrome string.`);
}