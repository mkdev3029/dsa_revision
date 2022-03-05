// var arr1 = [1, 4, -1, 5, -1];
// var arr2 = [1, 3, -1, 4, -1];

// arr1.pop();
// arr2.pop();

// var mergeArr = [...arr1, ...arr2];

// mergeArr.sort((a, b) => {
//   return a - b;
// });

// console.log(mergeArr.join(" "));

// var mergeArr = [];

// console.log(mergeList(arr1, arr2));

// var mergeArr = [...arr1, ...arr2];

// console.log(mergeArr);

// function mergeList(A, B) {
//   var mergeArr = [...A, ...B];
//   mergeArr.sort((a, b) => {
//     return a - b;
//   });
//   var i = 0;
//   while (mergeArr.length) {
//     if (mergeArr[i] === -1) mergeArr.shift();
//     else break;
//   }
//   return mergeArr;
// }

// var arr = [];
// for (let i = 0; i < A.length - 1; i++) {
//   arr.push(A[i]);
// }
// for (let i = 0; i < B.length - 1; i++) {
//   arr.push(A[i]);
// }
// arr = arr.sort((a, b) => {
//   return a, b;
// });
// return arr.join(" ");

// function runProgram(input) {
//   input = input.trim().split("\n");
//   var arr1 = input[0].split(" ").map(Number);
//   var arr2 = input[1].split(" ").map(Number);
//   arr1.pop();
//   arr2.pop();
//   var mergeArr = [...arr1, ...arr2];
//   mergeArr.sort((a, b) => {
//     return a - b;
//   });

//   console.log(mergeArr.join(" "));
// }

// if (process.env.USER === "madandev") {
//   runProgram(`1 4 5 -1\n1 3 4 -1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// let arr = [1, 34, 3, 21];

// console.log(i);
// for (let i = 0; i < arr.length - 1; i++) {
//   setTimeout(() => {
//     console.log(arr[i], i);
//   }, i * 1000);
// }

// var -> function scope, global scope
// let -> block scope

// console.log(i);

// if (true) {
//   var i = 0;
// }
// name();

// const addTwoNumbers = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(addTwoNumbers(2)(3)(3));

// const num2 = addTwoNumbers(2);

// console.log(num2(3));

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// if (!0) {
//   console.log(1);
// } else {
//   console.log("0");
// }

// Time complexity for accessing a data will O(1) Key:value (Hash Map)

// var person = {};

// ADD some key and a value

// person.name = "madan"; // dot notation
// person.name = "rahul"; // dot notation
// person["name"] = "madan"; // square bracket notation

// console.log(person["job"]);

// var arr = [1, 1, 1, 5, 5, 6, 7, 8, 9, 10, 6, -1, -9, 0];
// var arr = "abcedalkfdlkhjgfsdlkjghsd";

// loop through the array find the count and print the number

// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
// !false true // this is first time tha we are seeing this
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// console.log(obj);

// var arr = Object.keys(obj);
// var values = Object.values(obj);

// console.log(arr[0], values[0]);

// TRUTHY AND FALSY values

// if (undefined) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// If it is not present add arr[i] as key and the value as 1
// If key is present increment the value of that key by 1

// var arr1 = [1, 2, 2, 3, 4, 5];
// var arr2 = [4, 4, 3, 2, 1, 1];

// console.log(obj1, obj2);

// var res = [];
// var count = 0;

// console.log(res.join(" "));

// var arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.filter((el) => false),
//   Array.isArray(arr)
// );

// console.log(arr);

// var num = 123; // 321
// 123 321
// 100 + 20 + 3
// 300 + 20 + 1

// hundreds, tens, ones

// var num = 123; // 321 // 300 + 20 + 1
// var num = 1000; // 321 // 300 + 20 + 1
// 100 + 20 + 3
// hint2 modulo
// var res = "";

// Reverse this number with arithemtic operation

