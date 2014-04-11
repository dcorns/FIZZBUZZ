function FB2(num){
	var FB = new Array();
		function test(num,word){
			this.num = num;
			this.word = word;
		}

	var result = '';

	FB[0] = new test{3,'Fizz'}; FB[1] = new test{5,'Buzz'}; FB[2] = new test{7,'Sivv'};

	for(var count=0; count < FB.length; count++){
		if(num % FB[count].num === 0){result = result + FB[count].word}
	}

	if(result === ''){result = num}
	return result;
}

