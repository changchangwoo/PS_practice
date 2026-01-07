/*
정점의 개수 V와, 가선의 개수 E

*/
class Heap {
    constructor() {
        this.heap = [];
    }
    push(el) {
        this.heap.push(el)
        this._up();
    }
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        this._down();
        return root

    }
    _up() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx].dist < this.heap[parentIdx].dist) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx
            } else break;
        }

    }
    _down() {
        let idx = 0;
        let len = this.heap.length;
        while (true) {
            let smallest = idx;
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            if (left < len && this.heap[left].dist < this.heap[smallest].dist) {
                smallest = left
            }
            if (right < len && this.heap[right].dist < this.heap[smallest].dist) {
                smallest = right
            }
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest
        }
    }
}

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const K = +input.shift();
const arr = input.map((item) => item.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => new Array())
const distance = new Array(N + 1).fill(Infinity)
const heap = new Heap();

distance[K] = 0
heap.push({ to: K, dist: 0 })


for (const [s, e, v] of arr) {
    graph[s].push({ to: e, dist: v })
}



while (heap.heap.length > 0) {
    const { to, dist } = heap.pop();
    if (dist > distance[to]) continue;
    for (const next of graph[to]) {
        const acc = dist + next.dist
        if (distance[next.to] > acc) {
            distance[next.to] = acc
            heap.push({ to: next.to, dist: acc })
        }
    }
}

distance.shift();
const answer = distance.map((item) => {
    if (item === Infinity) return "INF"
    else return item
})
console.log(answer.join('\n'))