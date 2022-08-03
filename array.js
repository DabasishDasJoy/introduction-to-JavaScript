var array = [25, 56, 57, 298, 2378, 98, 56];

console.log(array.indexOf(298));

array.push(89);
console.log(array);
// array.pop();
// array.pop();
array.unshift(78);
var num = 2;
num = num.toString();

console.log(array);

array.shift();
console.log(array);
console.log(6 >= 6);


var i = 0;
for (i=0; i<5; i++){};
console.log(i);
var names = "false";
console.log(typeof(names));

var i = 5;
for (; i < 5; i++) {
  console.log(i);
}

var i = 5;
for (;i < 5; i++) {
  console.log(i);
}


var sliced = array.slice(-3, -1);
console.log(sliced);

var str = "My name is Dabasish Das Joy";
var strSub = str.substring(8, 21);
console.log(str.includes("Das"));