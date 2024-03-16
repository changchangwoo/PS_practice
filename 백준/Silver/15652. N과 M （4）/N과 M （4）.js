const [N, M] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number)
const result = []
const answer = []

function recursion(num) {
    if(result.length === M) {
        answer.push(result.join(' '))
        return
    }
    for(let i = 1; i <= N; i++) {
        if(i >= num) { 
        result.push(i)
        recursion(i)
        result.pop()
        }
    }
}
recursion(0)

console.log(answer.join('\n'))