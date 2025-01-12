const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const money = Number(input.shift());
const N = Number(input.shift());
let sum = 0;
for(let i = 0; i < N; i++) {
    let [cost, count] = input[i].split(' ').map(Number)
    sum += cost * count
}
sum === money ? console.log("Yes") : console.log("No")