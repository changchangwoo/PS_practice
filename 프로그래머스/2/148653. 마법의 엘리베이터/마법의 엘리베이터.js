/*
절댓값 10^n을 기준으로 0이 되는 값을 찾아야한다
한번 탐색할때마다 result값이 1씩 증가한다
뒤에부터 값을 탐색해야할까?
+를 해서 다음 수에 맞추는 경우 앞자리가 1이 증가한다 << 5인 경우에는 내리는게 유리
1,2,3,4,5 내림 6,7,8,9 올림
*/

function solution(storey) {
    var answer = 0;
    while(storey > 0) {
        let restStorey = storey % 10
        let prevStorey = storey % 100
        if(restStorey > 5) {
            answer += 10-restStorey
            storey += 10-restStorey
        } else {
            if(restStorey === 5 && prevStorey !== restStorey && prevStorey > 50) {
                answer += 10-restStorey
                storey += 10-restStorey
            } else {
            answer += restStorey
            storey -= restStorey
        }
    }
        storey = storey/10
    }
    return answer;
}