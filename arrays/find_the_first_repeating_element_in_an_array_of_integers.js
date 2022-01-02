// https://practice.geeksforgeeks.org/problems/first-repeating-element4018/1

var arr = [1, 5, 3, 4, 3, 5, 6];
// var arr = [1, 2, 3, 4];
// var arr = [
//   1, 1, 5, 2, 7, 6, 1, 4, 2, 3, 2, 2, 1, 6, 8, 5, 7, 6, 1, 8, 9, 2, 7, 9, 5, 4,
//   3, 1,
// ];

var obj = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

console.log(obj)

var res = -1;
var count = 0;

for (let i = 0; i < arr.length; i++) {
  count++;
  if (obj[arr[i]] > 1) {
    res = i;
    break;
  }
}

if (count === arr.length) {
  console.log(-1);
} else {
  console.log(res + 1);
}
