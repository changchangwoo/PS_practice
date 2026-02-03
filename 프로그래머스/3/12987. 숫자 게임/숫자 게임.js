/*
2, 2, 3, 4
2, 2, 2, 2
*/
function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => a - b)
    B.sort((a, b) => a - b)
    let Aidx = 0;
    let Bidx = 0
    while(Bidx < B.length) {
        if (A[Aidx] < B[Bidx]) {
            answer++;
            Aidx++;
            Bidx++;
        } else if(A[Aidx] > B[Bidx]) {
            Bidx++;
        } else {
            Bidx++;
        }
    }
    return answer
}