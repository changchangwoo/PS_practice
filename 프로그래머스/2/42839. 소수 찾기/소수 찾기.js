const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
        const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
};

function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value%i ==0) {
            return false
        }
    }
    return true
}

function solution(numbers) {
    var answer = 0;
    let result = []
    let p_arr = []
    let set = new Set()
    numbers = numbers.split('')
    for (let i = 1; i <= numbers.length; i++) {
        result = getPermutations(numbers, i)
        p_arr.push(result)
    }
    p_arr.forEach(element => {
        element.forEach(e => {
            set.add(+e.join(''))
        });
    });
    for(value of set) {
        if(value === 0 || value === 1) continue
        if(isPrime(value)) answer++
    }
    return answer;
}