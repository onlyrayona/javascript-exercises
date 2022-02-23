const removeFromArray = function() {
    
    let badValues = Array.from(arguments);
    let givenArray = badValues[0];
    badValues.splice(0,1);

    for (i=0; i<badValues.length; i++){

        let index = givenArray.indexOf(badValues[i]);
        if (index != -1){
            givenArray.splice(index,1);
        }   
    }    
    return givenArray;   


};

// Do not edit below this line
module.exports = removeFromArray;
