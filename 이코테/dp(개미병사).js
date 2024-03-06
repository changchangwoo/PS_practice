const input = require('fs').readFileSync("input.txt").toString().trim().split("\n")
const N = Number(input.shift())
const arr = input.shift().split(' ').map(Number)
const table = []

table[0] = arr[0]
table[1] = Math.max(arr[0], arr[1])
for(let i = 2; i < N; i++) {
    table[i] = Math.max(table[i-1], table[i-2] + arr[i])
} 
console.log(table[N-1])