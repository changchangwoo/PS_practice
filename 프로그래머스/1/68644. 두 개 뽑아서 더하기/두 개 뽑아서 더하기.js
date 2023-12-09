const getCombiantions = function (arr, selectNumber) {
    const results = []
    if(selectNumber === 1) return arr.map((value) => [value])

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(index+1)]
        const combinations = getCombiantions(rest, selectNumber-1)
        const attached = combinations.map((combination) => [fixed, ...combination])
        results.push(...attached)
    });

    return results
}
function solution(numbers) {
    results = getCombiantions(numbers, 2)
    results = results.map((value) => value[0] + value[1])
    results = new Set([...results])
    results = [...results].sort((a,b)=>a-b)
    return results;
}