function solution(s) {
    let answer = ''
    s = s.split(' ')
    answer += Math.min(...s) + ' ' + Math.max(...s)
    return answer
}

console.log(solution("1 2 3 4"))