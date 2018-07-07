// Indexing

// This doesnt have much to do with functions, but it is important to know

// To get items in an array:

let array = [3.14, 'Vap0r1ze', [], NaN]
// Zero based indexing -- counting starts from 0
array[2] // []
array[-1] // undefined
array[0] // 3.14
array[4] // undefined

// You can also set/manipulate values in arrays

array[1] = 'Lesbisch'
array[2].push(0)
array // [3.14, 'Lesbisch', [0], NaN]
console.log(array)

// To get a property in an object:

const user = {
	username: 'Vap0r1ze',
	discriminator: '8882',
	avatar: 'a39e045a2de145a283b3195fe20'
}
user.username // 'Vap0r1ze'
user.thingThatDoesntExist // undefined

// You can also set properties, even if the object is a constant

user.username = 'mat'
console.log(user)

// You can obtain certain characters in a string, much like items in arrays

let myName = 'Synactive'
myName[0] // 'S'
myName[5] // 't'

// Unlike array though, you cannot set the values of a string

myName[1] = 'i'
myName // 'Synactive'

// In some browser environments, this will raise a warning
