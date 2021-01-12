function pythagoreanTheorum(a, b) {
	
	function pow(x) { // replaces Math.pow()
		return x ** 2;
	}
	
	function sqrt(x) { // replaces Math.sqrt()
		
		function closeEnough(guess) { // checks to see if number works as a solution
			return Math.abs(guess * guess - x) / x < 0.001; // sqrt 
		}
		
		function improve(guess) { // improves number if it doesn't work as a solution
			return (guess + x / guess) / 2;
		}
		// if the current guess works, it's returned as a string rounded to the hundredth's place (fixed-point notation)
		// if the current guess doesn't work, recur
		function newTry(guess) {
			return (closeEnough(guess)) ? guess.toFixed(2) : newTry(improve(guess))
		}
		// the first guess is just the first number divided in half
		return newTry(x / 2);
	}
	// theorum is "a^2 + b^2 = c^2"
	// the magic piece of code that gets the solution is `sqrt(pow(a) + pow(b))`
	document.getElementById("solution").innerHTML = "the square root of your hypotenuse is... " + sqrt(pow(a) + pow(b))
}