/*
종이 조각을 붙여 소수 개수 찾기
numbers 1이상 7이하 => 백트래킹, 완전탐색
numbers를 길이별로 탐색해서 값을 넣는다
그 값을 가지고 소수를 판별
*/

function solution(numbers) {
    let answer = []
    const result = []
    let count = 0
    let visited = new Array(numbers.length).fill(false)
    function dfs(num) {
        if(result.length === num) {
            answer.push(result.join(''))
            return
        }
        for (let i = 0; i < numbers.length; i++ ) {
            if(!visited[i]) {
                visited[i] = true
                result.push(numbers[i])
                dfs(num)
                visited[i] = false
                result.pop()
            }
        }
    }
    for(let i = 1; i <= numbers.length; i++) {
        dfs(i)
    }
    answer = answer.map(val => +val)
    let set = new Set(answer)
    for(let item of set) {
        if(item < 2) continue
        else {
            if(isPrime(item)) count++;
        }
    }
    return count
}

function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value%i ==0) {
            return false
        }
    }
    return true
}