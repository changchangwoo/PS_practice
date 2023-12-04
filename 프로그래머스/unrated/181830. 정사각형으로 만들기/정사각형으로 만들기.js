function solution(arr) {
    let n = arr.length
    let m = arr[0].length
    for (let i = 0; i < n; i++) {
        while (arr[i].length < n) {
            arr[i].push(0)
        }
    }
    while (arr.length < m) {
        temp_arr = []
        temp_arr.length = m
        temp_arr.fill(0)
        arr.push(temp_arr)
    }
    return arr
}