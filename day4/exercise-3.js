function rotateLeft(arr, n) {
  const len = arr.length;
  const rotated = [];

  // Handle cases where n > array length
  n = n % len;

  // First, push from index n to end
  for (let i = n; i < len; i++) {
    rotated.push(arr[i]);
  }

  // Then, push from index 0 to n - 1
  for (let i = 0; i < n; i++) {
    rotated.push(arr[i]);
  }

  return rotated;
}

const original = [1, 2, 3, 4, 5];
const rotated = rotateLeft(original, 2);

console.log(rotated); // Output: [3, 4, 5, 1, 2]
