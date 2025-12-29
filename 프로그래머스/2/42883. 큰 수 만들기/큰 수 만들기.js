function solution(number, k) {
    var answer = '';
    const stack = []
    for (let digit of number) {
        while(stack && k > 0 && stack[stack.length - 1] < digit) {
            stack.pop();
            k--;
        }
        stack.push(digit)
    }
    
    return stack.join('').slice(0, stack.length - k);
}