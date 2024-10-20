/*
백트래킹이 가능한 범위
=> 일단 중복 없는 것들로다가 다 구하고 대소 관계를 돌려볼까?
=> 백트래킹을 하면서 조건에 대소 관계를 확인하고 맞는것들만 넣을까?? == 이거다

*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0])
let M = input[1].split(' ')

const visited = new Array(10).fill(false)
const result = []
const arr = []
const backtracking = () => {
    if(arr.length === N+1){
        for(let i = 1; i < arr.length; i++) {
            if(M[i-1] === "<" && !(arr[i-1] < arr[i])) return
            else if(M[i-1] === ">" && !(arr[i-1] > arr[i])) return
        }
        result.push([...arr])
        return
    }
    for (let i = 0; i <= 9; i++) {
        if(visited[i] === false) {
            visited[i] = true
            arr.push(i)
            backtracking();
            visited[i] = false;
            arr.pop();
        }
    }
}

backtracking();

const numResult = result.map(values => values.join(''))
console.log(numResult[numResult.length-1])
console.log(numResult[0])
