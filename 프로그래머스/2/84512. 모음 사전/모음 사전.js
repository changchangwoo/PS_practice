function solution(word) {
    const alpha = ["A","E","I","O","U"]
    const result = []
    let count = 0;
    let answer = 0;
    const dfs = () => {
        if(result.join('') === word) {
            answer = count;
        }
        if(result.length >= 5) {
            return;
        }
        for(let i = 0; i < alpha.length; i++) {
            result.push(alpha[i])
            count++;
            dfs();
            result.pop();
        }
    }
    dfs();
    return answer;
}