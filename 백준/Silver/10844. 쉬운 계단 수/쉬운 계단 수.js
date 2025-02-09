/*
에제에서는 자릿수를 점점 앞으로 당겨왔다. 뒤로 갔을땐 문제 없을까?

   0  1  2  3  4  5  6  7  8  9 
1  0  1  1  1  1  1  1  1  1  1
2  1  1  2  2  2  2  2  2  2  1
3  1  3  3  4  4  4  4  4  3  2

*/

const N = Number(require('fs').readFileSync("./dev/stdin").toString());
const DP = Array.from({ length: N + 1 }, () => new Array(10).fill(0));
const mod = 1000000000
DP[1][0] = 0
for (let i = 1; i <= 9; i++) {
    DP[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j === 0) {
            DP[i][j] = DP[i - 1][j+1] % mod ;
        } else if (j === 9) {
            DP[i][j] = DP[i - 1][j-1] % mod;
        } else {
            DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) %mod
        }
    }
}



let sum = 0;
for (let i = 0; i <= 9; i++) {
    sum =  (sum + DP[N][i]) % mod;
}


console.log(sum);
