function solution(ingredient) {
    var answer = 0;
    const stack = []
    for(let i = 0; i < ingredient.length; i++) {
        if((stack.length === 0) && ingredient[i] !== 1) continue;
        if(
            stack.length >= 3 
            && ingredient[i] === 1
            && stack[stack.length-1] === 3
            && stack[stack.length-2] === 2
            && stack[stack.length-3] === 1
    ) {
        stack.pop();
        stack.pop();
        stack.pop();

        answer++;
        continue;;
        }
    stack.push(ingredient[i])
    }
    return answer
}