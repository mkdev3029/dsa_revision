// https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1

var arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
var n = 10;
var sum1 = 0;
var sum2 = Math.floor((n * (n + 1)) / 2);

for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}

console.log(sum2 - sum1);
