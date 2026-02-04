const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number).sort((a, b) => a - b);
let left = 0
let right = arr[arr.length - 1]
/*

*/
let answer = 0
while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (arr[i] >= mid) sum += arr[i] - mid
    }
    if (sum < M) {
        right = mid - 1;
    } else {
        answer = mid
        left = mid + 1;
    }

}
console.log(answer)
