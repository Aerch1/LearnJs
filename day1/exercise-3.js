// Convert Celsius to Fahrenheit

let celsius = 90;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("The fahrenheit of 90 is", fahrenheit);

let input = prompt("Enter a Celcius");
let num = Number(input);

if (isNaN(num)) {
  console.log("Please put a valid number");
} else {
  convertToFahrenheit(num);
}

function convertToFahrenheit(num) {
  let fahrenheit = (num * 9) / 5 + 32;
  console.log("The farenheit of", num, "is", fahrenheit);
}
