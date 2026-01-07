/*
마을의 개수 N은 1이상 50이하 자연수
road의 길이 1이상 2000이하
a, b = 연결된 마을의 번호
c = 비용
*/

class _heap {
    constructor() {
        this.heap = []
    }
    push(el) {
        this.heap.push(el)
        this._up();
    }
    pop() {
        if(this.heap.length === 0) return
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        this._down();
        return root
    }
    _up() {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx -1) / 2);
            if(this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx;
            } else break;
        }
    }
    _down() {
        let idx = 0;
        let len = this.heap.length
        while(true) {
            let smallest = idx;
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            if(left < len && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if(right <len && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            if(smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest;
        }
        
    }
}
// 1번 마을을 기준으로 K 이하의 시간에 배달이 가능한 마을의 개수를 return
function solution(N, road, K) {
    const heap = new _heap();
    const distance = new Array(N+1).fill(Infinity)
    const graph = Array.from({length : N+1}, () => new Array())
    for(const [s, e, g] of road) {
        graph[s].push({to : e, dist : g})
        graph[e].push({to : s, dist : g})
    }
    heap.push({to:1, dist: 0})
    distance[1] = 0
    while(heap.heap.length > 0) {
        const {to, dist} = heap.pop();
        graph[to].forEach((next) => {
            let acc = distance[to] + next.dist
            if(distance[next.to] > acc) {
               distance[next.to] = acc
                heap.push(next)
            }
        })
        
    }
    return distance.filter(item => item <= K).length;
}