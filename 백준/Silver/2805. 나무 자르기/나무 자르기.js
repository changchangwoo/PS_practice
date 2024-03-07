const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
let woods = input.shift().split(' ').map(Number)
woods = woods.sort((a, b) => a - b)

const checkWood = (max) => {
    let sum = 0
    for (let i = 0; i < woods.length; i++) {
        if (woods[i] - max > 0) sum += (woods[i] - max)
    }
    return sum
}

const binaraySearch = (max) => {
    low = 0
    high = max
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        let wood = checkWood(mid)
        if (wood >= M) {
            low = mid + 1
        } else if (wood < M) {
            high = mid - 1
        }
    }
    return high

}

console.log(binaraySearch(woods[woods.length - 1]))

