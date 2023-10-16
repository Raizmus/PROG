const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage ringide arv: ', laps => {
	let sumOfCarrots = 0
	for(let i = 1; i <= laps; i++){
		if(i % 2==0){
			sumOfCarrots = sumOfCarrots + i
		}
	}
	console.log("Porgandite koguarv on " + sumOfCarrots)
	readline.close()
})