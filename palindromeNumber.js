/**
 (Palindrome number) Write a program that prompts the user to enter a three-digit integer and determines whether it is a palindrome number. A number is palindrome if it reads the same from right to left and from left to right.(121,343)
 */
const number = 343;

const firstDigit = Math.floor(number / 100);
const thirdDigit = number % 10;

if (firstDigit === thirdDigit) {
    console.log(`${number} is a polindrome number`);
} else {
    console.log(`${number} is not a polindrome number`);
}