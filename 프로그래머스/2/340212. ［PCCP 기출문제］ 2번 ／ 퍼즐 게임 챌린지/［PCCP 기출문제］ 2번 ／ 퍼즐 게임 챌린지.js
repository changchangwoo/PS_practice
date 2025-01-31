/*
시간 복잡도를 고려해서 이분 탐색으로 접근
difss의 가장 높은 수를 max, 가장 낮은수를 min라고 했을 떄
그 중간수를 pivot으로 정하고


*/

function solution(diffs, times, limit) {
  let min = 1
  let max = 100000
  while (min <= max) {
    let pivot = Math.floor((min + max) / 2);
    let sum = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > pivot) {
        sum += ((times[i] + times[i - 1]) * (diffs[i] - pivot)) + times[i];
      } else if (diffs[i] <= pivot) {
        sum += times[i];
      }
    }
    if (sum > limit) {
        min = pivot + 1
    } else {
        max = pivot - 1
    }
  }
  return min
}
