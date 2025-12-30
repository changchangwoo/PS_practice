function solution(numbers, target) {
    var answer = 0;
    const dfs = (count, sum, v) => {
        if(count === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return
        }
            dfs(count+1, sum + numbers[v], v+1)
            dfs(count+1, sum - numbers[v], v+1)
    }
    dfs(0, 0, 0)
    return answer;
}