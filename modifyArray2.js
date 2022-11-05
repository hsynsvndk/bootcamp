/**
For this array task, we provide you with a starting array listing the names of some birds. (15mins.)
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
Find and remove the "Eagles" item from the array.
Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E".
Display eBirds array
Note that startsWith() is a great way to check whether a string starts with a given character.
 */

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const eBirds = new Array(); //or const eBirds=[];
indexOfEagle = birds.indexOf("Eagles");

if (indexOfEagle !== -1) {
    birds.splice(indexOfEagle, 1);
    for (let i = 0; i < birds.length; i++) {
        if (birds[i].startsWith("E")) {
            eBirds.push(birds[i]);
        }
    }
}
console.log(eBirds);