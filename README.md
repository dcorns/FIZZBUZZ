FIZZBUZZ
========

This is a two stage assignment intially calling for 3 possible outputs based on the input of any number. Due to the ambiguity of the project request, I make the following assumptions.
1) the number passed in to be evaluated is an integer
2) Numbers are to be evaluated synchronously.
3) The output is given as a return to a caller that is part of the same js file.
4) The data is volatile.

stage one critera: <num=muliple of 3 output 'Fizz'>, <num=multiple of 5 output 'Buzz'>, <if both of the previous conditions are true, output FizzBuzz> else output the number.

Given that the criteria is limited I chose to use simple conditional statements to evaluate the number. The modulus operator is perfect for the task as it will evaluate to zero if a divide operation returns an integer. 

	if(num%3=0){result='Fizz'}
	
Since result is initialized as '', if the first 2 conditions fail, I can use this state of result as the condition to determine whether the number alone should be returned.
			
			if(result==""){result=num}

stage two criteria: make stage one extensable in order to add 30 more conditions.

This request would cause the code to be hard to read and vulnerable to bugs if I stuck with the original solution. Additionally much repetition of code would exist.
In order to solve this issue, I chose to use an array of objects, each containing a number and a string property.

		function test(num,word){
			this.num=num;
			this.word=word;
		}

Of course with a request like this a method of storing the relationships would be ideal, but no such storage requirement exists in the specification. So while each new condition would need to be hard coded this is the most readible and efficient way I can come up with to solve it.

Since I am using an object array I can write the evaluation code simply.

//Check for all object conditions
		for(var count=0;count<FB.length-1;count++){
if(FB[count].num%num==0){result=result+FB[count].word}

//If no conditions are met, store num in the result for returning to the caller
	if(result=''){result=num}