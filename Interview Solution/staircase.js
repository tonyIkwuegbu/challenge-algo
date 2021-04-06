/*This is a staircase of size n = 4: 
      #
    ##
   ###
 ####

Its base and height are both equal to n.
It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.

Write a program that prints a staircase of size */

var n = 6;

function staircase(n) {
    for (var i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
    
}
