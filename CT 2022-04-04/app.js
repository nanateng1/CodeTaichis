//Given an array of integers, return a new array with each value doubled.

// For example:

//[4, 5, 6] ----> [8, 10, 12]

//P: will they always be integers? will there be special characters? will there be an empty array?
//R:    Return a new with each element doubled
//E: given [1,2,3], return [2,4,6]
//   given [20,30,40], return [40,60,80]
//   given [-2, -4, 6], return [-4, -8, 12]

//Pseudo Code: we are transforming an array(needs array transform mmethod) 
//Make a function that takes an array
function doubled(arr){
   return arr.map(element=>element*2)

}
doubled([4,5,6])
//return the array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

//P: will it always be integer? 
//R: returns the sum to the difference of two consecutive pairs 
//E: given [2,3,4,6,8,9] return  (2-3)+(3-4)+(4-6)+(6-8)+(8-9)