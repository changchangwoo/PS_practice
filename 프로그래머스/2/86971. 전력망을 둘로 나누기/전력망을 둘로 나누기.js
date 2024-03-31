function solution(n, wires) {
    let result = []
    for(let i = 0; i < n; i++) {
        let copyWires = JSON.parse(JSON.stringify(wires))
        copyWires[i] = []
        const node = Array.from({ length: n + 1 }, () => [])
        const visited = new Array(n+1).fill(false)
        createNode(node, copyWires)
        let tempCount = []
        for(let j = 1; j < n+1; j++) {
            if(!visited[j] && node[j].length > 0) {
                tempCount.push(bfs(j, node, visited))
            }
        }
        result.push(tempCount)
    }
    let min = 100000000
    for(let item of result) {
        if(item.length === 2) {
            let check = Math.max(...item) - Math.min(...item)
            if(min > check) min = check
        } else {
            let check = item -1
            if(min > check) min = check
        }
    }
    return min;
}

function bfs(start, node, visited) {
    const queue = []
    let count = 0
    queue.push(start)
    visited[start] = true
    while (queue.length > 0) {
        let v = queue.shift()
        count++;
        for (const cur of node[v]) {
            if (!visited[cur]) {
                queue.push(cur)
                visited[cur] = true
            }
        }
    }
    return count
}

function createNode(node, wires) {
    for (let wire of wires) {
        if(wire.length === 0) continue
        let startNode = wire[0]
        let endNode = wire[1]
        node[startNode].push(endNode)
        node[endNode].push(startNode)
    }
    return node
}
