/**
**(Perfect number) A positive integer is called a perfect number if it is equal to the sum of all of its positive divisors, excluding itself. For example, 6 is the first perfect number because 6 = 3 + 2 + 1. The next is 28 = 14 + 7 + 4 + 2 + 1. There are four perfect numbers less than 10,000. Write a program to find all these four numbers.(30mins.)
 */

for (let i = 1; i < 10000; i++) {
    let sum = 0;	// Reset Accumulator to 0

    for (let k = 1; k <= i / 2; k++) {
        // Test for divisor
        if (i % k == 0)
            sum += k;
    }
    // Test if sum of all positive divisors are equal to number
    if (i == sum)
        console.log(i);
}