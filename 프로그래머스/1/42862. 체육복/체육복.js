function solution(n, lost, reserve) {
    let count = 0;
    let idx = [];
    lost = lost.sort((a,b)=> a-b)
    reserve = reserve.sort((a,b)=> a-b)


    // 일치하는 쌍을 찾아 표시
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                reserve.splice(j, 1);
                idx.push(i);
                break; // 일치하는 경우에는 루프를 빠져나옴
            }
        }
    }

    // 일치한 쌍의 인덱스를 기준으로 lost 배열에서 삭제
    for (let i = idx.length - 1; i >= 0; i--) {
        lost.splice(idx[i], 1);
    }

    // 여분의 체육복을 빌려주는 처리
    lost.forEach(element => {
        for (let i = 0; i < reserve.length; i++) {
            if (element === reserve[i] + 1 || element === reserve[i] - 1) {
                reserve.splice(i, 1);
                count += 1;
                break;
            }
        }
    });

    return n - (lost.length - count);
}
