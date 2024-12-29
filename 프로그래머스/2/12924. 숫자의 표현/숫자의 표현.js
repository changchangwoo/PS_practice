function solution(n) {
let answer = 0;
if(n === 1) return 1;

for(let i = 1; i <= Math.round(n/2); i++) {
    let sum = 0;
    for(let j = i; j <= Math.round(n/2); j++) {
      sum += j
      if(sum > n) break;
      if(sum === n) {
        answer++;
        break;
      }
    }
  }

  return answer+1;
}