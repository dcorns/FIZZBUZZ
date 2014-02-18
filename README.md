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


