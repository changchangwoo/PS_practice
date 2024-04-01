function solution(numbers, target) {
    const answer = []
    let result = 0
    const visited = Array(numbers.length).fill(false)
    function dfs(sum, count) {
        if (count === numbers.length) {
            if (target === sum) result++;
            return
        }
        dfs(sum + numbers[count], count + 1)
        dfs(sum - numbers[count], count + 1)
    }
    dfs(0, 0)
    return result
}