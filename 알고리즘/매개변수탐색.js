const input = require('fs').readFileSync("input.txt").toString().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const woods = input.shift().split(' ').map(Number)
const sortedWoods = woods.sort((a,b) => a-b)

const checkWoods = (max) => {
    let sum = 0
    for(let i = 0; i < N; i++) {
        if(sortedWoods[i] - max > 0) sum += (sortedWoods[i] - max)
    }
    return sum
}

const binarySearch = (max) => {
    let low = 0
    let high = max
    while(low <= high) {
        let mid = Math.floor((low+high) / 2)
        let woodHeight = checkWoods(mid)
        if(woodHeight >= M) low = mid + 1
        else if(woodHeight < M) high = mid - 1
    }
    return high
}

console.log(binarySearch(sortedWoods[sortedWoods.length - 1]))