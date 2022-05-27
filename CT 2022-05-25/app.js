/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

//P:    Is it always going to be positive integer? Always a number?

//R:    an element of an array as a string

//E:    given nb_petals(1), return "I love you"
//      given nb_petals(9), return "a lot"
//      give nb_ppetals(16), return "passionately"

//P:    make function
//      create an array for the statements
//

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

//P: always an integer > 0
//R: return array of integers with n at index 0 to 1
//E:
//      given 7, return [7,6,5,4,3,2,1]
//      given 4, return [4,3,2,1]
//P:
//    create a function
const reverseSeq = n => {
  //make an  empty array
  let arr = [];
  //loop through n while pushing i to arr ( starting array from  n)
  for (i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
