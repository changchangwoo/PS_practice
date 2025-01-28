/*
A는 자기보다 크기가 작은 먹이만 먹을 수 있다
양 배열에 포인터를 하나씩 설정
arrA
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const T = Number(input.shift());
const answers = []
for (let i = 0; i < T; i++) {
    const [N, M] = input.shift().split(' ').map(Number)
    const arrA = input.shift().split(' ').map(Number).sort((a, b) => a - b)
    const arrB = input.shift().split(' ').map(Number).sort((a, b) => a - b)

    let AIdx = 0;
    let answer = 0;
    while (AIdx < N) {
        let BIdx = 0;
        while (true) {
            if (BIdx === M || (arrA[AIdx] <= arrB[BIdx])) break
            BIdx++;
        }
        AIdx++;
        answer += BIdx;
    }
    answers.push(answer)
}
console.log(answers.join(' '))