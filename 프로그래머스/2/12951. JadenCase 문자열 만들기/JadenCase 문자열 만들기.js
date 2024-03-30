function solution(s) {
    const result = []
    const strs = s.split(' ')
    for (let str of strs) {
        if(str === '') {
            result.push('')
            continue
        }
        str = str.split('').map(val => val.toLowerCase())
        str[0] = str[0].toUpperCase()
        str = str.join('')
        result.push(str)
    }
    return result.join(' ')
}
