/**
 (Find the smallest n such that n2 > 12,000) Use a while loop to find the smallest integer n such that n2 is greater than 12,000.(10mins.)
 */
let n = 0;

while (Math.pow(n, 2) < 12000) {
    n++;
}

console.log(n + " is the lowest number, such that n^2 is greater than 12,000");
console.log(`Proof: ${n - 1}^2 =  ${Math.pow(n - 1, 2)}`);
console.log(`Proof: ${n}^2 =  ${Math.pow(n, 2)}`);