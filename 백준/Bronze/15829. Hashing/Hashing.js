const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
const arr = input.shift().split('')
let sum = 0
for(let i = 0; i < arr.length; i++) {
    sum += (arr[i].charCodeAt()-96) * (Math.pow(31, i))
}
console.log(sum)