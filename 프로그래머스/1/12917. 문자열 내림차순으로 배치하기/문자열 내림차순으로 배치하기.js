function solution(s) {
    var answer = '';
    let upper_list = []
    s = [...s]
    s.forEach(element => {
        if (element === element.toUpperCase()) upper_list.push(element)
    });
    s = s.sort().reverse()
    upper_list = upper_list.sort().reverse()
    return s.join('');
}