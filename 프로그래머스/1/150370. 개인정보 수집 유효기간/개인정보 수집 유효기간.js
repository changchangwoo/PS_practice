function solution(today, terms, privacies) {
    // today를 날짜 객체로 변환
    const todayDate = new Date(today.replace(/\./g, '/'));

    // 파기해야 할 개인정보 번호를 저장할 배열
    const toDestroy = [];

    // privacies 배열을 순회하며 개인정보를 확인
    for (let i = 0; i < privacies.length; i++) {
        const privacyInfo = privacies[i].split(' ');
        const privacyDate = new Date(privacyInfo[0].replace(/\./g, '/'));

        // 약관 종류와 유효기간 추출
        const [termType, termDuration] = terms.find(term => term.startsWith(privacyInfo[1])).split(' ');

        // 유효기간을 날짜로 변환하여 개인정보 보관 가능 여부 확인
        const expirationDate = new Date(privacyDate);
        expirationDate.setMonth(expirationDate.getMonth() + parseInt(termDuration));

        // 개인정보 파기 여부 확인
        if (expirationDate <= todayDate) {
            toDestroy.push(i + 1); // 배열은 0부터 시작하므로 +1
        }
    }

    return toDestroy;
}