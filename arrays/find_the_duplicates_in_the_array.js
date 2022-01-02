// https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1

// var arr = [0, 3, 1, 2];
// var arr = [
//   13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4,
//   25, 14, 23, 14,
// ];
var arr = [2, 3, 1, 2, 3];

var obj = {};

var res = [];

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

for (const key in obj) {
  if (obj[key] > 1) {
    res.push(key);
  }
}

if (res.length === 0) {
  console.log(-1);
} else {
  console.log(res);
}
