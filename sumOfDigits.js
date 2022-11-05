/**
 * (Sum the digits in an integer) Write a program that reads an integer between 0 and
1000 and adds all the digits in the integer. For example, if an integer is 932, the
sum of all its digits is 14.
Hint: Use the % operator to extract digits, and use the / operator to remove the
extracted digit. For instance, 932 % 10 = 2 and 932 / 10 = 93.
 */
let num = 999;
let sum = 0;
/*
while (num > 1) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
*/
sum += num % 10;
num = Math.floor(num / 10);
sum += num % 10;
num = Math.floor(num / 10);
sum += num % 10;
num = Math.floor(num / 10);


console.log(`Sum of the digits is ${sum}.`)

