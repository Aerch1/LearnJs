// Anagram checker

const checker = (strg1, strg2) => {
  const formatChecker = (strg) =>
    strg.trim().toLowerCase().split("").sort().join("");

  let word1 = formatChecker(strg1);
  let word2 = formatChecker(strg2);

  if (word1 === word2) {
    console.log("Both word have a same letter");
  } else {
    console.log("Both word dont have a same letter");
  }
};
checker("listen", "silent");
