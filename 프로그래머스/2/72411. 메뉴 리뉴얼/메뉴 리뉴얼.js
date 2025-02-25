/*
똑같은 최댓값들 들고 나와서 계산을 해야하니까 dfs 작업 이후 추가연산이 필요하지 않을까?
*/
function solution(orders, course) {
  const hash = new Map();
  const answers = [];
  const finalAnswers = [];

  orders.forEach((element) => {
    let sortedElement = element.split("").sort().join("");
    for (let j = 0; j < course.length; j++) {
      const stacks = [];
      const dfs = (limit, idx) => {
        if (stacks.length === limit) {
          let str = stacks.join("");
          hash.set(str, (hash.get(str) || 0) + 1);
          return;
        }
        for (let i = idx; i < sortedElement.length; i++) {
          stacks.push(sortedElement[i]);
          dfs(limit, i + 1);
          stacks.pop(sortedElement[i]);
        }
      };
      dfs(course[j], 0);
    }
  });

  hash.forEach((value, key) => {
    if (value >= 2) {
      answers.push({ key, value, length: key.length });
    }
  });

  course.forEach((element) => {
    let arr = answers
      .filter((item) => item.length === element)
      .sort((a, b) => b.value - a.value);
    if (arr.length !== 0) {
      finalAnswers.push(arr[0].key);
      let top = arr[0].value;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].value === top) {
          finalAnswers.push(arr[i].key);
        } else {
          break;
        }
      }
    }
  });
  
  const finalArr = new Set();
  finalAnswers.forEach((element) => {
    finalArr.add(element.split("").sort().join(""));
  });
  return [...finalArr].sort();
}