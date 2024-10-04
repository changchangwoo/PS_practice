function solution(s) {
    let answer = true
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push(0)
        else if (s[i] === ")") {
            if (stack.length === 0) {
                answer = false
                return answer
            }
            stack.pop()
        }
    }
    if(stack.length !== 0) answer = false
    return answer

}