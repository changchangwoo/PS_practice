/*
한 번의 한 개의 알파벳만 변경할 수 있다.
words에 있는 단어로만 변환할 수 있다.
최대 50까지의 수
BFS로 탐색 => 그러면 중복 체크가 안되는거아님?, 백트래킹?
1. hit에서 하나 바꿨을 때, 바꿀 수 있는 단어들 전부 탐색해서 안됨, 그러면 추적이 불가능함
2. dfs로 백트래킹해야함.
*/
function solution(begin, target, words) {
    var answer = Infinity;
    const visited = new Array(words.length).fill(false)
    if(!words.includes(target)) return 0
        dfs(begin, 0)
    function dfs(str, count) {
        if(str === target) {
            answer = Math.min(answer, count)
            return;
        }
        for(let i = 0; i < words.length; i++) {
            if(!visited[i] && checkWord(words[i], str)) {
                visited[i] = true
                dfs(words[i], count+1)
                visited[i] = false
            }
        }
        return;
        
    }
    
    return answer === Infinity ? 0 :  answer;
}

function checkWord(word, str) {
    let sum = 0;
    for(let i = 0; i < word.length; i++) {
       if(word[i] === str[i]) sum++;
    }
    if(sum === str.length-1) return true;
    return false
}