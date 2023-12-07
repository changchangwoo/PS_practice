const dfs = (graph, v, vistied) => {
    vistied[v] = true
    console.log(v)

    for (const cur of graph[v]) {
        if (!visited[cur]) {
            dfs(graph, cur, visited)
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
dfs(graph, 1, visited)