function solution(sizes) {
    for(let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a,b)=>a-b)
    }
    let long_arr = sizes.map(value => value[1]).sort((a,b)=>b-a)
    let short_arr = sizes.map(value => value[0]).sort((a,b)=>b-a)
    return long_arr[0] * short_arr[0]
}