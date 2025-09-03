let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

N = Number(input.shift());
arrN = input.shift().split(" ").map(Number);
M = Number(input.shift());
arrM = input.shift().split(" ").map(Number);
let answer = "";
const hash = new Map();
arrN.forEach((element) => {
  hash.set(element, true);
});

arrM.forEach((element) => {
  if (hash.get(element)) answer += "1";
  else answer += "0";
});

console.log(answer.split("").join("\n"));
