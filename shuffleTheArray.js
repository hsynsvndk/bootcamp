/**
Write a JavaScript program to shuffle an array.(30mins.)
const fruits = ["apple", "banana", "kiwi", "orange", "pineapple", "pear", "mandarin", "avocado", "apricot"];
 */
const fruits = ["apple", "banana", "kiwi", "orange", "pineapple", "pear", "mandarin", "avocado", "apricot"];

for (let i = 0; i < fruits.length; i++) {
    let index = Math.floor(fruits.length * Math.random());
    let temp = fruits[i];
    fruits[i] = fruits[index];
    fruits[index] = temp;
}
console.log("Shuffled array --->   " + fruits);