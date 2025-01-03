// 해쉬에 값을 넣고 해당 값이 있는지 확인, 그리고 그 값에 따라 중복 단어 체크
// 탈락되는 순간 인덱스를 기준으로 n값으로 나눈 값, 몇 번째 나머지 연산자 0일경우 = n번쨰
function solution(n, words) {
  const hash = new Map();
  const stack = []
  var answer
  let index = 1;
  for(let word of words) {
    if(stack.length > 0) { // 단어의 처음과 마지막을 찾는 로직
      let lastWords = stack[stack.length-1]
      let lastWord = lastWords.split("").pop();
      let startWord = word.split("").shift();
      if(lastWord !== startWord) {
        answer = failCheck(index, n)
        break;
      }
    }
    stack.push(word)

    if(hash.get(word) === true) { // 단어의 중복을 찾는 로직
      answer = failCheck(index, n)
      break;
    } else {
      hash.set(word, true)
    }
    index++;
  }

  if(!answer) answer = [0, 0]
  return answer;
}

function failCheck(index, n) {
  let cycle = Math.ceil(index / n)
  let num = (index % n === 0 ? n : index % n)
  return [num, cycle] 
}