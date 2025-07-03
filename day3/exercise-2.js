// Count even and odd numbers in an array

let num = [8, 1, 3, 4, 6, 8, 2];
let findeven = [];
let findodd = [];
for (let i = 1; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    findeven.push(num[i]);
  } else {
    findodd.push(num[i]);
  }
}
console.log(findeven.length);
console.log(findodd.length);

let even = num.reduce(
  (acc, curr) => {
    if (curr % 2 == 0) {
      acc.even++;
    } else {
      acc.odd++;
    }
    return acc;
  },
  { odd: 0, even: 0 }
);

console.log(even);
