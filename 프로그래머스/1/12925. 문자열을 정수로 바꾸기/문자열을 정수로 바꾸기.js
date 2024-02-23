function solution(s) {
  let primary = 1;
      let arr = [...s];

  if (s[0] === "+") {
    primary = 1;
    arr.shift();
  } else if (s[0] === "-") {
    primary = -1;
    arr.shift();
  }
  let answer = arr.join("");
  answer = +answer * primary;
  return answer;
}
