/*Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a 
single line of two space-separated long integers.*/

var arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    let min = +Infinity;
    let max = -Infinity;
    let sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (arr[i] < min)
                min = arr[i];
            if (arr[i] > max)
                max = arr[i];
        }
        return [sum - max, sum - min]; 
    }