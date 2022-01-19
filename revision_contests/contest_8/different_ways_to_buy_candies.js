// var arr = [2, 3, 6, 7];
var arr = [2, 3, 5];

// var cost = 7;
var cost = 8;

// var currentWay = [];

function fun(i, arr, currentWay, currentSum) {
  if (currentSum === cost) {
    console.log(currentWay);
    return;
  }
  if (currentSum + arr[i] <= cost) {
    currentSum += arr[i];
    currentWay.push(arr[i]);
    fun(i, arr, currentWay, currentSum);
    currentSum -= arr[i];
    currentWay.slice(arr[i], 1);
    fun(i + 1, arr, currentWay, currentSum);
  } else {
    return;
  }
}

var currentWay = [];
var currentSum = arr[0];

fun(0, arr, currentWay, currentSum);
