let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

const visited = new Array(N+1).fill(false)
const result = []
const answer = []
const backtracking = () => {
  if(result.length === N) {
    let sum = 0
    for(let i = 0; i < N-1; i++) {
      sum += Math.abs(result[i]-result[i+1])
    }
    answer.push(sum)
    return
  }
  for (let i = 0 ; i < N; i++) {
    if (visited[i] === false) {
      visited[i] = true
      result.push(arr[i])
      backtracking()
      visited[i] = false
      result.pop();
    }
  }
}

backtracking();

console.log(Math.max(...answer))