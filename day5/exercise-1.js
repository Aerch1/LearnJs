//Count vowels and consonants

const checkVowels = (strg) => {
  const vowels = "aeiouAEIOU";
  let countvowels = 0;
  let countconsonants = 0;

  for (let i = 0; i < strg.length; i++) {
    if (/[a-zA-Z]/.test(strg[i])) {
      if (vowels.includes(strg[i])) {
        countvowels++;
      } else {
        countconsonants++;
      }
    }
  }
  return `Vowels: ${countvowels}, Consonants: ${countconsonants}`;
};

console.log(checkVowels("Hello Wolrd!"));
