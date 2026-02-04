const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const arr = input.shift().split(' ').map(Number)
let total = +input.shift();
arr.sort((a, b) => a - b)
let left = 0;
let right = arr[arr.length - 1]
let flag = 0;
/*
예산을 더 늘리는 조건
rest가 남아 있는 경우

*/
let answer = 0;
while (left <= right) {
    flag++;
    const mid = Math.floor((left + right) / 2);
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mid) {
            sum += mid;
        } else {
            sum += arr[i]
        }
    }
    if (sum <= total) {
        answer = mid
        left = mid + 1
    } else {
        right = mid - 1
    }
}
console.log(answer)