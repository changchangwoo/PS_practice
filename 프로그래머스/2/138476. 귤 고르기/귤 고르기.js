/*
귤을 고를 때 서로 다른 종류가 최소가 되려면
1. 가장 많은 수의 귤은 반드시 포함되어야한다
*/
function solution(k, tangerine) {
    const hash = new Map()
    for(let tan of tangerine) {
        if(!hash.get(tan))
        {hash.set(tan, 1)}
        else hash.set(tan, hash.get(tan)+1)
    }
    let arr = [...hash.values()]
    arr = arr.sort(((a, b) => b-a))
    let sum = 0
    let count = 0
    while(sum < k) {
        sum += arr.shift()
        count++;
    }
    return count    
}