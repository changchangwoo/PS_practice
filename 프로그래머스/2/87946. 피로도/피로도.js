function solution(k, dungeons) {
    let answer = 0
    const visited = new Array(dungeons.length).fill(false)

    function dfs(k, count) {
        for(let i =0; i < dungeons.length; i++) {
            if(visited[i] == false && k >= dungeons[i][0]) {
                visited[i] = true
                dfs(k - dungeons[i][1], count+1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer,count)
    }

    dfs(k, 0)
    return answer
}