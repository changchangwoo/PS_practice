const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = 10000;
const T = Number(input.shift());

const isPrime = new Array(N).fill(true);

isPrime[0] = false;
isPrime[1] = false;
for (let i = 2; i < N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 0; i < T; i++) {
  const target = Number(input.shift());
  let left = target / 2;
  let right = left;
  while (!isPrime[left] || !isPrime[right]) {
    left -= 1;
    right += 1;
  }
  console.log(left, right);
}
