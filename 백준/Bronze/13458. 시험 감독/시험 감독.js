/*
N개의 시험장이 있고, 각 시험장마다 응시자들이 있어
i번 시험장 응시자 수 Ai명
감독관은 총감독, 부감독 두 종류
총 감독은 B명 감시가능, 부 감독은 C명 감시 가능
총 감독 1명, 부감독 여러명
각 시험장마다 응시생들을 모두 감시해야 할 때, 필요한 감독관 수

총 감독관 > 부 감독관 큰 경우
K = target - B / C
(1 + target - B / C)
부 감독관이 크거 같은 경우
K = target / C

*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const arr = input.shift().split(' ').map(Number)
const [B, C] = input.shift().split(' ').map(Number)
let answer = 0;
for (const target of arr) {
    if (B >= target) {
        answer += 1
        continue;
    }
    answer += 1 + Math.ceil((target - B) / C)
}
console.log(answer)