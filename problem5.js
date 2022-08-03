var fruits = ['Apple', 'Banana', 'Orange'];
var indexOfBanana = fruits.indexOf('Banana');
fruits[indexOfBanana] = 'Mango';
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);