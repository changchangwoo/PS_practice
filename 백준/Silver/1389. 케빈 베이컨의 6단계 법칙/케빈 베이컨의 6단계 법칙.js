const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({length : N}, () => new Array(N).fill(Infinity))
const answer = []

for(let i = 0; i < M; i++) {
    let [a, b] = input[i].split(' ').map(Number)
    graph[a-1][b-1] = 1
    graph[b-1][a-1] = 1
}
for (let k = 0 ; k < N; k++) {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
            if(i === j) graph[i][j] = 0
        }
    }
}
for(let i = 0; i < graph.length; i++) {
    let sum = graph[i].reduce((a, b) => a + b, 0);
    answer.push({num : i+1, whole : sum})
}
answer.sort((a, b) => {
    if (a.whole !== b.whole) {
        return a.whole - b.whole;
    } else {
        return a.num - b.num;
    }
});
console.log(answer[0].num)