/*Given an array of integers, calculate the ratios of its elements 
that are positive, negative, and zero. Print the decimal value 
of each fraction on a new line with 6 places after the decimal.*/


var arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    
    var pos = 0;
    var neg = 0;
    var zero = 0;
    var length = arr.length;
        arr.forEach( n => {
            if( n > 0 )
                pos++
            else if( n < 0 )
                neg++
            else
                zero++
        } )
        var posNum = (pos / length).toFixed(6);
        var negNum =  (neg / length).toFixed(6);
        var zeroNum=  (zero / length).toFixed(6);
       var  numRatio = posNum + ":" + negNum + ":" + zeroNum 
        return numRatio;
    
    }
    