function solution(A,B){
    let arrA = A.sort((a,b) => a-b)
    let arrB = B.sort((a,b) => b-a)
    let sum = 0;
    for(let i = 0; i < arrA.length ; i++) {
        sum += arrA[i]*arrB[i]
    }
    return sum;
}