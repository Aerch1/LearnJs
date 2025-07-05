// Generate all substrings

const generateSubstring = (strng) => {
  for (let i = 0; i < strng.length; i++) {
    for (let j = i + 1; j <= strng.length; j++) {
      console.log(strng.substring(i, j));
    }
  }
};

generateSubstring("apple");
