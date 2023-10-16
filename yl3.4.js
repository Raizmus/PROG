const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let apples = 14
readline.question('Mitu poialpoissi tahab ounu: ', boys =>{
	for(let i = 1; i <= boys; i++){
		let applesForBoys = Math.ceil(Math.random()* 2)
		console.log(applesForBoys)
		apples = apples - applesForBoys
	}
	console.log('Lumivalgekesele jai ' + apples)
	readline.close()
})