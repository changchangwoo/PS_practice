function solution(number, limit, power) {
    var answer = 0;
    let num = countDivisors(number)
    num.shift()
    num.forEach(element => {
       if(element > limit) answer += power
       else answer += element 
    });
    return answer;
}

function countDivisors(n) {
    let divisorsCount = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            divisorsCount[j]++;
        }
    }

    return divisorsCount;
}
solution(5, 3, 2)