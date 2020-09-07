import figlet from 'figlet';

export const CommonConst = {
	Donut: "Donut",
	Beer: "Beer",
	Coffee: "Coffee"
}

export const AsciiString = (...str) => new Promise((resolve, reject) => {
	figlet(str.join(","), function(err, data) {
		if (err) {
			console.log('Something went wrong...');
			reject(err);
			return;
		}
		resolve(data);
	});
});
