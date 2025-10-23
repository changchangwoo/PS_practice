function solution(today, terms, privacies) {
    var answer = [];
    const hash = new Map;
    const [TY, TM, TD] = today.split('.').map(Number)

    terms.forEach(item => {
        const [name, exp] = item.split(' ')
        hash.set(name, Number(exp))
    });

    privacies.forEach((element, idx) => {
        const [date, term] = element.split(' ')
        let [y, m, d] = date.split('.').map(Number)
        m += hash.get(term)
        y += Math.floor((m - 1) / 12);
        m = ((m - 1) % 12) + 1;


        if(TY > y) {
            answer.push(idx+1)
        } else if ( TY === y) {
            if(TM > m) {
                answer.push(idx+1)
            } else if ( TM === m) {
                if ( TD >= d) {
                    answer.push(idx+1)
                }
            }
        }
    });

    return answer;
}