// Find the maximun of three numbers

let number = [6, 10, 3, 90, 1000, 28];
let maxNum = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > maxNum) {
    maxNum = number[i];
  }
}
console.log("The maximum number is", maxNum);

let num1 = [90, 199, 2999];
let max = Math.max(...num1);
console.log(max);
