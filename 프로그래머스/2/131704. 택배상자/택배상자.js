/* 보조 컨테이너 벨트는 pop 연산만을 수행*/
function solution(orders) {
  const subContainer = [];
  let cur = 1;
  let curOrderIdx = 0;
  let answer = 0;
  while (curOrderIdx !== orders.length) {
    let target = orders[curOrderIdx];
    if (cur > target && subContainer[subContainer.length - 1] !== target) {
      break;
    }
    if (cur === target || subContainer[subContainer.length - 1] === target) {
      if (subContainer[subContainer.length - 1] === target) {
        subContainer.pop();
      } else {
        cur++;
      }
      answer++;
      curOrderIdx++;
      continue;
    }
    if (cur !== target) {
      subContainer.push(cur);
    }
    cur++;
  }
  return answer;
}