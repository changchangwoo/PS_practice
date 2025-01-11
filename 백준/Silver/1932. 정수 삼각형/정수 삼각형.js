/*
현재 선택된 수의 왼쪽 또는 오른쪽만 가능하다
현재까지의 최댓값을 기준으로

DP를 할 떄 고민할점
반드시 DP를 채우면서 갈 필요는 없다. 전체 배열에서 접근해도 괜찮음
RGB문제처럼 값을 전부 주면서 온 다음 이후 최댓값을 출력하는 방식일까 => 이게 맞음
값이 겹치는 부분에서 두 수 중 최댓값을 넣으면 된다
이거 2차원 배열 DP네
가운데에 있는 수는 왼쪽 위 인덱스와 오른쪽 위 인덱스의 합 중 최댓값이 들어가야한다
왼쪽위 인덱스는 현재 인덱스기준 -1, 오른쪽위 인덱스는 그대로
그러면 맨 왼쪽 맨 오른쪽 처리는?


*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = Number(input.shift())
const arr = []
for(let i = 0; i < N; i++) {
    arr.push(input[i].split(' ').map(Number))
}

for(let i = 1; i< N; i++) {
    for(let j = 0; j <= i; j++) {
        if(j === 0) arr[i][j] = arr[i-1][j] + arr[i][j]
        else if(j === i) arr[i][j] = arr[i-1][j-1] + arr[i][j]
        else {
            arr[i][j] = Math.max(arr[i-1][j-1], arr[i-1][j]) + arr[i][j]
        }
        }
}

console.log(Math.max(...arr[N-1]))