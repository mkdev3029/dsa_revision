// console.log("first");
// setTimeout(() => {
//   console.log("Timer");
// }, 0);
// var promise = new Promise(function (resolve, reject) {
//   if (true) {
//     resolve(1);
//   }
// setTimeout(function () {
//   var randomInt = Math.floor(Math.random() * 10);
//   resolve(randomInt);
// }, 4000);
// });
// console.log(promise);
// promise.then(function (data) {
//   console.log("Random int passed to resolve:", data);
// });
// console.log("last");

// const response = await fetch()
// const data = await response.json()

// CALL APPLY BIND EXAMPLE

// const kitchen = {
//   name: "kitchen",
//   purpose: "cook",
//   order: "meal",

//   cookFood() {
//     console.log(`Serving ${this.order} in 2 mins`);
//   },
// };

// const bedroom = {
//   name: "bedroom",
//   purpose: "sleep",
//   order: "magiee",
// };

// kitchen.cookFood()
// kitchen.cookFood.call(bedroom);

var obj = {
  name: "Madan",
  printName() {
    console.log(this.name);
    // console.log(this.cityName);
    // console.log(cityName);
    // console.log(this.stateName);
    console.log(arguments);
  },
};

var obj2 = {
  name: "Huxly",
  // cityName: "Nagercoil",
  // stateName: "TamilNadu",
};

var obj3 = [{ cityName: "Chennai" }, { stateName: "TamilNadu" }];
// printObj(obj2);

// function printObj({ cityName, stateName }) {
//   console.log(cityName, stateName);
// }

// printName.call(obj, "Chennai", "TamilNadu");
obj.printName.apply(obj2, obj3);
// const func = printName.bind(obj, "Chennai", "TamilNadu");
// func();

// obj.printName.call(obj2);
// obj.printName.apply(obj2);

// const debouncer = () => {
//   console.log("outside return of debouncer function");
//   let debouncing = "hello";
//   return () => {
//     console.log("inside return of debouncer function");
//     console.log(debouncing, "debouncing");
//   };
// };

// const btn = document.getElementById("debounce");
// btn.addEventListener("click", debouncer());

// debouncer();
