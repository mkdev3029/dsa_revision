const arr = [3, 5, 0, 9, 8];
// const arr = [441, 813, 69, 949, 480, 156, 231, 425];

// n log n

function merge(arr1, arr2) {
  let mergedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }

  while (arr1.length) {
    mergedArr.push(arr1.shift());
  }
  while (arr2.length) {
    mergedArr.push(arr2.shift());
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(arr).join(" "));
