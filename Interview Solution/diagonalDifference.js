/*Given a square matrix, calculate the absolute difference 
between the sums of its diagonals.*/

  var arr =     [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
var result = [0, 0];

 for (var i = 0; i < arr.length; i++) {
     let a = arr[i][0+1];
     let b = arr[i][arr.length-1-i];
     result = [result[0] +a, result[i]+b]
 }
   return Math.abs(result[0] - result[1]);
 }
