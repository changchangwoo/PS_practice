/*
1. N은 짝수
2. 
*/
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const N = Number(input.shift())
const arr = input.map(line => line.split(' ').map(Number));
const comb = []
const answers = []

const calcRating = (startTeamArr, arr) => {
    const startTeamMap = new Set([...startTeamArr])
    const linkArr = []
    for(let i = 1; i <= N; i++) {
        if(!startTeamMap.has(i)) {
            linkArr.push(i)
        }
    }
    const innerResult = []
    const visited = new Array(startTeamArr.length).fill(false)

    const innerDFS = (innerArr, sum) => {
        if(innerResult.length === 2) {
            return sum + arr[innerResult[0]-1][innerResult[1]-1]
        }
        let total = 0;
        for(let i = 0 ; i < innerArr.length; i++) {
            if(visited[i]) continue;
            visited[i] = true
            innerResult.push(innerArr[i])
            total += innerDFS(innerArr, sum);
            visited[i] = false
            innerResult.pop();
        }
        return total
    }

    let startTeamTotal = innerDFS(startTeamArr, 0)
    let linkTeamTotal = innerDFS(linkArr, 0)
   return Math.abs(startTeamTotal - linkTeamTotal)

}
const dfs = (v, arr) => {
    if(comb.length === N/2) {
        answers.push(calcRating(comb, arr))
        return
    }
    for(let i = v; i <= N; i++) {
        comb.push(i)
        dfs(i+1, arr);
        comb.pop()
    }
}
dfs(1, arr);
console.log(Math.min(...answers))
