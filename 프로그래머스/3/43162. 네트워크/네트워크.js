function adjacencyMatrixToAdjacencyList(matrix) {
    const n = matrix.length;
    const adjacencyList = new Array(n).fill(null).map(() => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                adjacencyList[i].push(j + 1);
            }
        }
    }
    return adjacencyList;
}

function dfs(list, v, visited) {
    visited[v] = true
    list[v].forEach(element => {
        if (!visited[element]) dfs(list, element, visited)
    });
}

function solution(n, computers) {
    var answer = 0;
    let adjacencyList = adjacencyMatrixToAdjacencyList(computers);
    adjacencyList = [[]].concat(adjacencyList)
    visited = new Array(adjacencyList.length).fill(false)
    console.log(adjacencyList, visited)
    for (let i = 1; i < adjacencyList.length; i++) {
        if (visited[i] === true) continue
        else {
            dfs(adjacencyList, i, visited)
            answer++
        }
    }
    return answer;
}