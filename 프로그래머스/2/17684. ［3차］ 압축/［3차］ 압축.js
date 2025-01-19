/*
LZW 압축 과정
1. 길이가 1인 사전 초기화
2. 현재 입력과 일치하는 가장 긴 문자열 발견
3. 문자열에서 색인번호 출력 후, 입력에서 제거
4. 입력처리 되지 않은 다음 글자가 있다면 w+c에 해당하는 단어 사전 등록
5. 2로 반복
*/


function solution(msg) {
    const dic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
        "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const idxArr = []

    while (msg.length > 0) {
        let str = ""
        let sliceIdx = 0
        if (msg.length === 1) {
            idxArr.push(dic.indexOf(msg) + 1)
            break;
        }
        for (let i = 0; i <= msg.length - 1; i++) {
            str += msg[i]
            if (dic.includes(str)) {
                if (dic.includes(str + msg[i + 1])) {
                    continue;
                }
                dic.push(str + msg[i + 1])
                idxArr.push(dic.indexOf(str) + 1)
                sliceIdx = i;
                break;
            }
        }

        msg = msg.slice(sliceIdx+1)
    }
    
    return idxArr;
}