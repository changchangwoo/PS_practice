const N = 5

const graph = [
    [Infinity, 1, Infinity, 2, Infinity],
    [1, Infinity, 3, Infinity, 2],
    [Infinity, 3, Infinity, Infinity, 1],
    [2, Infinity, Infinity, Infinity, 2],
    [Infinity, 2, 1, 2, Infinity],
];

const visited = Array(N).fill(false)
const dist = visited.map((_, i) => graph[0][i])

console.log(dist)

const findSmallestNode = (visited, distance) => {
    let minDist = Infinity;
    let minIdx = 0;
    for (let i = 0; i < distance.length; i++) {
        if (visited[i]) continue;
        if (distance < minDist) {
            minDist = distance[i];
            minIdx = i;
        }
    }
    return minIdx;
}

const dijkstra = (graph, visited, distance) => {
    distance[0] = 0;
    visited[0] = true

    for(let i = 0; i < distance.length; i++) {
        const nodeIdx = findSmallestNode(visited, distance);
        console.log(nodeIdx)
        visited[nodeIdx] = true
        for(let j = 0; j < distance.lnegth; j++) {
            if(visited[j]) continue
            if(distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
            distance[j] = distance[nodeIdx] + graph[nodeIdx][j]
        }
    }
}

dijkstra(graph, visited, dist)
console.log(graph)

/*
        현재 방문한 노드는 거리 테이블 상에서 가장 거리가 짧은 값을 가진 노드. 
        다음에 방문할 노드에 저장된 값이
        "현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"보다 크다면
        "현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"를 거리 테이블의 다음 방문할 노드에 저장
*/