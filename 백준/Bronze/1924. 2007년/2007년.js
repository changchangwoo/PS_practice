const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [M, D] = input;
const date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
let sumdate = 0;
for (let i = 0; i < M; i++) {
  sumdate += date[i];
}
sumdate += D;
switch (sumdate % 7) {
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THU");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
  case 0:
    console.log("SUN");
    break;
}
