const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);

class Heap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx]
            if (parent <= this.values[idx]) break;

            this.values[parentIdx] = this.values[idx]
            this.values[idx] = parent
            idx = parentIdx;
        }
    }
    extract() {
        if(this.values.length === 0) return 0

        const root = this.values[0];
        const element = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = element
            this.sinkDown();
        }
        return root
    }
    sinkDown() {
        let idx = 0
        const element = this.values[0]
        while(true) {
            let swap = null;
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let leftChild, rightChild
            
            if(leftChildIdx < this.values.length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild < element) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < this.values.length) {
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)) {
                swap = rightChildIdx
            }
        }

            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

const heap = new Heap();
const answer = [];
for(let i = 1; i < input.length; i++) {
    if(input[i] === 0) {
        answer.push(heap.extract())
    } else {
        heap.insert(input[i])
    }
}

console.log(answer.join('\n'))