let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const arr = []
for(let i = 1; i < input.length; i++) {
  const [id, gold, silver, bronze] = input[i].split(' ').map(Number)
  arr.push({id, gold, silver, bronze})
}

const arrSort = arr.sort((a, b) => {
  if (b.gold === a.gold) {
    if(b.silver === a.silver) {
      return b.bronze - a.bronze;
    }
    return b.silver - a.silver;
  }
  return b.gold - a.gold;
});

let rank = 1;
arrSort[0].rank = rank;
for(let i = 1; i < arrSort.length; i++) {
  if((arrSort[i].gold === arrSort[i-1].gold) && (arrSort[i].silver === arrSort[i-1].silver) && (arrSort[i].bronze === arrSort[i-1].bronze)) {
    arrSort[i].rank = arrSort[i-1].rank
    rank++;
  } else {
    arrSort[i].rank = ++rank 
  }
}

console.log(arrSort.find((item) => item.id === K).rank);
