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
            this.values[idx] = parent
            this.values[parentIdx] = element
            idx = parentIdx
        }
    }

    extract() {
        if(this.values.length === 0) return -1
        let root = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return root;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[idx];

        while(true) {
            let swap = null;
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;

            let leftChild,rightChild
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild < element) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
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

function solution(scoville, K) {
    var answer = 0

    const heap = new Heap();
    scoville.forEach(element => {
        heap.insert(element)
    });

    while(true) {
        const food = heap.extract()

        if(food < K) {
            let secondFood = heap.extract();
            if(secondFood === -1) {
                answer = -1;
                break;
            }
            
            let newFood = food + (secondFood * 2)
            answer++;
            heap.insert(newFood)
        } else {
            break;
        }
    }

    return answer;
}

