// 좌우로 움직이는 것과 위 아래로 움직이는 것은 별개
// JEROANN

function solution(name) {
    let answer = 0;
    const alpha = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1]
    let min = name.length-1
    for(const char of name) {
        answer += alpha[char.charCodeAt()-65]
    }
    for(let i = 0; i < name.length; i++) {
        j = i + 1
        while (j < name.length && name[j] === 'A') j++
        let left = 2 * i + name.length - j
        let right = 2*(name.length-j) + i
        min = Math.min(min, left, right)
    }
    
    return answer + min;
}