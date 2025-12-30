const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const arr1 = input.shift().split(' ').map(Number)
const arr2 = input.shift().split(' ').map(Number)
let cwin = 0;
let cdraw = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] > arr2[j]) cwin++;
        else if (arr1[i] === arr2[j]) cdraw++;
    }
}
console.log((cwin / (36 - cdraw)).toFixed(5))