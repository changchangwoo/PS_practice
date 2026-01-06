
function solution(n, edge) {
    var answer = 0;
    const graph = Array.from({length : n+1}, () => new Array());
    const track = Array(n+1).fill(0);
    for(const [s,e] of edge) {
        graph[s].push(e)
        graph[e].push(s)
    }
    const visited = Array(n+1).fill(false);
    
    const bfs = (v) => {
        const queue = []
        queue.push(v)
        visited[v] = true;
        while(queue.length > 0) {
            const cur = queue.shift();
            for(let i = 0; i < graph[cur].length; i++) {
                let next = graph[cur][i]
                if(!visited[next]) {
                    track[next] = track[cur] + 1
                    queue.push(next)
                    visited[next] = true
                }
            }
        }
    }
    bfs(1)
    const max = Math.max(...track)
    return track.filter(item => item === max).length;
}