// while (num > 0) {
// res = res * 10 + (num % 10);
//   res += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log(res);

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// var arr = [-1, 0, 1, 2, -1, -4];
// var res = [];

// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (i !== j && i !== k && j !== k && arr[i] + arr[j] + arr[k] == 0) {
//         var ans = [arr[i], arr[j], arr[k]]
//           .sort((a, b) => {
//             return a - b;
//           })
//           .join("");
//         if (!obj[ans]) {
//           obj[ans] = 1;
//         } else {
//           obj[ans] = obj[ans] + 1;
//         }
//       }
//     }
//   }
// }

// var result = Object.keys(obj);
// console.log(result);

// console.log("start");
// function myPromise() {
//   return new Promise((res, rej) => {
//     console.log("thakur");
//     const value = true;
//     setTimeout(() => {
//       console.log("hello");
//       if (value) {
//         res();
//       } else {
//         rej();
//       }
//     }, 2000);
//   });
// }

// myPromise()
//   .then(() => {
//     console.log("Resolved");
//   })
//   .catch(() => {
//     console.log("Rejected");
//   });

// console.log("end");
// start thakur end hello resolved

// const promise = new Promise((res, rej) => {
//   if (true) {
//     res(1);
//   }
// });

// console.log(promise);

// promise.then(() => {
//   console.log("resolved");
// });

// console.log("hello");

// Promise hello resolved

// chooseToppings((toppings) => {
//   placeOrder(
//     toppings,
//     (order) => {
//       collectOrder(
//         order,
//         (pizza) => {
//           eatPizza(pizza);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// var arr = [39, 27, 11, 4, 24, 32, 32, 1];
// var stack = [];
// var res = [];

// arr[i] > stack[stack.length - 1]
// stack.push(arr[i])
// res.push(arr[i])

// arr[i] <= stack[stack.length - 1]
// stack.pop()

// for (let i = 0; i < arr.length; i++) {
//   while (stack.length && arr[i] >= stack[stack.length - 1]) {
//     stack.pop();
//   }
//   if (stack.length) {
//     res.push(stack[stack.length - 1]);
//   } else {
//     res.push(-1);
//   }
//   stack.push(arr[i]);
// }

// console.log(res.join(" ")); // left

// for (let i = arr.length - 1; i >= 0; i--) {
//   while (stack.length && arr[i] >= stack[stack.length - 1]) {
//     stack.pop();
//   }
//   if (stack.length) {
//     res.push(stack[stack.length - 1]);
//   } else {
//     res.push(-1);
//   }
//   stack.push(arr[i]);
// }

// console.log(res.reverse().join(" ")) // right

// Next Greater Element (right)
// Next Greater Element (left)

// Next Smaller Element (right)
// Next Smaller Element (left)

// var obj = {};

// var arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7];
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// console.log(obj);

// var mat = [];

// for (let i = 0; i < 5; i++) {
//   mat.push([]);
//   for (let j = 0; j < 5; j++) {
//     mat[i][j] = i + j;
//   }
// }

// console.log(mat);

// var str = "abc";

// function printName(cb, firstName) {
//   return `Hi, this is ${cb(firstName)}`;
// }

// function getName(firstName) {
//   return firstName;
// }

// console.log(printName(getName, "madan"));

// var printName = new Promise(function (res, rej) {
//   var value = false;
//   if (value) {
//     res("madan");
//   } else {
//     rej("ERROR");
//   }
// });

// console.log(printName);

// printName
//   .then((data) => {
//     console.log(`Hi, this is ${data}`);
//   })
//   .catch((data) => {
//     console.log(`${data}`);
//   });

// Callbacks cannot be asynchronous, it does not .then and .catch
// Promise is asynchronous
// If we don't use promises we will in callback hell

// function getMoneyBack(money, callback) {
//   if (typeof money !== "number") {
//     // callback(null, new Error("money is not a number"));
//     return callback("money is not a number");
//   } else {
//     return callback(money);
//   }
// }

// const money = getMoneyBack(1200, handleMoney);
// console.log(money);

