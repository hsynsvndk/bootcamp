/**
Write a JavaScript program to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.(15mins.)
Input: numbers= [40, 5, 10, 40, 25, 15, 35], target=50
Output:
[ 0, 2, 2, 3, 5, 6 ]
 */
const target = 50;
const numbers = [40, 5, 10, 40, 25, 15, 35];
const result = new Array();
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (target === (numbers[i] + numbers[j])) {
            result.push(i, j);
        }
    }
}
console.log(result);