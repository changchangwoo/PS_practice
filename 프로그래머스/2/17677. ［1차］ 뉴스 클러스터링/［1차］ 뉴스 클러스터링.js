
/*
자카드 유사도 = 두 집합의 교집합 크기를 합집합 크기로 나눈 값
두 집합이 모두 공집합인 경우 1
다중 집합의 경우 교집합은 똑같은 수의 min값, 합집합은 똑같은 수의 max값으로
문자열을 두글자씩 끊어서 자카드 유사도

다중집합을 허용하니 set은 불가능

각 해시를 만들어서 교집합인 경우 더 작은 수의 값을 배열에 담기
합집합인 경우 더 큰수의 값을 배열에 담기
*/
function solution(str1, str2) {
    const hashA = new Map()
    const hashB = new Map()

    setA = sliceStr(str1)
    setB = sliceStr(str2)

    setA.forEach(element => {
        hashA.set(element, (hashA.get(element) || 0) + 1)
    });
    
    setB.forEach(element => {
        hashB.set(element, (hashB.get(element) || 0) + 1)
    });

    const intersectionArr = makeIntersection(setA, setB, hashA, hashB)    
    const unionArr = makeUnion(setA, setB, hashA, hashB)    
    if(intersectionArr.length === 0 && unionArr.length === 0) return 65536
    return parseInt((intersectionArr.length / unionArr.length) * 65536);
}

function sliceStr(str) {
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']

    const arr = []
    let slice
    let sliceA, sliceB
    for(let i = 0; i < str.length-1; i++)
    {
        slice = ""
        sliceA = str[i].toLowerCase()
        sliceB = str[i+1].toLowerCase();
        if(!alpha.includes(sliceA) || !alpha.includes(sliceB)) continue;
        slice = sliceA + sliceB
        arr.push(slice)
    }
    return arr

} 

function makeIntersection(setA, setB, hashA, hashB) {
    const arr = []
    setA = new Set(setA)
    setA.forEach(element => {
        let A = hashA.get(element) || 0
        let B = hashB.get(element) || 0
        for(let i = 0; i < Math.min(A, B); i++) {
            arr.push(element)
        }
    });
    console.log(arr)
    return arr
}

function makeUnion(setA, setB, hashA, hashB) {
    const arr = []
    setA = new Set(setA)
    setB = new Set(setB)
    setA.forEach(element => {
        let A = hashA.get(element) || 1
        let B = hashB.get(element) || 1
        for(let i = 0; i < Math.max(A, B); i++) {
            arr.push(element)
        } 
    });
    setB.forEach(element => {
        if(!arr.includes(element)) {
            for(let i = 0; i < hashB.get(element); i++) {
                arr.push(element)
            }
        }
    });
    console.log(arr)
    return arr
}