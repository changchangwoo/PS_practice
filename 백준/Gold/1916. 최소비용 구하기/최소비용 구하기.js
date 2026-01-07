const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift();
const M = +input.shift();
const arr = input.map((item => item.split(' ').map(Number)))
const [SS, SE] = arr.pop();

class Heap {
    constructor() {
        this.heap = [];
    }
    push(el) {
        this.heap.push(el)
        this._up();
    }
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        this._down();
        return root

    }
    _up() {
        let idx = this.heap.length -1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if(this.heap[idx].dist < this.heap[parentIdx].dist) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx
            } else break;
        }
    }
    _down() {
        let idx = 0
        let len = this.heap.length
        while(true) {
            let smallest = idx;
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            if(left < len && this.heap[left].dist < this.heap[smallest].dist) {
                smallest = left
            }
            if(right < len && this.heap[right].dist < this.heap[smallest].dist) {
                smallest = right
            }
            if(smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest
        }
    }
}

const graph = Array.from({length : N+1}, () => new Array())
const distance = new Array(N+1).fill(Infinity)
for(const [s, e, v] of arr) {
    graph[s].push({to : e, dist : v})
}
const heap = new Heap();
distance[SS] = 0
heap.push({to : SS, dist : 0})
while(heap.heap.length > 0) {
    const {to, dist} = heap.pop();
    if(dist > distance[to]) continue;
    for(const next of graph[to]) {
        const cur = dist + next.dist
        if(distance[next.to] > cur) {
            distance[next.to] = cur
            heap.push({to : next.to, dist : cur})
        }
    }
}
console.log(distance[SE])

