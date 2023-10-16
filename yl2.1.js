const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisesta õhutemperatuur: ', temperatuur => {
	if (temperatuur > 4.0) {
		console.log('Ei ole jäätumise ohtu.')
	} else {
		console.log('On jäätumise oht.')
	} 
		readline.close();
	});