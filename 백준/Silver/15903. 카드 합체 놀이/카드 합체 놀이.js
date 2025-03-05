/*
가장 작은수를 구하는 방법 
정렬? => 동작할떄마다 해야함. 무조건 시간초과
힙? =>
*/

class minHeap {
  constructor() {
    this.values = [];
  }
  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent <= element) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  extract() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    let root = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown();
    return root;
  }
  sinkDown() {
    let idx = 0;
    let element = this.values[idx];
    let len = this.values.length;
    while (true) {
      let swap = null;
      let leftChild, rightChild;
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const heap = new minHeap();

arr.forEach((element) => {
  heap.insert(element);
});

for (let i = 0; i < M; i++) {
  let min1 = heap.extract();
  let min2 = heap.extract();
  heap.insert(min1 + min2);
  heap.insert(min1 + min2);
}

let sum = heap.values.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0);
console.log(sum.toString());
