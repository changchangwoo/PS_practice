function solution(genres, plays) {
    var answer = [];
    play_count = 0
    let sort = new Map()
    let sort_arr = []
    for (let i = 0; i < genres.length; i++) {
        if (sort.has(genres[i])) {
            sum = sort.get(genres[i]) + plays[i]
            sort.set(genres[i], sum)
        }
        else {
            sort.set(genres[i], plays[i])
        }
    }
    sort.forEach((value, key) => {
        sort_arr.push({ key: key, value: value })
    });
    sort_arr = sort_arr.sort((a, b) => b.value - a.value)
    let hash = new Map()
    for (let i = 0; i < genres.length; i++) {
        if (hash.has(genres[i])) {
            obj = { no: i, count: plays[i] }
            arr = hash.get(genres[i])
            arr.push(obj)
            hash.set(genres[i], arr)
        }
        else {
            arr = []
            obj = { no: i, count: plays[i] }
            arr.push(obj)
            hash.set(genres[i], arr)
        }
    }
    for (let i = 0; i < sort_arr.length; i++) {
        hash_data = hash.get(sort_arr[i].key)
        hash_data.sort((a, b) => b.count - a.count)
        console.log(hash_data)
        if (hash_data.length < 2) { answer.push(hash_data[0].no) }
        else if (hash_data.length >= 2) {
            answer.push(hash_data[0].no)
            answer.push(hash_data[1].no)
        }
    }
    return answer;
}