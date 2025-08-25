const [F, S, G, U, D] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const FailMessage = "use the stairs";
const visited = new Array(F).fill(false);

if (S === G) {
  console.log(0);
  return;
}

const bfs = (start) => {
  const queue = [];
  let front = 0;
  queue.push([start, 0]);
  visited[start] = true;
  while (front < queue.length) {
    let [c, cdepth] = queue[front++];

    for (let next of [U, D * -1]) {
      const n = c + next;
      if (n === G) return cdepth + 1;

      if (n <= F && n >= 1 && visited[n] === false) {
        visited[n] = true;
        queue.push([n, cdepth + 1]);
      }
    }
  }
};

const answer = bfs(S);
if (answer) console.log(answer);
else console.log(FailMessage);
