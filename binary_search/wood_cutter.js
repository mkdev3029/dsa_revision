// Javascript implementation of the approach

// Function to return the amount of wood
// collected if the cut is made at height m
function woodCollected(height, n, m) {
  let sum = 0;
  // for (let i = n - 1; i >= 0; i--) {
  //   if (height[i] - m <= 0) break;
  //   sum += height[i] - m;
  // }
  for (let i = n - 1; i >= 0; i--) {
    if (height[i] - m <= 0) break;
    sum += height[i] - m;
  }

  return sum;
}

// Function that returns Height at
// which cut should be made
function collectKWood(height, n, k) {
  // Sort the heights of the trees
  height.sort((a, b) => a - b);

  // The minimum and the maximum
  // cut that can be made
  let low = 0,
    high = height[n - 1];

  // Binary search to find the answer
  while (low <= high) {
    let mid = low + (high - low) / 2;

    // The amount of wood collected
    // when cut is made at the mid
    let collected = woodCollected(height, n, mid);

    // If the current collected wood is
    // equal to the required amount
    if (collected == k) return mid;

    // If it is more than the required amount
    // then the cut needs to be made at a
    // height higher than the current height
    if (collected > k) low = mid + 1;
    // Else made the cut at a lower height
    else high = mid - 1;
  }

  return -1;
}

// Driver code

let height = [20, 15, 10, 17];
let n = height.length;
let k = 7;

console.log(collectKWood(height, n, k));


var sum = 0;
for (var i = 0; i < len; i++) {
  var cut = 0;
  sum = sum + arr[i];
  cut = sum - arr[i] * (i + 1);
  if (cut >= height) {
    sum = sum - arr[i];
    break;
  }
}
if (sum - height >= 0) {
  console.log(Math.floor((sum - height) / i));
} else {
  console.log(-1);
}