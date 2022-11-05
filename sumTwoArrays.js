/**
There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value from the given arrays.(15mins.)
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

 */
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const sum = new Array();
let index = 0;
let bothNaN = true;

while (index < array1.length && index < array2.length) {
    sum.push(array1[index] + array2[index]);
    index++;
}

if (index === array1.length) {
    for (let i = index; i < array2.length; i++) {
        sum.push(array2[i]);
    }
}
else {
    for (let i = index; i < array1.length; i++) {
        sum.push(array1[i]);
    }
}
console.log(sum);