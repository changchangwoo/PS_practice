function solution(citations) {
    let sortPapers = citations.sort((a, b) => b - a);
    let count = 0;
    console.log(sortPapers)
    for (let i = 0; i < citations.length; i++) {
        console.log(citations[i], i)
        if (i + 1 <= citations[i]) {
            count++;
        }
        else break;
    }
    return count;
}

function solution2(citations) {
    citations = citations.sort((a,b)=>(a-b)*-1)
    let count = 0
    for(let i = 0; i < citations.length; i++) {
        if(citations[i] >= i+1) {
            count +=1
            break;
        }
    }
    return count
}

// 발표한 논문 n편중 h번 이상 인용된 논문이 h편 이상이다
// 논문의 수 = list의 index+1
// h는 횟수, list의 index+1중 가장 큰 수가 h의 최댓값

console.log(solution([3, 0, 6, 1, 5]))
console.log(solution2([3, 0, 6, 1, 5]))

