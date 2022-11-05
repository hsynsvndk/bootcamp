/**
 (Cost of shipping) A shipping company uses the following function to calculate the cost (in dollars) of shipping based on the weight of the package (in pounds).(10mins)

Price (＄)    Weight (lb)
(each pound)
3.5             0< w <= 1
5.5             1< w <= 3
8.5             3< w <= 10
10.5            10< w <= 20

Write a program that prompts the user to enter the weight of the package and display the shipping cost. If the weight is greater than 20, display a message “the package cannot be shipped.”
 */

const weight = 10;

if (weight > 20)
    console.log("The package cannot be shipped.");
else {
    let costPerPound = 0;
    if (weight > 0 && weight <= 1)
        costPerPound = 3.5;
    else if (weight <= 3)
        costPerPound = 5.5;
    else if (weight <= 10)
        costPerPound = 8.5;
    else //if (weight <= 20)
        costPerPound = 10.5;
    console.log(`Shipping cost of package is $ ${costPerPound * weight}`);
}