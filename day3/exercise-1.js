// Find max and min in an array

let num = [7, 8, 9, 10, 9, 6, 4];
let findmax = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > findmax) {
    findmax = num[i];
  }
}

console.log(num);
console.log(findmax);

//side exercise using reduce()

let scores = [85, 92, 76, 88, 100, 67, 94];

let findMaximum = scores.reduce((max, current) =>
  current > max ? current : max
);
let findMinimum = scores.reduce((min, current) =>
  current < min ? current : min
);
let total = scores.reduce((sum, current) => sum + current, 0);
let average = total / scores.length;

console.log("Max:", findMaximum);
console.log("Min:", findMinimum);
console.log("Total:", total);
console.log("Average:", average);
