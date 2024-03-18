class MinHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    heappush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2)
        
        while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2)
        }
    }
    
    heappop() {
        const min = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if(this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

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
        else this.heap[1] = this.heap.pop()
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