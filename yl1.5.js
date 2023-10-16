const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', ainepunktid => {
	readline.question('Sisestage nädalate arv: ', nädalad => {
		let ajakulu = Math.round((ainepunktid *26) / nädalad)
		console.log(ajakulu);
		readline.close();
	})
});