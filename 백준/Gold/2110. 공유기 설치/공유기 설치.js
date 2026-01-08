/*
구하는 값 => 가장 인접한 두 공유기 사이의 거리를 최대로 하는 프로그램
이분 탐색 기준 => 공유기 사이 거리
*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, C] = input.shift().split(' ').map(Number)
const arr = input.map((item) => +item).sort((a, b) => a - b)
left = 1
right = arr[N - 1] - arr[0]
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prev = arr[0]
    let count = 1;
    for (let i = 0; i < N; i++) {
        if (arr[i] - prev >= mid) {
            prev = arr[i]
            count++;
        }
    }
    if (count >= C) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(right)