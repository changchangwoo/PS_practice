const bfs = (graph, start, visited) => {
    const q = [];
    q.push(start);
    visited[start] = true;

    while (q.length !== 0) {
        const v = q.shift();
        console.log(v);

        for (const cur of graph[v]) {
            if (!visited[cur]) {
                q.push(cur);
                visited[cur] = true;
            }
        }
    }
}

let graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
]

let visited = new Array(9).fill(false)

bfs(graph, 1, visited);