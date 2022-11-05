/**
(Count positive and negative numbers and compute the average of numbers) Write a program that reads an array of integers, determines how many positive and negative values have been read, and computes the total and average of the input values (not counting zeros).
Here is a sample run:
const mixedNumbers=[1,2,-1,3,0];
The number of positives is 3
The number of negatives is 1
The total is 5
The average is 1.25
 */
const mixedNumbers = [1, 2, -1, 3, 0];
let count = 0;
let total = 0;
let positive = 0;
let negative = 0;
for (let index = 0; index < mixedNumbers.length; index++) {
    if (mixedNumbers[index] !== 0) {
        if (mixedNumbers[index] > 0) {
            positive++;
        } else {
            negative++;
        }
        total += mixedNumbers[index];
    }
}
console.log(`The sum of the numbers is ${total}`);
console.log(`The number of positive is ${positive}`);
console.log(`The number of negative is ${negative}`);
console.log(`The average of numbers is ${total / (positive + negative)}`); 