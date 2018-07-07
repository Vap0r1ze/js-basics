// Scope

// A scope is like what "block" you are on
// On well formatted code, it is easy to visualize it in your brain

let outsideBlock = 4
function something () {
	console.log('Something: ' + outsideBlock)
}
something()

// You see 4 was output to the console, this is because blocks can access variables that were created before it
// But this cannot work backwards

// If you run this file, it will invoke an error

function another () {
	let coolClothes = true
}
another()
console.log(coolClothes)

/*
  This threw an error because at
  the end of the block, all the
  variables from that block become
  no longer accessable.

  As we go on, pretty much any code
  execution that is indented will
  count as a block. Another way to
  think of it is blocks are the
  things in { braces }, but this
  way of thinking can be flawed so
  try to stick to indentation and
  well formatted code. 
*/
