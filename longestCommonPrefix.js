/**
*(Longest common prefix) Write a program that prompts the user to enter two strings and displays the largest common prefix of the two strings. (10mins.) 
 */
const string1 = "Welcome to Bootcamp";
const string2 = "Welcome to Olten";
let index = 0;				// Initialize index to 0
let prefix = "";		// Initialize prefix as empty string

// Get the largest commmon prefix of the two strings
while (string1.charAt(index) === string2.charAt(index)) {
    prefix += string1.charAt(index);
    index++;
}
/*
for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) break;
    prefix += string1.charAt(i);
}
*/
// Display the result
if (prefix.length > 0) {
    console.log(`The commmon prefix is  "${prefix}"`);
}
else {
    console.log(string1 + " and " + string2 + " have no commmon prefix");
}

