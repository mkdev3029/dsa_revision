// var arr = [0, 1, 2, 0, 1, 2];

var low = 0;
var high = arr.length - 1;
var mid = 0;

while (mid <= high) {
  switch (arr[mid]) {
    case 0:
      var temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
      break;
    case 1:
      mid++;
      break;
    case 2:
      var temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
      break;

    default:
      break;
  }
}

console.log(arr);
