const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

/* Math.ceil - umardab ulespoole */
readline.question('Taringute arv: ', dice => {
	for(let i = 1; i <= dice; i++){
		console.log(Math.ceil(Math.random()* 6))  
	}
	readline.close()
})