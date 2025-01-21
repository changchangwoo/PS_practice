/*
1- 커서 한 칸 아래로 내림 => i에서 i+1로
2- 커서 위로 한 칸 올림 => i에서 i-1로
3- 선택한 채널 한 칸 아래로 내림 => i와 i+1위치 변경, 커서도 i+1
4- 선택한 채널 위로 올림 => i와 i-1 위치 변경, 커서도 i-1

동작 이해는 완료
화살표를 내리는 1번의 경우와 3번의 경우 차이

KBS1 KBS2 붙어있는 경우 3번을 쓰는것이 한 칸 줄일 수 있음
가장 기본적인 조합 = KBS1을 1번으로 찾고 KBS1을 1번으로 올린다
배열 shift() pop()으로 수행하면 너무 오래걸리니 자체 queue 구현

*/
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map((item) => item.trim());
const step = ["KBS1", "KBS2"];
let stepLevel = 0;
let idx = 0;
let answer = "";

const swap = (a, b, arr) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

while (true) {
  if (arr[0] === "KBS1" && arr[1] === "KBS2") break;
  if (arr[0] === "KBS1" && stepLevel === 0) stepLevel = 1;

  if (arr[idx] === step[stepLevel]) {
    if (idx === 0) continue;
    swap(idx, idx - 1, arr);
    idx -= 1;
    answer += "4";
  } else {
    if (idx === N - 1) continue;
    idx += 1;
    answer += "1";
  }
}

console.log(answer);
