/*
-1, +1, -10, +10, -100, +100, 10^
엘리베이터 버튼을 누르면 현재 층 이동

그리디하게 접근?
마지막수를 0으로 맞춘다

마지막수가 5보다 큰 경우 더해서
5보다 작거나 같은 경우 뺴서

1, 2, 3 , 4
1, 2, 3, 4, 5
1, 2, 3, 4, 5
1, 2

485
11

2554

4
5
4
3



만약에 타겟값이 5인경우 prev 값을 보고 판단



*/

function solution(storey) {
    var answer = 0;
    let storyArr = storey.toString().split('')
    let upperCase = false
    while(true) {
        let target = Number(storyArr.pop());
        if(upperCase) target+=1
        if(storyArr.length === 0) { // 마지막 케이스 경우
            if(target <= 5) {
                answer += target
                break;
            } else if (target > 5) {
                answer += (10-target) + 1
                break;
            }
        }
        let prev = Number(storyArr[storyArr.length-1]) 
        upperCase = false
        while(true) {
            if(target === 0 || target === 10) {
                if(target === 10) upperCase = true
                break;
            }
            if(target < 5) {
                target--;
                answer++;
            } else if (target > 5) {
                target++;
                answer++;
            } else if (target === 5) {
                if(prev >= 5) {
                    target++;
                    answer++;
                } else {
                    target--
                    answer++;
                }

            }
        }
        }
    if(upperCase === true) {

    }
    return answer;
}