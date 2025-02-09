/*
M개의 퀴즈 입력
팀 이름 또는 멤버 이름 제공 후 0일 경우 멤버 이름을 '사전순 출력'
1일 경우 멤버가 속한 팀 이름 출력

*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const hash = new Map();
const answers = [];
for(let i = 0; i < N; i++) {
    let teamName = input.shift().trim()
    let teamNumber = Number(input.shift())
    input.splice(0, teamNumber).map((member) => {
        hash.set(member.trim(), teamName)
    })
}

for(let i = 0; i < M; i++) {
    let target = input.shift().trim();
    let targetNum = Number(input.shift());

    if(targetNum === 1) {
        answers.push(hash.get(target))
    } else if(targetNum === 0) {
        let temp = []
        hash.forEach((value, key) => {
            if(value === target) {
                temp.push(key)
            }
        });
        temp = temp.sort()
        answers.push(...temp)
    }
}

console.log(answers.join('\n'))