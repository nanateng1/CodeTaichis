/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

//solution 1
function maps(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(x[i] * 2);
  }
  return newArray;
}

//solution 2
function maps(x) {
  arr = x.map(n => n * 2);
  return arr;
}
