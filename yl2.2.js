const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage Leedu perekonnanimi: ', lastname => {
	let last2 = lastname.slice(-2);
	let last1 = lastname.slice(-1);
	if (last2 == 'ne') {
		console.log('Abielus');
	} else if (last2 == 'te') {
			console.log('Vallaline');
	} else if (last1 == 'e' && last2 != 'ne' && last2 != 'te') {
			console.log('Määramata');
	} else {
			console.log('Pole ilmselt leedulanna perekonnanimi');
		}
		console.log();
		readline.close();
	})