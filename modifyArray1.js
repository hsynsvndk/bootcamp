/**
let myArray = ["E.Honda","Ryu", "Ken", "Chun-Li", "M.Bison", "Guile", "Sakura", "Blanka" ];
(20mins)
 You need to:
Remove the first item in the array.
Add two new names to the beginning of the array. (Dhalsim, Sagat)
Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (2).
Finally, join the array items together in a single string called myString, with a separator of "-".
 */

let myFighters = ["E.Honda", "Ryu", "Ken", "Chun-Li", "M.Bison", "Guile", "Sakura", "Blanka"];
// At position 0,remove 1 element, add 2 elements, : 
myFighters.splice(0, 1, "Dhalsim", "Sagat")
for (let index = 0; index < myFighters.length; index++) {
    myFighters[index] = `${myFighters[index]}(${index})`;
}
console.log(myFighters.join("-"));