// Check if a character is vowel or consonant
let word = "qwerty";
let check = false;
for (let i = 1; i < word.length; i++) {
  if ("aeiou".includes(word[i])) {
    check = true;
    break;
  }
}
if (check) {
  console.log("The letter have an vowel");
} else {
  console.log("The letter only have consonant");
}
