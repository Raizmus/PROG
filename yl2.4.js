const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
const randomValue = Math.random();
readline.question('Kas soovite istekoha valida ("ise") voi loosida ("loos")? ', istekoht => {
	if (istekoht == 'loos', randomValue < 1/3){
		console.log('Istekoht loositi. Aknakoht')
	} else {
		console.log('Istekoht loositi. Vahekaigukoht')
	};
	if (istekoht == 'ise'){
	readline.question('Kas soovite istuda akna aares ("aken") voi mitte ("muu")? ', valik => {
		if (valik == 'aken'){
		console.log('Valisite ise. Aknakoht')
		} else {
			console.log('Valisite ise. Vahekaigukoht')
		}
		readline.close();
		readline.removeAllListeners();
	})
	}
});