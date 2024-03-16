const [N, M] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number)
const result = []
const answer = []

function recursion(num) {
    if(result.length === M) {
        answer.push(result.join(' '))
        return
    }
    for(let i = 1; i <= N; i++) {
        result.push(i)
        recursion(num+1)
        result.pop()
    }
}
recursion(0)

console.log(answer.join('\n'))