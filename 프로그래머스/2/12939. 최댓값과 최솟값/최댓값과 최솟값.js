function solution(s) {
    let answer = ''
    s = s.split(' ')
    answer += Math.min(...s) + ' ' + Math.max(...s)
    return answer
}