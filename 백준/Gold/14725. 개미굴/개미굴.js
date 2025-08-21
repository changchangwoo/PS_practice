let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = Number(input.shift());

const hash = new Map();
for (let i = 0; i < T; i++) {
  const line = input.shift().trim().split(" ");
  const N = Number(line.shift());

  let targetHash = hash;
  while (line.length > 0) {
    const target = line.shift();
    if (targetHash.get(target)) {
      targetHash = targetHash.get(target);
    } else {
      let newHash = new Map();
      targetHash.set(target, newHash);
      targetHash = targetHash.get(target);
    }
  }
}

function gethashdata(hash, depth) {
  let prefix = "";
  for (let i = 0; i < depth; i++) prefix += "--";

  if (hash.size === 0) {
    return;
  }
  const sortedKeys = [...hash.keys()].sort();
  while (sortedKeys.length > 0) {
    const key = sortedKeys.shift();
    console.log(prefix + key);
    gethashdata(hash.get(key), depth + 1);
  }
}

gethashdata(hash, 0);

/*
- A C
- B A
- A B C D

접근법
중첩 해시
=> 구조는 만들었는데..ㅠ

해시 키 값들 정렬
=> 맨 위 해시 꺼냄

=> 밑에 해시 꺼냄
없으면 리턴 ...

*/
