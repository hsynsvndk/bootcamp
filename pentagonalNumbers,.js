/**
**(Math: pentagonal numbers) A pentagonal number is defined as n(3n–1)/2 for n = 1, 2, 3, 4, . . ., and so on. Therefore, the first few numbers are 1, 5, 12, 22, . . . .
Write a test program that uses this method to display the first 100 pentagonal numbers with 10 numbers on each line.(20mins.)
 */
let pentagonalNumber = 0;
let text = "";
for (let n = 1; n <= 100; n++) {
    pentagonalNumber = n * (3 * n - 1) / 2;
    if (n % 10 === 0) {
        text += pentagonalNumber + "\n";
    } else {
        text += pentagonalNumber + " ";
    }
}
console.log(text);