/**
 (Compute and Interpret BMI) Write a program that prompts the user to enter a weight in pounds and height in inches and displays the BMI. Note that one pound is 0.45359237 kilograms and one inch is 0.0254 meters.
 */
const KILOGRAMS_PER_POUND = 0.45359237;
const METERS_PER_INCH = 0.0254;

let weight = 146; // as pounds
let height = 70;  // as inches

// convert the values to meter and kg.
weight = weight * KILOGRAMS_PER_POUND;
height = height * METERS_PER_INCH;

const bodyMassIndexx = weight / Math.pow(height, 2);

console.log(`BMI is ${bodyMassIndexx}.`);