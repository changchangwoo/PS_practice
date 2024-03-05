const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
if(N === 0) console.log(0)
else {
const trunction = Math.round((N/100) * 15)
let arr = []
input.sort((a,b) => a-b)
for (let i = trunction; i < N-trunction; i++) {
    arr.push(+input[i])
}
const sum = arr.reduce((acc, num) => acc + num, 0 )
console.log(Math.round(sum/arr.length))
}