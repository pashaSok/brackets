module.exports = function check(str, bracketsConfig) {
	let newArr = bracketsConfig.map((i) => {
		return i.join('');
	});

	for (let i = 0; i < newArr.length; i++) {
		if (~str.indexOf(newArr[i])) {
			str = str.replace((newArr[i]),'');
			i = -1;
		}
	}
	if(str.length==0) return true;
	else return false;
}
