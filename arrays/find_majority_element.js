// Find the majority element i.e element's frequencey should greater than or equal to half of the array length

// var arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];

var arr = [2, 8, 8];
var max = 0;

// 1st Approach Time O(n^2) | Space O(n^2)
// for (let i = 0; i < arr.length; i++) {
//   count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j] && i !== j) {
//       count++;
//     }
//   }
//   if (count >= Math.floor(arr.length / 2) && max < count) {
//     max = count;
//   }
// }

// console.log("max", max);

// 2nd Approach Time is O(n logn) | Space is O(1)

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);

var count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + Math.floor(arr.length / 2)]) {
    count = arr[i];
    break;
  }
}

console.log(count);

// 3rd Approach Time is O(n) | Space is O(n)
// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// var res;

// for (const key in obj) {
//   if (obj[key] >= Math.floor(arr.length / 2)) {
//     res = Number(key);
//     break;
//   }
// }

// console.log(res);

// 4th Approach Time O(n) | Space O(1) (NO)

// var majorityIndex = 0;
// var count = 1;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[majorityIndex] === arr[i]) {
//     count++;
//   } else {
//     count--;
//   }
//   if (count === 0) {
//     majorityIndex = i;
//     count = 1;
//   }
// }

// if (count >= Math.floor(arr.length / 2)) {
//   console.log("count", count);
// }
