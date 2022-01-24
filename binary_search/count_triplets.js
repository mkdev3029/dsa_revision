// function binary_lower(value, arr, n) {
//   var start = 0;
//   var end = n - 1;
//   var ans = -1;
//   var mid;

//   while (start <= end) {
//     mid = parseInt((start + end) / 2);
//     if (arr[mid] >= value) {
//       end = mid - 1;
//       ans = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// }

// // Return the number of triplet indices satisfies
// // the three constraints
// function countTriplet(arr, n, k) {
//   var count = 0;

//   // sort the array
//   arr.sort((a, b) => a - b);

//   // for each element from index 2 to n - 1.
//   for (var i = 2; i < n; i++) {
//     // finding the lower bound of arr[i] - k.
//     var cur = binary_lower(arr[i] - k, arr, n);

//     // If there are at least two elements between
//     // lower bound and current element.
//     if (cur <= i - 2) {
//       // increment the count by lb - i C 2.
//       count += parseInt(((i - cur) * (i - cur - 1)) / 2);
//     }
//   }

//   return count;
// }

// // Driver code
// var arr = [2, 3, 8, 14, 14, 16];
// var k = 14;
// var n = arr.length;
// console.log(countTriplet(arr, n, k));
