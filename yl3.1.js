const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage mitu korda äratada: ', times => {
	for(let i = 1; i <= times; i++){
		console.log("Tõuse ja sära!")
	}
	readline.close()
})