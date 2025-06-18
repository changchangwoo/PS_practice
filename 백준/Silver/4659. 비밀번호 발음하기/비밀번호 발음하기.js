let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const moeum = ["a", "e", "i", "o", "u"];
const jaeum = [
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
  "x",
  "z",
];

for (let text of input) {
  text = text.trim();
  if (text === "end") return;

  let flag = false;
  for (let primeAlpha of moeum) {
    if (text.includes(primeAlpha)) {
      flag = true;
    }
  }
  if (!flag) {
    console.log(`<${text}> is not acceptable.`);
    continue;
  }
  let moeumCount = 0;
  let jaeumCount = 0;
  let prev = null;
  let prevCount = 0;

  for (let textAlpha of text) {
    if (prev === textAlpha && !(textAlpha === "e" || textAlpha === "o")) {
      flag = false;
      break;
    }
    if (moeum.includes(textAlpha)) {
      moeumCount++;
      jaeumCount = 0;
    }
    if (jaeum.includes(textAlpha)) {
      jaeumCount++;
      moeumCount = 0;
    }
    if (moeumCount >= 3 || jaeumCount >= 3) {
      flag = false;
      break;
    }
    prev = textAlpha;
  }

  if (flag) console.log(`<${text}> is acceptable.`);
  else console.log(`<${text}> is not acceptable.`);
}
/*
좋은 패스워드의 조건
1. (a,e,i,o,u) 포함
2. 모음 3개 혹은 자음 3개 연속 X
3. 같은 글자 연속으로 두번 오면 안되나 ee, oo 허용
*/
