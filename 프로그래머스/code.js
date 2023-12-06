function solution(brown, yellow) {
    var answer = [];
    for (let i = 1; i <= brown + yellow; i++) {
        for (let j = 1; j <= brown + yellow; j++) {
            if (i * j === brown + yellow && i >= j) {
                answer = [i, j]
                break
            }
        }
        if(answer.length >= 1) break
    }
    return answer;
}

console.log(solution(8, 1))
