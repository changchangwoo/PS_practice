/*
1. 유니온파인드로도 찾을 수 있을 것 같고
2. bfs로도 찾을 수 있을 것 같음
*/
function solution(n, computers) {
    const graph = Array.from({length : n+1}, () => new Array())
    const visited = new Array(n+1).fill(false)

    for(let i = 0; i < computers.length; i++) {
        for(let j = 0; j < computers[i].length; j++) {
            if(computers[i][j] === 1) {
                if(i === j) continue;
                graph[i+1].push(j+1)
            }
        }
    }
    
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(!visited[i]) {
            count++;
            bfs(i)
        }
    }
    
    function bfs(v) {
        const queue = []
        queue.push(v)
        while(queue.length > 0) {
            const cv = queue.shift();
            for(let i = 0; i < graph[cv].length; i++) {
                const next = graph[cv][i]
                if(!visited[next]) {
                    queue.push(next)
                    visited[next] = true
                }
            }
        }
    }
    return count;
}