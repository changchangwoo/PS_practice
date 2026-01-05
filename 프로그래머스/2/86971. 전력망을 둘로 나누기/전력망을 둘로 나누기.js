/*

*/
function solution(n, wires) {
    var answer = Infinity;
    for(let i = 1; i <= n; i++) {
        const graph = Array.from({length : n+ 1}, () => new Array())
        for(let j = 0; j < wires.length; j++) {
            const [s, e] = wires[j]
            if(s === i || e === i) continue;
            graph[s].push(e)
            graph[e].push(s)
        }
        const visited = new Array(n+1).fill(false)

        function bfs(s) {
        let count = 1;
        const queue = []
        queue.push(s)
        visited[s] = true
        while(queue.length > 0) {
            const cur = queue.shift();
            for(let i = 0; i < graph[cur].length; i++) {
                if(!visited[graph[cur][i]]) {
                    queue.push(graph[cur][i])
                    count++;
                    visited[graph[cur][i]] = true
                }
            }
           }
        return count
        }
        let temp = []
        for(let i = 1; i < n+1; i++) {
            if(!visited[i]) {
                temp.push(bfs(i))
            }

        }
        temp.sort((a, b) => b - a);
        let a = temp.shift();
        let b = temp.reduce((acc, cur) => acc + cur, 0)
        answer = Math.min(answer, Math.max(a, b)- Math.min(a, b))
    }
    return answer;
}

