class _heap {
    constructor() {
        this.heap = []
    }

    _isHigherPriority(a, b) {
        if (a.et !== b.et) return a.et < b.et;
        if (a.st !== b.st) return a.st < b.st;
        return a.num < b.num;
    }

    push(el) {
        this.heap.push(el)
        this._up()
    }

    pop() {
        if (this.heap.length === 0) return
        if (this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._down()
        return root
    }

    _up() {
        let idx = this.heap.length - 1
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if (this._isHigherPriority(this.heap[idx], this.heap[parentIdx])) {
                [this.heap[idx], this.heap[parentIdx]] =
                    [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx
            } else break
        }
    }

    _down() {
        let idx = 0
        const len = this.heap.length

        while (true) {
            let smallest = idx
            let left = idx * 2 + 1
            let right = idx * 2 + 2

            if (left < len && this._isHigherPriority(this.heap[left], this.heap[smallest])) {
                smallest = left
            }
            if (right < len && this._isHigherPriority(this.heap[right], this.heap[smallest])) {
                smallest = right
            }

            if (smallest === idx) break
            [this.heap[idx], this.heap[smallest]] =
                [this.heap[smallest], this.heap[idx]]
            idx = smallest
        }
    }
}


function solution(jobs) {
    var answer = 0;
    const s_jobs = jobs.map((job,index) => ({st : job[0], et: job[1], num : index})).sort((a, b) => a.st - b.st)
    const heap = new _heap();
    let tic = 0;
    let idx = 0;
    let completedJobs = 0

    while(completedJobs < s_jobs.length) {
        while(idx < s_jobs.length && s_jobs[idx].st <= tic) {
            heap.push(s_jobs[idx])
            idx++;
        }
        if(heap.heap.length === 0) {
            tic = s_jobs[idx].st
        } else {
        let job = heap.pop();
        tic += job.et
        answer += (tic - job.st);
        completedJobs++;
        }
    }
    return Math.floor(answer / s_jobs.length)
}