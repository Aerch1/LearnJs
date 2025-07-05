// First occurrence of character

const findIndex = (strng, target) => {
  for (let i = 0; i < strng.length; i++) {
    if (strng[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex("apple", "a"));
