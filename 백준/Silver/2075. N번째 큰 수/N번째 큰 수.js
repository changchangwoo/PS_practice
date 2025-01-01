const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})

const Arr = []

class Heap {
  constructor() {
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
      let parentIdx = Math.floor((idx-1)/2)
      let parent = this.values[parentIdx];
      if(parent <= element) break;
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  extract() {
    if(this.values.length === 0) return
    if(this.values.length === 1) return this.values.pop();
    let root = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkdown();
    return root

  }
  sinkdown() {
    let element = this.values[0]
    let length = this.values.length
    let idx = 0;
    while(true) {
      let leftChildIdx = (idx * 2) + 1;
      let rightChildIdx = (idx * 2) + 2;
      let swap = null;
      let leftChild, rightChild
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild < element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if((rightChild < element && swap === null) ||
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
const minHeap = new Heap();

let N = -1

rl.on("line", (line) => {
  if(N === -1) {
    N = parseInt(line);
    return
  }
  line.split(" ").map((num) => {
    minHeap.insert(Number(num))
    if(minHeap.values.length > N) {
      minHeap.extract();
    }
  })

}).on("close", () => {
  console.log(minHeap.values[0])

});
