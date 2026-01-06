/*
카드팩 종류 = 1..N개 까지의 포함된 카드팩
민규는 최대한 돈을 써서 카드 N개 구매, 카드 i 포함된 카드팩 가격 pi
카드팩에 포함된 카드 개수의 합은 N과 같아야 한다
카드 N번을 사는 횟수
=> N의 쌍의 합?
4
1, 3
2, 2
DP[1], DP[3]

2, 0
1, 1


*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift()
const arr = input.shift().split(' ').map(Number)
const DP = new Array(N).fill(-Infinity)

DP[0] = arr[0]
DP[1] = Math.max(arr[1], DP[0] * 2);
for (let i = 2; i < arr.length; i++) {
    let max = -Infinity
    for (let j = 0; j < i; j++) {
        max = Math.max(max, DP[i - 1 - j] + DP[j])

    }
    DP[i] = Math.max(arr[i], max)
}
console.log(DP[N - 1])

