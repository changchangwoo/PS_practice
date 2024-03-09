const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const hash = new Map();

  for (let j = 0; j < N; j++) {
    let [key, value] = input.shift().trim().split(" ");
    if (!hash.has(value)) hash.set(value, 1);
    else hash.set(value, hash.get(value) + 1);
  }

  if (N === 0) console.log(0);
  else if (hash.size === 1) console.log(N);
  else {
    let sum = 1;
    hash.forEach((value, key) => {
      sum = (value + 1) * sum;
    });
    console.log(sum - 1);
  }
}
