const leapYears = function(year) {
    let result;

    if(typeof(year)!= "number"){
        result = 'ERROR';
    }
    
    else if((year%4==0 && year%100 !=0) || (year%400==0)){
        result = true;
    }
    else{result = false;}

    return result;
};

// Do not edit below this line
module.exports = leapYears;
