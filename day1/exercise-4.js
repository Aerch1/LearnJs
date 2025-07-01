//Check if a number is even or odd

let num = prompt("Enter a number");
let input = Number(num);

if (isNaN(input)) {
  console.log("Put a valid number");
} else {
  if (input % 2 === 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
