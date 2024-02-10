function solution(x) {
    let str = String(x)
    let num = 0;
    for(let i =0; i < str.length; i++) {
        num = num + +str[i]
    }
    return x % num === 0 ? true : false
}