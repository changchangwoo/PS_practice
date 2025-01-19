/*
한사람당 무조건 한자리씩 말하기
-> 값을 이진수, 십육진수, 십진수까지 변경하고
진법 n
숫자 갯수 t
참가 인원 m
튜브 순서 p

1 % 4 = 1
2 % 4 = 2
3 % 4 = 3
4 % 4 = 0



*/
function solution(n, t, m, p) {
    const arr = []
    let idx = 0
    let order = 1
    // 참가인원 4명 튜브 4등 => 나머지 0
    while(true) {
        let convertNum = idx.toString(n).split('')
        for(let i = 0; i < convertNum.length; i++) {
            if(order % m === (p % m)) {
                if(isNaN(convertNum[i])) {
                    arr.push(convertNum[i].toUpperCase())
                }
                else arr.push(convertNum[i])
            }
            if(arr.length === t) break;
            order++;
        }
        idx++;
        if(arr.length === t) break;

    }
    return arr.join('');
}