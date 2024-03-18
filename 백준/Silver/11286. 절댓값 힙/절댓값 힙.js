const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input.shift());
const result = [];

class MinAbsHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (Math.abs(this.heap[index]) < Math.abs(this.heap[parentIndex]) ||
                (Math.abs(this.heap[index]) === Math.abs(this.heap[parentIndex]) && this.heap[index] < this.heap[parentIndex])) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    poll() {
        if (this.heap.length === 0) return 0;

        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleDown(index) {
        while (true) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallest = index;

            if (leftChild < this.heap.length &&
                (Math.abs(this.heap[leftChild]) < Math.abs(this.heap[smallest]) ||
                (Math.abs(this.heap[leftChild]) === Math.abs(this.heap[smallest]) && this.heap[leftChild] < this.heap[smallest]))) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length &&
                (Math.abs(this.heap[rightChild]) < Math.abs(this.heap[smallest]) ||
                (Math.abs(this.heap[rightChild]) === Math.abs(this.heap[smallest]) && this.heap[rightChild] < this.heap[smallest]))) {
                smallest = rightChild;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

const heap = new MinAbsHeap();
for (let i = 0; i < N; i++) {
    if (+input[i] === 0) {
        result.push(heap.poll());
    } else {
        heap.add(+input[i]);
    }
}
console.log(result.join('\n'));
