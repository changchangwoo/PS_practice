function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value%i ==0) {
            return false
        }
    }
    return true
}

//에라토스테네스의 체 이용
