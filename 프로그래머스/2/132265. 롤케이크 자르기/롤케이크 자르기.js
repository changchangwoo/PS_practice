function solution(topping) {
    const bro = new Map();
    const cheolsu = new Map();
    let answer = 0
    topping.forEach(element => {
        cheolsu.set(element, (cheolsu.get(element) || 0)+1)
    });

    topping.forEach(element => {
        cheolsu.set(element, cheolsu.get(element) - 1)
        if(cheolsu.get(element) === 0) cheolsu.delete(element)
        bro.set(element, (bro.get(element) || 0) +1)
        if(cheolsu.size === bro.size) answer++;
    });

    return answer;
}