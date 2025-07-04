//  Search an element in array

let arr = ["apple", "banana", 9];

const searchTarget = (search) => {
  for (let i = 0; i < arr.length; i++) {
    if (search == arr[i]) {
      console.log("Included in here");
      return true;
    }
    return false;
  }
};

console.log(searchTarget("apple"));
