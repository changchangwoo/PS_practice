let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input[0];
let arr = [];
let result = [];

input.forEach((element, i) => {
    if (i >= 1) {
        element = element.split(" ");
        arr.push({ weight: Number(element[0]), height: Number(element[1]) });
    }
});
for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i].weight < arr[j].weight && arr[i].height < arr[j].height) count = count + 1;
    }
    result.push(count);
}
console.log(result.join(' '))