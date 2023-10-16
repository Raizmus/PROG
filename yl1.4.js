const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage oma nimi: ', nimi => {
	readline.question('Sisestage lubatud kiirus (km/h): ', lubatudKiirus => {
	readline.question('Sisestage tegelik kiirus (km/h): ', tegelikKiirus => {
		let trahv = (Math.min(190,(parseInt(tegelikKiirus) - parseInt(lubatudKiirus) *3));
		let lauseKeskosa = ', kiiruse ületamise eest on teie trahv ';
		let lause = (nimi + lauseKeskosa + trahv + ' eurot.');
		console.log(lause);
		readline.close();
	})
	})
});
