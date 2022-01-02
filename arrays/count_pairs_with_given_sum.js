// https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// var arr = [1, 5, 7, 1];
var arr = [1, 1, 1, 1];
var n = arr.length;
// var k = 6;
var k = 2;

let count = 0;
let left = 0;
let right = left + 1;

while (left < n && right < n) {
  if (arr[left] + arr[right] === k && right < n - 1) {
    count++;
    right++;
  } else if (right === n - 1) {
    if (arr[left] + arr[right] === k) {
      count++;
    }
    left++;
    right = left + 1;
  } else {
    right++;
  }
}

console.log(count);
