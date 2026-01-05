function solution(k, dungeons) {
    var answer = -1;
    const visited = new Array(dungeons.length+1).fill(false);
    const dfs = (stamina, count) => {
        answer = Math.max(answer, count)
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && stamina >= dungeons[i][0]) {
                visited[i] = true
                dfs(stamina - dungeons[i][1], count+1)
                visited[i] = false
            }
        }
        return
    }
    dfs(k, 0)
    return answer;
}