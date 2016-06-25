module.exports = {
	mapObject(obj, cb) {
		var a = [];
		Object.keys(obj).map(function (key) {
			a.push(cb(obj[key], key));
		});
		return a;
	}
}
