//Reverse a string

let word = "qwerty";
let reverseword = word.split("").reverse("").join("");
console.log(reverseword);

for (let i = word.length - 1; i >= 0; i--) {
  console.log("The reverse word of qwerty is ", word);
  break;
}
