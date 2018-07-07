// Math

// A global is a variable that is always accessable in javascript
// There is a global called "Math" which contains some helpful math numbers and functions

// Square root
Math.sqrt(25) // 5

// Cube root
Math.cbrt(27) // 3

// Exponents
// This is for non ES6 versions of javascript, use this on applications that require backwards compatibilty
Math.pow(4, 2) // 16

// Pi
Math.PI // 3.141592653589793

// Sine
Math.sin(Math.PI) // 0.00000000000000012246467991473532
/*
  It is not exactly zero because
  the PI constant is just a small
  approximation of pi, and only
  contains a few decimal points.
  The math functions are also im-
  perfect.
*/

// Cosine
Math.cos(Math.PI) // -1

// Absolute value
Math.abs(-5) // 5

// Minimum
Math.min(5, 2, 1, 6, 8) // 1

// Max
Math.max(3, 7, 2, 9, 1, 32) // 32

// Round downwards
Math.floor(4.45) // 4

// Round upwards
Math.floor(4.45) // 5

// Round
Math.round(2.5) // 3

// Random decimal
Math.random() // 0.5776478466186081
Math.random() // 0.10430755924551116
Math.random() // 0.5670848140946867
// You can use this to get a random number
let randomDigit = () => Math.floor(Math.random() * 10)
randomDigit() // 4
randomDigit() // 2
randomDigit() // 7
randomDigit() // 1
randomDigit() // 3
