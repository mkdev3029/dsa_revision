let arr = [2, 4, 2, 6, 2];
let n = arr.length;
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] == arr[j]) {
      if (i - 0 + (j - 1) < min) {
        min = i - 0 + (j - 1);
      }
    }
  }
}

console.log(min);
