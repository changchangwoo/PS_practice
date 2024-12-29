function solution(s) {
  return repeaetBinary(s, 0, 0);
}

function repeaetBinary(s, count, removeCount) {
  if(s.length === 1) {
    return [count, removeCount];
  }
  let originLength = s.length
  let replaceStr = s.replaceAll("0", "");
  let replaceLength = replaceStr.length
  let zeroCount = originLength-replaceLength
  let binary = replaceStr.length;
  let binaryString = binary.toString(2)

  return repeaetBinary(binaryString, count+1, removeCount+zeroCount )
}
