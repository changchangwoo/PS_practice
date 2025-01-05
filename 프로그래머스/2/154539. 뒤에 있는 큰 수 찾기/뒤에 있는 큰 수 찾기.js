function solution(numbers) {
    const stack = []
    const answer = new Array(numbers.length).fill(-1)
    for(let i = 0; i < numbers.length; i++) {
        while(stack && numbers[stack[stack.length-1]] < numbers[i]) {
            answer[stack[stack.length-1]] = numbers[i]
            stack.pop();
        }
        stack.push(i)
    }
    return answer
}
