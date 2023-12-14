function solution(k, tangerine) {
    var answer = 0;
    var hash = new Map()
    tangerine.forEach(element => {
        if (!hash.has(element)) {
            hash.set(element, 1)
        } else {
            hash.set(element, hash.get(element) + 1)
        }
    });
    var arr = Array.from(hash, ([key, value]) => ({ no: key, count: value }));
    arr = arr.sort((a, b) => a.count - b.count)
    var sort_tangerin = []
    arr.forEach(element => {
        for (let i = 0; i < element.count; i++) {
            sort_tangerin.push(element.no)
        }
    });
    for(let i = 0; i < tangerine.length -k; i++) {
        sort_tangerin.shift()
    }
    sort_tangerin = new Set(sort_tangerin)
    return sort_tangerin.size
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))