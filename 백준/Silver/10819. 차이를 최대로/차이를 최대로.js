const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const arr = input.shift().split(' ').map(Number)
let max = -Infinity
const comb = []
const visited = new Array(N).fill(false)
const calc = (arr) => {
    let sum = 0;
   for(let i = 0; i < arr.length-1; i++) {
    sum += Math.abs(arr[i] - arr[i+1]);
   } 
   return sum
}
const dfs = () => {
    if(comb.length === N) {
        let calComb = calc(comb)
        if(calComb > max) max = calComb
        return
    }
    for(let i = 0; i < N; i++) {
        if(visited[i]) continue;
        visited[i] = true
        comb.push(arr[i])
        dfs()
        comb.pop()
        visited[i] = false
    }
}
dfs();
console.log(max)