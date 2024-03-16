const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number).sort((a, b) => a - b)
const result = []
const answer = []
const visited = new Array(N + 1).fill(false)

function recursion(num) {
    if (result.length === M) {
        if(!answer.includes(result.join(' ')))
        answer.push(result.join(' '))
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (!visited[i] && i !== num ) {
            visited[i] = true
            result.push(arr[i])
            recursion(i)
            visited[i] = false
            result.pop()
        }
    }
}

recursion(-1)

console.log(answer.join('\n'))