// function handleMoney(type) {
//   // console.log(type);
//   return type;
// }

// function getMoneyBack(money) {
//   return new Promise((resolve, reject) => {
//     if (typeof money !== "number") {
//       reject(new Error("money is not a number"));
//     } else {
//       resolve(money);
//     }
//   });
// }

// getMoneyBack(1200).then((money) => {
//   console.log(money);
// });

// const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2));

// add(2, 4)
//   .then((result) => {
//     console.log(result); // result: 6
//     return result + 10;
//   })
//   .then((result) => {
//     console.log(result); // result: 16
//     return result;
//   })
//   .then((result) => {
//     console.log(result); // result: 16
//   });

// GENERATE SUBARRAY IN TWO FOR LOOPS

// let arr = [1, 2, 1, 2, 3, 1];
// var res = [];

// for (let i = 0; i < arr.length; i++) {
//   let subArr = [];
//   for (let j = i; j < arr.length; j++) {
//     subArr.push(arr[j]);
//     res.push(subArr.slice());
//   }
// }

// console.log(res.join("\n"));

// GENERATE SUBSTRING IN TWO FOR LOOPS

// var str = "abcd";
// var res = [];

// for (let i = 0; i < str.length; i++) {
//   var subStr = "";
//   for (let j = i; j < str.length; j++) {
//     subStr += str[j];
//     res.push(subStr);
//   }
// }

// console.log(res.join("\n"));

// let a = 3;
// let b = new Number(3);
// let b = Number(3);
// let c = 3;

// console.log(b);

// console.log(a == b);
// console.log(a === b);
// console.log(a === c);

// function sum(a, b) {
//   return a + b;
// }
// sum(1, "2");

// var arr = [1, 1, 1, 1, 1, 11, 1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5];

// var set = new Set();

// for (let i = 0; i < arr.length; i++) {
//   set.add(arr[i]);
// }

// console.log(set);

// const kitchen = {
//   order: "meal",
//   print() {
//     console.log(this.order);
//   },
// };

// const bedroom = {
//   order: "maggie",
// };

// kitchen.print();

// kitchen.print.apply(bedroom);

// Print the number of triplets whose sum is zero. And the triplets should be unique

// -1 0 1

// function add(a, b) {
//   console.log("outside", arguments);
//   return function () {
//     // console.log(a);
//     console.log("inside add", arguments);
//   };
// }

// add(2, 3)(4, 5);
// add(2, 3)

// var str = "string";

// str = 1;

// var arr = [1, 2, 3, 4];
// var arr1 = arr;
// console.log(arr1 == arr); // true

// var arr1 = [1, 2, 3, 4];

// console.log(arr1 == arr); // false

// Primitive datatypes AND Non-Primitive datatypes
// Hoisting
// Closures
// What is Virtual DOM
// What is BABEL
// Reconcillation
// Mapping an array and sorting
// Gave him a code and ask him about how it is hoisting
// Merge two sorted arrays
// Redux flow
// Context API
// CSS Flex
// If they give three btns how will you flex it?. And where will you add the flex?.

// InputArr = [1, ‘a’, ‘b’, 5, 6], Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]

// var inputArr = [1, "a", "b", 5, 6];

// Array.prototype.mySquare = function (cb) {
//   var res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (typeof this[i] !== "string") {
//       res.push(cb(this[i]));
//     } else {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// var OutputArr = inputArr.mySquare((item) => {
//   return item * item;
// });

// console.log("output", OutputArr);

// var dp = [];

// console.log(sum(1, 2));

// MERGE TWO SORTED ARRAYS

// var answer = Array(a.length + b.length).fill(0);

// var i = 0,
//   j = 0,
//   k = 0;

// while (i < a.length && j < b.length)
//   answer[k++] = a[i] < b[j] ? a[i++] : b[j++];

// while (i < a.length) answer[k++] = a[i++];

// while (j < b.length) answer[k++] = b[j++];

