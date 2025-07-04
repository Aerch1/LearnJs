const words = ["spray", "elite", "spray", "elite", "present"];
let counter = 0;

for (let i = 0; i < words.length; i++) {
  for (let j = i + 1; j < words.length; j++) {
    if (words[i] === words[j]) {
      counter++;
      break;
    }
  }
}

console.log(counter);
