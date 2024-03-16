const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
input.pop()
for(let i = 0; i < input.length; i++) {
    let [N, ...arr] = input[i].split(' ').map(Number)
    let visited = new Array(N+1).fill(false)
    let answer = []
    let result = []

    function recursion(num) {
        if(result.length === 6) {
            answer.push(result.join(' '))
            return
        }
        for(let i = 0; i < arr.length; i++) {
            if(!visited[i] && i >= num) {
                result.push(arr[i])
                visited[i] = true
                recursion(i)
                result.pop()
                visited[i] = false
            }
        }
    }
    recursion(0)
    console.log(answer.join('\n'))
    if(i !== input.length-1) console.log()
}