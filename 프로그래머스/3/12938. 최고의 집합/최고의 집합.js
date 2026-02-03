/*
가장 큰 수를 꺼내서, 해당 수를 반으로 쪼개서 넣는거 => 안됨, 이렇게 접그하는 문제 아님
평평하게 만들어야 하는 문제

*/

function solution(n, s) {
    answer = []
    if(n > s) return [-1]
    let count = Math.floor(s/n)
    rest = s % n
    for(let i = 0; i < n-rest; i++) answer.push(count)
    for(let i = 0; i < rest; i++) answer.push(count+1)
    return answer
}