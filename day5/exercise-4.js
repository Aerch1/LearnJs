//check duplicate character

let arr = ["goku", "naruto", "balmond", "goku"];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; i++) {
    if (arr[i] === arr[j]) {
      console.log("I got you boi:", arr[i]);
    }
  }
}
