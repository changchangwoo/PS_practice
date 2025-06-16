let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const checkPattern = (arr) => {
  const patternArr = [];
  const numArr = [];
  const setPattern = new Set();
  for (let i = 0; i < arr.length; i++) {
    const [pattern, num] = arr[i].split(" ");
    patternArr.push(pattern);
    numArr.push(Number(num));
    setPattern.add(pattern);
  }
  const sortedNumArr = numArr.sort((a, b) => a - b);

  if (setPattern.size === 1) {
    let flag = true;
    for (let i = 1; i < 5; i++) {
      if (sortedNumArr[i - 1] + 1 === sortedNumArr[i]) continue;
      else {
        flag = false;
        break;
      }
    }
    return flag ? 900 + sortedNumArr[4] : 600 + sortedNumArr[4];
  } else {
    return 0;
  }
};

const checkNumber = (arr) => {
  const numArr = [];
  const setNum = new Set();

  for (let i = 0; i < arr.length; i++) {
    const [pattern, num] = arr[i].split(" ");
    numArr.push(Number(num));
    setNum.add(Number(num));
  }
  if (setNum.size === 2) {
    const [sm, lg] = [...setNum].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] === sm) count++;
    }
    if (count === 1) return 800 + lg;
    else if (count === 4) return 800 + sm;
    else if (count === 2) return lg * 10 + sm + 700;
    else if (count === 3) return sm * 10 + lg + 700;
  }

  const sortedNumArr = numArr.sort((a, b) => a - b);
  let flag = true;
  for (let i = 1; i < 5; i++) {
    if (sortedNumArr[i - 1] + 1 === sortedNumArr[i]) continue;
    else {
      flag = false;
      break;
    }
  }
  if (flag === true) return 500 + sortedNumArr[4];

  if (setNum.size === 3) {
    const [sm, md, lg] = [...setNum].sort((a, b) => a - b);
    let [smCount, mdCount, lgCount] = [0, 0, 0];
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] === sm) smCount++;
      if (numArr[i] === md) mdCount++;
      if (numArr[i] === lg) lgCount++;
    }
    if (smCount === 3) return sm + 400;
    if (mdCount === 3) return md + 400;
    if (lgCount === 3) return lg + 400;

    if (smCount === 1) return lg * 10 + md + 300;
    if (mdCount === 1) return lg * 10 + sm + 300;
    if (lgCount === 1) return md * 10 + sm + 300;
  }

  if (setNum.size === 4) {
    const setArr = [...setNum];
    for (let i = 0; i < setArr.length; i++) {
      const arr = numArr.filter((el) => el === setArr[i]);
      if (arr.length === 2) return 200 + setArr[i];
    }
  }

  return sortedNumArr[4] + 100;
};

const arr = input.map((item) => item.trim());
console.log(Math.max(checkPattern(arr), checkNumber(arr)));
