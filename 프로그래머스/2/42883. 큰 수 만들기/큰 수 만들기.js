function solution(number, k) {
    var answer = '';
    const stack = [number[0]]
    for(let i = 1; i < number.length; i++) {
        while(stack && stack[stack.length-1] < number[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(number[i])
    }
    while(k > 0) {
        stack.pop();
        k--;
    }
    return stack.join('');
}