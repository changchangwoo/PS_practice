function solution(n, k) {
  let answer = 0;
  let convertnums = n.toString(k).split("0").map(Number);
  convertnums.forEach((element) => {
    if (getPrimeNumber(element)) answer++;
  });
  return answer;
}

function getPrimeNumber(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}