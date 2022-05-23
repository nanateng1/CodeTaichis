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
    //Map through the array multiplying each element by 2
   return arr.map(element=>element*2)

}
doubled([4,5,6])
//return the array