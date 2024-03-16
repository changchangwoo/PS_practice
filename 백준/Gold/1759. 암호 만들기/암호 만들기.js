// 조건1. 서로 다른 알파벳 L개 집합
// 조건2. 정렬된 문자
// 조건3. 최소 한 개의 모음
// 조건4. 최소 두 개의 자음
// 조건5. 중복 제거
// 제한 시간은 2초 넉넉하이

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const vowel = ["a", "e", "i", "o", "u"];
const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const [L, C] = input.shift().split(" ").map(Number);
const alphabets = input.shift().split(" ").sort();
const result = [];
const answer = [];
const visited = Array(C + 1).fill(false);
function backtracking(num) {
  if (result.length === L) {
    if (checkingAlpha(result)) answer.push(result.join(""));
    return;
  }
  for (let i = 0; i < alphabets.length; i++) {
    if (!visited[i] && i >= num) {
      visited[i] = true;
      result.push(alphabets[i]);
      backtracking(i);
      visited[i] = false;
      result.pop();
    }
  }
}
backtracking(0);

function checkingAlpha(arr) {
  let vCount = 0;
  let cCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) vCount++;
    if (consonant.includes(arr[i])) cCount++;
    if (vCount >= 1 && cCount >= 2) return true;
  }
  return false;
}
console.log(answer.join("\n"));
