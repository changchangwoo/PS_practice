const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number)
let sum = 0
for(let i = 0; i < input.length; i++) {
    sum += Math.pow(input[i], 2)
}
console.log(Math.floor(sum%10))