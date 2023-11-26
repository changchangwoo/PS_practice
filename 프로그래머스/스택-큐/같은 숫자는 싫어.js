function solution(arr)
{
    answer = []
    arr.forEach(element => {
        if(answer[answer.length-1] != element) {
        answer.push(element)
        }
    });
    return answer
}