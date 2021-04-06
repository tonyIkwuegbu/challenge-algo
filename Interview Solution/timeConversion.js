//jshint esversion:6

/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Complete the timeConversion function.
 It should return a new string representing the input time in 24 hour format.*/

 var s = '07 : 05 : 45 PM';
 function timeConversion(s) {
    let late = s.includes('PM')
    if (!late){
        s = s.split('AM')
        s = s[0].split(':')
        if(s[0] == '12'){
            s[0] = '00'
        }
        return s.join(':')
    }else{
        s= s.split('PM')
        s= s[0].split(':')
        if(s[0] != '12'){
         s[0]= (parseInt(s[0]) + 12).toString()
        }
        return s.join(':')
    }
 }


