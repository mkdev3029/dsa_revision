function Person(name, age) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var p1 = new Person("masai", 25);

console.log(typeof p1);
