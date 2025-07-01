// Check for palindrome string

let word = "rotator";
let word1 = word.toLowerCase();
let getLetter = word1.split("").reverse().join("");

if (word1 === getLetter) {
  console.log("The word is palindrome");
} else {
  console.log("not the same");
}
