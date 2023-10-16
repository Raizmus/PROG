const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage enda vanus: ', vanus => {
	readline.question('Sisestage enda sugu (M, m või N, n): ', sugu => {
		readline.question('Sisestage treeningu tüüp (1, 2 või 3): ', type => {
			let maxPulss
			if (sugu == 'M' || sugu == 'm'){
				maxPulss = 220 - vanus
			}
			if (sugu == 'N' || sugu =='n') {
				maxPulss = 206 - 0.88 * vanus
			}
			let min 
			let max
			if (type == '1'){
				min = 0.5 * maxPulss
				max = 0.7 * maxPulss
			} else if (type == '2'){
				min = 0.7 * maxPulss
				max = 0.8 * maxPulss
			} else if (type == '3'){
				min = 0.8 * maxPulss
				max = 0.87 * maxPulss
			}
		console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni ' + Math.round(max) + '.')
		readline.close();
			})
			})
		});
