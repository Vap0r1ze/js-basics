// Arrow Functions

// An arrow function is just function in expression form

// They are somewhat similar to normal functions

let sum = (num1, num2) => {
	return num1 + num2
}
sum(4, 6) // 10

// If you only have one argument, you can forget the parenthesis -- optional

let double = num => {
	return num * 2
}
double(4) // 8

// If you are only returning one expression, you can forget the braces and "return"

let exclaim = sentence => sentence + '!!'
exclaim('Hey') // Hey!!

// Use empty parenthesis for no arguments -- like normal functions

let getTwo = () => 2
getTwo() // 2

// You can also pass these as arguments -- just like normal functions

function runFuncWithTwo (f) {
	let result = f(2)
	return result
}

runFuncWithTwo(n => n * 3) // 6
runFuncWithTwo(function (n) {
	return n * 4
}) // 8
