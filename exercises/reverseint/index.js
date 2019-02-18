// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    const  reversed  = n  
    .toString()
    .split('')
    .reverse()
    .join(''); 

    return Math.sign(n) * parseInt(reversed); 

/*     if (n < 0 ){
        return parseInt(reversed) * -1;
    } 

    return parseInt(reversed);  */
    /*  */

/*  My variant 

    let revNum = 0;
    let isMinus = 1; 

    if (n < 0 ){
        isMinus = -1; 
    } 

    let nPlus = Math.abs(n); 
    if ( nPlus > 9 ){
        console.log('Here'); 
        return revNum = parseInt(
            nPlus
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * isMinus; 
        console.log(revNum); 
        
    } else {    
        console.log(n * isMinus); 
        return n ; 
    } */
}

reverseInt(-51); 

module.exports = reverseInt;
