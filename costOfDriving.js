/**
 (Cost of driving) Write a program that displays the cost of the trip. The distance to drive, the fuel efficiency of the car in km per liter, and the price per liter will be written as inputs.
 */
const distance = 360;
const kmPerLiter = 12.5;
const pricePerLiter = 1.9;

const costOfDriving = (distance / kmPerLiter) * pricePerLiter;

console.log(`The cost of driving of ${distance}km is $${costOfDriving}.`);