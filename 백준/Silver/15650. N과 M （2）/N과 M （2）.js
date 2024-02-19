let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ')
let N = +input[0]
let M = +input[1]
let result = []

function dfs(num) {
    if(result.length === M) {
        console.log(result.join(' '))
        return false
    }
    for(let i = num; i <= N; i++) {
        if(!result.includes(i)) {
            result.push(i);
            dfs(i+1)
            result.pop()
        }
    }
}

dfs(1)