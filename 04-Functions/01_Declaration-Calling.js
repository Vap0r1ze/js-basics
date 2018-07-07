// Declaration and Calling

// To declare a function, use the "function" keyword
// A function is a set of instructions that is saved under a variable
// You can later "call" the function, meaning run everything in it

// Lets create a function that takes two arguments, and adds them together
// Also please take note of how I format this

function sum (num1, num2) {
	// Use "return" to return a value and halt further execution of the function
	// If you do not return anything, it will auto-return as undefined
	return num1 + num2
}

// Now to call this function, use parenthesis, and pass with arguments inside -- comma seperated

sum(4, 2) // 6

// If you wanna make your function a constant, or you just wanna use let, you can do this

const getIP = function () {
	return '127.0.0.1'
}
getIP() // '127.0.0.1'
