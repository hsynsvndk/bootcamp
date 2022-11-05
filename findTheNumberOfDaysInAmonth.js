/*
(Find the number of days in a month) Write a program that prompts the user to enter the month and year and displays the number of days in the month. For example, if the user entered month 2 and year 2012, the program should display that February 2012 had 29 days. If the user entered month 3 and year 2015, the program should display that March 2015 had 31 days.(10mins)
*/
const year = 2012;
const month = 3;

const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"]
// Whether or not the given year is a leap year?
const isLeapyear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log(`${months[month - 1]} ${year} had 31 days`);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`${months[month - 1]} ${year} had 30 days`);
} else if (month === 2) {
    if (isLeapyear) {
        console.log(`${months[month]} ${year} had 29 days`);
    } else {
        console.log(`${months[month]} ${year} had 28 days`);
    }
    // Ternary operator (condition)? true : flase
    // console.log(`${months[month - 1]} ${year} had ${(isLeapyear) ? "29" : "28"} days`);
}
