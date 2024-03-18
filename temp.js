// 0을 입력받으면 가장 큰 값을 출력한다
// 빈 배열일 떄 0을 입력받으면 0을 출력한다
// 최대 힙을 구현한다
const input = require('fs').readFileSync("input.txt").toString().trim().split('\n')
const N = Number(input.shift())
console.log(N)