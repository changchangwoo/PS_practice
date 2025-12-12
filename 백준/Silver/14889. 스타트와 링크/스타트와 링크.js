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

const calc = (innerArr) => {
    let sum = 0;
    for (let i = 0; i < innerArr.length; i++) {
        for (let j = i + 1; j < innerArr.length; j++) {
            const a = innerArr[i] - 1;
            const b = innerArr[j] - 1;
            sum += arr[a][b] + arr[b][a];
        }
    }
    return sum;   
}


startTeamTotal = calc(startTeamArr)
linkTeamTotal = calc(linkArr)
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
console.log(Math.min(...answers));
