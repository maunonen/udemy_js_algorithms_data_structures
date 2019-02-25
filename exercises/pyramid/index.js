// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {

    // the end of pyramid 
    if (row === n ){
        return ; 
    }
    // end of level 
    if (level.length === 2 * n - 1 ){
        console.log(level); 
        return pyramid(n, row + 1 ); 
    }
    const midpoint = Math.floor((2*n-1 )/ 2);  
    let add; 
    if (midpoint - row <= level.length && midpoint +  row >= level.length  ){
        add = '#'; 
    } else {
        add = ' '; 
    }

    pyramid(n, row, level + add); 
}

//pyramid(4); 
// SOLUTION WITH RECURSITION WITH FOR LOOP 

function pyramidForLoop(n) {

    const midpoint = Math.floor((2*n-1 )/ 2);  
    for (let row = 0 ; row < n ; row ++){
        let level = ''; 
        for (let column = 0 ; column < n * 2 - 1 ; column ++ ){
            // getting midpoint 
            
            if (midpoint - row <= column && midpoint + row >= column ){
                level +=  '#'; 
            } else {
                level += ' '; 
            }
        }
        console.log(level); 
    }

}


// Pyramid my solution 

function pyramidMySolution(n, row = 0 , stair = '#') {
    if (n === row ){
        return ; 
    } 
    //console.log('pyramid', n, row , stair ); 
    if (stair.length === 2 * n - 1 ) {
        console.log(stair); 
        return pyramid(n,  row + 1 );
    } 
    if (stair.length <  2 * row  ){
        //console.log('pyramid else if  ', n, row , stair ); 
        stair = '#' + stair + '#'; 
    } else {
        //console.log('pyramid else', n, row , stair ); 
        stair = ' ' + stair + ' '; 
    }
    pyramid(n , row , stair); 

}


pyramid(3); 

module.exports = pyramid;
