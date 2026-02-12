/*

*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const arr = input.shift().split(' ').map(Number)
let answer = Infinity;
let answerArr = []
let left = 0;
let right = N - 1;
arr.sort((a, b) => a - b)
while (left < right) {
    let sum = arr[left] + arr[right]
    if (Math.abs(sum) < answer) {
        answerArr = [arr[left], arr[right]]
        answer = Math.abs(sum)
    }
    if (sum < 0) {
        left++;
    } else {
        right--;
    }
}

console.log(answerArr.join(' '))
