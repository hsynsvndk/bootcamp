/**
(Compute the average of numbers and count the numbers) Write a program that, according to the given array, computes the total and average and determines how many less than, greater than and equal to the average.(15mins.)
Here is a sample run:
const mixedNumbers=[1, 2, 3, 4, 5];
The sum if the numbers is 15
The average is 3
The number of less than average is 2
The number of greater than average is 2
The number of equal to average is 1
 */
const myArray = [23, 14, 45, -4, 11, 21, -29, 5];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

const average = sum / myArray.length;
let lessThan = 0;
let greaterThan = 0;
let equalTo = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < average) {
        lessThan++;
    } else if (myArray[i] > average) {
        greaterThan++;
    } else {
        equalTo++;
    }
}
console.log(`The sum of the numbers is ${sum}`);
console.log(`The average is ${average}`);
console.log(`The number of less than average is ${lessThan}`);
console.log(`The number of greater than average is ${greaterThan}`);
console.log(`The number of equal to average is ${equalTo}`); 