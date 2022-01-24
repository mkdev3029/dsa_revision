var arr = [];

var target = 5000;

for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}

var left = 0;
var right = 1;

var val = arr[0];

while (val < target) {
  left = right;
  right = 2 * right;
  val = arr[right];
}

var ans = -1;

while (left <= right) {
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] === target) {
    ans = mid;
    break;
  }
  if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
