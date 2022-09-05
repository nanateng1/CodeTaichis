/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */

/*
P - three values (an Operation and 2 values)
R - return a number
E - 
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

P - 
four basic operation ('-', '+', '*', '/')
*/

//solution
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '-':
      return value1 - value2;
    case '+':
      return value1 + value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

//soution2
function basicOp(operation, value1, value2)
return eval(value1+operation+value2)

//this solution is not recommended since a possess an enormous security risk 