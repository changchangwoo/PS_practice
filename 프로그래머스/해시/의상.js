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

/*
코니는 각 종류별로 한 가지 의상만 착용 가능하다
완전한 중복이 아니면 겹쳐도 상관 없다
하루에 하나는 입어야한다
clothes[1]은 해쉬 값이 들어가야한다
이거는 ㄹㅇ 체인 해쉬같음 => map에서 체인 해쉬 만들줄 몰라서 걍 리스트에 넣음
이러면 map을 활용해서 구현했을 떄 다음과 같이 나옴
[headgear], yellow_hat, geen_turban
[eyewear], blue_sun_glasses
각각 개수의 제곱한 값을 반환하면 되지 않을까

힌트 아이디어
1. 조건부 확률 : 두 확률이 동시에 일어날 확률은 두 확률의 곱과 같다
2c1 * 1c
*/

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))