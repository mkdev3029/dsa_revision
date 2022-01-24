var array = [1, 2, 6, 9, -5, -2];

// TWO POINTERS (O(n log n) + O(n))

var arr = array.sort((a, b) => {
  return a - b;
});

var sum;

var min_sum = 1000;

var start = 0;

var end = arr.length - 1;

var min_l = 0;
var min_r = 0;

while (start < end) {
  sum = arr[start] + arr[end];

  if (Math.abs(sum) < Math.abs(min_sum)) {
    min_sum = sum;
    min_l = start;
    min_r = end;
  }
  if (sum < 0) start++;
  else end--;
}

console.log(arr[min_l], arr[min_r]);
