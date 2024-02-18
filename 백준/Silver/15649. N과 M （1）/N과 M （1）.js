let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ')
let N = +input[0]
let M = +input[1]
let result = []

function dfs() {
    if(result.length === M) {
        console.log(result.join(' '))
        return false
    }
    for(let i = 1; i <= N; i++) {
        if(!result.includes(i)) {
            result.push(i)
            dfs()
            result.pop()
        } 
    }
}

dfs()