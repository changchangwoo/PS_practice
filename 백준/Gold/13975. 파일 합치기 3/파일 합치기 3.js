const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n');
const arr = []
const answer = [];

class Heap {
    constructor () {
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length-1;
        let element = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]
            if(parent <= element) break;
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx 
        }
    }

    extract() {
        if (this.values.length === 0) return null;
        let root = this.values[0]
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return root
    }

    sinkDown() {
        let idx = 0
        let element = this.values[idx]
        let length = this.values.length;
        while(true) {
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let swap = null;
            let leftChild,rightChild;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild < element) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIdx
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap;
        }
    }
}
for(let i = 0; i < input.length; i++) {
    arr.push(input[i].split(' ').map(Number))
}

const T = arr.shift();
for(let i = 0; i < T; i++) {
    const K = arr.shift();
    const files = arr.shift();
    const heap = new Heap();
    let sum = 0;

    for(let j = 0; j < K; j++) {
        heap.insert(files[j])
    }
    while(true) {
        if(heap.values.length === 1) break
        let firstFile = heap.extract()
        let secondFile = heap.extract();
        let newFile = firstFile+secondFile
        sum = sum + newFile
        heap.insert(newFile)
    }

    answer.push(sum)
}

console.log(answer.join('\n'));