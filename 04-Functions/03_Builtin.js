// Built-in

// There are alot usefully built-in functions.
// The most commonly used, and the one you will be using alot, is console.log

// Use console.log to print a string out to the console

console.log('Whats up console') // undefined
// While it returns undefined, it still outputs it to the console
// This means you cannot store it in a variable after the fact

// Try running this file with "node 03_Builtin.js"

// There are some class specific ones too -- each value type has a different "class" 
// I will show you two of each class, but we will learn more as we go through lessons

// String

let youSuck = 'you suck'
youSuck.toUpperCase() // 'YOU SUCK'
// You can these with raw values if you want
'jk ily'.substr(0,2) // 'jk'
// String::substr is just like subtring on tatsumaki tags
// It takes a string and picks out from index 0 to index 2
// Without a second argument, it infers the end of the string
'hello man'.substr(1) // 'ello man'

// Array

// Do not do any builtin functions with arrays unless the arrays are stored in a variable
// The reason for this is because javascript freaks out if a line starts with "[" or "("

let array = []
// Add an element to the end of the array
array.push(5) // 1 -- Returns the new length of the array
array // [5]
// Add multiple items to the array
array.push(6, 1, 2) // 4
array // [5, 6, 1, 2]
// Remove last element of array
array.pop() // 2 -- Returns the element removed
// Remove the first element of array
array.shift() // 
array // [6, 1]
console.log(array)

// Object

let obj = { name: 'smth', thing: 'abc', e: 3 }
// Get an array of keys in the object
let keys = Object.keys(obj) // ['name', 'thing', 'e']
console.log(keys)

// Number

// When you do these, also make sure the numbers are in a variable
// Things like "5.something()" makes javascript go crazy because the dot makes it expect a decimal number
// A workaround to this can be "5.133.something()" or "5..something()", but prefer variables other that

// Turn a number to a string
let pi = 3.14159
pi.toString() // '3.14159'
// Note that this does not affect the original number
pi // 3.14159
// Round a number to the nth decimal point
pi.toFixed(2) // '3.14'
pi.toFixed(3) // '3.145'
pi.toFixed(0) // '3'
// Note that this returns a string, not a number
