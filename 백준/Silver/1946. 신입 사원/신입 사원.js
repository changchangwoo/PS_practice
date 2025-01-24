/*

다른 지원자와 비교했을 때,
서류 심사 성적과 면접 시험 성적 중 우세해야함

서류 순으로 정렬
뒤에있는 값들은 항상 서류보다 순위가 낮음 => 반드시 앞보다 면접 순위가 높아야만 입사가 가능
*/

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const answers = [];
for (let i = 0; i < T; i++) {
  let answer = 0;
  const N = Number(input.shift());
  const arr = input.splice(0, N).map((line) => line.split(" ").map(Number));
  const sortArr = arr.sort((a, b) => a[0] - b[0]);
  let min = sortArr[0][1];
  for (let j = 1; j < sortArr.length; j++) {
    if (min < sortArr[j][1]) continue;
    min = sortArr[j][1];
    answer++;
  }
  answers.push(answer + 1);
}
console.log(answers.join("\n"));
