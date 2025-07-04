// 👇 Instructions:
// Create a function called textToolkit() that takes a sentence and does 4 things:

// Split the sentence into words and log the array.

// Slice the first 3 words and log them.

// Get the middle word using splice() (assume sentence has odd number of words).

// Grab a part of a word using substring() or substr() (your choice).

const textToolkit = (sentence) => {
  let word = sentence.trim().split(/\s+/);
  console.log("Split sentence: ", word);

  let slice = word.slice(0, 3);
  console.log("slice", slice);

  const getMiddle = Math.floor((word.length - 1) / 2);
  let copyArr = [...word];
  let splice = copyArr.splice(getMiddle, 1);
  console.log("splice", splice);

  let grabword = word[0].substring(1, 3);
  console.log("grabword", grabword);
};

textToolkit("hello word hahaha okay try six");
