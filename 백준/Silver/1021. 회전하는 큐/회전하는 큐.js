/*
- 첫번쨰 원소 뽑기 : shift()와 동일
- 왼쪽 한 칸 이동 : shift() , push()
- 오른쪽 한 칸 이동 : pop() , unshift()
직접 큐를 구현해야할까? => 길이가 짧아서 우선 그대로

최소한으로 값을 구하려면 
1. 몇번 인덱스에 있는지 우선적으로 확인
2. 배열의 길이를 기준으로 인덱스에 더 가까운 순으로 연산 수행
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map((item) => Number(item))
let answer = 0;
const queue = []
for (let i = 1; i <=N; i++) {
    queue.push(i)
}

while(arr.length > 0) {
    let target = arr.shift();
    let targetIdx = queue.indexOf(target)
    while(true) {
    if(queue[0] === target) {
        queue.shift();
        break;
    }
        if((queue.length / 2) < targetIdx) { // 중간보다 타겟 위치가 더 멀다 => 3번 수행
        queue.unshift(queue.pop())
        answer++;
    } 
    else { // 중간보다 타겟 위치가 더 가깝다 = 2번 수행
        queue.push(queue.shift())
        answer++;
    }
}
}

console.log(answer)
