const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input.shift().split(' ').map(Number);

  const getParent = (parent, idx) => {
    if (parent[idx] === idx) return idx;
    return parent[idx] = getParent(parent, parent[idx]);
  };

  const unionParent = (parent, a, b) => {
    const pA = getParent(parent, a);
    const pB = getParent(parent, b);
    if (pA < pB) parent[pB] = pA;
    else parent[pA] = pB;
  };

  const findParent = (parent, a, b) => {
    const pA = getParent(parent, a);
    const pB = getParent(parent, b);
    return pA === pB ? "YES" : "NO";
  };

  const parent = Array.from({ length: N + 1 }, (_, idx) => idx);
  const answer = [];

  for (const line of input) {
    const [key, a, b] = line.split(' ').map(Number);
    if (key === 0) unionParent(parent, a, b);
    else answer.push(findParent(parent, a, b));
  }

  console.log(answer.join('\n'));
});
