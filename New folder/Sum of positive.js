/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/
/*
P - an array of numbers
R - return a number
E - [1,2,3,4,5] => 15
    [1,-2,3,4,5] => 13
    [] => 0

P - 
*/
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
