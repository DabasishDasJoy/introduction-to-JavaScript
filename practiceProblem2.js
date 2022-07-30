var marks = [75.25, 65, 80, 35.45, 99.50];
var sum = 0;
for (let index = 0; index < marks.length; index++) {
    sum += marks[index];
}

console.log(parseFloat((sum/5).toFixed(2)));