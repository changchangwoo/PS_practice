// 주어진 배열
let input = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

// 완전탐색을 사용하여 0을 1로 바꾸는 과정을 총 3번 수행한 모든 경우의 그래프 출력
function dfs(graph, count) {
    if (count === 3) {
        // 3번의 변경이 완료된 그래프 출력
        console.log(graph);
        return;
    }

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 0) {
                // 현재 위치가 0인 경우 1로 변경하고 재귀 호출
                let newGraph = JSON.parse(JSON.stringify(graph)); // 깊은 복사
                newGraph[i][j] = 1;
                dfs(newGraph, count + 1);
            }
        }
    }
}

// 초기 그래프 출력
console.log("Initial Graph:");
console.log(input);

// 완전탐색을 사용하여 0을 1로 바꾸는 과정을 총 3번 수행한 모든 경우의 그래프 출력
console.log("All Graphs after 3 changes:");
dfs(input, 0);
