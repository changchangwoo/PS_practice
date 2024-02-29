const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const str = input.shift()
const N = Number(input.shift())
console.log(str[N-1]) 