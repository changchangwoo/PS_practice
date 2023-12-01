function solution(clothes) {
    var answer = 0;
    let map = new Map()
    clothes.forEach(element => {
        arr = []
        arr.push(element[0])
        if (map.has(element[1])) {
            arr = map.get(element[1])
            arr.push(element[0])
            map.set(element[1], arr)
        } else (map.set(element[1], arr))
    });
    let sum = 1
    map.forEach((value, key) => {
        sum = sum * (value.length+1)
    });
    return sum-1
}
