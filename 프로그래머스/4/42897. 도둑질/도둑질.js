/*
개미군단 문제와 비슷한가?
처음과 끝을 독립적으로 본다면

첫 집을 훔쳤을 때,
첫 집을 훔치지 않았을 때 두 가지로 나눠서
DP[k] = Math.max(DP[k-2] + money[k], DP[k-1])



*/
function solution(money) {
    var answer = 0;
    const DP1 = new Array(money.length).fill(0) 
    const DP2 = new Array(money.length).fill(0) 
    DP1[0] = 0
    DP1[1] = money[1]
    DP2[0] = money[0];
    DP2[1] = money[0];
    for(let k = 2; k < money.length; k++) {
        DP1[k] = Math.max(DP1[k-2] + money[k], DP1[k-1])
    }
    for(let k = 2; k < money.length-1; k++) {
        DP2[k] = Math.max(DP2[k-2] + money[k], DP2[k-1])
    }
   return Math.max(DP1[money.length-1], DP2[money.length-2])

}