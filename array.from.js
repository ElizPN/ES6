const sheeps = ["🐑", "🐑", "🐑"];
let myString = "Yelyzaveta";

const cloneSheeps = Array.from(sheeps);
console.log(cloneSheeps);

let myArray = Array.from(myString);
console.log(myArray);
//method Array.from creates new shallow-copied array
//from array-like or iterable object.
