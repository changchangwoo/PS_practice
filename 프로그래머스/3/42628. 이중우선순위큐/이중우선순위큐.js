class _minHeap {
    constructor() {
        this.heap = []
    }
    push(el) {
        this.heap.push(el)
        this._up();
    }
    pop() {
        if(this.heap.length === 0) return 0;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down();
        return root
        
    }
    _up() {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if(this.heap[idx].value < this.heap[parentIdx].value) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx;
            } else break;
        }
    }
    _down() {
        let idx = 0;
        let len = this.heap.length;
        while(true) {
            let smallest = idx;
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            if(left < len && this.heap[left].value < this.heap[smallest].value) {
                smallest = left;
            }
            if(right < len && this.heap[right].value < this.heap[smallest].value) {
                smallest = right;
            }
            if(smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest;
        }
    }
}

class _maxHeap {
    constructor() {
        this.heap = []
    }
    push(el) {
        this.heap.push(el)
        this._up();
    }
    pop() {
        if(this.heap.length === 0) return
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down();
        return root
        
    }
    _up() {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if(this.heap[idx].value > this.heap[parentIdx].value) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx;
            } else break;
        }
    }
    _down() {
        let idx = 0;
        let len = this.heap.length;
        while(true) {
            let smallest = idx;
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            if(left < len && this.heap[left].value > this.heap[smallest].value) {
                smallest = left;
            }
            if(right < len && this.heap[right].value > this.heap[smallest].value) {
                smallest = right;
            }
            if(smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest;
        }
    }
}

function solution(operations) {
    var answer = [];
    let index = 0;
    const set = new Set();
    const minHeap = new _minHeap();
    const maxHeap = new _maxHeap();
    for(item of operations) {
        const [key, value] = item.split(' ')
        if(key === "I") {
            minHeap.push({value : +value, i : index})
            maxHeap.push({value : +value, i : index})
            index++;
        } else if (key === "D" && value === "1") {
            while(maxHeap.heap.length > 0) {
            let pop = maxHeap.pop();
                if(!set.has(pop.i)) {
                    set.add(pop.i)
                    break;
                }
            }
        }
        else if (key === "D" && value === "-1") {
            while(minHeap.heap.length > 0) {
            let pop = minHeap.pop();
                if(!set.has(pop.i)) {
                    set.add(pop.i)
                    break;
                }
            }            
        }
    }

    while(maxHeap.heap.length > 0) {
        let pop = maxHeap.pop();
        if(!set.has(pop.i)) {
            answer.push(pop.value)
            break;
        }
    }
    
        while(minHeap.heap.length > 0) {
        let pop = minHeap.pop();
        if(!set.has(pop.i)) {
            answer.push(pop.value)
            break;
        }
    }
    
    
    return answer.length === 0 ? [0, 0] : answer;
}