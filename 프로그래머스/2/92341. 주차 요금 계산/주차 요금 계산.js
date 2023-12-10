function calculating_parking_time(prev_time, cur_time) {
    console.log()
    return (+cur_time[0]*60 + +cur_time[1])-(+prev_time[0]*60 + +prev_time[1])
}
function solution(fees, records) {
    var answer = [];
    var hash = new Map()
    var fee_hash = new Map()
    var array = []
    let fee = 0


    records.forEach(element => {
        element = element.split(' ')
        let time = element[0]
        let car_num = element[1]
        let check = element[2]
        if(!hash.has(car_num)) { // 입차
            hash.set(car_num, time)
        } else { // 출차
            prev_time = hash.get(car_num).split(':')
            cur_time = time.split(':')
            parking_time = calculating_parking_time(prev_time, cur_time)
            if(!fee_hash.has(car_num)) {
                fee_hash.set(car_num, parking_time)
            } else {
                fee_hash.set(car_num, fee_hash.get(car_num) + parking_time)
            }
            hash.delete(car_num)
        }
    });
    hash.forEach((value, key) => { // 남아있는 차량확인
        prev_time = value.split(':')
        cur_time = ['23','59']
        parking_time = calculating_parking_time(prev_time, cur_time)
        if(!fee_hash.has(key)) {
            fee_hash.set(key, parking_time)
        } else {
            fee_hash.set(key, fee_hash.get(key) + parking_time)
        }
        hash.delete(key)
    });
    fee_hash.forEach((value,key) => {
        array.push({no : key, time : value}) 
    });
    array = array.sort((a,b)=>a.no - b.no)
    array.forEach(element => {
        if(element.time <= fees[0]) fee = fees[1]
        else {
            fee = fees[1] + Math.ceil((element.time - fees[0])/fees[2]) * fees[3]
        }
        answer.push(fee)
    });
    return answer;
}