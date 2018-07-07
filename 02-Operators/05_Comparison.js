// Comparison

// In JavaScript, you can compare values with comparison operators
// Most comparisons will return a boolean

// Equality comparisons

// Making sure things are equal
1 === 1 // true
'vap' === 'vap' // true
6 === -6 // false
'tatsu' === 'Tatsu' // false
// Making sure things are not equal
4 !== 1 // true
'' !== false // true
0 !== 0 // false
null !== undefined // true

// Numeric comparisons

// Greater than
5 > 6 // false
8.1 > 2 // true
1 > .2 // false
// Greater than or equal -- remember, equal sign is always after for comparisons
6 >= 6 // true
8 >= 1.3 // false
3 >= 0 // true
// Less than
4 < 5 // true
2 < 2 // false
4 < 1 // false
// Less than or equal
1 <= 0 // false
1 <= 1.01 // false
1 <= 10 // true

// Boolean logic -- try not to confuse these with bitwise logic
//                  as these have nothing to do with binary

// And -- if both are truthy
true && true // true
0 && 'hi' // false
7 && 5 // false
// Or -- checks if the first value is truthy, if not it reverts to the second
null || 'world' // 'world'
-1 || 5 // -1
NaN || 0 // 0
// You can also chain these together, and they work just the same!
null || NaN || 's' // 's'
'X' || false || 'Y' // 'X'
0 || 2 || undefined // 2

// Opposite

// This casts the value to a boolean, and gives the opposite boolean
!true // false
!0 // true
!'' // true
!'false' // false
!false // true
!6 // false

// Ternary operator

// Format -- x ? y : z
// This will check if x is truthy,
// if it is it will give y,
// if not it will give z

true ? 'Yes' : 'No' // 'Yes'
NaN ? 'Works' : 'Broken' // 'Broken'
5 === 1 ? '' : 's' // 's'
!5 ? 1 : -1 // -1

/*
  If you cant wrap your head around ternary operators,
  dont worry. These arent absolutely necessary for the
  next lessons. Although, they are a reall handy tool
  for most. Youre better off taking a break and coming
  back to it tommorrow.
*/
