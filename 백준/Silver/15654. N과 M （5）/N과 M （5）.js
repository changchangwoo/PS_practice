const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b)
const result = []
const answer = []
const visited = new Array(N+1).fill(false)

function recursion () {
    if(result.length === M) {
        answer.push(result.join(' '))
        return
    }
    for(let i = 0; i < arr.length; i++) {
        if(!visited[i]) {
            visited[i] = true
            result.push(arr[i])
            recursion()
            result.pop()
            visited[i] = false
        }
    }
}

recursion(0)

console.log(answer.join('\n'))