// console.log(answer);

// var obj = {
//   a: {
//     d: function (a, b, c) {
//       return a + b + c;
//     },
//   },
//   b: function (a, b, c) {
//     return a + b - c;
//   },
//   c: function (a, b, c) {
//     return a - b - c;
//   },
// };
// compute(a, b, c);

// var obj = {
//   Hello: function () {
//     return "hello world" + this.name;
//   },
//   name: "hello",
// };

// var obj1 = {
//   Helloworld: obj.Hello,
//   name: "bye",
// };
// console.log(obj1.Helloworld()); // what is the output?
// // bye

// let arr = [1, 2, 3, 4, 5];
// // Output; // [1,2,3,4,5] => [3,4,5,6,7] => [4,8,10,12,14]

// Array.prototype.add = function (x) {
//   var result = [];
//   console.log(x);
//   for (let i = 0; i < this.length; i++) {
//     result.push(this[i] + x);
//   }
//   return result;
// };

// Array.prototype.multiply = function (x) {
//   var result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(this[i] * x);
//   }
//   return result;
// };

// let out = arr.add(2).multiply(2);

// Array.prototype.myFind = function (cb) {
//   var res = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       res = this[i];
//       break;
//     }
//   }
//   return res;
// };

// var arr = [5, 12, 8, 130, 44];

// console.log(
//   arr.myFind((item) => {
//     return item > 128;
//   })
// );

// console.log(out);

// function multiply(num) {
//   function multiplyer(n) {
//     if (n !== undefined) {
//       num *= n;
//       return multiplyer;
//     } else {
//       return num;
//     }
//   }
//   return multiplyer;
// }

// console.log(multiply(2)(4)(6)());

// Print sum of the smallest subarray length that is >= target

// var arr = [4, 2, 2, 7, 8, 1, 2, 8, 10];

// var target = 8;
// var sum = 0;
// var start = 0;
// var end = 0;
// var windowSize = 0;

// while (end < arr.length) {
//   sum += arr[end];
//   while (sum >= target) {
//     sum -= arr[start];
//     windowSize = start - end === 0 ? 1 : start - end;
//     console.log(`${start} | ${end}`);
//     start++;
//   }
//   end++;
// }

// console.log(windowSize);

// mountain

// var arr = [2, 3, 2, 1];

// var count = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i + 1] || arr[i] >= arr[i + 1]) {
//     count++;
//   }
// }

// console.log(count);

// intersection

// var arr1 = [3, 2];
// var arr2 = [7, 5];

// var x = [];
// var y = 0;

// for (let i = 0; i < arr1.length; i++) {
//   y = Math.abs(arr1[i] - arr2[i]);
//   if (arr1[i] <= y && arr2[i] >= y) {
//     x.push(arr1[i], y, arr2[i]);
//   }
// }

// var obj = {};

// for (let i = 0; i < x.length; i++) {
//   if (obj[x[i]] == undefined) {
//     obj[x[i]] = 1;
//   } else {
//     obj[x[i]]++;
//   }
// }

// var ans = -1;

// for (const key in obj) {
//   if (obj[key] > 1) {
//     ans = key;
//     break;
//   }
// }

// console.log(ans);

// var arr = [1, 1, 0, 0, 1, 1, 1];

// var oneCount = 0;
// var zeroCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 1) {
//     oneCount++;
//   } else {
//     zeroCount++;
//   }
// }

// console.log(oneCount / 2 + zeroCount / 2);

// var a = [[1, 2, 3, 4]];

// var b = a;

// var c = [...a];

// var c = JSON.parse(JSON.stringify(a));

// a[0][0] = 2;

// console.log(a);
// console.log(b);
// console.log(c);

// var arr = [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// var mappedArr = arr.map((element) => {
//   return element * 2;
// });

// var filteredArr = arr.filter((element) => {
//   return element % 2 !== 0;
// });

// console.log(arr);
// console.log(mappedArr);
// console.log(filteredArr);

