/*
문제 해결 접근 방식
1. 완전탐색으로 풀기에는 출력 값이 너무 커짐 => DP로 접근
2. DP[N]은 N을 K번 써서 쌓을 수 있는 모든 수의 집합
3. N을 I번 써서 만들 수 있는 값의 수는 N을 K와 I-K로 나눈 값들의 사칙연산 값과 일치
4. 구현
*/

function solution(N, number) {
    var answer = 0;
    const DP = Array.from({length : 10}, () => new Set())
    for(let i = 1 ; i <= 8; i++) {
        DP[i].add(Number(String(N).repeat(i)))
        
        for(let k = 1; k < i; k++) {
            for(const a of DP[k]) {
                for(const b of DP[i-k]) {
                    DP[i].add(a + b)
                    DP[i].add(a * b)
                    DP[i].add(a - b)
                    if(b !== 0) DP[i].add(Math.trunc(a / b))
                }
            }
        }
        if(DP[i].has(number)) return i
    }
    return -1
}