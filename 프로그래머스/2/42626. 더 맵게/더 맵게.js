class minHeap {
    constructor() {
        this.values = []
    }
    insert(el) {
        this.values.push(el)
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (this.values[idx] >= parent) break;
            this.values[idx] = parent
            this.values[parentIdx] = element
            idx = parentIdx
        }
    }
    export() {
        if (this.values.length === 0) return null
        if (this.values.length === 1) return this.values.pop();
        let root = this.values[0]
        this.values[0] = this.values.pop();
        this.sinkDown();
        return root
    }
    sinkDown() {
        let idx = 0;
        let element = this.values[idx]
        let len = this.values.length
        while (true) {
            let leftChild, rightChild;
            let swap = null;
            let leftChildIdx = (idx * 2) + 1
            let rightChildIdx = (idx * 2) + 2
            if (leftChildIdx < len) {
                leftChild = this.values[leftChildIdx]
                if (this.values[idx] > leftChild) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < len) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && element > rightChild) ||
                    (swap !== null) && leftChild > rightChild) {
                    swap = rightChildIdx
                }
            }
            if (!swap) return
            this.values[idx] = this.values[swap]
            this.values[swap] = element;
            idx = swap
        }
    }


}
function solution(scoville, K) {
    var answer = 0;
    const heap = new minHeap();
    scoville.forEach(element => {
        heap.insert(element)
    });
    while (true) {
        ingre1 = heap.export();
        ingre2 = heap.export();
        if (ingre1 >= K) break
        if (!ingre1 || !ingre2) return -1
        heap.insert(ingre1 + (ingre2 * 2))
        answer++;
    }
    return answer
}

console.log(solution([1, 2, 3, 9, 10, 12], 123123))