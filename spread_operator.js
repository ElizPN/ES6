let arr1 = [6, 89, 3, 45];
let maximus1 = Math.max.apply(null, arr1); // returns 89
console.log(maximus1);

console.log(Math.max(arr1)); // returns NaN, because Math.max expects comma-separated arguments, but not array

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
//...arr returns unpacked array (it spreads the array.)
console.log(maximus);

let copyOfarr = [...arr]; // spread operator create copies of array
console.log(copyOfarr);
