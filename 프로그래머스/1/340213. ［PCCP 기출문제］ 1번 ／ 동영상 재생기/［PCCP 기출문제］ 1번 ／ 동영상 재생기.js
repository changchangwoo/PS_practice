function solution(video_len, pos, op_start, op_end, commands) {
    commands.forEach(command => {
        if ((compareTime(pos, op_start) === pos) && (compareTime(pos, op_end) === op_end)) pos = op_end
        if (command === "next") {
            let [posM, posS] = pos.split(":").map(Number)
            posS += 10
            if (posS >= 60) {
                posM = posM + 1
                posS = posS % 60
            }
            if(posM < 10 && posM >= 0) { posM = "0" + posM }
            if(posS < 10) { posS = "0" + posS }
            let newPos = posM + ":" + posS 
            if (compareTime(newPos, video_len) === newPos) pos = video_len
            else pos = newPos
        }

        if (command === "prev") {
            let [posM, posS] = pos.split(":").map(Number)
            posS -= 10
            if (posS < 0) {
                posM = posM - 1
                posS = posS + 60
            }
            if(posM < 10 && posM >= 0) { posM = "0" + posM }
            if(posS < 10) { posS = "0" + posS }

            let newPos = posM + ":" + posS
            if (compareTime(newPos, "00:00") === "00:00") pos = "00:00"
            else pos = newPos
        }
    });

    if ((compareTime(pos, op_start) === pos) && (compareTime(pos, op_end) === op_end)) pos = op_end

    return pos
}

function compareTime(time1, time2) {
    let [time1M, time1S] = time1.split(":").map(Number);
    let [time2M, time2S] = time2.split(":").map(Number);

    if (time1M > time2M) return time1;
    else if (time1M < time2M) return time2;
    else {
        if (time1S > time2S) return time1;
        else if (time2S > time1S) return time2;
        else return time1; // 두 시간이 동일하면 time1을 반환
    }
}
