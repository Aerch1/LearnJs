//Merge two arrays

let arr1 = ["apple", 1, "banana", 80, true];
let arr2 = ["apple", 3, "Jaguar", false, 90];
let newArr = [...new Set([...arr1, ...arr2])];
console.log(newArr);
