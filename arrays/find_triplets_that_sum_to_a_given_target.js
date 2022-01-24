var arr = [1, 2, 3, 4, 5];
var target = 9;
var count = 0;

// BRUTE FORCE (O(n^3))

// for (let i = 0; i < arr.length - 2; i++) {
//   for (let j = i + 1; j < arr.length - 1; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (arr[i] + arr[j] + arr[k] === target) {
//         console.log(`${arr[i]} + ${arr[j]} + ${arr[k]}`);
//         count++;
//       }
//     }
//   }
// }

// console.log(count);

// TWO POINTERS (O(n^2))

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  var left = i + 1;
  var right = arr.length - 1;

  while (left < right) {
    if (arr[i] + arr[left] + arr[right] === target) {
      count++;
      left++;
      right--;
    } else if (arr[i] + arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(count);
