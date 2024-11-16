let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [S, P] = input[0].split(' ').map(Number)
const strArr = input[1].trim().split('')
const [mA, mC, mG, mT] = input[2].trim().split(' ').map(Number)

let count = 0;
let temp = []
let cA = 0;
let cC = 0;
let cG = 0;
let cT = 0;

for(let i = 0; i <= S-P; i++) {
    if(i === 0) {
        for(let j = 0; j < P; j++) {
            if(strArr[j] === 'A') cA++;
            if(strArr[j] === 'C') cC++;
            if(strArr[j] === 'G') cG++;
            if(strArr[j] === 'T') cT++;
        }
        if((cA >= mA) && (cC >= mC) && (cG >= mG) && (cT >= mT)) {
            count++;
        }
    } else {
        if(strArr[i - 1] === 'A') cA--;
        if(strArr[i - 1] === 'C') cC--;
        if(strArr[i - 1] === 'G') cG--;
        if(strArr[i - 1] === 'T') cT--;
        
        if(strArr[i + P - 1] === 'A') cA++;
        if(strArr[i + P - 1] === 'C') cC++;
        if(strArr[i + P - 1] === 'G') cG++;
        if(strArr[i + P - 1] === 'T') cT++;    

        if((cA >= mA) && (cC >= mC) && (cG >= mG) && (cT >= mT)) {
            count++;
        }
    }
}

console.log(count)