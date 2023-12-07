function solution(n) {
    count = 0
    let i = 0;
    while (true) {
        if (count === n) break
        i++
        if (i % 3 === 0 || String(i).includes('3')) continue
        count++;
    }
    return i
}