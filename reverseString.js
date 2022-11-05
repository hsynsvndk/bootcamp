/**
(Reverse a string) Write a program that reverse the given string. Do not use the reverse method!(15mins.)
 */

const myString = "HiCoders";

// Reverse the string
let reverse = "";
for (let i = myString.length - 1; i >= 0; i--) {
    reverse += myString.charAt(i);
}
console.log("The reversed myString is " + reverse);
/*
const myStringArr = myString.split("");
const last = myStringArr.length - 1;
for (let first = 0; first < myStringArr.length / 2; first++) {
    let temp = myStringArr[first];
    myStringArr[first] = myStringArr[last - first];
    myStringArr[last - first] = temp;
}
*Display the string in reverse order
console.log("The reversed myString is " + myStringArr.join(""));
*/
