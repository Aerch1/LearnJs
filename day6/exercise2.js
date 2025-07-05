// String contains only digits

const checkDigits = (strng) => {
  if (strng.trim() === "") return false;
  for (let i = 0; i < strng.length; i++) {
    if (strng[i] < "0" || strng[i] > "9") {
      return false;
    }
  }
  return true;
};

console.log(checkDigits("39183"));
console.log(checkDigits("8429test"));
