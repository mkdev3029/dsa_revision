// arr.sort((a, b) => a - b);

let i = 0;

while (i < arr.length) {
  if (arr[i] !== i) {
    return i;
  }
  i++;
}
return i;
