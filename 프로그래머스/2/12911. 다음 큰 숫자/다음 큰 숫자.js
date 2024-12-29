function solution(n) {
  let orginBinaryN = n.toString(2);
  let n_count = calcNumber(orginBinaryN)


  while(true)
  {
    if(calcNumber(n+1) === n_count) {
      return n+1
    }
    n = n+1
  }
}

function calcNumber(str) {
  let originStr = str.toString(2);
  let newStr= str.toString(2).replaceAll("1", "");
  return originStr.length - newStr.length;
}
