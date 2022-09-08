/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

/* 
PREP
P   - an array that will always have the element needle.
R   - returns the string "found the needle at position (index if found the needle)" 
E   - 
    ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] // "found the needle at position 5" 

P   - parameter will always have an element of needle, so no need to check using if statement
    - indexOf() method to determine index of 'needle'
    - template literals `` to create string
*/
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
