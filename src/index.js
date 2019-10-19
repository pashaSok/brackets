 module.exports = function check(str, bracketsConfig) {
    var arr = str.split(''),
    bracketsStack = [],
    openBrackets = ['{', '(', '['],
	closeBrackets = ['}', ')', ']'],
	indexOpenBrackets,indexCloseBrackets;

	for(var j=0; j < arr.length; j++){
		indexOpenBrackets = openBrackets.indexOf(arr[j]);

		if(indexOpenBrackets != -1){
			bracketsStack.push(indexOpenBrackets);
		}

		indexCloseBrackets = closeBrackets.indexOf(arr[j]);
		if( indexCloseBrackets != -1){
			indexOpenBrackets = bracketsStack.pop();
			if(indexCloseBrackets != indexOpenBrackets){
				return false;
			}
		}
	}

	if(bracketsStack.length !=0){
		return false;
	}

    return true;
}
