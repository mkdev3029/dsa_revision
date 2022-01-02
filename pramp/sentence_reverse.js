// #Sentence Reverse

// You are given an array of characters arr, which consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word. How can you most efficiently reverse the order of the words in the array? Explain and implement your solution. Lastly, analyze its time and space complexities.

// [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]

var arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  "  ",
  "m",
  "a",
  "k",
  "e",
  "s",
  "  ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
];

var res = [];

var resStr = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "  ") {
    res.push(resStr);
    resStr = "";
  }
  resStr += arr[i];
}

res.push(resStr);

console.log(res);
