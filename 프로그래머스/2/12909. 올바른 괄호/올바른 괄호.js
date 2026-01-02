function solution(s){
    const stack = []
    for(char of s) {
        if(char === "(") {
            stack.push(0)
        }
        if(char === ")") {
            if(stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}