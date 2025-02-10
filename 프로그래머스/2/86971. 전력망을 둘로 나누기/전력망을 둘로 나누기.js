function solution(n, wires) {
  var answers = [];
  for (let i = 0; i < n - 1; i++) {
    const adjWires = Array.from({ length: n + 1 }, () => new Array());
    sliceWires = [...wires.slice(0, i), ...wires.slice(i + 1, n)];
    sliceWires.map((item) => {
      adjWires[item[0]].push(item[1]);
      adjWires[item[1]].push(item[0]);
    });
    let first = 0;
    let second = 0;
    let firstFlag = false;
    const visited = new Array(n + 1).fill(false);
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        if (firstFlag === false) {
          first = dfs(adjWires, visited, i);
          firstFlag = true;
        } else {
          second = dfs(adjWires, visited, i);
        }
      }
    }
    answers.push(Math.abs(first - second));
  }
  return Math.min(...answers);
}

const dfs = (graph, visited, node) => {
  let count = 1;
  visited[node] = true;
  for (let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i];
    if (!visited[next]) {
      count += dfs(graph, visited, next);
    }
  }
  return count;
};