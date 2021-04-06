/*Given a square matrix, calculate the absolute difference 
between the sums of its diagonals.*/

  var arr =  [11, 2, 4]
             [4, 5, 6 ]
             [10, 8, -12]


function diagonalDifference(arr) {
var sum = [0, 0];

 for (var i = 0; i < arr.length; i++) {
     sum[0] += arr[i][i];
     sum[1] += arr[i][arr.length - 1 - i];
 }
   return Math.abs(sum[0] - sum[1]);
 }