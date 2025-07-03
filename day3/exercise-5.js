// Remove duplicates from an array

const array1 = [1, 2, 2, 3, 4, 4, 5];
const removeduplicate = [...new Set(array1)];
console.log(removeduplicate);

const array = [1, 2, 2, 3];

array.filter((value, index, self) => {
  console.log("value:", value, "index:", index, "firstIndex:", self.indexOf(value));
  return self.indexOf(value) === index;
});
