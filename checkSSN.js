/**
 (Check SSN) Write a program that prompts the user to enter a Social Security number in the format DDD-DD-DDDD, where D is a digit. Your program should check whether the input is valid. 
 Enter a SSN: 232-23-5435
232-23-5435 is a valid social security number
Enter a SSN: 23-23-5435
23-23-5435 is an invalid social security number
Enter a SSN: a23-23-5435
a23-23-5435 is an invalid social security number
 */
const mySsn = "745-45-6089";
const isValid =
    (mySsn.length === 11) && (!isNaN(mySsn.charAt(0))) && (!isNaN(mySsn.charAt(1)))
    && (!isNaN(mySsn.charAt(2))) && (isNaN(mySsn.charAt(3))) && (!isNaN(mySsn.charAt(4)))
    && (!isNaN(mySsn.charAt(5))) && (isNaN(mySsn.charAt(6))) && (!isNaN(mySsn.charAt(7)))
    && (!isNaN(mySsn.charAt(8))) && (!isNaN(mySsn.charAt(4))) && (!isNaN(mySsn.charAt(4)));

console.log(`${mySsn} is ${(isValid) ? 'a valid' : 'an unvalid'} social security number.`);