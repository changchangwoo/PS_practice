let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
input = input.map(Number);
let s = input[0];
let t = input[1];
let v = new Array(100001).fill(false);

function bfs(start, visited, target) {
  const queue = [];
  queue.push([start, 0]);

  const enqueue = (current, count) => {
    if (current >= 0 && current <= 100000 && !visited[current]) {
      queue.push([current, count]);
      visited[current] = true;
    }
  };

  while (queue.length > 0) {
    const [current, count] = queue.shift();
    if (current === target) {
      console.log(count);
      return;
    }

    enqueue(current - 1, count + 1);
    enqueue(current + 1, count + 1);
    enqueue(current * 2, count + 1);
  }
}

bfs(s, v, t);
