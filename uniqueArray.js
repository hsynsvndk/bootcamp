/**
Create an array which has 20 odd and unique numbers between 0-100.(10mins.)
 */
const uniqueArray = new Array();
let oddNumber;
let count = 0;
while (count <= 20) {
    oddNumber = Math.floor(101 * Math.random());
    if (oddNumber % 2 === 1 && uniqueArray.indexOf(oddNumber) === -1) {
        uniqueArray.push(oddNumber);
        count++;
    }
}
console.log(uniqueArray);
