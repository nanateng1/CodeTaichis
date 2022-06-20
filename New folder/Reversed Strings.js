/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/*
P= will always be a string
R= the reverse of the string
E= 'three' => 'eerht'
    'critic' => 'citirc'

P=   Separate the characters into array
     Re arrange the chracters by reversing
     Make arranged characters to a string*/

function solution(str) {
  //split string into an array
  //reverse the array
  //join the array to form a string
  return str.split('').reverse().join('');
}
