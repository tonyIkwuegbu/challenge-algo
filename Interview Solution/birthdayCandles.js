/*You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest.*/

var candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
    var maxNum = Math.max(...candles);    
    var output = candles.filter(c => c === maxNum);    
    return output.length;

}