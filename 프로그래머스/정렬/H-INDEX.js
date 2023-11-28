// 문제 제대로 이해하지못함. 다시 풀자
function solution2(citations) {
    citations = citations.sort((a,b)=>(a-b)*-1)
    let count = 0
    for(let i = 0; i < citations.length; i++) {
        if(citations[i] >= i+1) {
            count +=1
        } else break
    }
    return count
}
