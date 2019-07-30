function bubbleSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = 0; j < arr.length - (i + 1); j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

function changeSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

function testCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var tmp = parseInt(Math.random() * 123);
		if(tmp >= 0 && tmp <= 9){
			arr.push(tmp);
		}else if(tmp >= 65 && tmp <= 90){
			//大写字母
			var charStr = String.fromCharCode(tmp);
			arr.push(charStr);
		}else if(tmp >= 97 && tmp <= 122){
			var charStr = String.fromCharCode(tmp);
			arr.push(charStr);
		}else{
			i--;
		}
	}
	return arr.join("");
}