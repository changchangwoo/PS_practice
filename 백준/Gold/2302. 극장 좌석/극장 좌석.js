
/*
1번부터 N번까지의 번호
자기 왼쪽 오른쪽 좌석으로 옮길 수 있다

VIP 회원 => 반드시 자기 좌석에 앉아야한다

빈칸이 1개인 경우
1
=> 1
빈칸이 2개인 경우
1 2
2 1
=> 2
빈칸이 3개인 경우
1 2 3 
2 1 3 
1 3 2 
=> 3
빈칸이 4개이 경우
1 2 3 4
2 1 3 4 
1 3 2 4
1 2 4 3
2 1 4 3
n = (n-1)+(n-2)
=> 5개
빈칸이 5개인 경우
1 2 3 4 5
1 2 3 5 4
1 3 2 4 5
1 3 2 5 4
2 1 3 4 5
2 1 3 5 4
=> 6개


1, 2, 3, [4], 5, 6, [7], 8, 9
3x2x2

*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift()
let stack = []
let answer = 1;
let idx = 0
input.shift();
const arr = input.map(Number)
for (let i = 1; i <= N; i++) {
    if (i === arr[idx]) {
        idx++;
        answer *= Pibo(stack)
        stack = []
        continue;
    } else {
        stack.push(i)
    }
}
answer *= Pibo(stack)

console.log(answer)

function Pibo(stack) {
    const DP = []
    DP[0] = 1
    DP[1] = 1
    DP[2] = 2
    DP[3] = 3
    for (let i = 4; i <= stack.length; i++) {
        DP[i] = DP[i - 1] + DP[i - 2]
    }
    return DP[stack.length]
}