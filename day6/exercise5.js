const palindrome = (strng) => {
  const reversed = strng.split("").reverse().join("");
  if (strng === reversed) {
    console.log(`'${strng}' is a palindrome`);
  } else {
    console.log(`'${strng}' is not a palindrome`);
  }
};

palindrome("madam");
palindrome("test");
