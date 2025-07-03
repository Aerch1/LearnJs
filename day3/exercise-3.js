let num = [7, 31, 3, 19, 80, 78, 43];
let getNum = 0;

for (let i = 0; i < num.length; i++) {
  getNum += num[i];
}

let findavg = getNum / num.length;

console.log("Sum:", getNum);
console.log("Average:", findavg.toFixed(2)); // Optional: round to 2 decimal places

let num1 = [7, 31, 3, 19, 80, 78, 43];

let findtotal = num1.reduce((acc, curr) => acc + curr, 0);
let avg = findtotal / num1.length;

console.log("Average", avg.toFixed(2));
