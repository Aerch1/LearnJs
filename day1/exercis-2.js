let x = 100;
let y = 10;
let z = null;

z = x; // store x in temp
x = y; // put y into x
y = z; // put original x into y

console.log("x =", x);
console.log("y =", y);

//swap without third variable

let a = 300;
let b = 80;

a = a + b; //300 + 80 = 380;
b = a - b; //380 - 80 = 300 b become 300
a = a - b; //380 - 300 = 80

console.log("a = ", a);
console.log("b = ", b);
