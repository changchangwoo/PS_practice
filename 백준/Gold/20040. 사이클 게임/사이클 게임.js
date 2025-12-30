const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map((item) => item.split(' ').map(Number))

const getParent = (parent, idx) => {
    if (parent[idx] === idx) return idx;
    return parent[idx] = getParent(parent, parent[idx])
}

const unionParent = (parent, idx1, idx2) => {
    const p1 = getParent(parent, idx1)
    const p2 = getParent(parent, idx2)
    if (p1 < p2) parent[p2] = p1
    else parent[p1] = p2
}

const findParent = (parent, idx1, idx2) => {
    const p1 = getParent(parent, idx1)
    const p2 = getParent(parent, idx2)
    if (p1 === p2) return true
    else false
}

const parent = Array.from({ length: N + 1 }, (_, idx) => idx)
let count = 0;
let flag = false
for (item of arr) {
    count++;
    const [sv, ev] = item
    if (!findParent(parent, sv, ev)) {
        unionParent(parent, sv, ev);
    } else {
        flag = true
        break;
    }
}
flag === false ? console.log(0) : console.log(count)
