let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let n = input.shift()
let graph = []
let graph2= []
let count = 0
let count2 = 0
let visited = Array.from({ length : +n}, () => new Array(+n).fill(false))
let visited2 = Array.from({ length : +n}, () => new Array(+n).fill(false))


function dfs(x, y, start) {
    if(x <= -1 || x >= n || y <= -1 || y >= n || visited[x][y] === true || graph[x][y] != start) return false
    else {
        visited[x][y] = true
        dfs(x-1, y, start)
        dfs(x+1, y, start)
        dfs(x, y-1, start)
        dfs(x, y+1, start)
        return true
    }
}

function dfs2(x, y, start) {
    if(x <= -1 || x >= n || y <= -1 || y >= n || visited2[x][y] === true || graph2[x][y] != start) return false
    else {
        visited2[x][y] = true
        dfs2(x-1, y, start)
        dfs2(x+1, y, start)
        dfs2(x, y-1, start)
        dfs2(x, y+1, start)
        return true
    }
}

for(let i = 0; i < input.length; i++) {
    let temp = []
    let temp2 = []
    for(let j = 0; j < input.length; j++) {
        temp.push(input[i][j])
        if(input[i][j] === 'G') temp2.push('R')
        else temp2.push(input[i][j])
    }
    graph.push(temp)
    graph2.push(temp2)
}

for(let i = 0; i < input.length; i++) {
    for(let j =0 ; j <input.length; j++) {
        if(visited[i][j] === true) continue
        dfs(i,j,graph[i][j])
        count++
    }
}


for(let i = 0; i < input.length; i++) {
    for(let j =0 ; j <input.length; j++) {
        if(visited2[i][j] === true) continue
        dfs2(i,j,graph2[i][j])
        count2++;
    }
}

console.log(count, count2)