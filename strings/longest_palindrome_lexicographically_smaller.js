var str = "aabbcc";

var obj = {};

for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] === undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}

var arr = [];

var keys = Object.keys(obj).sort((a, b) => {
  if (a < b) {
    return -1;
  }
});

var newObj = {};

for (let i = 0; i < keys.length; i++) {
  newObj[keys[i]] = obj[keys[i]];
}

console.log(newObj);

var middleLetter = [];

for (const key in newObj) {
  if (newObj[key] % 2 !== 0) {
    middleLetter.push(key);
  }
}

middleLetter.sort((a, b) => {
  if (a < b) return -1;
});

var middle = middleLetter[0];

var startStr = "";

for (const key in newObj) {
  if (newObj[key] % 2 === 0) {
    startStr += key;
  }
}

var reverseStr = startStr.split("").reverse().join("");

if (middleLetter.length === 0) {
  console.log(startStr + reverseStr);
} else {
  console.log(startStr + middle + reverseStr);
}
