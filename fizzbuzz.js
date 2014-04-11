function FB(num){
	
	var result = "";
	
	if(num % 3 === 0){result = 'Fizz'}

	if(num % 5 === 0){result = result+'Buzz'}

	if(result == ""){result = num}
				
	return result;
}
