// 0을 입력받으면 가장 큰 값을 출력한다
// 빈 배열일 떄 0을 입력받으면 0을 출력한다
// 최대 힙을 구현한다
const input = require('fs').readFileSync("input.txt").toString().trim().split('\n')
const N = Number(input.shift())
const result = []
class MaxHeap {
    constructor() {
        this.heap = [null]
    }
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    add(value) {
        this.heap.push(value)
        let curIdx = this.heap.length - 1
        let parIdx = Math.floor(curIdx / 2);
        while(curIdx > 1 && this.heap[curIdx] > this.heap[parIdx]) {
            this.swap(curIdx, parIdx)
            curIdx = parIdx
            parIdx = Math.floor(curIdx / 2);
        }
    }
    poll() {
        if(this.heap.length === 1) return 0
        const max = this.heap[1]
        if(this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop() // 3 넣음
        let curIdx = 1;
        let leftIdx = curIdx * 2
        let rightIdx = curIdx * 2 + 1
        if(!this.heap[leftIdx]) return max
        if(!this.heap[rightIdx]) {
            if(this.heap[leftIdx] > this.heap[curIdx]) {
                this.swap(leftIdx, curIdx)
            }
            return max
        }
        while (leftIdx < this.heap.length) {
            let maxIdx = leftIdx;
            if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[leftIdx]) {
                maxIdx = rightIdx;
            }
            if (this.heap[maxIdx] <= this.heap[curIdx]) break;
            
            this.swap(maxIdx, curIdx);
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return max
    }
}

const maxHeap = new MaxHeap()
for (let i = 0; i < N; i++) {
    if(+input[i] === 0) result.push(maxHeap.poll())
    else maxHeap.add(+input[i])
}
console.log(result.join('\n'))
