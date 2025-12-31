/*
모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
=> 모든 값이 0 일 때 ?

*/
class minHeap {
    constructor() {
        this.heap = []
    }
    push(e) {
        this.heap.push(e)
        this.up_();
    }
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.down_();
        return root
        
    }
    up_() {
        let idx = this.heap.length-1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if(this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx;
            } else break;
        }
        
    }
    down_() {
        let idx = 0;
        let len = this.heap.length
        while(true) {
            let smallest = idx;
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            if(left < len && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            if(right < len && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            if(smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest
        }
        
    }
}
function solution(scoville, K) {
    var answer = 0;
    const heap = new minHeap();
    
    for(item of scoville) heap.push(item)
    while(heap.heap.length > 1 && heap.heap[0] < K) {
        let food1 = heap.pop();
        let food2 = heap.pop();
        heap.push(food1 + (food2 * 2))
        answer++;
    }
    
    return heap.heap[0] < K ? -1 : answer;
}