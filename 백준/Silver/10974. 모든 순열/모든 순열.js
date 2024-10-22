let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])

const arr = []
const result = []
const visited = new Array(N+1).fill(false)

const dfs = () => {
    if(arr.length === N) {
        result.push(arr.join(' '))
        return
    }

    for(let i = 1; i <= N; i++) {
        if(visited[i] === false) {
            visited[i] = true
            arr.push(i)
            dfs();
            visited[i] = false
            arr.pop()
        }
    }
}

dfs();

for(let i = 0; i < result.length; i++) {
    console.log(result[i])
}