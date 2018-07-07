// Casting

/*
	Casting is the process of
	turning a value from one
	type into another type.
	Examples:
	    5  ->  '5'
      '' -> false
*/

/*
  Before we get into the complicated
  stuff, I want to get a couple thi-
  ngs into your head.
*/

// Falsey values
// A falsey value are things that can be false when casted into a boolean
// JavaScript's "falsey values" are as follows

false // of course
'' // an empty string
0
-0 // Exact thing as zero, but zeros can be negative too!
null // I value I never taught you, but universally means "nothing"
undefined // This means "nothing" too but it's specific to javascript
NaN // You get this when you apply any kind of math to a non-number value

// All other values are truthy, aka are true when casted into a boolean
