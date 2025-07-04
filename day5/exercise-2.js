// Word count in a sentence

const wordtoCount = (strg) => {
  let words = strg.trim().split(" ");
  //you can use regex for the split method .split(/\s+/)
  return words.length;
};

let word = "Hello my name is Archie!";
console.log(wordtoCount(word));
