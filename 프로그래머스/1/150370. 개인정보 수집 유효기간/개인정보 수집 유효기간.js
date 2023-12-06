function solution(today, terms, privacies) {
    let result = []
    let hash = new Map()
    today = today.split('.')
    terms.forEach(element => {
        element = element.split(' ')
        hash.set(element[0], element[1])
    });
    privacies.forEach((element, i) => {
        element = element.split(' ')
        add_value = 0
        privacies_date = element[0].split('.')
        privacies_day = privacies_date[2]
        privacies_month = privacies_date[1]
        privacies_year = privacies_date[0]
        add_year_flag = false
        check_month = +privacies_month + +hash.get(element[1])
        check_day = +privacies_day -1
        if (check_month > 12) {
            add_value = Math.floor(check_month/12)
            check_month = check_month % 12
            if(check_month === 0) {
                check_month = 12
                add_value -=1
            }
            add_year_flag = true
        }
        if(check_day === 0) {
            check_month -=1
            check_day = 28
        }
        if (add_year_flag) check_years = +privacies_year + add_value
        else {check_years = +privacies_year}
        console.log(check_years, check_month, check_day)
        // 비교
        if(check_years < +today[0]) result.push(i+1)
        else if(check_years === +today[0]) {
            if(check_month < +today[1]) result.push(i+1)
            else if(check_month === +today[1]) {
                if(check_day < +today[2] ) result.push(i+1)
            }
        }
    });
    return result
}