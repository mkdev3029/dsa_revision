// https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

var arr = [1, 2, 3, 4, 5];

// SOL 1
// K number of rotation
var newArr = [];

for (let i = 0; i < arr.length; i++) {
  var newIndex = (i + 1) % arr.length;
  newArr[newIndex] = arr[i];
}

console.log(newArr);

// SOL 2
// In place rotation
var temp = arr[arr.length - 1];
for (let i = arr.length - 1; i >= 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = temp;
console.log(arr);
