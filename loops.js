/* let sum = 0
for (let number = 1; number <= 5; number++) {
	sum = sum + number
	console.log(sum)
}
*/

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let sum = 0
let number = 1
while (number <= 5) {
	sum = sum + number
	console.log(sum)
	number++
}