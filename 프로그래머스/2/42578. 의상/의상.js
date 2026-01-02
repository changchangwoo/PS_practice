function solution(clothes) {
    const hash = new Map();
    for(cloth of clothes) {
        const [name, category] = cloth
        hash.set(category, hash.get(category) ? [...hash.get(category), name] : [name])
    }
    
    let count = 1
    for([key, value] of hash) {
        count *= value.length+1
    } 
    
    return count-1;
}