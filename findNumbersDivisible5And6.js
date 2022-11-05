/**
 (Find numbers divisible by 5 and 6) Write a program that displays all the numbers from 100 to 1000, ten per line, that are divisible by 5 and 6. Numbers are separated by exactly one space.(20mins.)
 */
let count = 0;
let theNumbers = "";
for (let i = 100; i <= 1000; i++) {
    if (i % 5 === 0 && i % 6 === 0) {
        count++;
        if (count % 10 === 0) {
            theNumbers += i + "\n";
        } else {
            theNumbers += i + " ";
        }
    }
}
console.log(theNumbers);