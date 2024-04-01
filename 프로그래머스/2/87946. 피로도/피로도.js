function solution(k, dungeons) {
    let visited = new Array(dungeons.length).fill(false)
    let result = []
    function backtracking(staminar, count) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && staminar >= dungeons[i][0]) {
                visited[i] = true
                backtracking(staminar-dungeons[i][1], count + 1)
                visited[i] = false
            }
        }
        result.push(count)
    }
    backtracking(k, 0)
    console.log(result)
    return Math.max(...result)
}