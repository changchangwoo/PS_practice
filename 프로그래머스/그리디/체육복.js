function solution(n, lost, reserve) {
    let count = 0;
    let idx = [];
    lost = lost.sort((a,b)=> a-b)
    reserve = reserve.sort((a,b)=> a-b)


    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                reserve.splice(j, 1);
                idx.push(i);
                break;
            }
        }
    }

    for (let i = idx.length - 1; i >= 0; i--) {
        lost.splice(idx[i], 1);
    }

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
