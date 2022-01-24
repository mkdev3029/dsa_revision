function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  var start = 2;
  var flag = true;
  while (start < num) {
    if (num % start === 0) {
      flag = false;
      break;
    }
    start++;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
