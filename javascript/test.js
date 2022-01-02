console.log("first");
setTimeout(() => {
  console.log("Timer");
}, 0);
var promise = new Promise(function (resolve, reject) {
  if (true) {
    resolve(1);
  }
  // setTimeout(function () {
  //   var randomInt = Math.floor(Math.random() * 10);
  //   resolve(randomInt);
  // }, 4000);
});
console.log(promise);
promise.then(function (data) {
  console.log("Random int passed to resolve:", data);
});
console.log("last");

// const response = await fetch()
// const data = await response.json()