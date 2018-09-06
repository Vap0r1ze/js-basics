// Splash

// Splashes are a way to connect function arguments and arrays

function firstTwo (...args) {
	return args.slice(0, 2) // slice is like substr but for arrays
}
firstTwo(6, 2, 4, 1, 7, 8) // [6, 2]

// You can include arguments before splashes, but not after

function obtain (number, ...list) {
	return list.slice(0, number)
}
obtain(3, 4, 2.3, 'a', NaN, null) // [3, 2.3, 'a']

// You can also call functions using spreads
function threeSum (a, b, c) {
	return a + b + c
}
let numbers = [1, 4, 2]
threeSum(...numbers) // 7
